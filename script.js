let tipo;
window.onload = ()=>{
    let btn1=document.querySelector("#btn1");
    btn1.addEventListener('click',calculate);
    // array
    let tips=document.querySelectorAll(".d");
    tips.forEach(tip => {
        tip.addEventListener('click',find);
    });
    
    
};
let find= (e)=>{
    tipo=(e.target.innerText.split("%")[0]);  
}
let calculate = ()=>{
    let btn2=document.querySelector("#btn2");
    console.log(tipo);
    let bill=document.querySelector("#ammount");
    let people=document.querySelector("#people");
    let bil=parseFloat(bill.value);
    let peo=people.value;
    if(!bil || !peo){
        alert("Enter the Bill or Number of people please")
        return;
    }
    else if(!tipo){
        alert("Please select a tip ammount");
        return;
    }
    let ttip=bil*(tipo/100);
    let cal=ttip + bil;
    let las=cal/peo;
    document.querySelector("#a").innerHTML=ttip.toFixed(2);
    document.querySelector("#b").innerHTML=las.toFixed(2);
    
    btn2.addEventListener('click',()=>{
        bill.value="";
        people.value="";
        document.querySelector("#a").innerHTML="";
        document.querySelector("#b").innerHTML="";
    });

}