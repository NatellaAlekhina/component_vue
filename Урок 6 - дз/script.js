var goodsList = [
    {id:1,
    title:"Hat green",
    price:684},
    {id:2,
    title:"Hat orange",
    price:457},
    {id:3,
    title:"Jacket red",
    price:728},
    {id:4,
    title:"Jacket green",
    price:734},
    {id:5,
    title:"Shoes red",
    price:307},
    {id:6,
    title:"Jacket orange",
    price:695},
    {id:7,
    title:"Hat green",
    price:684},
    {id:8,
    title:"Hat orange",
    price:457},
    {id:9,
    title:"Jacket red",
    price:728},
    {id:10,
    title:"Jacket green",
    price:734},
    {id:11,
    title:"Shoes red",
    price:307},
    {id:12,
    title:"Jacket orange",
    price:695},
    {id:13,
    title:"Hat green",
    price:684},
    {id:14,
    title:"Hat orange",
    price:457},
    {id:15,
    title:"Jacket red",
    price:728},
    {id:16,
    title:"Jacket green",
    price:734},
    {id:17,
    title:"Shoes red",
    price:307},
    {id:18,
    title:"Jacket orange",
    price:695},
    {id:19,
    title:"Hat green",
    price:684},
    {id:20,
    title:"Hat orange",
    price:457},
];

var buyedItems = [
    {id:1,
    title:"Hat green",
    price:684},
    {id:2,
    title:"Hat orange",
    price:457},
    {id:3,
    title:"Jacket red",
    price:728},
    {id:4,
    title:"Jacket green",
    price:734}];

onload = () => {
    Vue.component('main-header', {
        props: ['text', 'show'],
        data: function () {
            return {
                header: "First head"
            }
        },
        methods: {},
        template: `
        <header>
            <h1>GeekShop</h1>
        
        </header>
        `
    });
    Vue.component('search-block', {
        template: `
        <main> <slot></slot> </main>
        `
    });
    Vue.component('goods-block', {
        template: `
        <div class="all-goods">
        <slot></slot>
        </div>
        `
    });
    Vue.component('showcase-block', {
        template: `
        <div class="showcase">
        <slot></slot>
        </div>
        `
    });
    Vue.component('goods', {
        props: ['item'],
        template: `
        <div class='goods-item'>
                <h3>{{ item.title }}</h3>
                <p>{{ item.price }}</p>
                <button v-on:click="addToCart">Добавить в корзину</button>
            </div>
        `,
        methods: {
            addToCart() {
                alert("Добавить в корзину?")
            },
        }
     });

    Vue.component('custom-btn', {
        props: ['click'],
        template: `
        <button>
        <slot></slot>
        </button>
        `
    });
    Vue.component('cart-block', {
        props: [],
        template: `
        <div class="cart">
        <h1>Cart</h1>
        <div class="basket-goods">
        <slot></slot>
        </div>
        <slot name="button-basket-close"></slot>
        </div>
        `
    });
    Vue.component('basket-goods', {
        props: ['item'],
        template: `
        <div class='goods-item'>
                <h3>{{ item.title }}</h3>
                <p>{{ item.price }}</p>
                <button v-on:click="deleteCart">Удалить из корзины</button>
            </div>
        `,
        methods: {
            deleteCart () {
                alert("Точно удалить?");

            }
        }
    });
    Vue.component('footer-block', {
        template: `
        <footer>
        <p>2021 &copy;</p>
        </footer>
        `
    });

      
    const app = new Vue({
        el: '#app',
        data: {
            filteredList: goodsList,
            filteredListNew: goodsList,
            search: '',
            basketVision: false,
            buyedItems: buyedItems

        },
        
        mounted () {

        },
        methods: {
            fu: function () {},
            filter() {
                this.filteredListNew = this.filteredList.filter(({title}) => { return new RegExp(this.search, 'i').test(title);
                });
    
            },
            showBasket() {
                this.basketVision = true
            },
            closeBasket() {
                this.basketVision = false
            }

        },
        computed: {
            test: function () {
                return 
            }

        }
    })
}

/*class renderGoodsItem {
    constructor ({ title, price }){
      this.title = title;
      this.price = price;
    }
    render() {
        return `
        <div class='goods-item'>
          <h3>${title}</h3>
          <p>${price} $</p>
        </div> `
    }
  }*/