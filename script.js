const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
let res;
let operation;
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains("1")){
            result.textContent = `${result.textContent}1`
        }else if (button.classList.contains("2")) {
            result.textContent = `${result.textContent}2`
        }else if (button.classList.contains("3")) {
            result.textContent = `${result.textContent}3`
        }else if (button.classList.contains("4")) {
            result.textContent = `${result.textContent}4`
        }else if (button.classList.contains("5")) {
            result.textContent = `${result.textContent}5`
        }else if (button.classList.contains("6")) {
            result.textContent = `${result.textContent}6`
        }else if (button.classList.contains("7")) {
            result.textContent = `${result.textContent}7`
        }else if (button.classList.contains("8")) {
            result.textContent = `${result.textContent}8`
        }else if (button.classList.contains("9")) {
            result.textContent = `${result.textContent}9`
        }else if (button.classList.contains("0")) {
            result.textContent = `${result.textContent}0`
        }else if (button.classList.contains("dot")) {
            if (result.textContent.includes(".")) {
                return;
            }
            result.textContent = `${result.textContent}.`
        }else if (button.classList.contains("x")) {
            result.textContent = result.textContent.slice(0,-1);
        }else if (button.classList.contains("ac")) {
            result.textContent = ""
            res=0;
            operation = null;
        }else if (button.classList.contains("+")) {
            calcOp("+");
        }else if (button.classList.contains("-")) {
            calcOp("-");
        }else if (button.classList.contains("*")) {
            calcOp("*");
        }else if (button.classList.contains("/")) {
            calcOp("/");
        }else if (button.classList.contains("%")) {
            calcOp("%");
        }else if (button.classList.contains("=")) {
            calcOp("=");
        }
    })
}
    
)
function calcOp(op){
    if (operation==null) {
        operation=op;
        res = Number(result.textContent);
        result.textContent="";
    }else{
        switch (operation) {
            case "+":
                res+=Number(result.textContent);
                break;
            case "-":
                res-=Number(result.textContent);
                break;
            case "*":
                res*=Number(result.textContent);
                break;
            case "/":
                if (result.textContent==0) {
                    result.textContent="ERROR !"
                    operation=null;
                    res=0;
                }else{
                    res/=Number(result.textContent);
                }
                break;
            case "%":
                if (result.textContent==0) {
                    result.textContent="ERROR !"
                    operation=null;
                    res=0;
                }else{
                    res=res%Number(result.textContent);
                }
                break;
                
            default:
                break;
            
        }
        if(op==="="){
            result.textContent = `${res}`;
            res=0;
            operation=null;
        }else{
            operation=op;
            result.textContent=""
        }
    }
}