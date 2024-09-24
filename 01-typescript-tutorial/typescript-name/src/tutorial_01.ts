// Union -> Either this and another type
// This will allow us to setup multiple types for a variable
// pipe will decide either this or either that

let tax:number | string = 10;
tax = 100;
tax = '$10';

//literal values

let requestStatus: 'pending' | 'success' | 'error' = "pending";
requestStatus = 'success'
requestStatus = 'error'
// requestStatus = 'random


// type -> any  this can be anything function, string, boolean
// becareful whenever you introduce any in the application bcz
// it can spread like a wildfire so be careful

let notSure:any = 4;
notSure = 'maybe a string instead';
notSure = false;

//practical application type annotations
const books = ['1984','Brave New World', 'Fahrenheit 451']

let foundBook:string|undefined;

for (let book of books){
    if(book==='1983'){
        foundBook = book;
        break;
    }
}

console.log(foundBook);