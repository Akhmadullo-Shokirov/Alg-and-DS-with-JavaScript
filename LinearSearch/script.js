// Implementation of Linear Search Algorithm by searching a provided array for the provided value.
// Linear Search Algorithm will either return a boolean, index or value back.

// Returns an index of a searching value
function linearSearchIndexOf(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// Returns true or false 
function linearSearchIncludes(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return true;
        }
    }
    return false;
}

// Returns a value 
function linearSearchFind(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i]) === true) {
            return arr[i];
        }
    }

    return undefined;
}




// TESTING CASES BELOW

mocha.setup("bdd");
const { assert } = chai;

const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Jack", last: "Joe", born: 1995 }];

describe("linearSearchIndexOf()", () => {
  it("returns index of found item", () => {
    assert.equal(linearSearchIndexOf(foods, "pizza"), 0);
    assert.equal(linearSearchIndexOf(foods, "yogurt"), 2);
  });
  it("returns -1 if item not found", () => {
    assert.equal(linearSearchIndexOf(foods, "laptop"), -1);
  });
});

describe("linearSearchIncludes()", () => {
  it("returns true if item found", () => {
    assert.equal(linearSearchIncludes(foods, "pizza"), true);
  });
  it("returns false if item NOT found", () => {
    assert.equal(linearSearchIncludes(foods, "laptop"), false);
  });
});

describe("linearSearchFind()", () => {
  it("returns item back if found", () => {
    const kevin = people[0];
    assert.equal(
      linearSearchFind(people, person => person.name === "Jack"),
      kevin
    );
  });
  it("returns undefined if item NOT found", () => {
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevinn"),
      undefined
    );
  });
});

mocha.run();

