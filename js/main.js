'use strict';
/*
X 1.- Obtener los elementos que necesito de HTML (campos de entrada -> inputs || Campos de salida -> tabla y botón)

X 2.- Escuchar el evento click sobre el botón
X 3.- Crear la función para pintar en la tabla
X 4.- Crear la función para obtener los datos del cliente
X 5.- Refactorizar el código creando objetos (clientData -> con los valores de los input dentro para que me retorne un único valor)
*/

const inputId = document.querySelector('.js_id');
const inputName = document.querySelector('.js_name');
const inputBusiness = document.querySelector('.js_business');
const inputContact = document.querySelector('.js_contact');
const inputBtn = document.querySelector('.js_button');
const table = document.querySelector('.js_table');

function GetClientData() {
    const clientData = {};

    clientData.id = inputId.value;
    clientData.name = inputName.value;
    clientData.business = inputBusiness.value;
    clientData.contact = inputContact.value;
    return clientData;
}
function paintHTML(client) {

    table.innerHTML += `<tr>
    <td>${client.id}</td>
    <td>${client.name}</td>
    <td>${client.business}</td>
    <td>${client.contact}</td>
  </tr>`;
}

function handleClick(event) {
    event.preventDefault();
    const client = GetClientData();
    paintHTML(client);
}

inputBtn.addEventListener('click', handleClick);
