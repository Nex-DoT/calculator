const p = document.querySelector('p'),
      butn = document.querySelectorAll('button')
;    


butn.forEach((btn)=>{
     
    let id = btn.id;
    p.innerHTML="";
     btn.addEventListener('click' , function(){
        if(btn.id=== "AC"){
            p.innerHTML = "";
        }else if(btn.id === '='){
            p.innerHTML = eval(p.innerHTML);
        }else if(btn.id ==="DE"){
            p.innerHTML = p.innerHTML.slice(0,-1);
        }else{
            p.innerHTML += id ;
        }
     })
})