function toggleMenu(){

    document.getElementById("menu").classList.toggle("show");

}

/* NIGHT MODE */

function toggleTheme(){

    document.body.classList.toggle("light-mode");

}

/* CART */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " добавлен в корзину!");

}

/* LOAD CART */

function loadCart(){

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    cartItems.innerHTML = "";

    /* EMPTY CART */

    if(cart.length === 0){

        cartItems.innerHTML = `

        <div class="cart-card">

            <h2>
            Корзина пустая
            </h2>

            <p>
            Добавьте товары из магазина
            </p>

        </div>

        `;

        document.getElementById("total").innerHTML =
        "Итого: 0 ₸";

        return;
    }

    /* SHOW ITEMS */

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `

        <div class="cart-card">

            <h3>${item.name}</h3>

            <p>${item.price} ₸</p>

            <button onclick="removeItem(${index})">
            Удалить
            </button>

        </div>

        `;
    });

    document.getElementById("total").innerHTML =
    "Итого: " + total + " ₸";
}

/* REMOVE ITEM */

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

/* PAYMENT */

function pay(){

    if(cart.length === 0){

        alert("Корзина пустая!");

        return;
    }

    alert("Оплата прошла успешно!");

    localStorage.removeItem("cart");

    location.reload();

}