const product = [
    {
        id:0,
        image: 'cart1.jpeg',
        title: 'digital',
        price:120,
    },
    {
        id:1,
        image: 'cart2.jpg',
        title: 'Ai',
        price:340,
    },
    {
        id:2,
        image: 'cart3.jpg',
        title: 'drawn',
        price:90,
    },

];

const catogories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = catogories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <div class='images' src=${image}></img>
            </div>
            <div class='bottom>
            <p>${title}</p>
            <h2>${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

    var cart=[];
    function addtocart(a){
          cart.push({...catogories[a]});
          displaycart();  
    }
    function deElement(a){
        cart.splice(a,1);
        displaycart();
    }

    function displaycart(a){
        let j=0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.lenght==0){
            document.getElementById('cartItem').innerHTML = "Your cart is Empty";
            document.getElementById("total").innerHTML = "$ "+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var{image, title, price}= items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+ total+ ".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px; '>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='deElement("+ (j++) +")'></i></div>"

                );
            }).join('');
        }
    }