const btns = document.getElementsByClassName('boton');
const display = document.getElementById('Display');
var show = '';
var replace = false; 
var save = '';

function getValue(){
    let value = this.getAttribute('value');
    
    if(replace || value == 'MR' || value == 'M+' || value == 'C'){
        show = '';
        replace = false;
    }

    if(value == 'CE'){
        value = show.split('');
        value.pop();
        value = value.join('');
        show = '';
    }
    
    if(value == 'MS'){
        save = show;
        value = '';
    }

    (value == 'MR') ? value = save : '';
    value = (value == 'M+') ? eval(show+"+"+save) : value;
    (value == 'MC') ? save = '' : '';
    (value == 'C') ? value = '' : '';

    if(value == '='){
        replace = true;
        show.length > 0 ? Number.isInteger(Number(show[show.length-1])) ? display.value = eval(show) : replace=false : '';
        return 0;
    }
    
    if(value == '+/-'){
        value = eval(show*-1);
        show = '';
    }
    
    if(value == '.'){
        value = show.indexOf('.') == -1 ? '.' : '';
    }
    
    show += value;
    display.value = show;
}
Object.keys(btns).forEach(key => btns[key].addEventListener('click',getValue));