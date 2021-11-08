/**
 *  Array 확장(prototype 기반의 확장) : List 메소드 추가
 * 
 */

//insert 메서드
Array.prototype.insert = function(index, value) {
    if(value instanceof Array) {
        // for(var i=0; i<value.length; i++) {
        //     this.splice(index++, 0, value[i]);
        // }
        
        var _this = this;
        value.forEach(function(e) {
           _this.splice(index++, 0, e);
        });

        // var _this = this;
        // value.forEach(function(e) {
        //     _this.splice(index++, 0, e);
        // });

        // Array.prototype.forEach(this, function() {
        //     this.splice(index++, 0, e);
        // });

        // value.forEach(function(e) {
        //     this.splice(index++, 0, e);
        // }.bind(this));

    } else {
        this.splice(index, 0, value);
    }
}

//remove 메서드
Array.prototype.remove = function(index) {
    this.splice(index, 1);
}



//List로 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

console.log("=============================");
a.insert(2, ['a', 'b', 'c']);    //기대 : [1, 2, 'a', 'b', 'c', 3]
console.log(a);                  //결과 : [1, 2, ['a', 'b', 'c'], 3]

var f= function(param) {
    console.log(this.name + " : " + param);
}

f();
var o = {name: "kickscar"};
f.call(o, "kickscar@gmail.com");

f.apply(o);

