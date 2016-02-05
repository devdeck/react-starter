var React = require('react');
var ListItem = require('./ListItem.jsx')

var ingredients = [
  {"id":1, "text":"ham"},
  {"id":2, "text":"cheese"},
  {"id":3, "text":"tomatoes"}
];

var List = React.createClass({
  render: function(){
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (
      <div className="row">
        <ul>
           {listItems}
        </ul>
      </div>
    );
  }
});

module.exports = List;
