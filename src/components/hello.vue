import { component } from 'vue';

const hello = component('hello-component', {
    template: `
        <div>
            <h2 class="text-center">Hello From Component</h2>
            <button>Sign in to git hub</button>
        </div>
    `
});

export default hello;