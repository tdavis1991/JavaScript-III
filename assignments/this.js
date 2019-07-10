/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is using the 'this' keyword on a global scale. When doing this you are refering to every object in js.

* 2. Implicit binding is when you are using the 'this' keyword in a local scope. The 'this' keyword refers to the object that that it's inside.

* 3. When using the 'this' keyword for new binding you are normally using it to create a new object from a constructor. The constructor places the values that you pass into using the 'this' keyword and returns a new object with the values assigned to the keys that are in the constructor.

* 4. The explicit bind is used when you are passing an object into a function. Once passed into the function the 'this' keyword will become the object that is being passed. The call, bind and apply method use explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1
//  code example for Window Binding
     console.log(this)

// Principle 2
// code example for Implicit Binding
const james = {
    name: 'James',
    age: 32,
    intro: function () {
        return `Hello my name is ${this.name} and I am ${this.age} years old.`
    }
};
console.log(james.intro());

// Principle 3
// code example for New Binding
function Cars(auto) {
    this.name = auto.name;
    this.year = auto.year;
    this.engine = auto.engine;
    this.doors = auto.doors;
    this.fit = function() {
        if(this.doors === 4){
            return `${this.name}s are great for a family car.`;
        }else{
            return `${this.name}s probably are not the best for a family`;
        }
    }
};

const honda = new Cars({
    name: 'Honda',
    year: 2019,
    engine: 'V6',
    doors: 4
})

console.log(honda);
console.log(honda.fit());

// Principle 4
// code example for Explicit Binding
function Entertainment(stuff) {
    this.name = stuff.name;
    this.price = stuff.price;
    this.type = stuff.type;
};

function Game(play) {
    Entertainment.call(this, play);
    this.category = 'Game';
    this.about = function() {
        return `${this.name} is a ${this.type} and is currently going for ${this.price} dollars.`
    };
}

const cod = new Game ({
    name: 'COD',
    price: 60,
    type: 'Action'
});
console.log(cod.about());