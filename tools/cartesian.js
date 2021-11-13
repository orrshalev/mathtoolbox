//global var
var newCol = $(".row").last().clone();

// Event listeners
getMinusButton().addEventListener("click",removeSet);
getPlusButton().addEventListener("click",addSet);
getSubmitButton().addEventListener("click",submit);
// Default values
getSetNumInput().value = 2;

// event funcs
function addSet(){
    if (getSetNumInput().value < 9){
        getSetNumInput().value++;
        addConcreteSet();
    }
}
function removeSet(){
    if (getSetNumInput().value > 2){
        $(".row").slice(getSetNumInput().value, getSetNumInput().value + 1).slice(0,1).remove();
        getSetNumInput().value--;
    }
        
}

function submit(){
    if ($(".container-md.answer").length > 0)
    {
        $(".container-md.answer").remove();
    }
    var inputArray = []
    var modifiedArray = []
    var newArr = []
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
    $(document.body).append("<div class='container-md answer'><div class='row'><h3>Cartesian Product:</h3></div><div class='row'><p>" + cartString + "</p></div></div>");
    
}

// If buttons on top added may break
function getMinusButton()
{
    return $(".btn.btn-danger")[0];
}
function getPlusButton()
{
    return $(".btn.btn-success")[0];
}

function getSubmitButton()
{
    return $(".btn.btn-warning")[0];
}

function getSetNumInput()
{
    return $("input")[0];
}


// Set getter
function addConcreteSet()
{
    $(".row").slice(2,3).clone().appendTo( $(".container-md").slice(2,3));
    $(".row").slice(getSetNumInput().value, getSetNumInput().value + 1).find("p").first().text("Set " + getSetNumInput().value + ":");
    $(".row").slice(getSetNumInput().value, getSetNumInput().value + 1).find("input").attr("placeholder", "Set " + getSetNumInput().value);
    $("input")[getSetNumInput().value].value = "";

}

//Cartesian product calculator
const cartesian = 
    (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
