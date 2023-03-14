const personajes = [
    {id: 1, nombre: 'liquid snake', franquicia: 'metalgear'},
    {id: 2, nombre: 'vergil', franquicia: 'devilMayCry'},
    {id: 3, nombre: 'samus', franquicia: 'metroid'},
    {id: 4, nombre: 'ridley', franquicia: 'metroid'},
    {id: 5, nombre: 'raiden', franquicia: 'metalgear'},
    {id: 6, nombre: 'SA-X', franquicia: 'metroid'},
]

const{id,nombred,franquicia} = personajes[2];

const string = `${nombre} pertenece a ${franquicia}`;
console.log(string);

const {id:id2,nombre:nombre2,franquicia:franquicia2} = personajes[2];
console.log(id2,nombre2,franquicia2);

const protagonistas = ['arthur mogan', 'jill valentine', 'nathan drake', 'kratos', 'lara croft'];

const[,prota1,prota2] = protagonistas;
console.log(prota1,prota2);

const retornaArreglo = () => {
    return['ABC',123,true];
}

const[letras,numeros,booleano]=retornaArreglo();
console.log(letras,numeros,booleano);