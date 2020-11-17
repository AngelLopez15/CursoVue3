// las sintaxis que tengan la palabra "Vue" solo se puden usar cuando se tiene
// integrado Vue
const app = Vue.createApp({
  data(){
    return{
      titulo:'Este es un Hola Mundo con Vue.js',
      cantidad:0,
      enlace:'https://youtube.com/bluuweb',
      estado: true,
      servicios:['transferencias', 'pagos', 'giros'],
      desactivar:false
    }
  },
  // para agregar metodos se debe usar la paabra methods
  methods:{
    agregarSaldo(){
      this.desactivar=false
      this.cantidad = this.cantidad+100
    },
    quitarSaldo(){
      if(this.cantidad===0){
        // alert('saldo en cero')
        this.desactivar=true
        return
      }
      this.cantidad=this.cantidad-100
    },
    resetearSaldo(){
      this.cantidad=0
      this.desactivar=true
    },
    disminuirCantidad(valor){
      if (this.cantidad===0) {
        this.desactivar=true
        return
      }
      this.cantidad=this.cantidad-valor
    }
  },
  computed:{
    colorCantidad(){
      return this.cantidad > 500 ? 'text-green' : 'text-red'
    }
  }
})