import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  } 

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <Link to={`${dish.id}`} className="col-md-4">
        <div
          className="card text-bg-light col-md-30 my-1 mx-3"
          key={dish.id}
          >
          <img src={dish.image} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">{dish.name}</h5>
          </div>
        </div>
        </Link>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
