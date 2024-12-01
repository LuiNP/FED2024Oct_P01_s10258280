var contact = function (fname) {
    this.firstName = fname;
};
var example = new contact('Johnny');
localStorage.setItem('user1', JSON.stringify(example));
var contacts = [];//let's use arrays to store more
contacts.push(JSON.parse(localStorage.getItem('user1')));
console.log(contacts[0].firstName);