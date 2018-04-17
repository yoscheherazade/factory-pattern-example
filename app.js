// FACTORY PATTERN - a way of creating an interface for creating objects but you can let subclasses decide which classes to instantiate

// Example usage: member factory with differing membership types

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    // Method to return name, type and cost of membership
    member.define = function() {
      console.log(`${this.name} (${this.type}: ${this.cost})`);
    };

    return member;
  };
}

// Create constructors for membership type subclasses (simple, standard and super)
const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5.00';
};

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15.00';
};

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25.00';
};

// Create members array
const members = [];
// Create factory
const factory = new MemberFactory();

members.push(factory.createMember('Shoshanna Bean', 'super'));
members.push(factory.createMember('True Jackson', 'super'));
members.push(factory.createMember('Dwight Schrute', 'standard'));
members.push(factory.createMember('Chris Traeger', 'simple'));

// Loop through members array
members.forEach(function(member) {
  member.define();
});
