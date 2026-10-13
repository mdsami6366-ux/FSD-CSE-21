const ele = document.getElementById("data");
const URL = "https://dummyjson.com/products";

async function loadProduct() {
  try {
    const res = await fetch(URL);
    const data = await res.json();

    let row = "";

    data.products.map((i, index) => {
      row += `
                <div class="card">
                    <h3>${i.title}</h3>

                    <img src="${i.images[0]}">

                    <p>Category: ${i.category}</p>

                    <p>Price: $${i.price}</p>
                </div>
            `;
    });

    ele.innerHTML = row;
  } catch (err) {
    console.log("ERROR", err);
  }
}

loadProduct();
