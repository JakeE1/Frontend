/*function f1() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };

    alert(summingSallarys(salaries));

}*/
/*
function summingSallarys(salaries) {
    let conclusionSum = 1;
    for (let key in salaries) {
        conclusionSum += salaries[key];
    }

    return conclusionSum;
}
*/


function pow(x, y) {
    let result = 1;
    for (let index = 0; index < y; index++) {
        result *= x;
    }
    return result;
}

describe("pow", function () {
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} to power 3 = ${expected}`, function () {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let index = 0; index < 5; index++) {
        makeTest(index);
    }

});


/*
function f1() {
    let objFirst = {};
    objFirst.name = "John";
    objFirst.surname = "Smith";
    objFirst.name = "Pete";

    let objSecond = {}


    alert(obj.name);
}

 let objFirst = {};
    objFirst.name = "John";
    objFirst.surname = "Smith";
    objFirst.name = "Pete";

    let objSecond = {}


let isEmpty (obj) => {
    for (let key in obj) {
        return true;
    }

    return false;
}


function pow(x, y) {
    let result = 1;
    for (let index = 0; index < y; index++) {
        result *= x;
    }
    return result;
}

describe("pow", function () {
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} to power 3 = ${expected}`, function () {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let index = 0; index < 5; index++) {
        makeTest(index);
    }

    describe("is object ?", isEmpty() {
            function makeTest() {
                let expected = true ;
                it(`is object = ${expected}`, isEmpty() {
                   assert.isTrue(isEmpty(objSecond));
                   });
            }
        });

});


*/