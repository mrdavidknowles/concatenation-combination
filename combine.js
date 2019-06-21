function combine() {
  // Take inputs from textarea with id of txt1 and txt2
  var stringArray1 = document.getElementById("txt1").value.split("\n");
  var stringArray2 = document.getElementById("txt2").value.split("\n");

  combo = [];

  // Loop through, combine first line in txt1 with all in txt2, and so on, then add to array
  for (n = 0; n < stringArray2.length; n++) {
    for (i = 0; i < stringArray1.length; i++) {
      combo.push(stringArray1[i] + stringArray2[n]);
    }
  }
  // Output the strings in the array onto their own lines in txt3
  document.getElementById("txt3").value = combo.join("\n");
}

// Reset textareas to empty strings
function reset() {
  document.getElementById("txt1").value = "";
  document.getElementById("txt2").value = "";
  document.getElementById("txt3").value = "";
}

// When button is clicked, execute the combine or reset functions
document.querySelector("#combine").addEventListener("click", combine);
document.querySelector("#reset").addEventListener("click", reset);
