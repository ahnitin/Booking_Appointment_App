var form = document.getElementById('my-form');
form.addEventListener('submit',addItem);
function addItem(e)
{
    e.preventDefault();
    var name1 = document.getElementById('name').value;
    var email1 = document.getElementById('email').value;

    if(name1 == "" || email1 == "")
    {
        alert("please enter all the fields");
    }
    //console.log(name1,email1)
    else
    {
    localStorage.setItem("Name:",name1);
    localStorage.setItem("email-add",email1);
    console.log(localStorage.getItem("Name:"));
    console.log(localStorage.getItem("email-add"));
    }
}