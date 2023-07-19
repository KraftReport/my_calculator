function nhape(value){
     var box = document.getElementById("numbers");
     var boxValue = box.value;
     if(value=="c"){
        box.value=0;
     }else{
        box.value= boxValue== 0 ? value : boxValue + value;
     }
}



    function calculate(){
        var inputGet = document.getElementById('numbers');
        var inputValue = inputGet.value;
        var inputSpilt = inputValue.split("");
        var temp = "";
        var sign = "";
        var firstNo = 0;
        var result = 0;

        for (let i=0; i<inputSpilt.length; i++){
            switch (inputSpilt[i])
            {
                case "+" : 
                if(temp){
                    firstNo = parseInt(temp);
                    temp ="";
                    if(sign){
                        result = operate(result,firstNo,sign);
                    }else{
                        result =firstNo;
                    }
                } sign = "+";
                  break; 

                case "-" : 
                if(temp){
                    firstNo = parseInt(temp);
                    temp ="";
                    if(sign){
                        result = operate(result,firstNo,sign);
                    }else{
                        result =firstNo;
                    }
                } sign = "-";
                  break;

                case "*" : 
                if(temp){
                    firstNo = parseInt(temp);
                    temp ="";
                    if(sign){
                        result = operate(result,firstNo,sign);
                    }else{
                        result =firstNo;
                    }
                } sign = "*";
                  break;

                case "/" : 
                if(temp){
                    firstNo = parseInt(temp);
                    temp ="";
                    if(sign){
                        result = operate(result,firstNo,sign);
                    }else{
                        result =firstNo;
                    }
                }sign = "/";
                  break; 

                default : temp = temp + inputSpilt[i];
                break;
            }
        }
        if(temp){
            firstNo = parseInt(temp);
            temp = "";
            if(sign){
                result = operate(result,firstNo,sign);
            }else {
                result = firstNo;
            }
        }
        inputGet.value = result;
    }






function operate(firstNumber,secNumber,operator){
    let result;
    switch(operator)
    {
        case "+": result = firstNumber + secNumber ;
        break;

        case "-" : result = firstNumber - secNumber;
        break;

        case "*" :result = firstNumber * secNumber;
        break;

        case "/" : result = firstNumber / secNumber;
        break;

        default : 
        break;
    }
    return result;
}