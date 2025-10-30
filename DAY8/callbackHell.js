const orderCoffee=(btn)=>{
    setTimeout(()=>{
        console.log("Make some order.");
        setTimeout(()=>{
            console.log("Brewing Coffee");
            setTimeout(()=>{
                console.log("Serving Coffee");
                 setTimeout(()=>{
                    console.log("Thanks for ordering from us.");
                    
                 },1000)
                
            },3000)
        },2000)
        
    },4000)
}