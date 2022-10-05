let foods: Array<{ img: any, foodname : string , price:string ,}> = [
 {
    img: "../imgs/baked.jpg",
    foodname : "pasta",
    price : "The price = 5$" ,

    }, {
        img: "../imgs/pasta.jpg",
        foodname: "pizza",
        price: "The price = 3 $",

    }, {
        img: "../imgs/cake.jpg",
        foodname: "Ogfgd",
        price: "The price = 7$",

    }, {
        img: "../imgs/fresh.jpg",
        foodname: "pasta",
        price: "The price = 5$",

    }, {
        img: "../imgs/hot.jpg",
        foodname: "pizza",
        price: "The price = 3 $",
        recipe: ""

    }, {
        img: "../imgs/pancake.jpg",
        foodname: "Ogfgd",
        price: "The price = 7$",
        recipe: ""

    }
]
const images = document.querySelector('.products');
for (let food of foods) {
   console.log (food);
    images.innerHTML += `<div class="card product col my-4" style="width: 300px;">
                <img class="card-img-top mt-2 px-3" src="./imgs/${food.img}">
                <div class="card-body px-3 py-0">
                    <h5 class="card-title">${food.foodname}</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, libero.</p>
                    <p class="card-text h3 text-end">${food.price}</p>
                    <p class="card-text3 d-flex justify-content-end"><button class="btn w-75 product-button"><i class="fs-4 bi bi-cart-plus"></i> Add to cart</button></p>

                </div>
            </div>
    `;
}