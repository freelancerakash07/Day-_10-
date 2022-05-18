









/ Create an email pattern /

let etext = 'mdakashshikder958@gmail.com'

let epattern = /^[a-z0-9/.-]*@[a-z]{2,5}\.[a-z]{2,7}$/


console.log(epattern.test(etext));










/Create a  username pattern/


let utext = 'mdakashshikder958';
let upttern = /^[^A-Z][a-z0-9_]*$/

console.log(upttern.test(utext));











/  Create a Bangladeshi phone number pattern/

let ntext = '01819522713';
let npttern = /^(01|8801|\+8801)[0-9]{9}$/

console.log(npttern.test(ntext));










/Create a password pattern/

let ptext = 'mdMakash!@#$%^&*'

let ppttern = /[A-z]{1,}[a-z0-9!@#$%^&*-=+]*$/i


console.log(ppttern.test(ptext));









/  Create a zipcode pattern/


let ztext = 1524;
let zpttern = /^[0-9]{4}$/

console.log(zpttern.test(ztext));