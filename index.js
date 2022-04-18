

  function ok(){

    var name = document.getElementById('yourname').value;
    var lname = document.getElementById('lovename').value;
    
   
    var lovdata = Math.random() * 100;
    lovdata = Math.floor(lovdata);

    if(name == ""){
     alert("Please enter your name");
    }
    else if (name.length <=2 ) {
     alert("Min lenght is 3");
    }
    else if(!isNaN(name)){
     alert("Numbers are not allowed");
    }
  
    else if(lname == ""){
     alert("Please enter your love name");
    }
    else if (lname.length <=2 ) {
     alert("Min lenght is 3");
    }
    else if(!isNaN(lname)){ 
     alert("Numbers are not allowed");
    }
 if (name.length >=3){

      
    
    document.querySelector("h1").innerHTML= "Your love percentage is" + lovdata + "% ❤️" ; 
    
   }
}

