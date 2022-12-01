
/* Product data */
const chairArray = [
    {
        id: 1,
        name: 'Lovable Chair',
        description: 'Cabriole shield back chair with scroll arm supports',
        price: '$51,04',
        colorOptions: ['yellow', 'dark', 'brown'],
        src: '/images/arm-chair.png'
    },
    {
        id: 2,
        name: 'White Comfy',
        description: 'Exquisite gently curving lines with wood tipped legs',
        price: '$54,83',
        colorOptions: ['white','blue','brown'],
        src: '/images/white-comfy.png'
    },
    {
        id: 3,
        name: 'Elegencies',
        description: 'Black dining chair designed for exceptional style and comfort',
        price: '$34,76',
        colorOptions: ['cream', 'black', 'brown'],
        src: '/images/black-dining.png'
    },
    {
        id: 4,
        name: 'Moderniste',
        description: 'Handsome and purposeful with imposing high-back chair',
        price: '$31,22',
        colorOptions: ['yellow', 'dark'],
        src: '/images/yellow-chair.png'
    },
    {
        id: 5,
        name: 'Brownie',
        description: 'Gorgeous camel brown chair and fabulous',
        price: '$31,11',
        colorOptions: ['brown', 'pink'],
        src: '/images/brown-chair.png'
    },
    {
        id: 6,
        name: 'Lavenderia',
        description: 'Cabriole shield back chair with scroll arm supports',
        price: '$29,98',
        colorOptions: ['cream', 'brown', 'blue'],
        src: '/images/green-chair.png'
    },
    {
        id: 7,
        name: 'Pinky Swear',
        description: 'The gentle feminine curves of the back flow seamlessly',
        price: '$31,11',
        colorOptions: ['brown', 'pink'],
        src: '/images/red-chair.png'
    },
    {
        id: 8,
        name: 'Emmanuelle',
        description: 'Featuring deep-sprung base and cushion squared styling',
        price: '$64,06',
        colorOptions: ['brown', 'dark', 'black'],
        src: '/images/leather-sofa.png'
    },
    {
        id: 9,
        name: 'Lovable Chair',
        description: 'Cabriole shield back chair with scroll arm supports',
        price: '$51,04',
        colorOptions: ['yellow', 'dark', 'brown'],
        src: '/images/yellow-chair.png'
    },
    {
        id: 10,
        name: 'Brownie',
        description: 'Gorgeous camel brown chair and fabulous',
        price: '$31,11',
        colorOptions: ['brown', 'pink'],
        src: '/images/egg-chair.png'
    },
    {
        id: 11,
        name: 'White Comfy',
        description: 'Exquisite gently curving lines with wood tipped legs',
        price: '$54,83',
        colorOptions: ['blue', 'brown', 'white'],
        src: '/images/white-comfy.png'
    },
    {
        id: 12,
        name: 'Pinky Swear',
        description: 'The gentle feminine curves of the back flow seamlessly',
        price: '$31,11',
        colorOptions: ['brown', 'pink'],
        src: '/images/red-chair.png'
    },
]

let numberOfItems = 0;

/* Product card component */

function mapProduct(product_list) {
    let products = "";
    console.log(product_list)
    product_list.map((values) => {
        products += `<div class="product-container">
        <!-- Product image -->
        <div class="image">
            <img class="img" src=${values.src} alt="">
        </div>
        <!-- Product details -->
        <div class="card">
            <div class="product-details">
                <span class="product-name">${values.name}</span>
                <p class="product-description">${values.description}</p>
                <div class="last">
                    <div class="color-options">
                        ${getColorOptions(values.colorOptions)}
                    </div>
                    <span class="price">${values.price}</span>
                </div>
                <button class="buy-button">Buy now</button>
            </div>
        </div>
    </div>`
    });

    document.getElementById("products").innerHTML = products;
}

/* Display more items  */
function renderInHtml(n = 4) {
    let Product_list = chairArray.slice(0,numberOfItems + n)
    mapProduct(Product_list);
    numberOfItems+=4;
}

renderInHtml();


/* Responsive nav bar */
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* Show more items */
const moreButton = document.getElementsById('more-button');
if (moreButton) {
    moreButton.addEventListener('click', () => {
        renderInHtml();
    })
}

/* Mapping colorOptions */

function getColorOptions(colors){let value = "";
for (let index = 0; index < colors.length; index++) {
    value += `<span class= "dot ${colors[index]}"></span>`;
}
return value
}


