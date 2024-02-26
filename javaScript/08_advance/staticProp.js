class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }

    static createId() {
        return `123`
    }

}

const saga = new User("Sagara")
// console.log(saga.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }

}
const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
