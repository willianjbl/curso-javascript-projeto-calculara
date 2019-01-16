class calcController{
    constructor(){
        this._lastNumber = '';
        this._lastOperator = '';

        this._operation = [];
        this._displayCalc = document.querySelector('#display');
        this.inti();
    }

    inti(){
        this.initButtonEvents();

        this.setLastNumberOnDisplay();
    }

    //DISPLAYS ERROR ON SCREEN
    setError(){
        this.displayCalc = "ERROR";
    }

    //SETTING UP THE CLICKABLE BUTTONS
    initButtonEvents(){
        let buttons = document.querySelectorAll('.btn');

        buttons.forEach(btn=>{
            this.addEventListenerAll(btn, 'click drag', e=>{
                let btnText = btn.id;
                this.execBtn(btnText);
            });
        });
    }

    addEventListenerAll(el, ev, fn){
        ev.split(" ").forEach(event=>{
            el.addEventListener(event, fn);
        });
    }

    execBtn(value){
        switch (value) {
            case "c":
                this.clear();
                break;
            case "ce":
                this.clearEntry();
                break;
            case "backspace":
                this.backspace();
                break;
            case "negativoPositivo":
                
                break;
            case "porcento":
                
                break;
            case "raiz":
                
                break;
            case "quadrado":
                
                break;
            case "inverso":
                
                break;
            case "divisao":
                this.addOperation("/");
                break;
            case "multiplicacao":
                this.addOperation("*");
                break;
            case "subtracao":
                this.addOperation("-");
                break;
            case "soma":
                this.addOperation("+");
                break;
            case "ponto":
                
                break;
            case "igual":
                this.calc();
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                this.addOperation(parseInt(value));
                break;
        
            default:
                this.setError();
                break;
        }
    }
    //END OF BUTTONS

    //CLEARS THE CALCULATOR
    clear(){
        this._operation = [];
        this.setLastNumberOnDisplay();
    }

    //CLEARS LAST VALUE
    clearEntry(){
        this._operation.pop();
        this.setLastNumberOnDisplay();
    }

    //ERASE INPUT ON DISPLAY
    backspace(){
        
        if(this.getLastItem(false)){
            let display = this.getLastItem(false).toString().split("");

            if(display.length > 1){
                display.pop();
                this.setLastOperation(parseInt(display.join("")));
            } else if (display.length == 1) {
                display = 0;
                this.setLastOperation(display);
            }
    
            this.setLastNumberOnDisplay();
        }
        
    }

    //VALIDATES IF LAST VALUE WAS AN OPERATOR
    isOperator(value){
        return (["+","-","*","/","%"].indexOf(value) > -1);
    }

    //PUSHES VALUE INTO OPERATION
    pushOperation(value){
        this._operation.push(value);

        if(this._operation.length > 3){
            this.calc();
        }
    }

    //SETS A VALUE TO THE LAST OPERATION ITEM
    setLastOperation(value){
        this._operation[this._operation.length-1] = value;
    }

    //ADD VALUES TO THE OPERATION
    addOperation(value){
        if(isNaN(this.getLastOperation())){
            if(isNaN(value)){
                this.setLastOperation(value);
            } else {
                this.pushOperation(value);
                this.setLastNumberOnDisplay();
            }
        } else if(this.isOperator(value)){
            this.pushOperation(value);
        } else {
            let newValue = this.getLastOperation().toString()+value.toString();
            this.setLastOperation(parseInt(newValue));
            this.setLastNumberOnDisplay();
        }
        console.log(this._operation);
    }

    //RETURNS LAST VALUE OF THE OPERATION
    getLastOperation(){
        return this._operation[this._operation.length-1];
    }

    //CALCULATES THE OPERATION
    calc(){
        let result = eval(this._operation.join(""));

        if(this._operation.length > 3){
            let last = this._operation.pop();
            this._operation = [result, last];
        } else if(this._operation.length == 3){
            result = eval(this._operation.join(""));
            this._operation = [result];
        }

        if(this._operation.length < 3){
            
        }

        this.setLastNumberOnDisplay();
    }

    //RETURNS LAST ITEM FROM OPERATION
    getLastItem(isOperator = true){
        let last;

        for(let i = this._operation.length-1;i>=0;i--){
            if(this.isOperator(this._operation[i]) == isOperator){
                last = this._operation[i];
                break;
            }
        }

        return last;
    }

    //SHOW NUMBER ON DISPLAY
    setLastNumberOnDisplay(){
        let last = this.getLastItem(false);
        if(!last) last = "0";

        this.displayCalc = last;
    }

    //GETTERS AND SETTERS
    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(value){
        return this._displayCalc.innerHTML = value;
    }
}