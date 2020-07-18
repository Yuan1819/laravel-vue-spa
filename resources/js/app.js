require('./bootstrap');
window.Vue = require('vue');
Vue.component('blog-page', require('./components/BlogPage.vue').default);

const app = new Vue({
    el: '#app',
    components: {

    }
});
