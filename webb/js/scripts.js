function calculate(){
    let heightValue = stringFix(document.getElementById("input_height").value) / 100;
    let weightValue = stringFix(document.getElementById("input_weight").value);

    if(!inputCheck(heightValue, weightValue)) {
        document.getElementById("result").innerHTML = "Invalid...";
        return;
    }
    let bmiValue = weightValue / Math.pow(heightValue, 2);

    bmiTable(heightValue);
    resultString(bmiValue);
}

function stringFix(str){
    return parseFloat(str.replace(",", "."));
}

function inputCheck(height, weight) {
    return !isNaN(height) && height > 0 && !isNaN(weight) && weight > 0;
}

function weightCalc(height, bmi){
    return (Math.pow(height, 2) * bmi).toString().substring(0, 5);
}

function resultString(bmi){
    let status;

    if(bmi < 18.5){
        status = "underweight";
    }else if(bmi >= 18.5 && bmi < 25){
        status = "normal weight";
    }else if(bmi > 25 && bmi < 30) {
        status = "overweight";
    }else if(bmi > 30) {
        status = "obese";
    }

    document.getElementById("result").innerHTML = "Result: " + bmi.toString().substring(0, 5) + " (" + status + ")";
}

function bmiTable(height){
    document.getElementById("under-range").innerHTML = "< " + weightCalc(height, 18.4);
    document.getElementById("normal-range").innerHTML = weightCalc(height, 18.5) + " - " + weightCalc(height, 24.9);
    document.getElementById("over-range").innerHTML = weightCalc(height, 25) + " - " + weightCalc(height, 29.9);
    document.getElementById("obese-range").innerHTML = "> " + weightCalc(height, 30);
}