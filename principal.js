

const {cursos, MostrarCursos} = require ('./cursosInfo');
const {argv, Contenido} = require('./inscripcion')
const fs = require('fs');


if(argv.id == null){
    console.log(MostrarCursos());
}else{
    let Pruebaa = cursos.find(Pruebaa => Pruebaa.id == argv.id);
    var lisCurso;
    let cursoseleccionado = (idE) => {
        if(Pruebaa){
            for(i=0; i<=3; i++){
                if(cursos[i].id == idE){
                    (function(ind){
                        lisCurso = 'El curso ' + cursos[ind].id + ': ' + cursos[ind].nombre + ', su duración es de:' + cursos[ind].duracion + ' horas, y tiene un precio de $' + cursos[ind].precio;
                    }) (i);
                }
            }
        }
    }
    cursoseleccionado(argv.id);

    let crearArchivo = (estudiante) =>{
        texto= 'NUEVO ESTUDIANTE \n Nombre: ' + argv.nombre + '\n Cédula: ' + argv.cedula + 
                '\n El estudiante inscrito en el ' + lisCurso;
        fs.writeFile('matricula.txt', texto, (err) =>{
            if (argv.id>8 || argv.id<5) {
                (console.log('El ID ingresado no corresponde a ningún curso, por favor seleccionar otro : \n' + MostrarCursos()));
            }else{
                console.log('Se creo el archivo');
            }
        
        })
    }

    crearArchivo(argv);
}