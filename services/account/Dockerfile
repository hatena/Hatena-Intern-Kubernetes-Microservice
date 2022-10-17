# syntax = docker/dockerfile:experimental
FROM golang:1.19-alpine AS builder

RUN apk --update add make

WORKDIR /services/account
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN --mount=type=cache,target=/root/.cache/go-build make build


FROM alpine

# ref: https://docs.docker.com/engine/reference/builder/#automatic-platform-args-in-the-global-scope
ARG TARGETARCH
RUN GRPC_HEALTH_PROBE_VERSION=v0.4.4 && \
    wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-${TARGETARCH} && \
    chmod +x /bin/grpc_health_probe

COPY --from=builder /services/account/bin/server /services/account/bin/server

RUN adduser -D -u 1000 app
USER 1000

ENTRYPOINT ["/services/account/bin/server"]
