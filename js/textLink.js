document.querySelector("textarea").addEventListener("keyup", function() {
    const div = document.querySelector("div")


    if(this.value!="") {
        div.innerHTML = this.value
    }else{
        div.innerHTML= "Start Typing"
   
    
            
             
    }})

         // if(this.value="Nas" , this.value!="") {
    //     window.location.href="burnerPage1.html";