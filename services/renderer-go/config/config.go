package config

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

// Config は各種設定をまとめたもの
type Config struct {
	Mode                string
	GRPCPort            int
	GracefulStopTimeout time.Duration
}

// Load は環境変数から設定を読み込む
func Load() (*Config, error) {
	conf := &Config{
		Mode:                "production",
		GRPCPort:            50051,
		GracefulStopTimeout: 10 * time.Second,
	}

	// Mode
	mode := os.Getenv("MODE")
	if mode != "" {
		conf.Mode = mode
	}

	// GRPCPort
	grpcPortStr := os.Getenv("GRPC_PORT")
	if grpcPortStr != "" {
		grpcPort, err := strconv.Atoi(os.Getenv("GRPC_PORT"))
		if err != nil {
			return nil, fmt.Errorf("GRPC_PORT is invalid: %v", err)
		}
		conf.GRPCPort = grpcPort
	}

	// GracefulStopTimeout
	gracefulStopTimeout := os.Getenv("GRACEFUL_STOP_TIMEOUT")
	if gracefulStopTimeout != "" {
		d, err := time.ParseDuration(gracefulStopTimeout)
		if err != nil {
			return nil, fmt.Errorf("GRACEFUL_STOP_TIMEOUT is invalid: %v", err)
		}
		conf.GracefulStopTimeout = d
	}

	return conf, nil
}
