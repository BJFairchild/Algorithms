var reverse = function(x) {
    const negative = x < 0 && "-";
    const array = Array.from(x.toString()).map(Number);
    const num = parseInt(array.reverse().join(""));
    if (num > 2147483647) return 0;
  
    return parseInt(negative + num);
  };