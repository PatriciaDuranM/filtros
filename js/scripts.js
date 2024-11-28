const productsElement = document.getElementById("products");
const searchElement = document.getElementById("name-product");
const checkboxElement = document.getElementById("checkbox");
const selectionElement = document.getElementById("selection-filter");

const productData = [
  {
    name: "Waffle with Berries",
    price: 6.5,
    sugarless: true,
    img: "./assets/images/image-waffle.jpg",
    alt: "A waffle tower with sliced strawberries and icing sugar.",
  },

  {
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    sugarless: true,
    img: "./assets/images/image-creme-brulee.jpg",
    alt: "Two dishes of crréme brûlée topped with berries, figs and mint.",
  },

  {
    name: "Macaron Mix of Five",
    price: 8.0,
    sugarless: false,
    img: "./assets/images/image-macaron.jpg",
    alt: "Five diferent flavour macarons.",
  },

  {
    name: "Classic Tiramisu",
    price: 5.5,
    sugarless: false,
    img: "./assets/images/image-tiramisu.jpg",
    alt: "A tiramusú topped with berries, mint and cocoa powder.",
  },

  {
    name: "Pistachio Baklava",
    price: 4.0,
    sugarless: true,
    img: "./assets/images/image-baklava.jpg",
    alt: "Three triangle shaped baklavas topped with crushed pistachos.",
  },

  {
    name: "Lemon Meringue Pie",
    price: 5.0,
    sugarless: true,
    img: "./assets/images/image-meringue.jpg",
    alt: "A slice of lemon pie coronated with meringue.",
  },

  {
    name: "Red Velvet Cake",
    price: 4.5,
    sugarless: false,
    img: "./assets/images/image-cake.jpg",
    alt: "Red velvet cake portion withb sliced strawberries on the inside and a berrie on top.",
  },

  {
    name: "Salted Caramel Brownie",
    price: 5.5,
    sugarless: false,
    img: "./assets/images/image-brownie.jpg",
    alt: "A portion of brownie with a vanilla ice cream and caramel sirup.",
  },

  {
    name: "Vanilla Panna Cotta",
    price: 6.5,
    sugarless: true,
    img: "./assets/images/image-panna-cotta.jpg",
    alt: "Two cristal jars of pannacotta with cream.",
  },
];

/*
<div class="product">
    <img
    src="assets/images/image-waffle.jpg"
    alt="Waffles with berries"/>
    <h2 class="title">Waffle with Berries</h2>
    <span class="tag-text">Sugarless</span>
    <h2 class="title title-price">$6.50</h2>
</div>*/

const printProductTemplate = (products) => {
  productsElement.innerHTML = "";

  const fragment = document.createDocumentFragment();

  products.forEach((item) => {
    /*caja*/
    const product = document.createElement("div");
    product.classList.add("product");

    /*imagen*/
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.alt;

    /*titulo*/
    const productName = document.createElement("h2");
    productName.classList.add("title");
    productName.textContent = item.name;

    /*sugar*/
    const sugarLess = document.createElement("span");
    sugarLess.classList.add("tag-text");
    if (item.sugarless) {
      sugarLess.textContent = "Sugarless";
    }

    /*precio*/
    const price = document.createElement("h2");
    price.classList.add("title", "title-price");
    price.textContent = `$${item.price.toFixed(2)}`;

    product.append(img, productName, sugarLess, price);

    fragment.append(product);
  });

  productsElement.append(fragment);
};

printProductTemplate(productData);

/*sin azucar*/

const selectSugarLess = () => {
  if (checkboxElement.checked) {
    const sugarLessProducts = productData.filter(
      (product) => product.sugarless
    );
    printProductTemplate(sugarLessProducts);
  } else {
    printProductTemplate(productData);
  }
};

checkboxElement.addEventListener("change", selectSugarLess);
