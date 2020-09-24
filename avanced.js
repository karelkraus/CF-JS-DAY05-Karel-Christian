var data = JSON.parse(books);

for(var i = 0 ; i < data.length; i++){
document.getElementById("first").innerHTML +=`<p id=${i}>  ${data[i].title} <br> ${data[i].author} <br>  <img src='${data[i].image}'> </p>`
if (data[i].read == "false") {
	document.getElementById(i).style.backgroundColor = "red"
}else {
	document.getElementById(i).style.backgroundColor = "green"
}
}

