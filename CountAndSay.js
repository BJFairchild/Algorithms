var countAndSay = function(n) {
    if (n === 0) return ""
    if (n === 1) return "1"
    let previous = countAndSay(n-1);
    let count = 0
    let newStr = "";
    let currentType = previous[0]
    for (let i = 0; i < previous.length; i++){
        if (previous[i] !== currentType){
            newStr = newStr + count + currentType
            count = 1
            currentType = previous[i]
        } else {
            count++
        }
    }
    newStr = newStr + count + currentType
    return newStr
};