const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "Batman"]
const rock =['coc','Tr']
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes[3][1]);

marvel =marvel_heroes.concat(dc_heroes)
console.log(marvel);

const all_newheroes=[...marvel_heroes,...dc_heroes]
console.log(all_newheroes);

const another_array = [1,2,3,[4,5,6], 7 ,[6,7,[4,5]]]
const real_array= another_array.flat(Infinity)
console.log(real_array);


console.log(Array .isArray("Ayush"))
console.log(Array.from("Ayush"));
console.log(Array.from({name:'Ayush',course:'MCA'}))  //Interesting



let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3));
