function show_hide_pass(target){
	var input = document.getElementById('pass');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
function show_hide_repass(target){
	var input = document.getElementById('repass');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
document.getElementById('main-form').addEventListener("submit", chekForm);

function chekForm() {
    event.preventDefault();
    var el = document.getElementById('main-form');

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var gender = el.gender.value;

    console.log(name + " - " + pass + " - " + repass + " - " + gender);
    
    var fail = "";

    if (name == "" || pass == "" || repass == "" || gender == "")
        fail = "fill in all fields of the form";
    else if (name.length <= 2 || name.length > 50)
        fail = "Uncorrect Name";
    else if (pass.length < 6)
        fail = "Password minimum length is 6 symbols";
    else if (pass != repass)
        fail = "Passwords are different";
    
    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
    }
    else {
        alert("Form sucsessfully submited");
        window.location = 'sucsess.html';
    }
}
