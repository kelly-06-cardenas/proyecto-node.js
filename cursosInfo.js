let cursos = [{
    nombre: 'Matematicas',
    id: 5,
    duracion: 50,
    precio: 40000
},
{
    nombre: 'Lenguaje',
    id: 6,
    duracion: 36,
    precio: 200000
},
{
    nombre: 'Diseño',
    id: 7,
    duracion: 90,
    precio: 140000
},
{
    nombre: 'Ingles',
    id: 8,
    duracion: 120,
    precio: 85000
}];

let MostrarCursos = () => {
    for(i=0; i<=3; i++){
        (function(ind){
            setTimeout(function(){
                console.log('El curso: ' + cursos[ind].id + ': ' + cursos[ind].nombre + ', Su duracion es de:' + cursos[ind].duracion + ' horas, y tiene un precio de $' + cursos[ind].precio);
            }, 2000 * (ind + 1));
        }) (i);
    }
}

module.exports = {
    cursos,
    MostrarCursos
};