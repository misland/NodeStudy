function normal(arr) {
    var result = [];
    for (var item of arr) {
        result.push(function () {
            console.log(item);
        });
    }
    return result;
}

function showInfo(item) {
    console.log(item);
}
function special1(arr) {
    var result = [];
    for (var item of arr) {
        result.push((function (item) {
            return function () {
                showInfo(item);
            }
        })(item));
    }
    return result;
}

function special2(arr) {
    var result = [];
    for (let item of arr) {
        result.push(function () {
            console.log(item);
        });
    }
    return result;
}

var result;
// result = normal([{ name: 'a', age: 2 }, { name: 'b', age: 4 }]);

result = special1([{ name: 'a', age: 2 }, { name: 'b', age: 4 }]);

// result = special2([{ name: 'a', age: 2 }, { name: 'b', age: 4 }]);
for (let item of result) {
    item();
}

