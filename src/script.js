
function open_section(evt, section_name) {
  var i, tabcontent, tablinks;
//   section_name = 'stocks';
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log(i);
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    console.log("hi" + i);
  }
  document.getElementById(section_name).style.display = "block";
  evt.currentTarget.className += " active";
}