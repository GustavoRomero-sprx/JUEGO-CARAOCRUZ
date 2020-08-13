randomNumber = (min,max) => {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  pointer = computerChoise => {
    
    if(face.checked==true){
     
      switch (computerChoise){
  
        case 1: 
                userPoints++
                document.getElementById("userPoints").innerHTML=userPoints
                document.getElementById("img").innerHTML='<td id="img"><img src="img/cara.jpg" style="width: 170px; height: 170px;" alt="cara">';
        break
        
        case 2: computerPoints
                computerPoints++
            document.getElementById("computerPoints").innerHTML=computerPoints
            document.getElementById("img").innerHTML='<td id="img"><img src="img/cruz.jpg" style="width: 170px; height: 170px;" alt="cruz">'
        break 
      }
    }else if (cross.checked==true){
  
      switch (computerChoise){
  
      case 1: 
          computerPoints++
          document.getElementById("computerPoints").innerHTML=computerPoints
          document.getElementById("img").innerHTML='<td id="img"><img src="img/cara.jpg" style="width: 170px; height: 170px;" alt="cara">';
      break
  
      case 2: 
          userPoints++
          document.getElementById("userPoints").innerHTML=userPoints
          document.getElementById("img").innerHTML='<td id="img"><img src="img/cruz.jpg" style="width: 170px; height: 170px;" alt="cruz">'
      break 
      }
    } 
    return (userPoints,computerPoints)       
  }
  
  
  showEmojis = () =>{
    if(userPoints == computerPoints){
      document.getElementById("userEmojis").innerHTML="😵"
      document.getElementById("computerEmojis").innerHTML="😵"
  
    }else if(userPoints == 2 && computerPoints < 2){
      document.getElementById("userEmojis").innerHTML="🤩" 
      document.getElementById("computerEmojis").innerHTML="😯"
  
    }else if(computerPoints == 2 && userPoints < 2){
      document.getElementById("userEmojis").innerHTML="😯" 
      document.getElementById("computerEmojis").innerHTML="🤩"
  
    }else if(userPoints == 3 && computerPoints < 3){
      document.getElementById("userEmojis").innerHTML="😇" 
      document.getElementById("computerEmojis").innerHTML="😯"
  
    }else if(computerPoints == 3 && userPoints < 3){
      document.getElementById("userEmojis").innerHTML="😯" 
      document.getElementById("computerEmojis").innerHTML="😇"
  
    }else if(userPoints == 4 && computerPoints < 4){
      document.getElementById("userEmojis").innerHTML="😙" 
      document.getElementById("computerEmojis").innerHTML="😡"
  
    }else if(computerPoints == 4 && userPoints < 4){
      document.getElementById("userEmojis").innerHTML="😡" 
      document.getElementById("computerEmojis").innerHTML="😙"
  
    }else if(userPoints == 5 && computerPoints < 5){
      document.getElementById("userEmojis").innerHTML="😎" 
      document.getElementById("computerEmojis").innerHTML="😡"
      document.getElementById('effect').style.display = "";
      document.getElementById('effect').innerHTML ='<h1>¡GANASTE!</h1><h3>🏆</h3>';
  
    }else if(computerPoints == 5 && userPoints < 5){
      document.getElementById("userEmojis").innerHTML="😡" 
      document.getElementById("computerEmojis").innerHTML="😎"
      document.getElementById('effect').style.display = "";
      document.getElementById('effect').innerHTML ='<h1>¡Perdiste!</h1> <h3>Intentalo de nuevo.. 💪</h3>';
  
    }else if(userPoints > computerPoints){
      document.getElementById("userEmojis").innerHTML="😏"
      document.getElementById("computerEmojis").innerHTML="😯"
  
    }else if(userPoints < computerPoints){
    document.getElementById("computerEmojis").innerHTML="😏"
    document.getElementById("userEmojis").innerHTML="😯"
    }
    
  }
  
  
  handleEffect = () =>{document.getElementById('effect').style.display = "none"; document.location.reload();}
  
  removeButton = () => document.querySelector(".alert").remove()
  
  
  
  
  //DOM interaction
  
  let userPoints = 0 
  let computerPoints= 0
  
  handleButton= () => {
  
  const face = document.querySelector('#face')
  const cross= document.querySelector('#cross')
  
  const computerChoise=randomNumber(1,2)
  
  pointer(computerChoise);
  
  showEmojis(pointer())
  
  }
  
  