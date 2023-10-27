

const { createApp } = Vue

createApp({
    data() {
        return {
            message: `This is the first title print with Vue js...`,
            classH1: 'text-center',
            classImgVue: 'my-vue-img',
            vueImg: 'url(https://pespantelis.github.io/vue-videobg/demo/assets/logo.png)',
            divBg: 'my-vue-bg'

        }

    },
    methods: {
        printMsg: function (e) {



            this.message = ` And this is the second`;
            this.vueImg = 'url(https://crisp.chat/static/blog/content/images/2022/05/How-to-Migrate-a-large-project-from-Vue-2-to-Vue-3.jpg)';
            this.classH1 = 'text-white';
            this.divBg += ' d-flex align-items-center';

        }
    }
}).mount('#app')