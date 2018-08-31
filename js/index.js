function loadAbout(){
  about = document.getElementById('about');

  about.innerHTML = "I am a student at the University of Washington, intending to major in Computer-Science.<br><br>"
  +"I love to work on projects, learn new things, and continue to improve myself constantly.<br><br>"
  +"I'll listen to your idea over coffee if you want to collaborate.<br> Black, no sugar.";
}


function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
