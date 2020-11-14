// las sintaxis que tengan la palabra "Vue" solo se puden usar cuando se tiene
// integrado Vue
const app = Vue.createApp({
  data(){
    return{
      titulo:'Este es un Hola Mundo con Vue.js',
      cantidad:300,
      enlace:'https://youtube.com/bluuweb',
      estado: true
    }
  }
})