function myFunction() {
  var x = document.getElementById("pass");
  var y = document.getElementById("label-show-password");
  if (x.type === "password") {
    y.style.color = "#7A9FEF";
    x.type = "text";
  } else if (x.type === "text") {
    x.type = "password";
    y.style.color = "#000000";
  } else {
    console.log("eror");
  }
}
