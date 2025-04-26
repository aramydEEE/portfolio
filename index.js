const personName = prompt("please enter your name");
alert("Hello" + " " + personName + "," + "how are you today?");
setTimeout(() => {
    const image = document.getElementById('item1');
    const display = document.createElement("img");
    display.src ="images/download.jpg"
    display.id="main"
    image.appendChild(display);
},
setTimeout(()=>{
    const image = document.getElementById('item1');
    const displayName = document.createElement("p");
    displayName.innerHTML ="SAUVAGE"
    image.appendChild(displayName);

    const buttonBuy =document.createElement("button");
    image.appendChild(buttonBuy);
    buttonBuy.innerHTML="BUY NOW"
    
    buttonBuy.id = "sell"
},

3000),2000);
setTimeout(()=>{
    const image = document.getElementById('item1');
    const story = document.createElement("p");
    story.innerHTML ="Brief on the product here"
    image.appendChild(story);
},4000)