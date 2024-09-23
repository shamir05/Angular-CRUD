$(document).ready(function () {
  $('input[type="file"]').on("change", function () {
    let filenames = [];
    let files = document.getElementById("customFile").files;
    if (files.length > 1) {
      filenames.push("Total Files (" + files.length + ")");
    } else {
      for (let i in files) {
        if (files.hasOwnProperty(i)) {
          filenames.push(files[i].name);
        }
      }
    }
    $(this).next(".custom-file-label").html(filenames.join(","));
  });
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//  NPME Courses     ///
function opennpmeaddcoursesoverlaydiv() {
  document.getElementById("npmeaddcourses-overlaydiv").style.display = "block";
}
function closenpmeaddcoursesoverlaydiv() {
  document.getElementById("npmeaddcourses-overlaydiv").style.display = "none";
}
function opennpmesearchcoursesoverlaydiv() {
  document.getElementById("npmesearchcourses-overlaydiv").style.display =
    "block";
}
function closenpmesearchcoursesoverlaydiv() {
  document.getElementById("npmesearchcourses-overlaydiv").style.display =
    "none";
}

//  NPME Medications     ///
function opennpmeaddmedicationsoverlaydiv() {
  document.getElementById("npmeaddmedications-overlaydiv").style.display =
    "block";
}
function closenpmeaddmedicationsoverlaydiv() {
  document.getElementById("npmeaddmedications-overlaydiv").style.display =
    "none";
}
function opennpmesearchmedicationsoverlaydiv() {
  document.getElementById("npmesearchmedications-overlaydiv").style.display =
    "block";
}
function closenpmesearchmedicationsoverlaydiv() {
  document.getElementById("npmesearchmedications-overlaydiv").style.display =
    "none";
}

//  NPME Skill Procedures     ///
function opennpmeaddskillproceduressoverlaydiv() {
  document.getElementById("npmeaddskillprocedures-overlaydiv").style.display =
    "block";
}
function closenpmeaddskillproceduressoverlaydiv() {
  document.getElementById("npmeaddskillprocedures-overlaydiv").style.display =
    "none";
}
function opennpmesearchskillproceduressoverlaydiv() {
  document.getElementById(
    "npmesearchskillprocedures-overlaydiv"
  ).style.display = "block";
}
function closenpmesearchskillproceduressoverlaydiv() {
  document.getElementById(
    "npmesearchskillprocedures-overlaydiv"
  ).style.display = "none";
}

//  NPME Clinical sites     ///
function opennpmeaddclinicalsiteoverlaydiv() {
  document.getElementById("npmeaddclinicalsite-overlaydiv").style.display =
    "block";
}
function closenpmeaddclinicalsiteoverlaydiv() {
  document.getElementById("npmeaddclinicalsite-overlaydiv").style.display =
    "none";
}
function opennpmesearchclinicalsiteoverlaydiv() {
  document.getElementById("npmesearchclinicalsite-overlaydiv").style.display =
    "block";
}
function closenpmesearchclinicalsiteoverlaydiv() {
  document.getElementById("npmesearchclinicalsite-overlaydiv").style.display =
    "none";
}

//  NPME Add Semesters    ///
function opennpmeaddsemestersoverlaydiv() {
  document.getElementById("npmeaddsemesters-overlaydiv").style.display =
    "block";
}
function closenpmeaddsemestersoverlaydiv() {
  document.getElementById("npmeaddsemesters-overlaydiv").style.display = "none";
}
function opennpmesearchemesterssoverlaydiv() {
  document.getElementById("npmesearchsemesters-overlaydiv").style.display =
    "block";
}
function closenpmesearchemesterssoverlaydiv() {
  document.getElementById("npmesearchsemesters-overlaydiv").style.display =
    "none";
}

//  NPME list of values    ///
function opennpmeaddlistofvaluesoverlaydiv() {
  document.getElementById("npmeaddlistofvalues-overlaydiv").style.display =
    "block";
}
function closenpmeaddlistofvaluesoverlaydiv() {
  document.getElementById("npmeaddlistofvalues-overlaydiv").style.display =
    "none";
}
function opennpmesearchlistofvaluesoverlaydiv() {
  document.getElementById("npmesearchlistofvalues-overlaydiv").style.display =
    "block";
}
function closenpmesearchlistofvaluesoverlaydiv() {
  document.getElementById("npmesearchlistofvalues-overlaydiv").style.display =
    "none";
}

//  NPME   Time Activity    ///
function opennpmeaddtimeactivityoverlaydiv() {
  document.getElementById("npmeaddtimeactivity-overlaydiv").style.display =
    "block";
}
function closenpmeaddtimeactivityoverlaydiv() {
  document.getElementById("npmeaddtimeactivity-overlaydiv").style.display =
    "none";
}
function opennpmesearchtimeactivityoverlaydiv() {
  document.getElementById("npmesearchtimeactivity-overlaydiv").style.display =
    "block";
}
function closenpmesearchtimeactivityoverlaydiv() {
  document.getElementById("npmesearchtimeactivity-overlaydiv").style.display =
    "none";
}

//  NPME Social Problems    ///
function opennpmeaddsocialproblemsoverlaydiv() {
  document.getElementById("npmeaddsocialproblem-overlaydiv").style.display =
    "block";
}
function closenpmeaddsocialproblemsoverlaydiv() {
  document.getElementById("npmeaddsocialproblem-overlaydiv").style.display =
    "none";
}
function opennpmesearchsocialproblemsoverlaydiv() {
  document.getElementById("npmesearchsocialproblem-overlaydiv").style.display =
    "block";
}
function closenpmesearchsocialproblemsoverlaydiv() {
  document.getElementById("npmesearchsocialproblem-overlaydiv").style.display =
    "none";
}

//  EMS Attendance Employeeslist     ///
function openemssearchemployeeslistoverlaydiv() {
  document.getElementById("emssearchemployee-overlaydiv").style.display =
    "block";
}

function closeemssearchemployeeslistoverlaydiv() {
  document.getElementById("emssearchemployee-overlaydiv").style.display =
    "none";
}

function openemsleaverequestboxesoverlaydiv() {
  document.getElementById("leavesearchrequests-overlaydiv").style.display =
    "block";
}
function closeemsleaverequestboxesoverlaydiv() {
  document.getElementById("leavesearchrequests-overlaydiv").style.display =
    "none";
}

//  UMS Users     ///
function openumsadduseroverlaydiv() {
  document.getElementById("umsadduser-overlaydiv").style.display = "block";
}
function closeumsadduseroverlaydiv() {
  document.getElementById("umsadduser-overlaydiv").style.display = "none";
}
function openumssearchuseroverlaydiv() {
  document.getElementById("umssearchuser-overlaydiv").style.display = "block";
}
function closeumssearchuseroverlaydiv() {
  document.getElementById("umssearchuser-overlaydiv").style.display = "none";
}

//  UMS Projects     ///
function openumsaddprojectoverlaydiv() {
  document.getElementById("umsaddproject-overlaydiv").style.display = "block";
}
function closeumsaddprojectoverlaydiv() {
  document.getElementById("umsaddproject-overlaydiv").style.display = "none";
}
function openumssearchprojectoverlaydiv() {
  document.getElementById("umssearchproject-overlaydiv").style.display =
    "block";
}
function closeumssearchprojectoverlaydiv() {
  document.getElementById("umssearchproject-overlaydiv").style.display = "none";
}

// SSO Subscription    ///

function openssoaddsubscriptionoverlaydiv() {
  document.getElementById("ssoaddsubscription-overlaydiv").style.display =
    "block";
}
function closessoaddsubscriptionoverlaydiv() {
  document.getElementById("ssoaddsubscription-overlaydiv").style.display =
    "none";
}
function openssosearchsubscriptionoverlaydiv() {
  document.getElementById("ssosearchsubscription-overlaydiv").style.display =
    "block";
}
function closessosearchsubscriptionoverlaydiv() {
  document.getElementById("ssosearchsubscription-overlaydiv").style.display =
    "none";
}
///sso chat list box
function openchatboxoverlaydiv() {
  document.getElementById("chatbox-overlaydiv").style.display = "block";
}
function closechatboxoverlaydiv() {
  document.getElementById("chatbox-overlaydiv").style.display = "none";
}

//// sso group info screen 5
function opengroupinfochatoverlaydiv() {
  document.getElementById("groupinfochat-overlaydiv").style.display = "block";
}
function closegroupinfochatoverlaydiv() {
  document.getElementById("groupinfochat-overlaydiv").style.display = "none";
}

//// sso create chat box  screen 4
function opencreatenewchatoverlaydiv() {
  document.getElementById("createnewchat-overlaydiv").style.display = "block";
}
function closecreatenewchatoverlaydiv() {
  document.getElementById("createnewchat-overlaydiv").style.display = "none";
}

//// sso first select user screen 3create chat box
function openselectusercreatenewchatoverlaydiv() {
  document.getElementById("createselectusernewchat-overlaydiv").style.display =
    "block";
}
function closeselectusercreatenewchatoverlaydiv() {
  document.getElementById("createselectusernewchat-overlaydiv").style.display =
    "none";
}

//// MDM Schedular
function openaddmdmschedulareoverlaydiv() {
  document.getElementById("mdmaddschedular-overlaydiv").style.display = "block";
}
function closeaddmdmschedulareoverlaydiv() {
  document.getElementById("mdmaddschedular-overlaydiv").style.display = "none";
}
