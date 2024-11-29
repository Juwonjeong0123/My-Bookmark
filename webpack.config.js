const path = require("path"); // 이 부분을 추가해야 합니다.
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", // "production"으로 변경 가능
    entry: "./src/index.tsx", // 진입 파일
    output: {
        path: path.resolve(__dirname, "build"), // output 경로를 build로 변경
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"], // 처리할 파일 확장자
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // TypeScript 파일 처리
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.css$/, // CSS 파일 처리 (옵션)
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        static: path.join(__dirname, "build"), // 정적 파일 경로도 build로 변경
        port: 3000, // 개발 서버 포트
    },
};
