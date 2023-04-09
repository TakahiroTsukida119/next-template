# Next Template
Next.jsのTemplateリポジトリです

## environment

- node ^16.0.0
- Next.js ^13.2.4


## How to
### install

```bash
$ npm install
```

### モックサーバー（`localhost:8000`）
```bash
$ docker-compose up -d uiapimock
```

### storybook（`localhost:6006`）
```bash
$ npm run storybook
```

### swagger ui（`localhost:8080`）
```bash
$ docker-compose up -d swagger
```

### ローカル開発（`localhost:3000`）
```bash
$ npm run dev
```

### コンポーネントの新規作成

```bash
npm run hygen
```
基本的にはテストファイルとstoriesファイルは生成してください。


### SwaggerGeneratorの更新
```bash
npm run generate-api
```

### 単体テスト（jest）
```bash
npm run test
```


### 本番用 build とサーバーを起動
```bash
$ npm run build
$ npm run start
```

### 静的ファイル作成（production build）

```bash
$ npm run generate:prod
```

### Docker短縮コマンド
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
