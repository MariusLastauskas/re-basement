import Vue from 'vue';

Vue.component('hello-component', require('./components/hello').default);

new Vue({
    el: '#app', 
    data: {
        message: 'Hello from Webpack'
    }
});