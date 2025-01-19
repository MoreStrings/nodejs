let array = [17, 12, 6, 27, 55, 1]

function findMax(a){
    var max = a[0]

    for(let i = 0; i < a.length; i++){
        if(max < a[i])
            max = a[i]
    }

    return max
}
console.log(findMax(array))