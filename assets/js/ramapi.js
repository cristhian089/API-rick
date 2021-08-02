//URL API
const API = "https://rickandmortyapi.com/api/character";

//obtener los resultados de la api
const getData = (API) => {
  return fetch(API)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json.results), paginacion(json.info);
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};

//dibujar carda de personajes
const llenarDatos = (data) => {
  
  let html = "";
  data.forEach((pj) => {
   html += `<div class="col mt-5">`;
    html += `<div class="card" style="width: 18rem;">`;
    html += `<img src="${pj.image}" class="card-img-top" alt="${pj.name}">`;
    html += `<div class="card-body">`;
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text">Status :${pj.status}</p>`;
    html += `<p class="card-text">Specie :${pj.species}</p>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
  });
  
  document.getElementById("datosPersonajes").innerHTML = html;
};

//paginacion
const paginacion = (data) => {
  console.log(data);
    let prevDisabled ="";
    let nextDisabled="";

   
    data.prev == null ?  prevDisabled ="disabled" :  prevDisabled = "";

    data.next == null ?  nextDisabled = "disabled" : nextDisabled="";

    let html =`<li class="page-item ${prevDisabled}">
    <a class="page-link" onclick='getData("${data.prev}")' >Previous</a>
  </li> <li class="page-item ${nextDisabled}"> <a class="page-link" onclick='getData("${data.next}")' >Next</a></li>`;
    
    document.getElementById("paginacion").innerHTML =html;
    
};

//Se ejecuta la api
getData(API);
