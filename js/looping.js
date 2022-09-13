// https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60
// https://images.unsplash.com/photo-1501147830916-ce44a6359892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60
// https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60
// https://images.unsplash.com/photo-1602148740250-0a4750e232e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60
let i=0

const items=[
    {
        img:"https://cdn.pixabay.com/photo/2022/09/04/20/11/plane-7432680__340.jpg",
        save:"new",
        rate:1,
        name:"Polygon Siskiu D7 Bike -Unisex",
        price:"2,449.95"

    },
    {
        img:"https://cdn.pixabay.com/photo/2022/06/21/19/01/coast-7276345__340.jpg",
        save:"save 20%",
        rate:2,
        name:"Gyuri Siskiu D7 Bike -Unisex",
        price:"449.95"
    },
    {
        img:"https://cdn.pixabay.com/photo/2022/06/08/05/47/stars-7249785__340.jpg",
        save:"save 20%",
        rate:2,
        name:"JP Siskiu D7 Bike -Unisex",
        price:"1,249.95"
    },
    {
        img:"https://cdn.pixabay.com/photo/2022/08/25/20/48/bird-7411277__340.jpg",
        save:"save 20%",
        rate:4,
        name:"Daniel Siskiu D7 Bike -Unisex",
        price:"249.95"
    }
]
const parent =document.querySelector('body')

function doLooping(){
    // for( i; i < items.length; i++){
    //     let item = document.createElement('div')
    //         item.innerHTML = `
                
    //             <img src=${items[i].img} alt="왜 안나와">
    //             <div class="new" >${items[i].save}</div>
    //                 <div class="rateBox">
    //                     <span class="material-symbols-outlined nofilled">
    //                     star
    //                     </span>
    //                     <span class="material-symbols-outlined nofilled">
    //                     star
    //                     </span>
    //                     <span class="material-symbols-outlined nofilled">
    //                     star
    //                     </span>
    //                     <span class="material-symbols-outlined nofilled">
    //                     star
    //                     </span>
    //                     <span class="material-symbols-outlined nofilled">
    //                     star
    //                     </span>
    //                 <div>(0)</div>
    //             </div>
    //             <div>
    //                 ${items[i].name}
    //             </div>
    //             <div>$${items[i].price}</div>
    //         `
    //         parent.appendChild(item)

            
    //         // const rate = item.querySelectorAll(".rateBox .nofilled")
    //         // for(let j =0; j < items[i].rate; j++){
    //         //         const rate = item.getElementsByClassName("nofilled")[j]
    //         //         rate.classList.add('filled')
    //         //         // rate[j].classList.add("filled")
    //         //     }

    //             item.classList.add("item")
    //             showRate(item)
            
            
    //     }

    items.map((item)=>{
        const newItem = document.createElement('div')
        newItem.innerHTML = `
        <img src=${item.img} alt="왜 안나와">
            <div class="new" >${item.save}</div>
                <div class="rateBox">
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
                <div>(0)</div>
            </div>
            <div>
                ${item.name}
            </div>
            <div>$${item.price}</div>
        `
        parent.appendChild(newItem)
        newItem.className = "item"
        showRate(newItem,item.rate)
    })
}
doLooping()

function showRate(item,star){
    const rate = item.querySelectorAll(".rateBox .nofilled")
    for(let j =0; j < star; j++){
        // const rate = item.getElementsByClassName("nofilled")[j]
        // rate.classList.add('filled')
        rate[j].classList.add("filled")
    }
}

// const test = document.querySelectorAll(".test")
// test.forEach(function(eachTest){
//     eachTest.classList.add('redColor')
// })
// const test = document.getElementsByClassName("test")
// for(let t=0; t < test.length; t++){
//     test[t].classList.add('redColor')
// }

const tests = document.querySelectorAll(".test")
tests.map((test)=>{
    test.classList.add("activeTest")
})
















