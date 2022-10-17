#! /bin/bash

if [ ! -f go.work ]; then
    go work init services/blog services/account services/fetcher-go services/renderer-go
fi