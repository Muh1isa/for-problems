// 1
function taskOne(k, n) {
    for (let i = 0; i < n; i++) {
        console.log(k);
    }
}
// taskOne()

// 2
function taskTwo(a, b) {
    if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);            
        }
    } else {
        console.log(false);
    }
}
// taskTwo()

// 3
function taskThree(a, b) {
    if (a > b) {
        for (let i = a-1; i > b; i--) {
            console.log(i);
        }
    } else {
        console.log(false);
    }
}
// taskThree(12, 3)


// 4 
function taskFour(price) {
    for (let i = 1; i <= 5; i++) {
        price = 10000 * i
        console.log(price);
    }
}
// taskFour()


// 7 
function task7(a, b) {
    let n = 0
    for (let i = a; i <= b; i++) {
        n += i 
        console.log(n);        
    }
}
// task7(2, 5)


// 8
function task8(a, b) {
    let n = 1
    for (let i = a; i <= b; i++) {
        n *= i 
        console.log(n);        
    }
}
// task8(2, 5)


// 9 
function task9(a, b) {
    let n = 0
    for (let i = a; i <= b; i++) {
        n = i ** 2
        console.log(n); // oxiri tugallanmadi...
    }
}
// task9(1, 3)

// 11, 12
function tasks(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i + ' soni juft');
        } else {
            console.log(i + ' soni toq');
        }       
    }
}
// tasks(19)

// 14
function task14(n) {
    for (let i = 1; i < n; i++) {
        if (i % 2 == 0) {
            console.log(i ** 2);
        } else {
            console.log(i ** 2);
        }     
    }
}
// task14(10)


// 15 
function task15(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);     
    }
}
// task15(18)


// 16 
function task16(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            // console.log(i); 
        } else {
            console.log(i);
        }
    }
}
// task16(24)



// 17
function task8(n) {
    let z = 1
    for (let i = 1; i <= n; i++) {
        z *= i 
        console.log(z);        
    }
}
// task8(4)