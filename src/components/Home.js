import React from "react";

function RenderCard({ item }) {
  return (
    <div className="col-sm-4">
    <div className="card" style={{ width: "25rem" }}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        {item.designation ? <h5 className="card-text">{item.designation}</h5> : ""}
        <p className="card-text">{item.description}</p>
      </div>
    </div>
    </div>
  );
}

const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
          <RenderCard item={props.dish}></RenderCard>
          <RenderCard item={props.promotion}></RenderCard>
          <RenderCard item={props.leader}></RenderCard>
      </div>
    </div>
  );
};

export default Home;
