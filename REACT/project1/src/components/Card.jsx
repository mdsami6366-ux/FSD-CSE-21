import React from 'react';
const Card = (props) => {
  return (
    <div>
      <div style={{border: '2px solid red',margin:'auto',height:'400px',width:'300px'  }}>
        <h1>MY CAR</h1>
        <p>
          <img
            src={props.image}
            alt="car image"
            height={"150px"}
            width={"250px"}
          />
              </p>
        <h5>Car Name : { props.name}</h5>
        <h6>price: {props.price}</h6>
      </div>
    </div>
  );
}
export default Card