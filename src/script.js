var tablinks = document.getElementsByClassName("tab-section");
for (let i=0 ; i<tablinks.length ;i++) {
    tablinks[i].className = tablinks[i].className.replace("active" , "");
}

function open_section(evt, section_name) {
  var i, tabcontent, tablinks;
//   section_name = 'stocks';
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(section_name).style.display = "block";
  evt.currentTarget.className += " active";
}