var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
    }
  }, // getInitialState
  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return(
        <TodoItem item={item} key={index} />
      )
    });
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  } // render
});

// Create TodoItem component
var TodoItem = React.createClass({
  render: function() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
});

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));