// Arrays in typescript

let prices:number[] = [100, 75, 42]
// prices.push('pranav');

let fruit:string[] = ['apple', 'oranges', 'guava'];

// be careful with empty squarebrackets. It create an empty array.

let randomValues:[] = [];

// creating empty values array -> but it's any like a wildfire
// let emptyValues = [];

// So if we want to create an empty array, it were string or boolean
// or number just specify it.
let emptyNumber:number[] = [];
emptyNumber.push(1,2,3);

// empty srting array
let emptyString:string[]=[];
emptyString.push('pranav', 'purankar', 'noogler');

// Type infering types, so know if you look below type script is infering
// based on passed data if you remove number it will only be string
// so be careful. It's not gonna stop adding particular array

let names = ['peter', 'suzan', 1, 2];

// explicitly stating array for the one or the other type

let array:(string | boolean)[] = ['apple', true, 'orange'];
