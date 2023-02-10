import React from "react";

function RenderCard({ item }) {
  return (
    <div className="col-sm-4">
    <div class="card" style={{ width: "25rem" }}>
      <img src={item.image} class="card-img-top" alt="..." />
      <div class="card-body">
        {item.designation ? <h5 class="card-text">{item.designation}</h5> : ""}
        <p class="card-text">{item.description}</p>
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
