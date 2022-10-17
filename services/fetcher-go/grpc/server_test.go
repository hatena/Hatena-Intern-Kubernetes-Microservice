package grpc

import (
	// "context"
	"testing"
	// pb "github.com/hatena/Hatena-Intern-2022/services/renderer-go/pb/fetcher"
	"github.com/stretchr/testify/assert"
)

func Test_Server_FetchPageTitle(t *testing.T) {
	assert.Equal(t, "foo", "foo")
	// TODO: add tests
	// s := NewServer()
	// reply, err := s.FetchPageTitle(context.Background(), &pb.FetchPageTitleRequest{/* TODO */})
	// assert.NoError(t, err)
	// assert.Equal(t, "xxx", reply.XXX)
}
