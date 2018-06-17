function clock(){
  var mydate=new Date();
  var myyear=mydate.getFullYear();
  var mymonth=mydate.getMonth()+1;
  var myday=mydate.getDate();
  var myhour=mydate.getHours();
  var thedate=myyear+"/"+mymonth+"/"+myday;
  return thedate;
}
var a=document.getElementsByClassName("clock");
a.innerHTML="New text!";
