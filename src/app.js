import Vue from 'vue';
import { get } from 'axios';

Vue.component('hello-component', {
    template: `
        <div>
            <h2 class="text-center">Hello From Component</h2>
            <button v-on:click="sign()">Sign in to git hub</button>
        </div>
    `,
    methods: {
        sign: () => {
            get(
                'https://github.com/login/oauth/authorize', 
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Expose-Headers': 'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval'
                    }
                }
            ).then(response => (this.info = response))
        }
    }
});

new Vue({
    el: '#app', 
    data: {
        message: 'Hello from Webpack'
    },
});