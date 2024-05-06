// computer.mjs

class Computer {
    constructor(model, cpu, ram, storage) {
        this.model = model;
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.poweredOn = false;
    }

    // 전원 켜기 함수
    powerOn() {
        if (!this.poweredOn) {
            console.log(`${this.model} 컴퓨터를 켭니다.`);
            this.poweredOn = true;
        } else {
            console.log(`${this.model} 컴퓨터가 이미 켜져 있습니다.`);
        }
    }

    // 전원 끄기 함수
    powerOff() {
        if (this.poweredOn) {
            console.log(`${this.model} 컴퓨터를 끕니다.`);
            this.poweredOn = false;
        } else {
            console.log(`${this.model} 컴퓨터가 이미 꺼져 있습니다.`);
        }
    }

    // 사양 출력 함수
    printSpecs() {
        console.log(`${this.model} 컴퓨터 사양:`);
        console.log(`- CPU: ${this.cpu}`);
        console.log(`- RAM: ${this.ram}`);
        console.log(`- Storage: ${this.storage}`);
    }

    // 저장 공간 추가 함수
    addStorage(additionalStorage) {
        this.storage += additionalStorage;
        console.log(`${this.model} 컴퓨터의 저장 공간이 추가되었습니다. 총 저장 공간: ${this.storage}`);
    }
}

export default Computer;
