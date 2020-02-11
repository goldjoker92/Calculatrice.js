const divResultat = document.querySelector("#resultat");
const divTouches = document.querySelector("#touches");
const divRecap = document.querySelector("#recap");

let chiffreSaisi = "";
let operateur ="+";
let recap = "";
let resultat = 0;
let nbCalcul = 0;
let init = true;

divTouches.addEventListener("click",function(event){//c'est le cas ou on clique sur un chiffre 
    if(button.substring(0,1) === "c"){// Si ça affiche c on affiche le chiffre derrière 
        chiffreSaisi += button.substring(1,2);
        console.log(chiffreSaisi);
        divResultat.value = chiffreSaisi;
    }else if(button.substring(0,1)==="b"){
        manageOperation();
        switch(button){
            case "bPlus" : operateur ="+";
            break;
            case "bDiv" : operateur ="/";
            break;
            case "bMul" : operateur ="*";
            break;
            case "bMin" : operateur ="-";
            break;
            default:
            break;   
        }
        if(init){
            recap = "";
            init = false;
        }
        if(nbCalcul > 1) recap += "<br />";
        recap += resultat +"  "+ operateur +" ";
    }else if(button === "point"){
        chiffreSaisi += ".";
    }else if(button === "egal"){
        manageOperation();
        recap += " = "+ resultat;
        nbCalcul =1;
        init = true;
    }
    divRecap.innerHTML = recap;
    divRecap.scrollTop = divRecap.scrollHeight - divRecap.clientHeight;
});

    function manageOperation(){
    if(chiffreSaisi !== ""){
        resultat = doOperation(operateur, resultat, parseFloat(chiffreSaisi));
        if(nbCalcul >0){
            recap += parseFloat(chiffreSaisi);
        }
       
        divResultat.value = resultat;
        chiffreSaisi ="";
        nbCalcul++;
        }else{
            let position = recap.lastIndexOf("<br />");
            recap = recap.substring(0,position);
        }
    }

    function doOperation(operateur, chiffreA ,chiffreB){
        var res = 0;
        switch(operateur){
            case "+" : res = chiffreA + chiffreB
            break;
            case "-" : res = chiffreA - chiffreB
            break;
            case "/" : res = chiffreA / chiffreB
            break;
            case "*" : res = chiffreA * chiffreB
            break;
        }
        return res;
    }

    
