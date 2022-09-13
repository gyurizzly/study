let i = 0
const items = [
    {
        img: "https://cdn.pixabay.com/photo/2014/09/07/22/33/motorbike-438464__340.jpg",
        save: "save 20%",
        rate: 3,
        price: "1,201.45",
        name: "gyuri gyuri zzang"
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/09/08/21/02/superbike-930715__340.jpg",
        save: "save 10%",
        rate: 5,
        price: "2,501.45",
        name: "gyuri harin zzang"
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299__340.jpg",
        save: "save 30%",
        rate: 2,
        price: "1,901.45",
        name: "haesung gyuri zzang"
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962__340.jpg",
        save: "save 20%",
        rate: 1,
        price: "3,331.45",
        name: "gyurizzly gyuri zzang"
    },
    {
        img: "https://cdn.pixabay.com/photo/2021/01/18/06/41/motorcycle-5927265__340.jpg",
        save: "save 30%",
        rate: 3,
        price: "2,002.15",
        name: "haribo gyurizzly zzang"
    }
]
console.log("hello")

const parent = document.querySelector('body')

function doLooping() {


    for (i; i < items.length; i++) {
        let item = document.createElement('div')
        item.innerHTML = `
  
    <img src=${items[i].img} alt="">

<div class="save">${items[i].save}</div>
<div class="rate">
    <span class="material-symbols-outlined nofilled">
    star
    </span>
    <span class="material-symbols-outlined nofilled">
    star
    </span>
    <span class="material-symbols-outlined nofilled">
    star
    </span>
    <span class="material-symbols-outlined nofilled">
    star
    </span>
    <span class="material-symbols-outlined nofilled">
    star
    </span>
    </div>    
    <div class="price">$${items[i].price}</div>
    <div class="name">${items[i].name}</div>
    
    `
        parent.appendChild(item)

        item.classList.add("item")

        showRate(item)
    }


}
console.log("hi")

doLooping()

function showRate(item) {
    const rate = item.querySelectorAll(".rate .nofilled")
    for (let j = 0; j < items[i].rate; j++) {
        rate[j].classList.add("filled")
    }
}