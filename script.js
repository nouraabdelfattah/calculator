let show =document.getElementById("show-screen")
let btn=document.getElementById("btn")
var value={prevVal:null,newVal:null ,total:null}
let operator=''
let op=document.getElementById("op")

let isLastBtnNumber=false
function takeOpertor(num){
    console.log(num)
    operator=num
    console.log(value)
    isLastBtnNumber=false
    op.innerHTML=num
    }

function takeValue(num){
   if(isLastBtnNumber){
    var result;
if(value.newVal){
    result=value.newVal+""+num
value.newVal=result
show.innerHTML=result
}else{
    result=value.prevVal+""+num
    value.prevVal=result
    show.innerHTML=result
}
   }
else{
    show.innerHTML=num
    if(!value.prevVal){
        value.prevVal=num
        
    }else{
        value.newVal=num
    }
    console.log(num)
    isLastBtnNumber=true
}

}

    function calculate(){
        console.log(value.newVal)
        if(!value.newVal ){
            return 
        }
        if(value.newVal&&value.prevVal&&operator){
if(operator==="+"){
    console.log(value.prevVal + value.newVal)
    var total=Number(value.prevVal) +Number(value.newVal) 
    show.innerHTML="Result"+" "+"="+" "+total
    op.innerHTML=""
    value.prevVal=total
}
if(operator==="-"){
    var total=parseFloat(value.prevVal - value.newVal)
    show.innerHTML="Result"+" "+"="+" "+total
    op.innerHTML=""
    value.prevVal=total
}
if(operator==="/"){
    var zeroState=parseFloat(value.newVal)
    if(zeroState===0){
        show.innerHTML= "error"
         op.innerHTML=""
    }
    else{
        var total=parseFloat(value.prevVal / value.newVal)
        show.innerHTML="Result"+" "+"="+" "+total
        op.innerHTML=""
        value.prevVal=total
    }
   
}
if(operator==="Mod"){
    var total=parseFloat(value.prevVal % value.newVal)
    show.innerHTML="Result"+" "+"="+" "+total
    op.innerHTML=""
    value.prevVal=total
}
if(operator==="x"){
    var total=parseFloat(value.prevVal * value.newVal)
    show.innerHTML="Result"+" "+"="+" "+total
    op.innerHTML=""
    value.prevVal=total
}
if(operator==="^"){
    var total=parseFloat(value.prevVal ** value.newVal)
    show.innerHTML="Result"+" "+"="+" "+total
    op.innerHTML=""
    value.prevVal=total
}
        }
      isLastBtnNumber=false 
    }
    function deleteAll(){
        value.prevVal=""
        value.newVal=""
        operator=""
        show.innerHTML=""
        console.log(  value.prevVal)
        console.log(  value.newVal)
    }


