//creating variables needed for this program to work
var conversionChoiceSelector = document.getElementById("choice-selector");
var converterInputs = document.getElementsByClassName("converter-inputs");



//event and their handlers
conversionChoiceSelector.addEventListener("change", function(){
    switch ( conversionChoiceSelector.value ) {
        case "ktoc":
            document.title = "converting from kelvin to celcius";
        break;
        case "ctok":
            document.title = "converting from celcius to kelvin";
        break;
        case "ktof":
            document.title = "converting from kelvin to farenheit";
        break;
        case "ftok":
            document.title = "converting from farenheit to kelvin";
        break;
        case "ftoc":
            document.title = "converting from farenheit to celcius";
        break;
        case "ctof":
            document.title = "converting from celcius to farenheit";
        break;
        default:
            document.title = "no conversion direction selected";
    }
})

converterInputs[0].addEventListener("input", function(){
    converterInputs[1].value = conversionEngine( conversionChoiceSelector.value, this.value );
})
converterInputs[0].addEventListener("click", function(){
    converterInputs[1].value = "";
})



//the conversion engine
function conversionEngine( choice, initialInputValue ){
    //local variables
    var finalInputValue;


    //choice conditioning and calculation
    switch ( choice ) {
        case "ktoc":
            finalInputValue = Number( initialInputValue ) - 273;
            return finalInputValue;
        break;
        case "ctok":
            finalInputValue = Number( initialInputValue ) + 273;
            return finalInputValue;
        break;
        case "ktof":
            finalInputValue = ( Number( initialInputValue ) - 273 ) * ( 9/5 ) + 32 ;
            return finalInputValue;
        break;
        case "ftok":
            finalInputValue = ( Number( initialInputValue ) - 32) * ( 5/9 ) + 273 ;
            return finalInputValue;
        break;
        case "ftoc":
            finalInputValue = ( Number( initialInputValue ) - 32 ) * ( 5/9 );
            return finalInputValue;
        break;
        case "ctof":
            finalInputValue = ( Number( initialInputValue ) * ( 9/5) ) + 32;
            return finalInputValue;
        break;
        default:
            finalInputValue = "";
            return finalInputValue;
    }
}
