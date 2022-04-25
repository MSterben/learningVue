const app = Vue.createApp({
    data(){
        return {
            brand:'Vue Mastery',
            cart: 0,
            product: 'Socks',
            discription: ' create by bavovna',
            image: '/assest/images/socks_blue.jpg',
            url: 'https://www.google.com', 
            inventory: 0,
            onSale: true,
            selectedVariant: 0,
            details: ['50% cotton','30% wool','20% polyester'],
            variants: [
                {id: 2234, color:'green',image: '/assest/images/socks_green.jpg', quantity: 50},
                {id: 2235, color:'blue', image: '/assest/images/socks_blue.jpg', quantity: 0}
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
        updateVariant(index){
            this.selectedVariant = index
        }
    },  
    computed:{
        title(){
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
}) 