// console.log("hola mundo")

// const string1 = "aracely";
// const string2 = "arambula";
// const normie = "mi nombre es " + string1 + " y mi apellido es " + string2;

// console.log(normie);
// const cool = `mi nombre es ${string1} y mi apellido es ${string2}`;

// console.log(cool);

// const string = "lalalal"
// const numero = 25
// const numerod = 25.503
// const char= 'c'
// const arr = ["uno, dos, tres"]
// const obj = {propiedad: "soyunvalor"}

// console.log(string, typeof(string));
// console.log(numero, typeof(numero));
// console.log(numerod, typeof(numerod));
// console.log(char, typeof(char));
// console.log(arr, typeof(arr));
// console.log(obj, typeof(obj));

const objetote = {
    escuela: "amerike",
    direccion: "MonteMorelos",
    color: "naranjoso",
    alumnos:[
        {
            nombre: "Francisco Gerardo",
            hobies: ["ver peliculas"]
        },
        {
            nombre: "ruben",
            hobies: ["ver peliculas"]
        },
        {
            nombre: "cristina",
            hobies: ["ver peliculas"]
        },
        {
            nombre: "ivan",
            hobies: ["ver peliculas"]
        },
    ],
    profesores:[
        {
            nombre: "profe chino",
            materias: ["leng interp",
            "informatica grafica"
        ],
        mascota: {
            nombre: "mika",
            raza: "pitbull"
        }
        }
    ]
}

// console.log(objetote.profesores[0].mascota.nombre);
// console.log(objetote.alumnos[2]);

const miInputName = document.getElementById("Nombre");


const btn = document.getElementById ("btnEjcutar");

const bold = document.getElementsByTagName("resultado");

btn.addEventListener("click",mostrarEnConsola);

function mostrarEnConsola(){
    console.log( miInputName.value);
    const paragraph = document.createElement("p");
    paragraph.innerHTML = miInputName.value;
    bold.append(paragraph);
}