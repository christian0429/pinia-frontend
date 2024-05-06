// person.mjs

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobbies = [];
    }

    // 취미 추가 함수
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    // 소개 함수
    introduce() {
        console.log(`안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}세입니다.`);
        console.log(`저는 ${this.gender}입니다.`);
        if (this.hobbies.length > 0) {
            console.log('제 취미는 다음과 같습니다:');
            this.hobbies.forEach(hobby => {
                console.log(`- ${hobby}`);
            });
        } else {
            console.log('제 취미는 없습니다.');
        }
    }

    // 나이 추가 함수
    increaseAge() {
        this.age++;
        console.log(`${this.name}님의 나이가 1살 더 먹었습니다. 현재 나이: ${this.age}세`);
    }
}

export default Person;
