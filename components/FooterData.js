app.component('footerdata',{
  props:['cantidad','valor','fecha'],
  template:/*html*/`
  <div class="bg-dark">
    <h3>{{texto}} - {{cantidad}} - {{valor}} - {{fecha}}</h3>
  </div>
  `,
  data(){
    return{
      texto:'Esta es la data de mi componente'
    }
  }
})