// Challenge

// Create a new array of names
// 

const names:string[] = ['pranav', 'shreyash', 'sunil', 'archana'];

function isNameInList(name:string):boolean{
    return names.includes(name)
}

// let nameToCheck = 'jane';
let nameToCheck = 'pranav';
if(isNameInList(nameToCheck)){
    console.log(`${nameToCheck} is in the list.`);
}else{
    console.log(`${nameToCheck} is not in the list.`);
}