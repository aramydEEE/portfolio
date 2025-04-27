const personName = prompt("please enter your name");
alert("Hello" + " " + personName + "," + "how are you today?");


const image = document.getElementById('item1');
setTimeout(() => {
    
    const display = document.createElement("img");
    display.src ="images/download.jpg"
    display.id="main"
    image.appendChild(display);
},2000)

setTimeout(()=>{
    
    const displayName = document.createElement("p");
    displayName.innerHTML ="SAUVAGE"
    image.appendChild(displayName);

    const buttonBuy =document.createElement("button");
    image.appendChild(buttonBuy);
    buttonBuy.innerHTML="BUY NOW" 
    buttonBuy.id = "sell"
},3000)

setTimeout(()=>{
    
    const story = document.createElement("p");
    story.innerHTML ="Brief on the product here"
    image.appendChild(story);
},4000)
const item = [
    {image:"./images/download.jpg", brand: "SAUVAGE", buttonContent: "Add to Cart"},
    {image:"./images/download.jpg", brand: "SAUVAGE", buttonContent: "Add to Cart"},
    {image:"./images/download.jpg", brand: "SAUVAGE", buttonContent: "Add to Cart"},
    {image:"./images/download.jpg", brand: "SAUVAGE", buttonContent: "Add to Cart"},
    {image:"./images/download.jpg", brand: "SAUVAGE", buttonContent: "Add to Cart"},
    {image:"./images/download.jpg", brand: "SAUVAGE", buttonContent: "Add to Cart"}
]
const body = document.getElementById("innerLayer");

item.forEach(goods => {
                            
                       
    let wrap = document.createElement('div');
    body.appendChild(wrap);
    wrap.id = 'item2';


    let pic = document.createElement("img");
    wrap.appendChild(pic);
    pic.src = goods.image;
    let title = document.createElement('h4');
    title.textContent = goods.brand;
    wrap.appendChild(title);

    let addCart = document.createElement('button');
    addCart.textContent = goods.buttonContent;
    wrap.appendChild(addCart);
    addCart.id = "buttonCart";
})

