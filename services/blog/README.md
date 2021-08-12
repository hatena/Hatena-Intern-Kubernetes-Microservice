# ブログサービス
このディレクトリにはブログ (Blog) サービスの Go 言語による実装が含まれています.

主要なディレクトリ:

- `domain/` (ドメイン層): サービスの中核となるオブジェクトとロジックが含まれる
- `app/` (アプリケーション層): ドメイン層を使用し, サービスとしての機能を提供する
- `web/` (プレゼンテーション層): アプリケーション層を Web から操作するためのインターフェース (Web サーバー)を実装する

その他のディレクトリ:

- `pb/`: gRPC サービス定義から自動生成されたコード (リポジトリルートの `/pb/go` からコピーされたもの)
- `config/`: サーバーの設定を読み込む
- `log/`: ログ出力のためのユーティリティ
- `db/`: データベースを操作するためのユーティリティ
- `repository/`: ドメイン層で定義したリポジトリ (データストア) に対する, データベースを使用した実装
- `templates/`: Web ページに表示する HTML のテンプレート

## テスト
テストには DB が必要です. 開発用 Kubernetes クラスター上でテストを行う場合は以下のコマンドを実行します.

``` shell
kubectl exec deploy/blog-test -- make test
```