import fs from 'fs';

// 파일 및 폴더 경로
const filesToDelete = ['me.txt', 'you.txt'];
const foldersToDelete = ['apple', 'banana'];

// 파일 삭제
filesToDelete.forEach((file) => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`파일 ${file} 삭제 완료.`);
    } else {
        console.log(`파일 ${file}이(가) 존재하지 않습니다.`);
    }
});

// 폴더 삭제
foldersToDelete.forEach((folder) => {
    if (fs.existsSync(folder)) {
        fs.rmdirSync(folder, { recursive: true });
        console.log(`폴더 ${folder} 삭제 완료.`);
    } else {
        console.log(`폴더 ${folder}이(가) 존재하지 않습니다.`);
    }
});
