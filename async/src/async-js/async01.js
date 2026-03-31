
//동기 처리
function displayA(){
    console.log("A");    
}

function displayB(){
    //console.log("B");    
    setTimeout(()=>{
        console.log("B");        
    },2000);
}

function displayC(){
    console.log("C");    
}

displayA();
displayB();
displayC();
//터미널로 cd src/async-js 이동한 후 
// node async01 