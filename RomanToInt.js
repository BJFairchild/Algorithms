var romanToInt = function(s) {
    roman={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    
    number=0
    for(i=s.length-1;i>=0;i--){
        if(roman[s[i]]>roman[s[i-1]]){
            number+=roman[s[i]]-roman[s[i-1]]
            i--
        }
        else
        {
            number+=roman[s[i]]
        }
    }
    return number
    
};