const para = document.getElementById('para')
let result = 0;
function increment(){
    result++
    if(result<0){
        return result ===0;
    }
    para.innerHTML=result

    
}
function decrement(){
    result--
    if(result<0){
        return result;
    }
    para.innerHTML=result
}
function reset(){
    result=0
    para.innerHTML=result
}

