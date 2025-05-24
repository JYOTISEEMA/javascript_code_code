

const name="Isha";
const name1='Seema';

//String interpollation

// console.log(`my mane is ${name}`); // we can use String method inside {}

const name3= new String("JyotiseemaMahalik");
// console.log(name3);
// console.log(name3[0]);
// console.log(name3.__proto__);

//// string methods /////////////////


// console.log(name3.length);
// console.log(name3.charAt(3));
// console.log(name3.indexOf('y')); //1
// console.log(name3.indexOf('u')) //-1

const newString=name3.substring(1,3);
// console.log(newString);

const sliceString=name3.slice(-3,1);  //?
console.log(sliceString);


const name4="  Isha  seema gulu"
// console.log(name4);
// console.log(name4.trim());

const url="https://isha%20.com";
// console.log(url.replace('%20','-'));

//convert string to array
console.log(name4.split(' '));

