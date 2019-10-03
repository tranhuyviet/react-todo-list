import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add toto item"
              //   name="item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            disabled={item ? false : true}
            type="submit"
            className={`btn btn-block  mt-3 text-white text-uppercase ${
              editItem ? "bg-success" : "bg-primary"
            }`}
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
