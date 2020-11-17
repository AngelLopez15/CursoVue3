// Como en el archivo main.js ya se esta ocupando la constante app
// podemos reutilizarla para nuestros compoentes
// Necesitamos hacer uso del metodo component
// Recibe como primer parametro el nombre del componente
// Como segundo parametro recibe un objeto que sigue la misma logica del objeto de main.js
// Ademas los componentes pueden recibir templates o sea codigo HTML
app.component('mifooter', {
  template:/*html*/`
  <div class="bg-dark">
    <h3>Footer de mi sitio web</h3>
  </div>
  `
})