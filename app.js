import { fetchData } from "/utils/httpRequest.js"
import Product from "/Product.js"
import Cart from "/Cart.js"



const productSection=document.getElementById("products")
const cartList = document.getElementById("cart-list")
const totalPrice = document.getElementById("total-price").querySelector("span")
const render = async () =>{
    const productData= await fetchData();
    const cart = new Cart(cartList, totalPrice)
    const product = new Product(productSection, productData, cart)
    product.showProduct()
    
}
window.addEventListener("DOMContentLoaded", render)