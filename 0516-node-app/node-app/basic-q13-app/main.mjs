// main.mjs
import Person from './person.mjs';
import Computer from './computer.mjs';
import Cool from './cool.mjs';

// Person 클래스의 인스턴스 생성
const person = new Person('John', 30, 'Male');
person.introduce();

// Computer 클래스의 인스턴스 생성
const computer = new Computer('MacBook Pro', 'Intel Core i7', '16GB', '512GB SSD');
computer.powerOn();
computer.printSpecs();

// Cool 클래스의 인스턴스 생성
const coolPerson = new Cool('Alice', 25, 'Reading');
coolPerson.introduce();
coolPerson.changeHobby('Gardening');
coolPerson.levelUp();
