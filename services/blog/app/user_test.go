package app

import (
	"crypto/ecdsa"
	"testing"
	"time"

	"github.com/hatena/Hatena-Intern-2021/services/blog/internal/testutil"
	"github.com/lestrrat-go/jwx/jwa"
	"github.com/lestrrat-go/jwx/jwt"
	"github.com/stretchr/testify/assert"
)

func generateToken(id, name, iss, sub string, privateKey *ecdsa.PrivateKey) ([]byte, error) {
	claims := jwt.New()
	now := time.Now()
	if err := claims.Set(jwt.IssuerKey, iss); err != nil {
		return nil, err
	}
	if err := claims.Set(jwt.SubjectKey, sub); err != nil {
		return nil, err
	}
	exp := now.Add(time.Hour)
	if err := claims.Set(jwt.ExpirationKey, exp); err != nil {
		return nil, err
	}
	if err := claims.Set("user_id", id); err != nil {
		return nil, err
	}
	if err := claims.Set("user_name", name); err != nil {
		return nil, err
	}
	iat := now
	if err := claims.Set(jwt.IssuedAtKey, iat); err != nil {
		return nil, err
	}
	token, err := jwt.Sign(claims, jwa.ES256, privateKey)
	if err != nil {
		return nil, err
	}
	return token, nil
}

func Test_VerifyToken(t *testing.T) {
	token, _ := generateToken("12345", "someName", "hatena-intern-2021-account", "user", testutil.AccountECDSAPrivateKey)

	user, err := verifyToken(string(token), testutil.AccountECDSAPublicKey)
	assert.Empty(t, err)
	assert.NotEmpty(t, user.AccountID)
	assert.Equal(t, "someName", user.Name)
}

func Test_VerifyToken_WrongKey(t *testing.T) {
	token, _ := generateToken("12345", "someName", "hatena-intern-2021-account", "user", testutil.AnotherECDSAPrivateKey)

	_, err := verifyToken(string(token), testutil.AccountECDSAPublicKey)
	assert.NotEmpty(t, err)
}

func Test_VerifyToken_WrongIssuer(t *testing.T) {
	token, _ := generateToken("12345", "someName", "hatena-intern-wrong-issuer", "user", testutil.AccountECDSAPrivateKey)

	_, err := verifyToken(string(token), testutil.AccountECDSAPublicKey)
	assert.NotEmpty(t, err)
}

func Test_VerifyToken_WrongSubject(t *testing.T) {
	token, _ := generateToken("12345", "someName", "hatena-intern-2021-account", "wrongUser", testutil.AccountECDSAPrivateKey)

	_, err := verifyToken(string(token), testutil.AccountECDSAPublicKey)
	assert.NotEmpty(t, err)
}
