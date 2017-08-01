// variable that will store users' info
var login = [
		{
			username: "Alex",
			password: "12345"
		},
		{
			username: "Sasha",
			password: "Hello"
		},
		{
			username: "Smith",
			password: "GoldenGate"
		}
];

//function will match password and a username as many time as we need
function loginPage() {

	//variables that store information entered by a user 
	var input = document.getElementById('user').value
	var input2 = document.getElementById('code').value

	//checks what was entered
	console.log("this was entered in the username field " + user.value);
	console.log("this was entered in the password field " + code.value);

//for that will loop throug each object properties.value one by one and match passwords and usernames.
		for (i = 0; i < login.length; i++) {

			// if statement runs if username and password that were entered match
			if(input == login[i].username && input2 == login[i].password) {

				//checks if if statement runs 
				console.log("Successful login!");

				document.getElementById('message').textContent = "Welcome " + login[i].username + "!";

				//resets forms inputs after successful sign in
				var form = document.getElementById('form')
				form.reset();

				return;
			} else {

			// if password and username do not match this statement runs
				document.getElementById('message').textContent = "Some of your info isn't correct. Please try again.";

				//checks if login failed
				console.log("Login failed!");
			}
			
		};

};




var regButton = document.getElementById('registerB');
regButton.addEventListener('click', function(){

	var newUsername = document.getElementById('newUser').value
	var newPassword = document.getElementById('newPassword').value

	var newUser = {
		username: newUsername,
		password: newPassword
	};

	for (i = 0; i < login.length; i++) {

		if(newUsername == login[i].username){
			document.getElementById('message2').textContent = "Username already exists. Try again!";

			var form2 = document.getElementById('form2')
			form2.reset();

			return;

		} else if (newPassword.length < 8){
			document.getElementById('message2').textContent = "Password is too short.";

			return;
		};

		var form2 = document.getElementById('form2')
			form2.reset();
	};

	login.push(newUser);
	console.log(login);
	alert('Welcome ' + newUser.username)

});


























