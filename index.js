// boardMember Constructor Function
function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

// veto
BoardMember.prototype.veto = function() {
  return "No, I must disagree";
};

// approve
BoardMember.prototype.approve = function() {
  return "You can do that!";
};

// Charity
BoardMember.prototype.doCharity = function() {
  return "I like to help people.";
};

// Press release statement
BoardMember.prototype.releasePressStatement = function() {
  return "You will see great things from Scuber.";
};

// sayHi function
BoardMember.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};