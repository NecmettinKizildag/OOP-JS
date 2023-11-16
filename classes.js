/*class User{
    constructor(email,name){
        this.email= email;
        this.name=name;
        this.score =0;
    }
    login(){
        console.log(this.email,'just logged in');
        return this;
    }
    logout(){
        console.log(this.email,'just logged out');
        return this;
    }
    scoreUpdate(){
        this.score ++;
        console.log(this.email,'score is now',this.score);
        return this;
    }
}



class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email !=user.email;
        })
    }
}*/


function User(email,name){
        this.email= email;
        this.name=name;
        this.online = false;
};

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has looged in');
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has looged out');
};

function Admin(...args){
    User.apply(this,args); // sifirdan eklemek yerine User classinin icindeki 'this' leri cekti
    this.role = 'super admin';
};

Admin.prototype = Object.create(User.prototype);  // sifirdan metdo olusturmak yerine User classinin metodlarini cekti

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@mariocorp.com','Yoshi');
var admin = new Admin('admin@gmail.com','Admin1');

console.log(userOne);
console.log(userTwo);
userTwo.login(); 

console.log(admin);




//userOne.login();
//userTwo.logout();

//userOne.login().scoreUpdate().scoreUpdate().logout();


var users = [userOne,userTwo,admin];

console.log(users);

admin.deleteUser(userOne);

console.log(users);





// this objenin icinde kullanildiginda objeyi temsil ediyor


// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructo method