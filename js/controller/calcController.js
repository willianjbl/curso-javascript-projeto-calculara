class calcController{
    constructor(){
        this._displayCalc = document.querySelector('#display');
        this.inti();
    }

    inti(){
        this.initButtonEvents();
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
                
                break;
            case "ce":
                
                break;
            case "backspace":
                
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
                
                break;
            case "multiplicacao":
                
                break;
            case "subtracao":
                
                break;
            case "soma":
                
                break;
            case "ponto":
                
                break;
            case "igual":
                
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
                
                break;
        
            default:
                break;
        }
    }
    //END OF BUTTONS

    //GETS AND SETTERS
    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(value){
        return this._displayCalc.innerHTML = value;
    }
}