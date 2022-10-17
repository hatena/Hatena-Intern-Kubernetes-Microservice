#! /bin/bash

# context を設定
kubectl config set-context hatena-intern-2022 --cluster=minikube --user=minikube --namespace=hatena-intern-2022
kubectl config use-context hatena-intern-2022