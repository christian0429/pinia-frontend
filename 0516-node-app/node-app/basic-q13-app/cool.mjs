// cool.mjs

class Cool {
    constructor(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.level = 'beginner';
    }

    // 취미 변경 함수
    changeHobby(newHobby) {
        this.hobby = newHobby;
        console.log(`${this.name}님의 취미가 ${newHobby}로 변경되었습니다.`);
    }

    // 레벨 업 함수
    levelUp() {
        if (this.level === 'beginner') {
            this.level = 'intermediate';
        } else if (this.level === 'intermediate') {
            this.level = 'advanced';
        } else {
            console.log(`${this.name}님은 이미 최고 레벨입니다.`);
        }
        console.log(`${this.name}님의 레벨이 올랐습니다. 현재 레벨: ${this.level}`);
    }

    // 소개 함수
    introduce() {
        console.log(`제 이름은 ${this.name}이고, 나이는 ${this.age}세입니다.`);
        console.log(`저의 취미는 ${this.hobby}이며, 현재 ${this.level} 수준입니다.`);
    }
}

export default Cool;
