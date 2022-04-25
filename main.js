const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'Socks',
            discription: ' create by bavovna',
            image: '/assest/images/socks_blue.jpg',
            url: 'https://www.google.com',
            inStock: false,
            inventory: 0,
            onSale: true,
            details: ['50% cotton','30% wool','20% polyester'],
            variants: [
                {id: 2234, color:'green',image: '/assest/images/socks_green.jpg',},
                {id: 2235, color:'blue', image: '/assest/images/socks_blue.jpg'}
            ],
            sizes:['24','26','27']
            
        }
    },  
    methods:{
        addToCart(){
            this.cart +=1
        },
        minusToCart(){
            this.cart -=1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }  
}) 