function playsound(n) {
    document.getElementById("key"+n).style.transform="scale(1.1)";
    let a = new Audio("sounds/" + n + ".mp3");
    a.play();
    setTimeout(() =>{
        document.getElementById("key"+n).style.transform="scale(1)";
    },100)
} 

document.addEventListener('keydown',(event)=>{
    // const scale=document.getElementById('key-a');
    //     scale.style.transform='scale(1.1)'
    //         setTimeout(() => {
    //             scale.style.transform='scale(1)'
    //         }, 100);
    switch (event.keyCode) {
       case 65:
            playsound(1);
           break;
   
       case 83:
            playsound(2);
           break;
        case 68:
            playsound(3);
           break;
   
       case 70:
            playsound(4);
           break;
        case 71:
            playsound(5);
           break;
   
       case 72:
            playsound(6);
           break;
        case 74:
            playsound(7);
           break;
       case 75:
            playsound(8);
           break;         
   }
})



// const scale=document.getElementById('key-a');
//  scale.addEventListener('keqdown',function(){
//         setTimeout(() => {
//             scale.classList.add('pianokey');
//             scale.classList.remove('keypress');  
        
//         }, 100);   
    
//  });

