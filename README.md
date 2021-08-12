# [Hatena REMOTE INTERNSHIP 2021](https://hatenacorp.jp/recruit/intern/2021)

「Hatena REMOTE INTERNSHIP 2021」では、Kubernetes上に構築されたブログシステムを題材としました。ブログシステムはマイクロサービスを意識しており、メインであるブログサービスに加えて、アカウントサービスや、Markdownなどの記法を変換するサービスが用意されています。それぞれのサービス間はgRPCを使ってやりとりしています。

<!--
インターンシップのカリキュラムについては、[講義動画](https://hatenacorp.jp/intern2020/public_broadcast)や[課題](/docs/exercise.md)を公開しているので、参照してください。
-->

## セットアップ
アプリケーションの起動には以下が必要です.

- [Docker](https://docs.docker.com/engine/install/)
  - Windows または macOS の場合は Docker Desktop
  - Linux の場合は各ディストリビューションごとのインストール方法に従ってください
- Kubernetes
  - [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Kustomize](https://kubernetes-sigs.github.io/kustomize/installation/)
- [Skaffold](https://skaffold.dev/docs/install/)

個々のサービスの開発には, 以下がローカル環境にインストールされていることを想定しています.

- Make
- [Go](https://golang.org/)
  - go:embed を利用しているため Go 1.16 (以降) が必要です
- (TypeScript を使う場合) [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/lang/en/)

動作確認は以下の環境で行っています.

- macOS 10.15.6 (19G73)
- Docker Desktop 2.3.0.4 (46911) (Kubernetes v1.16.5)
- minikube v1.22.0 (Kubernetes v1.19.8)

``` console
$ docker version
Client: Docker Engine - Community
 Cloud integration: 1.0.12
 Version:           20.10.5
 API version:       1.41
 Go version:        go1.13.15
 Git commit:        55c4c88
 Built:             Tue Mar  2 20:13:00 2021
 OS/Arch:           darwin/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.5
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.13.15
  Git commit:       363e9a8
  Built:            Tue Mar  2 20:15:47 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.4
  GitCommit:        05f951a3781f4f2c1911b05e61c160e9c30eaa8e
 runc:
  Version:          1.0.0-rc93
  GitCommit:        12644e614e25b05da6fd08a38ffa0cfe1903fdec
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

$ minikube version
minikube version: v1.22.0
commit: a03fbcf166e6f74ef224d4a63be4277d017bb62e

$ kubectl version --client
Client Version: version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.2", GitCommit:"092fbfbf53427de67cac1e9fa54aaa09a28371d7", GitTreeState:"clean", BuildDate:"2021-06-16T12:52:14Z", GoVersion:"go1.16.5", Compiler:"gc", Platform:"darwin/amd64"}

$ kustomize version
{Version:kustomize/v4.2.0 GitCommit:d53a2ad45d04b0264bcee9e19879437d851cb778 BuildDate:2021-07-01T01:00:35+01:00 GoOs:darwin GoArch:amd64}

$ skaffold version
v1.27.0

$ go version
go version go1.16.5 darwin/amd64

$ node -v
v14.6.0

$ yarn -v
1.22.4
```

## 起動
### Minikube
以下の手順でアプリケーションを起動します.

``` shell
# Minikube を起動
minikube start --kubernetes-version v1.19.8
eval $(minikube docker-env)

# context を設定
kubectl config set-context hatena-intern-2021 --cluster=minikube --user=minikube --namespace=hatena-intern-2021
kubectl config use-context hatena-intern-2021

# 起動
make up
```

以下のコマンドを実行するとブラウザが自動的に開き, アプリケーションにアクセスします.

``` shell
minikube -n hatena-intern-2021 service blog
```

## サービス
アプリケーションには以下の 3 つのサービスが存在します.

- 認証基盤 (Account) サービス
  - ユーザーアカウントの登録や認証を管轄します
- ブログ (Blog) サービス
  - ユーザーに対して, ブログを作成したり記事を書いたりする機能を提供します
- 記法変換 (Renderer) サービス
  - ブログの記事を記述するための「記法」から HTML への変換を担います

このうちブログサービスが Web サーバーとして動作し, ユーザーに対してアプリケーションを操作するためのインターフェースを提供します.
認証基盤サービスと記法変換サービスは gRPC サービスとして動作し, ブログサービスから使用されます.

## ディレクトリ構成

- `pb/`: gRPC サービスの定義
- `services/`: 各サービスの実装
  - `account/`: 認証基盤サービス
  - `blog/`: ブログサービス
  - `renderer-go/`: 記法変換サービスの Go による実装
  - `renderer-ts/`: 記法変換サービスの TypeScript による実装
- `k8s/`: アプリケーションを Kubernetes 上で動作させるためのマニフェスト

## クレジット
- 株式会社はてな
  - [@akiym](https://github.com/akiym)
  - [@cockscomb](https://github.com/cockscomb)
  - [@itchyny](https://github.com/itchyny)
  - [@susisu](https://github.com/susisu)
  - [@astj](https://github.com/astj)

(順不同)

このリポジトリの内容は MIT ライセンスで提供されます. 詳しくは `LICENSE` をご確認ください.
