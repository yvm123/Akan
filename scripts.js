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
