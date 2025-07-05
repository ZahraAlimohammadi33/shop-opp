class Product{
    constructor(parent, data, cart){
        this.parent=parent
        this.data=data
        this.cart=cart;
        this.parent.addEventListener("click", this)
    }

    showProduct(){
        this.data.forEach(product => {
            this.createCard(product)
        });
    }

    createCard(data) {
        const card= document.createElement("div")
        const img= document.createElement("img")
        img.src= data.image
        card.appendChild(img)
        const info= document.createElement("div")
        const name = document.createElement("h3")
        const items= document.createElement("div")
        const price=document.createElement("span")
        const addButton=document.createElement("button")
        name.innerText=data.name
        price.innerText=data.price + " $"
        addButton.innerText="+"
        addButton.dataset.id= data.id
        info.id="product-info"
        items.append(price, addButton)
        info.append(name,items)
        card.appendChild(info)
        this.parent.appendChild(card)
        
    }

    handleEvent(){
        if(event.target.tagName==="BUTTON"){
            console.log()
            this.addToCart(event.target.dataset.id)
        }
    }

    addToCart(id){
        const product= this.data.find((i) => i.id === +id)
        this.cart.products.push(product)
        this.cart.showProduct() 
    }


}
export default Product;