var interval; 

//function for starting counter
function counter_control(){

    let ctr = document.getElementById("data").value;
    let msg = document.getElementById("ctr2");
    document.getElementById("ctr1").style.display = "flex";
    document.getElementById("invalid").style.display = "none";

    ctr = parseInt(ctr);
    console.log(ctr);

    //starting counter for input 0-9
    if(ctr>=0 && ctr<=9)
    {
        let count = ctr;  
        
        interval = setInterval(function(){
            //stopping counter 
            if(count < 0)
            {
                msg.style.display = "none";
                document.getElementById("data").innerHTML = "0";
                clearInterval(interval);              
                return;                
            }

            //making counter visible
            if( msg.style.display == "none"){   
                msg.style.display = "flex";
                msg.innerHTML = count;
                count--;
            }
            //making counter invisible
            else if(msg.style.display != "none"){
                msg.style.display = "none";
            }
            
            
        }, ctr*100);
       
    }
    //invalid msg on other inputs
    else{
        document.getElementById("ctr1").style.display = "none"; 
        document.getElementById("invalid").style.display = "flex"; 
        return;
    };

}

function reset_counter(){

    document.getElementById("ctr1").style.display = "flex";
    document.getElementById("invalid").style.display = "none";
    
    let msg = document.getElementById("ctr2");
    msg.style.display = "none";
    document.getElementById("data").innerHTML = "0";
    clearInterval(interval);              
    return; 
}

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

button1.addEventListener("click", counter_control);

button2.addEventListener("click", reset_counter);