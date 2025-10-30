

const callbackFun=()=>{
    const inputDob=document.getElementById("dob").value;
    const op=document.getElementById("output");
    const current=new Date();
    const userdate=new Date(inputDob);
    console.log(inputDob);
    const currentyear=current.getFullYear();
    const currentmonth=current.getMonth();
    const useryear=userdate.getFullYear();
    const usermonth=userdate.getMonth();
    let age=currentyear-useryear;
    let ageinmonth=currentmonth-usermonth;
    if(currentmonth<usermonth){
        age--;
    }
    if(ageinmonth<0){
        ageinmonth+=12;
    }
    output.innerText=`User's Age is ${age} years and ${ageinmonth} months`;

}
const btn=document.getElementById("btn");
btn.addEventListener("click",callbackFun);
