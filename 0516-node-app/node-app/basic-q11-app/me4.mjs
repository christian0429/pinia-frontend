import fs from 'fs';

// 파일 경로
const readFilePath = 'me.txt';
const writeFilePath = 'you.txt';

// 버퍼 크기
const bufferSize = 50;

// 파일을 버퍼 단위로 읽어서 다른 파일에 저장하는 함수
function saveFileByChunks(readFilePath, writeFilePath, bufferSize) {
    let bufferNumber = 0;
    let totalBytesWritten = 0;

    try {
        const fileReadStream = fs.createReadStream(readFilePath, { highWaterMark: bufferSize });
        const fileWriteStream = fs.createWriteStream(writeFilePath);

        fileReadStream.on('data', (chunk) => {
            bufferNumber++;
            console.log(`*** 청크 단위로 저장함 ***`);

            // 이진 파일로 저장
            fileWriteStream.write(chunk);

            // UTF-8 인코딩하여 출력
            console.log(chunk.toString('utf-8'));

            totalBytesWritten += chunk.length;
        });

        fileReadStream.on('end', () => {
            console.log(`파일 읽기 완료. 총 ${totalBytesWritten}바이트 저장됨.`);
            fileWriteStream.end();
        });

        fileReadStream.on('error', (err) => {
            console.error(`에러가 발생 → ${err.message}`);
        });
    } catch (err) {
        console.error(`에러가 발생 → ${err.message}`);
    }
}

// 함수 호출
saveFileByChunks(readFilePath, writeFilePath, bufferSize);
