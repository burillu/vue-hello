

const { createApp } = Vue

createApp({
    data() {
        return {
            message: `This is the first title print with Vue js...`,
            classH1: 'text-center',
            classImgVue: 'my-vue-img',
            vueBg: 'url(https://pespantelis.github.io/vue-videobg/demo/assets/logo.png)',
            divBgClass: 'my-vue-bg',
            vueImg: 'https://dev-bay.com/wp-content/uploads/2022/02/2022-02-07_22h02_55.png'

        }

    },
    methods: {
        printMsg: function () {



            this.message = ` And this is the second`;
            this.vueBg = 'url(https://crisp.chat/static/blog/content/images/2022/05/How-to-Migrate-a-large-project-from-Vue-2-to-Vue-3.jpg)';
            this.classH1 = 'text-white';
            this.divBgClass += ' d-flex align-items-center justify-content-between';

        }
    }
}).mount('#app')