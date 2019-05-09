"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// - Class example
var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push({
        id: this.id,
        data: data
      });
      this.updateId();
    }
  }, {
    key: "show",
    value: function show() {
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.id = 1;
    return _this;
  }

  _createClass(TodoList, [{
    key: "updateId",
    value: function updateId() {
      this.id++;
    }
  }]);

  return TodoList;
}(List);

var MyLista = new TodoList();

document.getElementById("addTodo").onclick = function () {
  MyLista.add(Date.now());
  MyLista.show();
}; // - Array example


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("original:", arr);
var mapArr = arr.map(function (item, index) {
  return item + index; // modify array
});
console.log("map:", mapArr); // [1, 3, 5, 7, 9, 11, 13, 15, 17]

var reduceArr = arr.reduce(function (total, next) {
  return total + next; // sum
});
console.log("reduce:", reduceArr); // 45

var filterArr = arr.filter(function (item) {
  return item % 2 === 0; // true or false
});
console.log("filter:", filterArr); // [2, 4, 6, 8]

var findArr = arr.find(function (item) {
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
