var form = document.getElementById('my-form');
form.addEventListener('submit',addItem);
let i=1;
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
    i = i.toString();
    let key1 = "Name"+i;
    let key2 = "Email"+i;   
    localStorage.setItem(key1,name1);
    localStorage.setItem(key2,email1);
    console.log(localStorage.getItem(key1));
    console.log(localStorage.getItem(key2));
    i++;
    }
}