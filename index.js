// const tableBody = document.getElementById('data_table');
// let users = JSON.parse(localStorage.getItem('users')) || [];

// function add(){
//     document.querySelector('.create_form').style.display = "block";
//     document.querySelector('.add_div').style.display = "none";
// }


// function addUser(){
//     const fnameInput = document.getElementById('fname');
//     const lnameInput = document.getElementById('lname');
//     const emailInput = document.getElementById('email');
//     const phoneNumberInput = document.getElementById('number');


//     const user = {
//         fname: fnameInput.value,
//         lname: lnameInput.value,
//         email: emailInput.value,
//         number: phoneNumberInput.value,
//     };
//     users.push(user);


//  localStorage.setItem('users', JSON.stringify(users));
//     renderUsers();
//     fnameInput.value = "";
//     lnameInput.value = "";
//     emailInput.value = "";
//     phoneNumberInput.value = "";
// };

// function renderUsers(){
//     const tableBody = document.querySelector('#users .data_table');
//     tableBody.innerHTML = "";

//     users.forEach(user => {
//         const row = document.createElement('tr');
//         const fnameCell = document.createElement('td');
//         fnameCell.textContent = user.fname;
//         const lnameCell = document.createElement('td');
//         lnameCell.textContent = user.lname;
//         const emailCell = document.createElement('td');
//         emailCell.textContent = user.email;
//         const numberCell = document.createElement('td');
//         numberCell.textContent = user.number;


//         row.appendChild(fnameCell);
//         row.appendChild(lnameCell);
//         row.appendChild(emailCell);
//         row.appendChild(numberCell);

//         tableBody.appendChild(row);
//     });
// }

// renderUsers();



let data = [
    {id: 1, fname: "debugger", lname: "brandon", email: "yoo@gmail.com", number: 672653913},
    {id: 2, fname: "yoo", lname: "brandon", email: "yoo@gmail.com", number: 672653913}
];

function readAll(){
    localStorage.setItem('object', JSON.stringify(data));
    var tabledata = document.querySelector('#users .data_table');

    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
            <td>${record.fname}</td>
            <td>${record.lname}</td>
            <td>${record.email}</td>
            <td>${record.number}</td>
            <td>
                <button class="edit" onclick={editUsers(${record.id})}>Edit</button>
                <button class="delete" onclick={deleteUsers(${record.id})}>Delete</button>
            </td>
        </tr>`
    ));

    tabledata.innerHTML = elements;
}



function add(){
    document.querySelector('.create_form').style.display = "block";
    document.querySelector('.add_div').style.display = "none";
}


function addUser(){
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const number = document.querySelector('#number').value;

    var newObj = {id: 3, fname: fname, lname: lname, email: email, number: number};
    data.push(newObj);

    document.querySelector('.create_form').style.display = "none";
    document.querySelector('.add_div').style.display = "block";

    readAll();
}


function editUsers(id) {
    document.querySelector('.update_form').style.display = "block";

    var obj = data.find(rec => rec.id === id);
    document.querySelector('.ufname').value = obj.fname;
    document.querySelector('.ulname').value = obj.lname;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.unumber').value = obj.number;
    document.querySelector('.id').value = obj.id;
};


function updateUsers() {
    var id = parseInt(document.querySelector('.id').value);
    var fname = document.querySelector('.ufname').value;
    var lname = document.querySelector('.ulname').value;
    var email = document.querySelector('.uemail').value;
    var number = document.querySelector('.unumber').value;


    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, fname, lname, email, number};

    document.querySelector('.update_form').style.display = "none";

    readAll();
};


function deleteUsers(id) {
    data = data.filter(rec => rec.id !== id);
    readAll();
}