import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemText: props.itemText,
      done: false,
    };
  }

  handleClick = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    // console.log(this.props)
    const listItemStyle = {
      border: "1px solid black",
      padding: "10px",
    };

    const deleteStyle = {
      color: 'red',
      marginLeft: '10px',
      cursor: 'pointer'
    }

    const listItemText = {
      textDecoration: this.state.done ? "line-through" : "",
    }

    return (
      <div style={listItemStyle}>
        <input type="checkbox" onClick={this.handleClick}></input>
        <span style={listItemText}>{this.props.itemText}</span>
        <span style={deleteStyle} onClick={this.props.onDelete}>X</span>
      </div>
    );
  }
}

export default ListItem;
