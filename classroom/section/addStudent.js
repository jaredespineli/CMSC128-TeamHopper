
function addStudent(){
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var course = $('#course').val();
	var college = $('#college').val();
	var studNum = $('#studNum').val();
	var selected = $("#radioDiv input[type='radio']:checked");
	var sex = selected.val();

	alert("FNAME: " + fname + " LNAME: " + lname + " COURSE: "+ course +" COLLEGE: " + studNum +" SEX: " + sex);
}
