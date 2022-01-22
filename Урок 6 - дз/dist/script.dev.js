"use strict";

var goodsList = [{
  id: 1,
  title: "Hat green",
  price: 684
}, {
  id: 2,
  title: "Hat orange",
  price: 457
}, {
  id: 3,
  title: "Jacket red",
  price: 728
}, {
  id: 4,
  title: "Jacket green",
  price: 734
}, {
  id: 5,
  title: "Shoes red",
  price: 307
}, {
  id: 6,
  title: "Jacket orange",
  price: 695
}, {
  id: 7,
  title: "Hat green",
  price: 684
}, {
  id: 8,
  title: "Hat orange",
  price: 457
}, {
  id: 9,
  title: "Jacket red",
  price: 728
}, {
  id: 10,
  title: "Jacket green",
  price: 734
}, {
  id: 11,
  title: "Shoes red",
  price: 307
}, {
  id: 12,
  title: "Jacket orange",
  price: 695
}, {
  id: 13,
  title: "Hat green",
  price: 684
}, {
  id: 14,
  title: "Hat orange",
  price: 457
}, {
  id: 15,
  title: "Jacket red",
  price: 728
}, {
  id: 16,
  title: "Jacket green",
  price: 734
}, {
  id: 17,
  title: "Shoes red",
  price: 307
}, {
  id: 18,
  title: "Jacket orange",
  price: 695
}, {
  id: 19,
  title: "Hat green",
  price: 684
}, {
  id: 20,
  title: "Hat orange",
  price: 457
}];

onload = function onload() {
  Vue.component('main-header', {
    props: ['text', 'show'],
    data: function data() {
      return {
        header: "First head"
      };
    },
    methods: {},
    template: "\n        <header>\n            <h1>GeekShop</h1>\n        \n        </header>\n        "
  });
  Vue.component('search-block', {
    template: "\n        <main> <slot></slot> </main>\n        "
  });
  Vue.component('goods-block', {
    template: "\n        <div class=\"all-goods\">\n        <slot></slot>\n        </div>\n        "
  });
  Vue.component('showcase-block', {
    template: "\n        <div class=\"showcase\">\n        <slot></slot>\n        </div>\n        "
  });
  Vue.component('goods', {
    props: ['item'],
    template: "\n        <div class='goods-item'>\n                <h3>{{ item.title }}</h3>\n                <p>{{ item.price }}</p>\n                <button v-on:click=\"addToCart\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n            </div>\n        ",
    methods: {
      addToCart: function addToCart() {
        alert("Добавить в корзину?");
      }
    }
  });
  Vue.component('custom-btn', {
    props: ['click'],
    template: "\n        <button>\n        <slot></slot>\n        </button>\n        "
  });
  Vue.component('cart-block', {
    props: [],
    template: "\n        <div class=\"cart\">\n        <h1>Cart</h1>\n        <div class=\"basket-goods\">\n        <basket-goods  v-for=\"item in filteredListNew\" v-bind:item='item'> \n        </basket-goods>\n        </div>\n        <slot></slot>\n        </div>\n        "
  });
  Vue.component('basket-goods', {
    props: ['item'],
    template: "\n        <div class='goods-item'>\n                <h3>{{ item.title }}</h3>\n                <p>{{ item.price }}</p>\n                <button v-on:click=\"deleteCart\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B</button>\n            </div>\n        ",
    methods: {
      deleteCart: function deleteCart() {
        alert("Точно удалить?");
      }
    }
  });
  Vue.component('footer-block', {
    template: "\n        <footer>\n        <p>2021 &copy;</p>\n        </footer>\n        "
  });
  var app = new Vue({
    el: '#app',
    data: {
      filteredList: goodsList,
      filteredListNew: goodsList,
      search: '',
      basketVision: false
    },
    mounted: function mounted() {},
    methods: {
      fu: function fu() {},
      filter: function filter() {
        var _this = this;

        this.filteredListNew = this.filteredList.filter(function (_ref) {
          var title = _ref.title;
          return new RegExp(_this.search, 'i').test(title);
        });
      },
      showBasket: function showBasket() {
        this.basketVision = true;
      },
      closeBasket: function closeBasket() {
        this.basketVision = false;
      }
    },
    computed: {
      test: function test() {
        return;
      }
    }
  });
};
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