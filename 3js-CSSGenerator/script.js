function radius() {
  let radiusTopRight = document.getElementById("rtr").value;
  let radiusTopLeft = document.getElementById("rtl").value;
  let radiusBottomLeft = document.getElementById("rbl").value;
  let radiusBottomRight = document.getElementById("rbr").value;

  let textTopRight = document.getElementById("ttr");
  let textTopLeft = document.getElementById("ttl");
  let textBottomLeft = document.getElementById("tbl");
  let textBottomRight = document.getElementById("tbr");

  let block = document.getElementById("block");

  textTopRight.value = radiusTopRight;
  textTopLeft.value = radiusTopLeft;
  textBottomLeft.value = radiusBottomLeft;
  textBottomRight.value = radiusBottomRight;
  block.style.borderRadius =
    radiusTopLeft +
    "px " +
    radiusTopRight +
    "px " +
    radiusBottomLeft +
    "px " +
    radiusBottomRight +
    "px";
}
