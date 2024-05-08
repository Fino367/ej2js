n = prompt("ingresar n:")
let suma= 0;
for(let i=1; i<=n;i++){
    suma+= 1/(i**2);
}
let piaprox= Math.sqrt(6*suma);
document.write("valor estima de pi:"+piaprox+"<br>")
document.write("valor real de pi:"+Math.PI)