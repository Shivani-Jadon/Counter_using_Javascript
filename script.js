/*function light(count){

    let  msg = document.getElementById("ctr2");
    msg.style.display = "flex";
    msg.innerHTML = count;
    count--;
}

function dark(){
    let  msg = document.getElementById("ctr2");
    msg.style.display = "none";
}
*/
function counter_control(){

    let ctr = document.getElementById("data").value;

    ctr = parseInt(ctr);
    console.log(ctr);

    if(ctr>=0 && ctr<=9)
    {
        let count = ctr;  
        
        let interval = setInterval(function(){

            let msg = document.getElementById("ctr2");
            
            if(count < 0)
            {
                msg.style.display = "none";
                document.getElementById("data").innerHTML = "0";
                clearInterval(interval);              
                return;                
            }
        
            if( msg.style.display == "none"){
                msg.style.display = "flex";
                msg.innerHTML = count;
                count--;
            }else if(msg.style.display != "none"){
                msg.style.display = "none";
            }
            
            
        }, ctr*100);
       
       // window.alert("counter starts");   
    }else{
        document.getElementById("counter").innerText = "Invalid Input"; 
    };

}

var button = document.getElementById("btn");

button.addEventListener("click", counter_control);