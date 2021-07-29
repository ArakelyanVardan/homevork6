// number 4
class Account {
    constructor(id, name, balance) {
        this._id = id;
        this.name = name;
        this.balance = balance;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get balance() {
        return this._balance;
    }
    set name(value) {
        this._name = value;
    }
    set balance(value) {
        this._balance = value;
    }
    credit(amount) {
        this.balance += amount;
        return this.balance;
    }
    debit(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            alert('Amount exceeded balance.');
            return false;
        }
    }
    transferTo(anotherAccount, amount) {
        if (this.debit(amount)) {
            anotherAccount.credit(amount);
        }
    }
    static identifyAccounts(accountFirst, accountSecond) {
        return (accountFirst.id === accountSecond.id);
    }
}

let account1 = new Account(2, 'Vardan', 100000);
let account2 = new Account(3, 'Varduhi', 21000);


// number 5

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._gender = gender;
        this.age = age;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get gender() {
        return this._gender;
    }
    get age() {
        return this._age;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
    set age(value) {
        this._age = value;
    }
}

class Student extends Person {
    constructor(programs, year, fee) {
        super();
        this.programs = programs;
        this.year = year;
        this.fee = fee;
    }
    get programs() {
        return this._programs;
    }
    get year() {
        return this._year;
    }
    get fee() {
        return this._fee;
    }
    set programs(value) {
        if (!Array.isArray(value) || value.length === 0) {
            alert('incorect value');
            return;
        }
        for (let str of value) {
            if (typeof(str) !== 'string') {
                alert('incorect value');
                return;
            }
        }
        this._programs = value;
    }

    set year(value) {
        this._year = value;
    }
    set fee(value) {
        this._fee = value;
    }
    grade = {}

    passExam(obj = {}) {
        if (Object.keys(this.grade).length == 0) {
            for (let key of this.programs) {
                this.grade[key] = this.grade[key];
            }
        }
        for (let key in obj) {
            this.grade[key] = obj[key];

        }
        if (Math.min(...Object.values(this.grade)) >= 50) {
            this.year += 1;
            console.log(`apres bales darcar ${this.year} kurs`);
            return;
        }
        console.log('gna parapi');
    }
}
class Staff extends Person {
    constructor(program, pay) {
        super();
        this.program = program;
        this.pay = pay;
    }
    get program() {
        return this._program;
    }
    get pay() {
        return this._pay;
    }
    set program(value) {
        if (typeof value !== 'string') {
            alert('incorect value');
            return;
        }
        this._program = value;
    }
    set pay(value) {
        this._pay = value;
    }
}