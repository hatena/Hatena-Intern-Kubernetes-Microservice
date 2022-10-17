package app

import "errors"

// ErrInvalidArgument は引数が不正だったときに返される
var ErrInvalidArgument = errors.New("invalid argument")

// ErrAlreadyRegistered はユーザーが既に登録されているときに返される
var ErrAlreadyRegistered = errors.New("already registered")

// ErrAuthenticationFailed はユーザーの認証に失敗したときに返される
var ErrAuthenticationFailed = errors.New("authentication failed")

// ErrNotFound はリソースが見つからなかったときに返される
var ErrNotFound = errors.New("not found")

// ErrPermissionDenied は操作が許可されないときに返される
var ErrPermissionDenied = errors.New("permission denied")
