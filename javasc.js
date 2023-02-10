const p = document.querySelector('p'),
      butn = document.querySelectorAll('button')
;    


butn.forEach((btn)=>{
     
    let id = +btn.id;
    p.innerHTML="";
     btn.addEventListener('click' , function(){
        if(btn.id== "AC"){
            p.innerHTML = 0
        }else if(btn.id == '='){
            
        }
     })
})