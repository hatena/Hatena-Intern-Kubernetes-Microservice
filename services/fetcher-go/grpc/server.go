package grpc

import (
	pb "github.com/hatena/Hatena-Intern-2022/services/fetcher-go/pb/fetcher"
	healthpb "google.golang.org/grpc/health/grpc_health_v1"
)

// Server は pb.FetcherServer に対する実装
type Server struct {
	pb.UnimplementedFetcherServer
	healthpb.UnimplementedHealthServer
}

// NewServer は gRPC サーバーを作成する
func NewServer() *Server {
	return &Server{}
}

// TODO: Server が pb.FetcherServer を満たすように func FetchPageTitle を実装する
// func (s *Server) FetchPageTitle(ctx context.Context, in *pb.FetchPageTitleRequest) (*pb.FetchPageTitleReply, error) {
