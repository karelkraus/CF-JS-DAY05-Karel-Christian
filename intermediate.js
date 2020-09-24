var data = JSON.parse(employees);



for (let i = 0; i < data.length; i++){
	document.getElementById("id").innerHTML += "ID: " + data[i].uniqueId + "<br><hr>";
	document.getElementById("firstName").innerHTML += "First Name: " + data[i].firstName + "<br><hr>";
	document.getElementById("lastName").innerHTML += "Last Name: " + data[i].lastName + "<br><hr>";
	document.getElementById("email").innerHTML += "E-Mail: " + data[i].emailAddress + "<br><hr>";
	document.getElementById("job").innerHTML += "Job Title: " + data[i].jobTitle + "<br><hr>";
	document.getElementById("salary").innerHTML += "Salary: " + data[i].salary + "<br><hr>";
    }
   