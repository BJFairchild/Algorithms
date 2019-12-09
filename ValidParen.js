var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    
    let stack = []
    let matches = {
        "}": "{",
        "]": "[",
        ")": "(",
    };

    for (let i = 0; i < s.length; i++) {
           if (typeof stack[stack.length - 1] != 'undefined' && 
               stack[stack.length - 1] == matches[s.charAt(i)]) {
               stack.pop()
           } else {
             stack.push(s.charAt(i))
           }
   
    }
    return stack.length == 0;
};