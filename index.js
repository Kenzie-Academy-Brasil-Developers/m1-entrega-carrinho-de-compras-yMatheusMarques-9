const products = [
    {
        id: 1,
        name: 'Cadeira Gamer',
        price: 1600
    },

    {
        id: 2,
        name: 'Notebook Dell Ispirion 15 3000',
        price: 4000
    },

    {
        id: 3,
        name: 'Processador Intel core I9 10****',
        price: 3000
    },

    {
        id: 4,
        name: 'Nvidea Geforce Rtx 3090',
        price: 17800
    },

    {
        id: 5,
        name: 'Fone de ouvido Astro Gaming A50',
        price: 3000
    },

    {
        id: 6,
        name: 'Macbook M2',
        price: 60000
    }
]

let body = document.getElementsByTagName('body')[0]
let main = document.createElement('main')
let title = document.createElement('h1')
let subTitle = document.createElement('h2')
let productsList = document.createElement('ul')

main.appendChild(productsList)
body.appendChild(title)
body.appendChild(subTitle)
body.appendChild(main)

title.innerText = 'Loja'
subTitle.innerText = 'Seu carrinho'

for(let i = 0; i < products.length; i++){
    let productItem = document.createElement('li')
    let p = document.createElement('p')
    
    p.innerHTML = `${products[i].name} - R$ ${products[i].price}`

    productItem.appendChild(p)
    productsList.appendChild(productItem)
}

function soma(){
    let valorTotal = 0

    for(let i = 0; i < products.length; i++){
        valorTotal += products[i].price
    }
     return valorTotal
}

let productDetails = document.createElement('section')
productDetails.innerHTML = `Total: R$ ${soma()}`

main.appendChild(productDetails)

let quebraLinha = document.createElement('br') // Elemento/tag break

productDetails.appendChild(quebraLinha)

let button = document.createElement('button')
button.innerHTML = 'Finalizar compra'

productDetails.appendChild(button)