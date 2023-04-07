# Next Template
Next.jsのTemplateリポジトリです

## environment

- node ^16.0.0
- Next.js ^13.2.4
- OpenApi ^3.0.2


## How to

- clone

- install

```bash
$ npm install
```

- モックサーバー起動
```bash
make up
```
以下のコンテナが立ちます
- Nodeコンテナ（開発環境としてDockerを使用する場合はこちらを使用してください。もちろん使わなくてもOKです）
- モックサーバー（`localhost:8000`）
- Swagger UI<br />
  `localhost:8088`へブラウザでアクセス


- ローカル開発（`localhost:3000`）
```bash
$ npm run dev
```

- コンポーネントの新規作成

```bash
npm run hygen
```
基本的にはテストファイルは生成してください。


- OpenApiの更新
```bash
npm run generate-api
```

- Nodeコンテナ内に入る
```
make shell
```


- 単体テスト
```bash
npm run test
```


- 本番用 build とサーバーを起動

```bash
$ npm run build
$ npm run start
```

- 静的ファイル作成（production build）

```bash
$ npm run generate:prod
```

## Docker短縮コマンド
- ビルド
```bash
make buid
```

- 起動
```
make up
```
- 停止
```
make stop
```
- 停止＋削除
```
make down
```
- 起動中のコンテナ確認
```
make ps
```
- Nodeコンテナ内に移動
```
make shell
```
