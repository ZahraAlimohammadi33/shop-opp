class Cart{

    constructor(parent, price){

         this.parent= parent;
         this.price=price;
         this.products= [];
         this.toShow=[]
         this.parent.addEventListener("click", this);
    }

    showProduct(){
        this.toShow=[...new Set(this.products)]
        this.parent.innerHTML="";
        this.toShow.forEach(product => {
            const qty =this.products.filter((p)=> p.id=== +product.id).length 
            this.createCart(product, qty)
        });
        this.calculatePrice()
    }

    createCart(data, qty){
        const cartEle =document.createElement("div")
        cartEle.id="div"
        const imgEle= this.productImg(data)
        const infoEle=this.productInfo(data)
        const controlEle=this.productControl(data,qty)

        cartEle.innerHTML=imgEle;
        cartEle.innerHTML+=infoEle;
        cartEle.innerHTML+=controlEle;

        this.parent.appendChild(cartEle)
    }

    productImg(data){
        const {image , alt}= data
        const imgJSX=`<img alt${alt} src=${image} />`
        return imgJSX
    }

    productInfo(data){
        const {name, price}= data
        const infoJSX =`
        <div id="cart-info">
        <h4>${name}</h4>
        <p>${price} $</P>
        </div>
        `
        return infoJSX
    }

    productControl(data,qty){
        const {id}=data

        const controlJsX =`
        <div>
            <div id="cart-control">
            <button id="bbb" data-id=${id}>-</button>
            <span>${qty}</span>
            <button id="bbb" data-id=${id}>+</button>
            </div>
            <button id="remove" data-id=${id}>Remove</button>
        </div>
        `
        return controlJsX

    }

    handleEvent(event){
        const tagName= event.target.tagName;
        const id = event.target.dataset.id;
        const type= event.target.innerHTML;

        if(tagName!=="BUTTON"){
            return
        }
        switch(type){
            case"+":{
                const product= this.products.find((product)=> product.id=== +id)
                this.products.push(product)
                this.showProduct()
                break;
            }
            case"-":{
                const index= this.products.findIndex((product)=> product.id === +id)
                this.products.splice(index, 1)
                this.showProduct()
                break;
            }

            case"Remove":{
                const newProducts= this.products.filter((product)=> product.id !== +id)
                this.products=newProducts
                this.showProduct()
                break;
            }
        }

    }

    calculatePrice(){

        const total = this.products.reduce((acc, cur)=>(acc += cur.price), 0)
        this.price.innerText= "$" + total
    }
}
export default Cart;