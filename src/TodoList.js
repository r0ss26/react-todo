import React from 'react';
import ListItem from './ListItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [],
      listItems: [
        'item 1',
        'item 2',
        'item 3'
      ]
    }
  }

  handleDeleteItem = (i) => {
    const listItems = this.state.listItems.slice();
    listItems.splice(i, 1);
    this.setState({
      history: [this.state.listItems, ...this.state.history],
      listItems: listItems
    });
  }

  handleUndo = () => {{
    this.setState({
      listItems: this.state.history[0]
    })
  }}

  render() {
    console.log(this.state)
    return(
    <div>
      {this.state.listItems.map((listItem, i) => {
        return <ListItem key={i} itemText={listItem} onDelete={() => this.handleDeleteItem(i)} />
      })}
      <button onClick={this.handleUndo}>Undo Delete</button>
    </div>
    )
  }


}



export default TodoList;