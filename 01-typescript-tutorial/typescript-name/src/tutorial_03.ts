// Objects and Functions

//===== Objects =======

let car:{brand:string;year:number} = {brand:"toyota", year:2020};

car.brand="maruti";
car.year=1920;
// car.color = 'blue';

// Tieing arrays with object

let book= {title:'book', cost:20};
let pen= {title:'pen', cost:10};
let notebook= {title:'notebook'};

let items:{readonly title:string;cost?:number}[] = [book,pen,notebook];
// items[0].title = 'new book'


//===== Functions =======
//- any
//- config 
// type -> this option is perfect

function sayHi (name:string){
    console.log(`Hello there ${name.toUpperCase()}`)
}

sayHi('pranav');
// sayHi(3);

// function returns
/*
We know that typescripts infers the type automatically then why we need
to state the return type explicitly; it is because sometimes our logic
inside the function may return different type. So look carefully two
examples below.
*/

// This is without return type

function calculateDiscount(price:number){
    const hasDiscount = true;
    if(hasDiscount){
        return 'Discount Applied'
    }
    return price*0.9;
}

const finalPrice = calculateDiscount(200);

console.log(finalPrice);

// With return type -> will throw an error

function calculateDiscount1(price:number):number{
    const hasDiscount = true;
    if(hasDiscount){
        // return 'Discount Applied' //throw-error
        return price;
    }
    return price*0.36;
}

// Why we have to be very carefull for type any
// spread like wildfire

function addThree(number:any){
    let anotherNumber:number=3;
    return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;
someValue.myMethod();

// The myMethod() is not defined still typescript not yelling, 
// but at the run-time it is throwing an error so imagine it when working
// on large codebase

// console.log(result);


// ====== Optional and default parameters === 
// in the function from the typeScript


function calculatePrice(price:number, discount?:number):number{
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

// Default parameter
function calculateScore(
    initialScore:number,
    penaltyPoint:number=20)
    :number{
    return initialScore - penaltyPoint;
}

let scoreAfterPenalty = calculateScore(100,20);
let scoreBeforePenalty = calculateScore(100);

// Rest parameter [ in js ...]

function sum(message:string, ...numbers:number[]):string{
    const doubled = numbers.map((num) => num*2);
    console.log(doubled);

    let total = numbers.reduce( (previous, current)=>{
        return previous+current;
    },0)
    return `${message}${total}`
}

let resultSum = sum('The total is: ',1,2,3,4);
console.log(resultSum);