const cities = [
    {name:"Lagos", population: 3792621, isActive: "true"},
    {name:"Kwara", population: 2792621, isActive: "true"},
    {name:"Kano", population: 5792621, isActive: "true"},
    {name:"Ogun", population: 2792621, isActive: "true"},
    {name:"Osun", population: 1792621, isActive: "true"}
]

// for(let item of cities){
//     const items = item.name==="Kano";
// console.log(items)
//  }

const isExiting = cities.find(help=>{
    help.name === name;
    if(isExiting){
        isExiting.name === "Kano"
    }
    
   
})
console.log(isExiting)

// const myFilter = (array,callback)=>{
//     const city = [];
//     for(let item of cities){
//         const items = item;

//     }
// }
// myFilter(cities)

// const list = cities.filter(state =>{
//     return state.population < 3000000
// }).map(show=>{
//     return show.name;
// }).join("❤️")
// console.log(list)
// document.body.innerHTML= list;


// using chain rule
const list = cities.filter(state =>{
    return state.population < 3000000
}).map(show=>{
    return `${show.name.toUpperCase()} - ${show.population.toLocaleString()}`;
}).forEach(line=>{
     const div = document.createElement('div')
     div.textContent = line;

    console.log(line)
document.body.appendChild(div)
})
