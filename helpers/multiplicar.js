const fs = require('fs');
colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
  
    try {
        

    let salida = '';
    let consola = '';    

    for ( let i=1; i<=hasta; i++){
        
        salida += `${base} x ${i} = ${base*i}\n`;

    }   //consola +=`${base} x ${i} = ${base*i}\n`.red;
    if (listar ){
        var colors = require('colors');
            console.log('==========================='.green);
            console.log(' tabla del:'.trap, base);
            console.log('==========================='.green);
            console.log(salida);
        }
    
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida,); 
    
        return`tabla-${base}.txt`.rainbow;

}catch (err) {
    throw err;
}


} 



module.exports = {
    crearArchivo
}




