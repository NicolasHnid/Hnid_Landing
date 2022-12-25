const formElement = document.getElementById('ticket'); 
const typeArray = ["Без екскурсоводу", "З екскурсоводом"];
const timeArray = ["9:00 - 10:10", "12:00 - 13:10", "14:00 - 15:10", "16:00 - 17:10"];

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь данные
    const name = formData.get('name');
    const email = formData.get('email');
    const type = formData.get('type'); 
    const time = formData.get('time'); 
    const date = formData.get('date')
    if (name != "" && email != "" && name.length >= 2) {
        alert("Успішно")
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('time', time);
        localStorage.setItem('type', type);
        localStorage.setItem('date', date);
        document.getElementById("name").style.color = "#777777";
        document.getElementById("nameinput").style.borderColor = "#777777";
        document.getElementById("emaill").style.color = "#777777";
        document.getElementById("email").style.borderColor = "#777777";
    }
    else if (name == "" && email != ""){
        document.getElementById("name").style.color = "red";
        document.getElementById("nameinput").style.borderColor = "red";
    }
    else if (email == "" && name != ""){
        document.getElementById("emaill").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
    }
    else if (name == "" && email == "") {
        document.getElementById("emaill").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("name").style.color = "red";
        document.getElementById("nameinput").style.borderColor = "red";
    }
    else if (name.length <= 1) {
        alert("Ім`я повинно бути більше 1 символу.")
        document.getElementById("name").style.color = "red";
        document.getElementById("nameinput").style.borderColor = "red";
    }
  });

  function SelectElement(id, valueToSelect)
{    
    var element = document.getElementById(id);
    element.value = valueToSelect;
    // element.textContent = valueToSelect
};

function setup() {
    var name = document.getElementById('nameinput');
    var email = document.getElementById('email');
    var type = document.getElementById('types');
    var time = document.getElementById('timeselect');
    var date = document.getElementById('date');
    if (localStorage.getItem('name') != null) {
        name.value = localStorage.getItem('name');
        email.value = localStorage.getItem('email');
        type.value = parseInt(localStorage.getItem('type'));
        time.value = parseInt(localStorage.getItem('time'));
        date.value = localStorage.getItem('date');
        document.getElementById('price').textContent = localStorage.getItem('type') + "00 грн"
    }
};


document.querySelector("#reset").onclick = function(){
    localStorage.clear();
    location.reload();
} 

var select = document.querySelector('#types');
select.addEventListener('change', function() {
    document.getElementById('price').textContent = select.value + "00 грн"
});

setup();