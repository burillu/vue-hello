

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: `This is the first title print with Vue js...`,
        toCenter:'text-center',
        vueImgBack : 'https://crisp.chat/static/blog/content/images/2022/05/How-to-Migrate-a-large-project-from-Vue-2-to-Vue-3.jpg'

      }
      
    },
    methods: {
        printMsg: function(){
            this.message=` And this is the second`
            
        }
      }
  }).mount('#app')