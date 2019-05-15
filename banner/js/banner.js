var interval;

function banner(conf){
    setBanner(conf.items);
    
    interval = setInterval(function(){
        changeOrder();
    },conf.time)
}

function setBanner(items){
    var banner = document.getElementById('banner');
    var myClass,classInfo;
    var element = document.createElement('section');
    
    element.classList.add('layer');
    banner.insertAdjacentElement('afterbegin',element);

    Object.keys(items).forEach(function(key,i){
        myClass = 'right';
        classInfo = '';
        var htmlHeader = '', htmlContent = '';
        if(i == 0){
            myClass = 'active';
            classInfo = 'active';
        }

        if(!items[key].hasOwnProperty('title_card') && !items[key].hasOwnProperty('content_card')){
            classInfo += " hidden";
        }
        
        if(items[key].hasOwnProperty('title_card')){
            htmlHeader = `
                <header>
                    <h3>${items[key].title_card}</h3>
                </header>    
            `;
        }

        if(items[key].hasOwnProperty('content_card')){
            htmlContent = `
                <i class='divider'></i>
                <main><p>${items[key].content_card} </p></main>
            `;
        }
            

        banner.innerHTML += `
            <section class="item-banner ${myClass}" style="background-image:url(${items[key].image});"></section>
            <section class="info-item ${classInfo}">
                ${htmlHeader}
                ${htmlContent}
            </section>
            `;
    });
}

function changeOrder(){
    var items = document.getElementsByClassName('item-banner');
    var index = parseInt(findActive(items));

    var cont = index+1;
    
    if(items[cont] == undefined){
        cont = 0;
    }

    items[index].classList.remove('active');
    items[index].classList.add('left');

    items[cont].classList.add('active');
    items[cont].classList.remove('right');

    showInfobanner(cont);
    items[cont].addEventListener('transitionend',function(){
        items[index].classList.remove('left');
        items[index].classList.add('right');
    });

}

function showInfobanner(index){
    var items = document.getElementsByClassName('info-item');
    var found = findActive(items);

    
    if(found != undefined && index != found){
        items[found].classList.remove('active');
    }
    
    items[index].classList.add('active');
    
}

function findActive(items){
    return Object.keys(items).find(function(key){
        return Object.keys(items[key].classList).find(function(i){
            return items[key].classList[i] == 'active';
        });
    });
}