import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        name="car1"
        price="1000000"
        image="https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"
      ></Card>
      <br />
      <Card
        name="car2"
        price="2000000"
        image="https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"
      ></Card>
    </div>
  );
}
export default App