const fullName = prompt(`Введите имя, отчество, фамилию`).trim();

// разделяем строки 
const namesSpaces = fullName.split(" ");

// удаление отступов, прообелов
function deleteSpaces(value) {
    return value != '';
};

const names = namesSpaces.filter(deleteSpaces);
    if (names.length>2){
    const smallFirstName = names[1].toLowerCase(); 
    const userFirstName = smallFirstName[0].toUpperCase()+smallFirstName.slice(1);

    document.querySelector('#userFirstName').value = userFirstName;

    const smallPatronym = names[2].toLowerCase(); 
    const userPatronym = smallPatronym[0].toUpperCase()+smallPatronym.slice(1);

    //Выводим результат в инпуты
    document.querySelector('#userPatronym').value = userPatronym;

    const smallLastName = names[0].toLowerCase();
    const lastName = smallLastName[0].toUpperCase()+smallLastName.slice(1);
    
    // двойная фамилия через -
    const doubleLastName = lastName.split("-"); 

    if (doubleLastName.length !=2){
    let userLastName= lastName;

    document.querySelector('#userSurName').value = userLastName;
    } else {
    const secondLastName = doubleLastName[1];
    const userSecondLastName = secondLastName[0].toUpperCase()+doubleLastName[1].slice(1);
    userLastName = doubleLastName[0] + "-" + userSecondLastName;
    
    // вывод двойной фамилии через -
    document.querySelector('#userLastName').value = userLastName;
    }
    } else {
    const smallFirstName = names[1].toLowerCase();
    const userFirstName = smallFirstName[0].toUpperCase()+smallFirstName.slice(1);

    // вывод 
    document.querySelector('#userFirstName').value = userFirstName;
    document.querySelector('#userPatronym').value = "";

    const smallLastName = names[0].toLowerCase(); 
    const lastName = smallLastName[0].toUpperCase()+smallLastName.slice(1);

    const doubleLastName = lastName.split("-"); 

    if (doubleLastName.length !=2){
    let userLastName= lastName;

    //Вывод
    document.querySelector('#userLastName').value = userLastName;

    } else {
    const secondLastName = doubleLastName[1];
    const userSecondLastName = secondLastName[0].toUpperCase()+doubleLastName[1].slice(1);

    userLastName = doubleLastName[0] + "-" + userSecondLastName;

    //Вывод
    document.querySelector('#userLastName').value = userLastName;
    }};

    document.querySelector("#btn").addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelector('#userFirstName').value = ''; 
    document.querySelector('#userPatronym').value = '';
    document.querySelector('#userLastName').value = '';

    document.getElementById('message').innerHTML = 'make sure it is correct before sending';
    });

// const form = document.querySelector(".form"); 
// form.addEventListener('submit', (event) => { 
//     event.preventDefault();
//     const nameElement=form.querySelector("#userFirstName");
//     let name = nameElement.value;
//     name=name.replace(/(^\s+)|(\s+$)/g,"");
//     name=name[0].toUpperCase()+name.slice(1).toLowerCase();
//     console.log(name.length,name);
//     const name2 = form.querySelector("#userPatronym");
//     const name3 = form.querySelector("#userLastName");
//     nameElement.value=name;
    
// }) 