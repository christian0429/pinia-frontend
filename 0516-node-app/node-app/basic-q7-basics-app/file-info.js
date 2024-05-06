const path = require('path');
const fs = require('fs');

// 파일을 제외한 현재 경로 출력
console.log("현재 경로:", __dirname);

// 경로를 제외한 현재 파일명 출력
console.log("현재 파일명:", path.basename(__filename));

// 파일의 확장자 출력
console.log("파일 확장자:", path.extname(__filename));

// 경로를 분해하여 객체 생성 후 출력
const fileInfo = path.parse(__filename);
console.log("경로 정보 객체:", fileInfo);

// 현재 폴더에 있는 파일 목록 출력 (동기 처리)
console.log("현재 폴더의 파일 목록:");
const files = fs.readdirSync(__dirname);
console.log(files);

// 현재 폴더에 있는 폴더 목록을 모두 읽고, 파일 목록을 콜백 함수로 출력 (비동기 처리)
console.log("현재 폴더의 폴더 목록과 파일 목록 (비동기 처리):");
fs.readdir(__dirname, (err, items) => {
    if (err) {
        console.error("폴더 읽기 오류:", err);
        return;
    }
    console.log("폴더 목록:", items);
});


const fn = path.basename(__filename);
console.log("파일 이름>> ", fn);