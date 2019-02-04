const animation = ()=>{
    let data = [];
    const wh = screen.height;
    const items = document.getElementsByClassName('animated fade');
    
    Object.keys(items).forEach(key => {
        
        let pos = items[key].offsetTop + items[key].offsetHeight;
        console.log(pos, items[key]);
    
        let anima  = items[key].getAttribute('data-animation'); 
        data.push({
            position : pos,
            animation : anima,
            key: key
        });
    });

    
    window.addEventListener('scroll',()=>{
        let scroll = scrollY + wh;
        let result = data.filter(item => item.position < scroll);
        
        if(result.length > 0){
            
            Object.keys(result).forEach(key => {
                let index = data.findIndex( e  => e.key == result[key].key)
                if(index != undefined){
                    
                    items[result[key].key].classList.add(result[key].animation);
                    data.splice(index,1)
                }
            });

        }
        
    });
}