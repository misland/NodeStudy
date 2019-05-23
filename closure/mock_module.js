let counter = function () {
    let num = 0;
    function change(param) {
        num += param;
    }
    return {
        increase: function () {
            change(1);
        },
        decrease: function () {
            change(-1);
        },
        print: function () {
            console.log(num);
        }
    }
}();

counter.increase();
counter.decrease();
counter.print();