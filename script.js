function getFormvalue() {
    //Write your code here

	//get the form element
	let myForm = document.getElementsByID("form1");
	//get the input values
	let firstname = myForm.elements.fname.value;
	let lastname = myForm.elements.lname.value;
	//alert
	alert(firstname+" "+lastname);
}
