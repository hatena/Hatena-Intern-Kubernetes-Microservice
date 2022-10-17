#! /bin/bash

# Minikube を起動
minikube start --kubernetes-version=v1.24.3 --driver=docker --memory='8g' --cpus=4