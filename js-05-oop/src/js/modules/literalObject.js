
const aliceUser = {
    name: "Alice",
    lastName: "Smith",
    age: 30,
    email: "alice@gmail.com",
    getFullName() {
        // return `${aliceUser.name} ${aliceUser.lastName} ${aliceUser.age}`;
        return `${this.name} ${this.lastName} ${this.age}`;
    }
}
export { aliceUser };