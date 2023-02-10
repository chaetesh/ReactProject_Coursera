import React, { Component } from "react";

export class DishdetailComponent extends Component {

render() {
    if (this.props.dish != null) {
        const renderComments = this.props.comments.map((comment)=>{
            return(
                <div key={comment.id}>
                    <p>{comment.comment}</p>
              <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}</p>
            </div>
          );
        });
        return(
            <>
        <div className="card col-md-5 my-1 mx-3" >
          <img src={this.props.dish.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.dish.name}</h5>
            <span className="card-text">
              {this.props.dish.description}
            </span>
          </div>
        </div>
        <div className="col-md-5 my-1 mx-3" >
          <h1>Comments</h1>
          <span>{renderComments}</span>
        </div>
        </>
    );
  }
}
}

export default DishdetailComponent;
