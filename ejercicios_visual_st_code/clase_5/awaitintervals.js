setTimeout(()=>{console.log("1 sec ha pasado")},1000);
setTimeout(()=>{console.log("4 sec ha pasado")},4000);
setTimeout(()=>{console.log("6 sec ha pasado")},6000);

const RutinaUnSeg = setInterval(()=>{console.log("hola 1 segundo")},1000);

setTimeout(()=>{
 clearInterval(RutinaUnSeg);
}, 5000);
