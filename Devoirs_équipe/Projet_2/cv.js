$.getJSON('cv.json', function (data) {
	document.getElementById("nom").innerHTML = "Nom: " + data.nom;
	document.getElementById("age").innerHTML = "Age: " + data.age;
	document.getElementById("adresse").innerHTML = "Adresse: " + data.adresse;
	document.getElementById("tel").innerHTML = "Numéro de téléphone: " + data.tel;
	document.getElementById("img-cv").src = data.image;

	document.getElementById("emplois").innerHTML = data.emplois[0];

	var exp = data.experiences;
	var expList = [];
	for (var i = 0; i < exp.length; i++) {
		exp[i];
		var expElem = exp[i].experience + " (" + exp[i].annee + ")";
		expList.push(expElem);
	}
	var temp2 = expList.toString();
	var temp3 = temp2.replace(/,/g,"<br>");
	document.getElementById("experiences").innerHTML=temp3;

			var hobbies = data.hobby.toString();
			var temp = hobbies.replace(/,/g,"<br>");
			document.getElementById("passe-temps").innerHTML = temp;

			var formation = data.formation;
			var formString = "";
			for (var i = 0; i < formation.length; i++) {
				var temp = formation[i].toString();				
				if(i==formation.length-1){
					formString = formString + temp;
				}else{
					formString = formString + temp +";";
				}
			}
			var formations =  formString.replace(/;/g,"<br>");
			document.getElementById("formation").innerHTML = formations;
			console.log(formString);
			
			var images = "";
			for (var i = 0; i < data.photo.length; i++) {
				images = images + "<img class = 'varia-img-container' src='images/" + data.photo[i] + "'>";
				console.log(images);
			}
			document.getElementById("varia-images").innerHTML = images;
		});