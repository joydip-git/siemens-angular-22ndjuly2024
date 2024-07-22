class Person {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    show() {
        return `
        Name: ${this.name}, 
        Id: ${this.id}, 
        Salary: ${this.salary}
        `
    }
}
class Trainer extends Person {
    constructor(id, name, salary, subject) {
        super(id, name, salary)
        this.subject = subject;
    }
    show() {
        return `
        ${super.show()}
        Subject: ${this.subject}
        `
    }
}

class Trainee extends Person {
    constructor(id, name, salary, project) {
        super(id, name, salary)
        this.project = project;
    }
    show() {
        return `
        ${super.show()}
        Project: ${this.project}
        `
    }
}

const anilObject = new Trainee(1, 'anil', 10000, 'CTA')
const joydipObject = new Trainer(2, 'joydip', 20000, 'JavaScript')

console.log(anilObject.show());
console.log(joydipObject.show());