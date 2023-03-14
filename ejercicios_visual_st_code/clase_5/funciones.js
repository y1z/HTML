function funcionNormie (param1,param2){
    const result=param1+param2;
    console.log(result);
}
funcionNormie("hola","mundo");

const constfunction = (elem) =>  {
    console.log(typeof(elem));
}

constfunction(true);
constfunction(1);

const btnSuma = document.getElementById("suma");
const btnResta = document.getElementById("resta");
const n1 = 1598;
const n2 = 78615;

btnSuma.addEventListener('click', ()=>{
    console.log(n1+n2);
})

btnResta.addEventListener('click', ()=>{
    console.log(n1-n2);
})

const multiplication = (A,B) => {
    return A * B;
}

const division = (A,B) =>{
    return A / B;
}
const operarNumeros = (A,B,funcion) => {
    return funcion(A,B);
}

const multiResult = operarNumeros(n1,n2,multiplication);
const diviResult = operarNumeros(n1,n2,division);
console.log("* = ", multiResult, " / =", diviResult);

const ob1 = {id: 1, nombre: 'liquid snake', franquicia: 'metalgear'}
const ob2 = {id: 2, nombre: 'Samus', franquicia: 'metroid'}
const ob3 = {id: 3, nombre: 'vergil', franquicia: 'devilMayCry'}

const arrSimple = [ob2]
arrSimple.push(ob3);
console.log(arrSimple);
arrSimple.push(ob1);
const personaIdMenor = arrSimple.filter((obj)=>{
    return onrejectionhandled.id<=2;
})
console.log(personaIdMenor,arrSimple.length);

const arrResult = document.getElementById("array");

arrSimple.map((objetillo)=> {
    const p = document.createElement("p");
    p.innerText = `El sujeto '${objetillo.id}' llamado ${objetillo.edad}`;
    arrResult.append(p);
})

const lastelem = arrSimple.pop();
console.log(lastelem,arrSimple.length);
