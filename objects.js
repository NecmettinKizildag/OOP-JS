var userOne = {
    email: 'ryu@ninjas.com',
    name : 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};


var userTwo = {
    email: 'ryu@ninjas.com',
    name : 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

var userThree = {
    email: 'ryu@ninjas.com',
    name : 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

var userFour = new User()