FROM golang:1.16-alpine

RUN apk --update add git protoc

WORKDIR /pb
COPY go.mod go.sum ./
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
