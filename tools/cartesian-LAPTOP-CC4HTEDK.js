//global var
var newCol = $(".row").last().clone();

// Event listeners
getMinusButton().addEventListener("click",removeSet);
getPlusButton().addEventListener("click",addSet);
//getSetNumInput().addEventListener("input",setCreator)
getSubmitButton().addEventListener("click",submit);
// Default values
getSetNumInput().value = 2;
// Check for value
//var curSetNum = getSetNumInput().value;
//curSetNum = setInterval(checkSetNumValue(curSetNum),500);
// event funcs
function addSet(){
    if (getSetNumInput().value < 10){
        getSetNumInput().value++;
        addConcreteSet();
    }
}
function removeSet(){
    if (getSetNumInput().value > 2){
        getSetNumInput().value--;
        $(".row").last().remove();
    }
        
}

function submit(){
    var inputArray = []
    var modifiedArray = []
    var newArr = []
    $("input.form-control.inputset").each(function() { console.log($(this)[0].value)});
    $("input.form-control.inputset").each(function() {inputArray.push(($(this)[0].value).split(","))});
    for (var i = 0; i < inputArray.length; i++){
        newArr = []
        for (var j = 0; j < inputArray[i].length; j++){
            if ((inputArray[i])[j].includes(" ")){
                newArr.push((inputArray[i])[j].slice(1))
            }
            else{
                newArr.push((inputArray[i])[j]);
            }
        }
        modifiedArray.push(newArr);
    }
    console.log(inputArray);
    console.log(modifiedArray);
    console.log(cartesian(...modifiedArray))
    var cart = cartesian(...modifiedArray);
    var cartString = "{";
    for (var i = 0; i < cart.length; i++){
        var newTuple = "(" + String(cart[i]) + ")";
        for (var j = 0; j < newTuple.length; j++){
            if (newTuple[j] == ","){
                cartString += ", ";
            }
            else{
                cartString += newTuple[j];
            }
        }
        if (i < cart.length - 1){
            cartString += ", ";
        }
        else{
            cartString += "}"
        }
    }
    //cartString += "(" + String(cart[cart.length - 1]) + ")}";
    console.log(cartString);
    
}

// If buttons on top added may break
function getMinusButton()
{
    return $("button")[4];
}
function getPlusButton()
{
    return $("button")[5];
}

function getSubmitButton()
{
    return $("button")[6];
}

function getSetNumInput()
{
    return $("input")[0];
}


// Set getter
function addConcreteSet()
{
    //var setTemplate = document.lastElementChild.lastElementChild.children[8].firstChild;
    //document.lastElementChild.lastElementChild.children[8].appendChild(setTemplate);
    //const para = document.createElement("p");
    //const node = document.createTextNode("This is new.");
    //para.appendChild(node);
    $(".row").last().clone().appendTo( $(".container-md").last() );
    $(".row").last().find("p").first().text("Set " + getSetNumInput().value + ":");
    $(".row").last().find("input").attr("placeholder", "Set " + getSetNumInput().value); 
}

//Cartesian product calculator
const cartesian = 
    (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
