var form = document.getElementById('my-form');
const userList = document.querySelector('#users');
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
    //e.preventDefault();
    i = i.toString()
    let obj = {
        Name : name1,
        email : email1
    };
    let key = "obj"+i;
    let value = JSON.stringify(obj);
    localStorage.setItem(key,value);
    console.log(JSON.parse(localStorage.getItem((key))))
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name1}: ${email1}`));
    userList.appendChild(li);
    i++;
    }
}