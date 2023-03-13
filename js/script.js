/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/
const { createApp } = Vue

createApp({
    data() {
      return {
        title: 'red',
        titleText: 'TITOLONE',
        img: "img/1.webp"
      }
    }
  }).mount('#app')