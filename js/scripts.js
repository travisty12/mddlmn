function dispSite(siteName) {
  var i;
  var x=document.getElementsByClassName("tabIcon");
  if (document.getElementById(siteName).style.display != "block") {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(siteName).style.display = "block";
  } else {
    document.getElementById(siteName).style.display = "none";
  }
}
