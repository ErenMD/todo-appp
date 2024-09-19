const path = require('path');

module.exports = {
  entry: './src/index.tsx', // TypeScript giriş dosyası
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './public', // Public klasörü statik dosyalar için
    port: 3002, // Sunucu 3002 portunda çalışacak
    open: true, // Tarayıcı otomatik olarak açılır
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts ve .tsx dosyalarını işlemek için
        use: 'ts-loader', // TypeScript dosyalarını işlemek için ts-loader kullanıyoruz
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i, // CSS dosyalarını işlemek için
        use: ['style-loader', 'css-loader'], // CSS ve Style loaderlar
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Bu uzantıları otomatik çözüyor
  },
  mode: 'development', // Geliştirme modu
};
