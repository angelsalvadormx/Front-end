// Default configuration
var config_menu = {
    id_nav : '',
    tag_option_menu: ''
}

window.onload = function(){
    load();
}

function load(){
    // Get element that you chose on the configuratio
    var nav = document.getElementById(config_menu.id_nav);
    if(nav != undefined){
        // add the class 'hidden_menu' if the element exists
        nav.classList.add('hidden_menu');
    }

    // Add event click with the function 'open' to element 'btn-menu'
    document.getElementById('btn-menu').addEventListener('click',open);

    // Add event click with the function 'close' to element 'ui-mask'
    document.getElementById('ui-mask').addEventListener('click',close);

    // get all the menu options and add a event click with the function close 
    var opc_menu = document.getElementById(config_menu.id_nav).getElementsByTagName(config_menu.tag_option_menu);
    
    Object.keys(opc_menu).forEach(function(key){
        opc_menu[key].addEventListener('click',close);
    })
}

/**
 * This function add the class 'show_menu' to element that you chose on the configuration, also 
 * change property 'overflow' on style of the element 'body', finally add the class 'show_mask' to 
 * element 'ui-mask'
 * */
function open(){
    document.getElementById(config_menu.id_nav).classList.add('show_menu');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementById('ui-mask').classList.add('show_mask');
}

/**
 * In this function i change the propery overflow on style of the body, remove the class 'show_mask' from element 'show_mask',
 * also remove the class 'show_menu' from element 'show_menu'
 */
function close(){
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
    
    var show_mask = document.getElementsByClassName('show_mask')[0];
    var show_menu = document.getElementsByClassName('show_menu')[0];

    if(show_mask != undefined){
        show_mask.classList.remove('show_mask');
    }
    if(show_menu != undefined){
        show_menu.classList.remove('show_menu');
    }
}
