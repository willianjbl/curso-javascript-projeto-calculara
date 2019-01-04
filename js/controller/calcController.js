class calcController{
    constructor(){
        this._displayCalc = document.querySelector('#display');
        this.inti();
    }

    inti(){

    }

    //GETS AND SETTERS
    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(value){
        return this._displayCalc.innerHTML = value;
    }
}