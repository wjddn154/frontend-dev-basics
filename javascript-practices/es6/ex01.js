/**
 * let : Block scope의 변수
 */

// let의 블록 범위
try {
    if(true) {
        var i = 10;
        let j = 20;
    }

    console.log(i, j);

} catch(e) {
    console.log('error: ' + e);

}

// cf: var 함수 범위
try {
    let f = function() {
        var m = 20;
    }

    f();
    console.log(m);
} catch(e) {
    console.log('error: ' + e);
}

