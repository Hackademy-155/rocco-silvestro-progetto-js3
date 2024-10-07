// PrimoEsercizio

// function presentati(nome =`rocco` , cognome =`silvestro` , età=`29` , regione =`sicilia`) {
//     console.log(`ciao  sono ${nome} ${cognome} ho ${età} anni e vengo dalla ${regione}`);
    
// }

// presentati()


// SecondoEsercizio

// function tabellina(num) {
//     for(let i = 0; i <= 10; i++){
//         console.log(i * num);
        
//     }
    
// }



// tabellina(3)
// tabellina(2)
// tabellina(1)




// Esercizio3

// function stampaFizzBuzz(N) {
//     for (let i = 1; i <= N; i++) {
//         if (i % 15 === 0) {
//             console.log('fizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// stampaFizzBuzz(50)
 

// Esercizio4


// function contaCifre(numero) {
    
//     if (Number.isInteger(numero) && numero >= 0 && numero <= 9999) {
        
//         const cifraCount = numero.toString().length;
        

//         if (cifraCount === 1) {
//             console.log(`${numero} è formato da 1 cifra`);
//         } else {
//             console.log(`${numero} è formato da ${cifraCount} cifre`);
//         }
//     } else {
//         console.log("cifra non valida (0-9999)");
//     }
// }


// contaCifre(9);    
// contaCifre(99);   
// contaCifre(999);  
// contaCifre(99990);


// QuintoEsercizio
// const array = [23, 5, true, null, 'ciao', [78, 'sedia', 4, false, [8, 76, ' ', [5, 1], 4], 3, true]];


// console.log(array[5][4][3][1]);