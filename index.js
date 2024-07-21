

function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  
  BoardMember.prototype.approve = function() {
    return "You can do that!";
  };
  
  BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
  };
  
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
  
  
  const boardMember1 = new BoardMember('Alice', 'California', 'Business');
  console.log(boardMember1.sayHi()); 
  console.log(boardMember1.veto()); 
  console.log(boardMember1.approve()); 
  console.log(boardMember1.doCharity()); 
  console.log(boardMember1.releasePressStatement()); 