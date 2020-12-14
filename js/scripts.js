function submit() {
  var g= document.querySelector("input[name='gender']:checked").value;
  var day = new Date(document.getElementById("bday").value);
  var d = day.getDay();
  var m= day.getMonth();
  var maleNames=['Kwasi',"Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var n=0;
  if (d<=0 || d>31) {
    document.getElementById("output").innerHTML= 'Invalid date input, please try again.'
  } else if(m>12 || m<=0){
    document.getElementById("output").innerHTML= 'Invalid month input, please try again.'
  }
  // the previous step wasn't needed for it's made not possible to input no related info or skip.
  while (n<7) {
    if(g=='Male' && n==d){
      document.getElementById("output").innerHTML= weekday[n] + '. ' + maleNames[n] + ' is your Akan name';
    }else if (g=='Female' && n==d) {
      document.getElementById("output").innerHTML= weekday[n] + '. ' + femaleNames[n] + ' is your Akan name';
    }
    n=n+1;
  }
}
