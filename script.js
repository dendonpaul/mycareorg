//Fetch medicines
const fetchMedicine = fetch("datas/medicines.json").then((response) =>
  response.json().then((datas) => {
    return datas.forEach((data) => {
      document.getElementById("table").innerHTML += `
    <tr>
      <td><img src="${data.image}" /></td>
      <td>
          <div class="cart-desc">
              <h3>${data.name}</h3>
              <p>${data.description}</p>
          </div>
      </td>
      <td>
          <div class="cart-price">
              <h3 id="price">${data.price}</h3>
          </div>
      </td>
    <td>
        <input type="number" min="1" max="10" value="1" id="qty" />
    </td>
    <td>
        <div class="cart-price">
            <h3 id="total-value">${data.price}</h3>
        </div>
    </td>
    </tr>
    `;
    });
  })
);

// document.getElementsByTagName('table').innerHTML =
