const fs = require('fs');
const path = require('path');
const OpenAPI = require('openapi-typescript-codegen');

const main = async () => {
  const swaggerFile = path.join(__dirname, 'swagger', 'swagger.json');
  const outputDir = path.join(__dirname, 'api');

  // スキーマを読み込む
  const swaggerContent = fs.readFileSync(swaggerFile, 'utf-8');
  const swagger = JSON.parse(swaggerContent);

  // コード生成
  OpenAPI.generate({
    input: swagger,
    output: outputDir,
    httpClient: 'fetch',
    modelPropertyNaming: 'camelCase',
  });
};

main();
