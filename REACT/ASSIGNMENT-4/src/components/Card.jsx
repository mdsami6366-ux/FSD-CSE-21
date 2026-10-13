const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "30px",
      }}
    >
      <div
        style={{
          border: "2px solid red",
          margin: "auto",
          height: "450px",
          width: "300px",
        }}
      >
        <h1>PIZZA</h1>
        <p>
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
            alt="pizza"
            height={"300px"}
            width={"250px"}
          />
        </p>
        <h2>Price:400</h2>
      </div>

      <div
        style={{
          border: "2px solid red",
          margin: "auto",
          height: "450px",
          width: "300px",
        }}
      >
        <h1>NOODLES</h1>
        <p>
          <img
            src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="pizza"
            height={"300px"}
            width={"250px"}
          />
        </p>
        <h2>Price:400</h2>
      </div>
    </div>
  );
}
export default Card