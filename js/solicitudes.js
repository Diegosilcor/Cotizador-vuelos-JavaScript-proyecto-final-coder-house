let formularioHTML = `<form id="formulario" name="form" action="cotizador.html#/solicitudes">
<legend>Datos</legend>
<br>
<label for="nombre" class="light">Nombre</label>
<input type="text" id="nombre" name="nombre">
<label for="email" class="light">Correo electrónico</label>
<input type="email" id="email" name="email">
<legend id="info">Siguiente</legend>
<br>
<div id="componentes" class="hidden">
  <label id="tituloAmerica" for="america" class="light">America</label>
  <input type="number" id="america" name="america" min="0">
  <label id="tituloEuropa" for="europa" class="light">Europa</label>
  <select id="Europa" name="europa">
    <option value="">- Seleccionar -</option>
  </select>
  <label id="tituloAsia" for="asia" class="light">Asia</label>
  <select id="Asia" name="asia">
    <option value="">- Seleccionar -</option>
  </select>
  <label id="tituloOceania" for="oceania" class="light">Oceania</label>
  <select id="Oceania" name="oceania">
    <option value="">- Seleccionar -</option>
  </select>
  <button id="cotizar" class="custom-btn btn-3" type="submit">Cotizar</button>
  <br>
  <br>
  <button id="limpiar" formnovalidate class="custom-btn btn-2" type="submit" onclick="remover()">Limpiar</button>
  <br>
  <br>
  </div><br>
<div id="presupuesto" class="resaltado hidden"></div>
<div id="indicacion">
  <hr>
  <h1 class="first">Resultado de tu cotizacion</h1>
  <hr>
</div><br>
<div id="adicional" class="hidden">
</div>
</form>
`;
