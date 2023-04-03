/* ::: Luhn algorithm card validation check main JS ::: */
'use strict';

const cardNumber = document.querySelector('#card-number');

cardNumber.addEventListener('keypress',(e)=>{
    if( e.keyCode === 13){

        getNumbers()
        checksumNumbers()
        getCheckNumberRight(checksumArray)
        finalValidation()

        let totalfirstR =  sumArray(firstOfR)
        let totalChecksum = sumArray(checksumArray)

        console.log('total sum first of right: '+ totalfirstR);
        console.log('checksum Array: ' + checksumArray);
        console.log('total sum checksumArray: ' + totalChecksum)

    }
 });
 

let firstOfR = [];

let secondOfR = [];

let secondOfRrest = [];

let checksumArray = [];

let addTheChecksum =[];


/* check the last number (as a string) of the validation number = 0 */
function finalValidation(){

let numberForValidation = sumArray(secondOfRrest) + sumArray(firstOfR) + sumArray(addTheChecksum);

/* log out the luhn algo result  in red */
console.log('%c Total Validation Number: ' + numberForValidation, 'color:red')

        let finalCheckSign = numberForValidation.toString();
        let getLastSign = finalCheckSign.slice(-1);

        if( getLastSign === '0'){

            console.log('%c Luhn algorithm is VALID! ','color:green');
        
        } else{

            console.log('%c Luhn algorithm is INVALID! ', 'color:red')
            window.alert('Number is invalid!');
        }

};


/** get the numbers with a value >= 10 and calculate the checksum*/
function checksumNumbers(){

for( let value of secondOfR ){

if( value >= 10 ){

    let overTen = value;
    let sum = 0;
    
    let xSplit = overTen.toString();

    console.log('overTen values: ' + overTen)
    
    for( let i = 0; i < xSplit.length; i++){

        sum = sum + parseFloat(xSplit[i]);

        checksumArray.push(sum);

    }
    } else if ( value < 10) {

    let underTen = value;
    secondOfRrest.push(underTen);

    console.log('underTens : ' + underTen)
    console.log('underTen ARRAY : ' + secondOfRrest)
    }
}};


function getNumbers(){

    /* get the input value */
    let n = cardNumber.value;

    /* get the inputValue string.length to iterate correctly */
    let cardL= n.length;

    /* iterate rewards over n.length(cardL) and log every second index */
    /* if cardNumber is even */
    if(cardL % 2 === 0){
        for( let i = n.length -1; i >= 0; i-- ){
    
            if(i%2 === 0){

            /* get the values of every 2nd index form String*/
            n.slice(i);

            /* (parse to number) and multiply by 2 */
            let idxEven = (n[i]) * 2;

            /* throw numbers to array */
            secondOfR.push(idxEven);

            /* => send first numbers from right to firstOfR-array :: */
            } else if(i%2 !== 0){

                n.slice(i);
                let firstEven = (n[i]) * 1;  /* multiply 1 = changes the string values into numbers */

                firstOfR.push(firstEven);
              
            }}
    }
    /* if cardNumber is odd */
            else if(cardL % 2 !== 0){ 
            for( let i = n.length -1; i >= 0  ; i-- ){
    
            if(i%2 !== 0){
    
            n.slice(i);

            let idxOdd = (n[i]) * 2;

            secondOfR.push(idxOdd);

            }
            /* => send first numbers from right to firstOfR-array :: */
            else if(i%2 === 0){

                n.slice(i);
                let firstOdd = (n[i]) * 1;    
                   
                firstOfR.push(parseInt(firstOdd));

            }}}

            console.log('seconds of right numbers ARRAY : ' + secondOfR);
            console.log('first of right numbers ARRAY : ' + firstOfR);
};  

/* ::: summerize function for all arrays ::: */
function sumArray(array){
    return array.reduce((a, b) => a + b, 0);
}

/* slice out the real checksums out of checksumArray */
function getCheckNumberRight(x){

        for( let i = 0; i < x.length ; i++ ){
    
            if(i % 2 !== 0){

            x.slice(i);

            let checkSum = (x[i]) * 1;

            addTheChecksum.push(checkSum)
            
            console.log('sliced valid numbers for the checksum: '+ addTheChecksum);}
}};

 