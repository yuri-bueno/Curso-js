function f1(callback) {
    setTimeout(function() {
        console.log("f1")
        if (callback) callback();
    }, 100)

}

function f2(callback) {

    setTimeout(function() {
        console.log("f2")
        if (callback) callback();
    }, 10)

}

function f3(callback) {

    setTimeout(function() {
        console.log("f3")
        if (callback) callback();
    }, 10)

}
f1(function() {
    f2(function() {
        f3(function() {
            console.log("acabo")
        })
    })
})