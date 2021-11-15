// cartesian.js
// const eval = require("expr-eval");
import expreval from "expr-eval";

// event listeners
getRecursiveButton().addEventListener("click",calculateRecursive);
getExplicitButton().addEventListener("click",calculateExplicit);

// gets
function getRecursiveButton()
{
    return $(".btn.btn-warning")[0];
}

function getExplicitButton()
{
    return $(".btn.btn-warning")[1];
}

function calculateRecursive(){
    
}

function calculateExplicit(){

}
