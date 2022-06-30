const imgPuzzles = document.querySelectorAll('.puzzle');
let soumis = document.getElementById("soumis");
let checked = [false,false,false,false,false,false,false,false,false];

imgPuzzles.forEach((imgPuzzle,imgIdx) => {
   let aChecked = false;
   imgPuzzle.addEventListener("click", ()=>{
    aChecked = !aChecked; 
    checked[imgIdx] = aChecked; 
  
    if (aChecked) {
    imgPuzzle.src = `./puzzle/A${imgIdx + 1}N.jpg`;    
   } else {  
    imgPuzzle.src = `./puzzle/A${imgIdx + 1}.jpg`;     
   } 
})
})

soumis.addEventListener("click", ()=> {
    arrayTrue = [false,true,true,true,true,true,false,false,false];
    if (JSON.stringify(checked) == JSON.stringify(arrayTrue)){
        alert("Vous n'êtes pas un robot");
    }
    else {
        alert("Vous travaillez pour Skynet !")
    }
}) 

