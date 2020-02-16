Page({
  data: {
    textValue: '',
    todos: [
      { name: '学习HTML、css、js', completed: false },
      { name: '学习HTML、css、js', completed: true },
      { name: '学习HTML、css、js', completed: false }
    ],
    count: 2,
    isShow: true
  },
  addTodoHandle: function () {
    if (this.data.textValue) {
      var todos = this.data.todos;
      todos.unshift({
        name: this.data.textValue,
        completed: false
      });
      this.setData({
        textValue: '',
        todos: todos,
        count: this.data.count + 1,
        isShow: true
      });
    }
  },
  toggleTask: function (e) {
    var index = e.currentTarget.dataset.index;
    var todos = this.data.todos;
    var count = this.data.count;
    todos[index].completed = !todos[index].completed;
    if (todos[index].completed) {
      count--;
    } else {
      count++;
    }
    this.setData({
      todos: todos,
      count: count
    });
  },
  deleteTask: function (e) {
    var index = e.currentTarget.dataset.index;
    var todos = this.data.todos;
    var count = this.data.count;
    var isShow = this.data.isShow;
    if (!todos[index].completed) {
      count--;
    }
    todos.splice(e.currentTarget.dataset.index, 1);
    if (!todos.length) {
      isShow = false;
    }
    this.setData({
      todos: todos,
      count: count,
      isShow: isShow
    });
  },
  allElection: function () {
    var todos = this.data.todos;
    todos.forEach(function(ele, index){
      ele.completed = true;
    });
    this.setData({
      todos: todos,
      count: 0
    });
  },
  cleanItem: function () {
    var todos = [];
    this.setData({
      todos: todos,
      count: 0,
      isShow: false
    });
  },
  completedSubmit: function () {
    this.addTodoHandle();
  },
  textChange: function (e) {
    this.setData({
      textValue: e.detail.value
    });
  }
})