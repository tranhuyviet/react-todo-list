import React, { Component } from "react";

import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends Component {
  state = {
    items: [],
    id: uuid(), // su dung uuid() la tu tao ra unique id
    item: "",
    editItem: false
  };

  handleChange = e => {
    //console.log("handle change", e.target.name, e.target.value);
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    //console.log("handleSubmit");
    e.preventDefault();
    //cach cua Viet
    // this.setState(
    //   {
    // items: [
    //   ...this.state.items,
    //   { id: this.state.id, title: this.state.item }
    // ]
    //   },
    //   () => console.log(this.state.items)
    // );

    //cach cua John
    const newItem = {
      id: this.state.id,
      item: this.state.item //vi item luc nay da duoc cap nhat qua handleChange
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "", //sau khi update vao items thi se refresh lai item va id: item la rong va id se nhan gia tri moi
        id: uuid(),
        editItem: false
      }
      //() => console.log(this.state.items)
    );
  };

  clearList = () => {
    //console.log("clearList");
    this.setState({
      items: []
      // item: "",
      // id: uuid(),
      // editItem: false
    });
  };

  handleDelete = id => {
    //console.log(`handle delete ${id}`);
    const newItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: newItems
    });
  };

  handleEdit = id => {
    //console.log(`handle edit ${id}`);
    const restOfItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: restOfItems,
      item: selectedItem.item,
      id: id,
      editItem: true
    });
  };

  render() {
    //console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
