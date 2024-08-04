let button=document.querySelector(".convert");
const fromdeg=document.querySelector(".from select");
const todeg=document.querySelector(".to select");
let reset=document.querySelector(".reset");

let msg=document.querySelector(".msg");
let res=0;


button.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let temp=document.querySelector(".temp input");
    let tempVal=temp.value;
    
    if(tempVal === ""){
        msg.innerText="Please enter a temperature value."
    }
    else if(fromdeg.value === "celsius" && todeg.value === "kelvin"){
        res=Number(tempVal) + 273.15;
        msg.innerText=tempVal+" C = "+res+" K";
    }
    else if(fromdeg.value === "celsius" && todeg.value === "fahrenheit"){
        res=(Number(tempVal)*9/5)+32;
        msg.innerText=tempVal+" C = "+res+" F";
    }
    else if(fromdeg.value === "kelvin" && todeg.value === "celsius"){
        res=Number(tempVal)-273.15;
        msg.innerText=tempVal+" K = "+res+" C";
    }
    else if(fromdeg.value === "kelvin" && todeg.value === "fahrenheit"){
        res=[(Number(tempVal)-273.15)*9/5]+32;
        msg.innerText=tempVal+" K = "+res+" F";
    }
    else if(fromdeg.value === "fahrenheit" && todeg.value === "celsius"){
        res=(Number(tempVal)-32)*5/9;
        msg.innerText=tempVal+" F = "+res+" C";
    }
    else if(fromdeg.value === "fahrenheit" && todeg.value === "kelvin"){
        res=[(Number(tempVal)-32)*5/9]+273.15;
        msg.innerText=tempVal+" F = "+res+" K";
    }
    else{
        msg.innerText="Please enter different temperature Units."
    }


    
});

reset.addEventListener("click",resetb);
const resetb=()=>{
    tempVal="";
    fromdeg.value="select";
    todeg.value="select";
}