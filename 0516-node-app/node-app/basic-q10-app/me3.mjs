import fs from 'fs';

// 파일 경로
const filePath = 'me.txt';
// 버퍼 크기
const bufferSize = 50;
// 읽은 버퍼 번호
let bufferNumber = 0;

// 파일을 버퍼 단위로 읽어오는 함수
function readBuffer(filePath, bufferSize) {
    const buffer = Buffer.alloc(bufferSize);
    let bytesRead = 0;

    try {
        const fileDescriptor = fs.openSync(filePath, 'r');
        bytesRead = fs.readSync(fileDescriptor, buffer, 0, bufferSize, bufferSize * bufferNumber);
        fs.closeSync(fileDescriptor);
        bufferNumber++;

        console.log(`**** 버퍼 ${bufferNumber}을(를) 읽어왔습니다 ****`);
        console.log(buffer.toString('utf-8', 0, bytesRead));
    } catch (err) {
        console.error(`에러가 발생 → ${err.message}`);
    }

    return bytesRead;
}

// 파일을 버퍼 단위로 읽어오기
let bytesRead = readBuffer(filePath, bufferSize);
while (bytesRead === bufferSize) {
    bytesRead = readBuffer(filePath, bufferSize);
}

// 버퍼 클리어
console.log("버퍼 클리어");
