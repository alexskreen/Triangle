$(document).ready(function() {
  $("form#triCalc").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if ((side1 + side2 < side3) || (side1 + side3 < side2) || (side2 + side3 < side1)) {
    alert("Not a Triangle! TRY AGAIN!");
  }
    else if (side1 === side2 && side2 === side3) {
    alert("Equalateral");

  } else if (((side1 === side2 && side1 != side3) || (side1 != side2 && side2 === side3) || (side3 === side1 && side3 != side2))) {
    alert("Isosceles");
  } else {
  alert("Scaline");
}
  });
});
