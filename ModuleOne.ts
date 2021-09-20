
/*  FUNCIONES ARRAY  */
let paises: string[]= ['Colombia', 'Peru','España','Japon'];
paises.push('Argentina');
let ciudades: [string,string,string,string] = ['Bogota','lima','barcelona','tokio'];
ciudades.pop();

let datos: [string,string,number,string,number] =['Carlos','Alvis',26,'Bogota',2600000];


/*  FUNCIONES STRING */

let cadenaConcat :string;

function concatenar (cadena1 : string, cadena2: string): string{

    cadenaConcat = cadena1 + ' '+ cadena2; 

    return cadenaConcat;
}


let cont : number=0;

function contarVocales(palabra: string):string{

    let minuscual = palabra.toLowerCase();

    for (let index = 0; index < minuscual.length; index++) {
        if(minuscual[index] == 'a' || minuscual[index] == 'e' || minuscual[index] == 'i' || minuscual[index] == 'o' || minuscual[index] == 'u'){
            cont++;
        }
    }

    return 'La palabra ingresada tiene '+ cont + ' vocales';
}

function ConvertirMayusculas(cadena: string):string{

    return cadena.toUpperCase();
}


/* VARIABLES any */

let datoVariado:any = '1';
datoVariado = parseInt(datoVariado);

let datoVariado2:any = 1;
datoVariado2 = datoVariado2.toString();

let datoVariad3: any =1;
datoVariad3 = Boolean(datoVariad3);


export{paises,ciudades, datos,concatenar,contarVocales,ConvertirMayusculas,datoVariado,datoVariado2,datoVariad3}