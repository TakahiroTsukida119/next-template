import axios from 'axios';

// カスタムAPIクライアントのインスタンスを作成
const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // ここにAPIのベースURLを設定
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// リクエストインターセプター
apiClient.interceptors.request.use(
  (config) => {
    // ここにAPIリクエスト直前に実行したい処理を記述
    console.log('Request:', config);

    // トークンやAPIキーの追加
    // config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// レスポンスインターセプター
apiClient.interceptors.response.use(
  (response) => {
    // ここにAPIレスポンス直後に実行したい処理を記述
    console.log('Response:', response);

    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
