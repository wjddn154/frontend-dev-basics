/*
변수와 데이터 타입
[기본타입(primitive type)]
undefined
number
String
boolean

[객체1] - object type
1. new 생성자함수() 사용해서 생성
        Number()  -> object type
        Boolean() -> object type
        String()  -> object type
        Object()  -> object type
        Array()   -> object type

2. null
3. {} (객체 리터럴, JSON) 
4. [] (배열 리터럴)


[객체2] - fucntion type
1. new Function(...) 생성
2. var f = function(){} 함수 리터럴1을 사용해서 생성
3. function f() {} 함수 리터럴1을 사용해서 생성
*/

/*
<자바스크립트의 객체를 구분하는 방법>
1. 내장 객체(Built-In, Native, Engine)
    자바스크립트 Engine안에 미리 내장되어 있는 객체
    Number, Boolean, Date, RegExp, .... : 생성자 함수
    parseInt, setTimeout, ...           : 일반 함수

2. 호스트 객체
    자바스크립트 Engine이 embeded된 환경(host)의 객체(자바스크립트 접근 가능)
    호스트 환경이 브라우저라면: document, location, XmlHttpRequest, window, ...
    호스트 환경이 노드(Node.js)라면 : os, http, fs, path

3. 사용자 객체
    자바스크립트 Engine이 실행되면서 실행되는 객체들....
*/



console.log("============= 원시 타입(Primitive Type) ================");
var u = undefined;  //var u; 와 동일, 선언과 정의의 구분이 없다.
var i = 10;
var s = "Hello World";
var b = true;

console.log("u : " + typeof(u));
console.log("i : " + typeof(i));
console.log("s : " + typeof(s));
console.log("b : " + typeof(b));

console.log("====== [객체1] (object type) ================");
var i2 = new Number(1);
var b2 = new Boolean(false);
var s2 = new String("Hello World");
var o = new Object();
var a = new Array();

var n = null;
var o2 = {};
var a2 = [];

console.log("i2:"  + typeof(i2));
console.log("b2:"  + typeof(b2));
console.log("b2:"  + typeof(b2));
console.log("s2:"  + typeof(s2));
console.log("o:"  + typeof(o));
console.log("a:"  + typeof(a));

console.log("n:"  + typeof(n));
console.log("o2:"  + typeof(o2));
console.log("a2:"  + typeof(a2));


console.log("====== [객체2] (function type) ================");
var f = new Function("a", "b", "return a + b");
var f2 = function(z, x) {
    return z + x;
}


console.log("f:" + typeof(f));
console.log("f2:" + typeof(f2));

console.log("====== 원신타입과 원시 타입을 Wrapper 객체는 구분없이 사용할 수 있다. ================");
console.log(i+i2);
console.log(s+s2);

// 원시 타입에 메소드가 호출될 때,
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다.(유사객체)
console.log("====== 원시타입도 메소드 호출이 가능한다. =================");
console.log(b.valueOf());
console.log(b2.valueOf());

