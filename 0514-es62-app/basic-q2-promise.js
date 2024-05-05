const p = new Promise((resolve, reject) => {
    console.log("Promise를 시작합니다.");
    resolve("지금은 몇 월?");
})

p.then((msg) => {
    console.log(`1 ==> ${msg}`);
    let date = new Date();
    let month = date.getMonth() + 1;
    return month;
})
    .then((msg) => {
        console.log(`2 ==> ${msg}`);
        console.log("지금은 몇 일?");
        let date = new Date();
        let date1 = date.getDate();
        return `${msg},${date1}`;
    })
    .then((msg) => {
        console.log(`3 ==> ${msg}`);
        let result = msg.split(",");
        console.log(`오늘은 ${result[0]}월 ${result[1]}일`);
    })
    .catch((error) => {
        console.log(`오류발생 ==> ${error}`);
    })