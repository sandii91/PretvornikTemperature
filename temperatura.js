function convert(degree) {
    
    var celsius = document.getElementById("c").value;
  celsius = parseFloat(celsius);

  var fahrenheit = document.getElementById("f").value;
  fahrenheit = parseFloat(fahrenheit);

  var kelvin = document.getElementById("k").value;
  kelvin = parseFloat(kelvin);
    
    var convertC;
    var convertF;
    var convertK;
    
    if ( degree === "C") {
        convertF = celsius * 9 / 5 + 32;
        convertK = celsius + 273;
        document.getElementById("f").value = Math.round(convertF);
        document.getElementById("k").value = Math.round(convertK);
    }
    else if (degree ==="F") {
        convertC = (fahrenheit - 32) * 5 / 9;
        convertK = convertC + 273;
        document.getElementById("c").value = Math.round(convertC);
        document.getElementById("k").value = Math.round(convertK);
    }
    else if (degree ==="K") {
        convertC = kelvin -273;
        convertF = convertC * 9 / 5 + 32;
        document.getElementById("c").value = Math.round(convertC);
        document.getElementById("f").value = Math.round(convertF);
    }
}

function myFunction() {
    document.getElementById("c").value = " ";
    document.getElementById("f").value = " ";
    document.getElementById("k").value = " ";
}