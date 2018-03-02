var express = require("express");
var book = require("./compute_grade").book;
var app = express();

//what to do when someone comes here
app.get("/", function(req, res){
	res.send("Hello, World!");
});

app.get("/grade", function(req, res){
	// if grade is comma separated split to get an array
	 var grades = req.query.grades.split(",");

	 for(var i = 0; i< grades.length; i +=1){
		 	book.addGrade(parseInt(grades[i]));
		 }

		 var average = book.getAverage();
		 var letter = book.getLetterGrade();

		 res.send("Your average is :"+ average + "and grade is :"+ letter);
	});

app.listen(3000);
console.log("Server ready...");