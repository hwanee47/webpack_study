// npx webpack --entry ./source/index.js -o ./public/index_bundle
// 위 명령어를 설정파일로 대체한다. (매번 입력하기 어렵자너~)

const path = require('path');

module.exports = {
    mode: "production",    // default : production
    entry: "./source/index.js",
    output: {
        path: path.resolve(__dirname, "public"),   // __dirname :: 현재 파일이 있는 경로, node.js 의 예약어
        filename: 'index_bundle.js'
    }
}