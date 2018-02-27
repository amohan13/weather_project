function getData(){
	var xmlHttp = new XMLHttpRequest();
	var word=document.getElementById("data").value;
	var url ="http://api.openweathermap.org/data/2.5/weather?q="+word+"&appid=4f51cc3581658734467f957800c7625d";
	xmlHttp.open("GET",url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
	   if(this.readyState == 4 && this.status == 200){
	       var myArr= JSON.parse(this.responseText);
	       var dataObj= JSON.stringify(myArr);
	      //document.write(dataObj);
	       document.getElementById("show").innerHTML = myArr.main.temp_max;
	   }
	};
	}