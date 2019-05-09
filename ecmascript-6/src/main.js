// - Class example

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push({
      id: this.id,
      data
    });
    this.updateId();
  }

  show() {
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.id = 1;
  }

  updateId() {
    this.id++;
  }
}

const MyLista = new TodoList();

document.getElementById("addTodo").onclick = function() {
  MyLista.add(Date.now());
  MyLista.show();
};


// - Array example
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("original:", arr);


const mapArr = arr.map(function(item, index) {
  return item + index; // modify array
});
console.log("map:", mapArr); // [1, 3, 5, 7, 9, 11, 13, 15, 17]


const reduceArr = arr.reduce(function(total, next) {
  return total + next; // sum
});
console.log("reduce:", reduceArr); // 45


const filterArr = arr.filter(function(item) {
  return item % 2 === 0; // true or false
});
console.log("filter:", filterArr); // [2, 4, 6, 8]


const findArr = arr.find(function(item) {
  return item === 4; // find 4
});
console.log("find:", findArr); // 4


// - Arrow Functions
/*
  const newArr = arr.map(function(item){
    return item * 2;
  });

  const newArr = arr.map((item) => {
    return item * 2;
  });

  const newArr = arr.map(item => {
    return item * 2;
  });

  const newArr = arr.map(item => item * 2);
*/

/*
  const test = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const test = () => 'test';
  const test = () => 1;

  const test = () => {
    return { data: Date.now() };
  };
  const test = () => ({ data: Date.now() });
*/

