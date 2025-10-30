const waitForSomeTime=(ms)=>{
    const start=Date.now();
    while(Date.now()-start<ms){

    }
}
const syncUsingTimer=()=>{
    waitForSomeTime(4000);
    console.log("Wait has been completed");
}

const asyncUsingTimer=()=>{
    setTimeout(()=>{
        console.log("Inside set timeout");
    },4000)
}
console.log("start");
syncUsingTimer();
asyncUsingTimer();
console.log("end");