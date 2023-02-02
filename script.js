//Fetch medicines
const fetchMedicine = fetch("datas/medicines.json").then((response) =>
  response.json().then((datas) => {
    return datas.forEach((data) => {
      document.getElementById("medtable").innerHTML += `
     
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
    <td>
        <div class="add-to-cart">
            <button >Add to Cart</button>
        </div>
    </td>
    </tr>
    `;
    });
  })
);

/*Find Hospitals*/
fetch("datas/hospitals.json")
  .then((datas) => datas.json())
  .then((data) => {
    const pincode_select = document.getElementById("pincodes");
    const hosptable = document.getElementById("hosptable");
    const pincodes_d = [];

    data.filter((e) => {
      pincodes_d.push(e.pincode);
    });
    const pincodes = new Set(pincodes_d);
    pincodes.forEach((e) => {
      pincode_select.innerHTML += `
            <option value="${e}">${e}</option>
        `;
    });

    //display hospital list based on change in value of the select box
    //addEventListener
    pincode_select.addEventListener("change", () => {
      const selectedPin = pincode_select.value;
      data.filter((e) => {
        if (parseInt(selectedPin) === e.pincode) {
          hosptable.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td>${e.address}</td>
                <td>${e.pincode}</td>
            </tr>
            `;
        }
      });
    });
  });
