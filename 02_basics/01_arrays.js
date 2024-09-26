// Arrays

const myarr = [1,2,3,4,5]
console.log(myarr[0]);

const myarr2 = new Array(1,2,3,4)
console.log(myarr2[1]);

// Array methods

/*myarr.push(6,7)
console.log(myarr);
myarr.pop()
console.log(myarr);*/

//myarr.unshift(9)
//myarr.shift()
//console.log(myarr);


console.log(myarr.indexOf(5));
console.log(myarr.indexOf(19));

const newArr = myarr.join()
console.log(myarr);
console.log(typeof newArr);


// slice , splice

console.log("A",myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B" , myarr);


const myn2 = myarr.splice(1,3)
console.log("C" , myarr);
console.log(myn2);

//onst myn3= myarr.slice(-2)
//console.log(myn3);

myn2.splice(1,0,"5")  // First number is the starting index and the second number is the delete count
console.log(myn2);    // so we are not deleting anything then the delete count will be zero

const food =['pizza','cake' ,'Salad','Cookie']
food.splice(2,2)
console.log(food); 

/*The major difference between the slice and splice method is slice does not change the 
 the orignal array it return the copy of the array and the changes will be done in it.

splice method changes the orignal array  syntax (start,removecount,newitem) basically it is used to add or remove the elements from the array
*/
