// npx webpack --entry ./source/index.js -o ./public/index_bundle
// 위 명령어를 설정파일로 대체한다. (매번 입력하기 어렵자너~)

const path = require('path');

module.exports = {
    mode: "development",    // default : production
    entry: "./source/index.js",
    output: {
        path: path.resolve(__dirname, "public"),   // __dirname :: 현재 파일이 있는 경로, node.js 의 예약어
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,     // 정규식 : 확장자가 .css인 파일들을 처리한다.
                use: [ // 아래부터 먼저 실행됨. (Chain)
                    'style-loader', // css파일의 내용을 웹페이지 안으로 주입, 적용.
                    'css-loader'    // css파일을 webpack으로 읽어들임.  
                ],
            }
        ]
    }
}