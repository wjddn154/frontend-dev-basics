console.log("==global================");
global.name = '둘리';
console.log(name, global.name);

var email = 'dooly@gmail.com';
console.log(email, global.email);

console.log("==function 객체 메소드 apply============");
var f1 = function() {
    
}