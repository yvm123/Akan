function submit() {
    var g= document.querySelector("input[name='gender']:checked").value;
    var day = new Date(document.getElementById("bday").value);
    var d = day.getDay();
    var m= day.getMonth();
