
//Busca todas las Marcas y la muestra en un tabla
const getMarcas = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: 'http://localhost:4001/marca'
    }).done(res => {
        console.log(res.listMarca);

        let listMarca = res.listMarca;
        let table = $("#tabla");
        table.append(
            "<tr class='table'>" +
            "<th scope='col'>#</th>" +
            "<th scope='col'>Name</th>" +
            "<th scope='col'>Acciones</th>" +
            "</tr>")

        for (let i = 0; i < listMarca.length; i++) {
            table.append(
                "<tr>" +
                "<td>" + listMarca[i].id + "</td>" +
                "<td>" + listMarca[i].name + "</td>" +
                "<td>" + '<button onclick="getInfo(' + listMarca[i].id + ');" type="button" class="btn btn-primary text-dark" data-bs-toggle="modal" data-bs-target="#detailsMarca"> Detalles</button> </td>' +
                "<td>" + '<button onclick="getInfoUpdate(' + listMarca[i].id + ');" type="button" class="btn btn-warning text-dark" data-bs-toggle="modal" data-bs-target="#updateMarca"> Modificar</button> </td>' +
                "<td>" + '<button onclick="getIdMarca(' + listMarca[i].id + ');" type="button" class="btn btn-danger text-dark" data-bs-toggle="modal" data-bs-target="#deleteMarc"> Eliminar</button> </td>' +
                "</tr>")
        }
    });
};

//Busca todo lo de un ID Marca
const getMarcasById = async id => {
    return await $.ajax({
        type: 'GET',
        url: 'http://localhost:4001/marca/' + id
    }).done(res => res);
};
//Muestra la informcaion
const getInfo = async id => {
    let marca = await getMarcasById(id);

    document.getElementById('idDetails').value = marca.marca[0].id;
    document.getElementById('nameDetails').value = marca.marca[0].name;
    console.log(marca);
};
//Busca y muestra la informacion de una marca para actualizar
const getInfoUpdate = async id => {
    let marca = await getMarcasById(id);

    document.getElementById('id_update_marca').value = marca.marca[0].id;
    document.getElementById('name_update_marca').value = marca.marca[0].name;
};
//Actualiza Marca
const updateMarc = async () => {
    let id = document.getElementById('id_update_marca').value;
    let name = document.getElementById('name_update_marca').value;
    console.log(id);

    $.ajax({
        type: 'POST',
        url: 'http://localhost:4001/marca/update/' + id,
        data: { id, name }
    }).done(function (res) {
        console.log(res);
    });
};
//Busca para eliminar
const getIdMarca = async id => {
    let marca = await getMarcasById(id);
    document.getElementById("id_delete_marca").value =  marca.marca[0].id;

    console.log(id_delete_marca);
    console.log(document.getElementById("id_delete_marca").value);
};
//Elimina la marca
const deleteMarca = async () => {
    let id = document.getElementById("id_delete_marca").value;
    await $.ajax({
        type: 'POST',
        url: 'http://localhost:4001/marca/delete/' + id,
    }).done(res => {
        console.log(res);
    });
};
//Crear una marca
const create_marca = async() =>{
    let name = document.getElementById('name_register_Marca').value;

    await $.ajax({
        type: 'POST',
        url: 'http://localhost:4001/marca/create/',
        data: {name}
    }).done(function(res){
        console.log(res);
    });
};



//AUTOSSS

//Busqueda de la lista de Autos
const getAutos = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: 'http://localhost:4001/autos'
    }).done(res => {
        console.log(res.listAutos);

        let listAutos = res.listAutos;
        let table = $("#tabla2");
        table.append(
            "<tr class='table'>" +
            "<th scope='col'>#</th>" +
            "<th scope='col'>Name</th>" +
            "<th scope='col'>Matricula</th>" +
            "<th scope='col'>yearVerification</th>" +
            "<th scope='col'>Created</th>" +
            "<th scope='col'>Updated</th>" +
            "<th scope='col'>Marca</th>" +
            "<th scope='col'>Status</th>" +
            "<th scope='col'>Acciones</th>" +
            "</tr>")

        for (let i = 0; i < listAutos.length; i++) {

            table.append(
                "<tr>" +
                "<td>" + listAutos[i].id + "</td>" +
                "<td>" + listAutos[i].name + "</td>" +
                "<td>" + listAutos[i].Matricula + "</td>" +
                "<td>" + listAutos[i].yearVerification + "</td>" +
                "<td>" + listAutos[i].dateCreacion + "</td>" +
                "<td>" + listAutos[i].dateUpdate+ "</td>" +
                "<td>" + listAutos[i].Marca + "</td>" +
                "<td>" + listAutos[i].status + "</td>" +
                "<td>" + '<button onclick="getInfoAutos(' + listAutos[i].id + ');" type="button" class="btn btn-primary text-dark" data-bs-toggle="modal" data-bs-target="#detailsAutos"> Detalles</button> </td>' +
                "<td>" + '<button onclick="getInfoAutoUpdate(' + listAutos[i].id + ');" type="button" class="btn btn-warning text-dark" data-bs-toggle="modal" data-bs-target="#updateAutos"> Modificar</button> </td>' +
                "<td>" + '<button onclick="getIdAutos(' + listAutos[i].id + ');" type="button" class="btn btn-danger text-dark" data-bs-toggle="modal" data-bs-target="#deleteAuto"> Eliminar</button> </td>' +
                "</tr>")
        }
    });
};
//Buscar la informacion de un auto para mostrar en el model detalles
const getInfoAutos = async id => {
    let auto = await getAutosById(id);          

    document.getElementById('name_auto').value = auto.auto[0].name;
    document.getElementById('Matricula').value = auto.auto[0].Matricula;
    document.getElementById('yearVerification_details').value = auto.auto[0].yearVerification;
    document.getElementById('dateCreacion_details').value = auto.auto[0].dateCreacion;
    document.getElementById('dateUpdate_details').value = auto.auto[0].dateUpdate;
    document.getElementById('Marca_details').value =  auto.auto[0].Marca;
    document.getElementById('status_details').value = auto.auto[0].status ? "Activo" : "Inactivo";
    console.log(auto);
};
//BUsca la informacion
const getAutosById = async id => {
    return await $.ajax({
        type: 'GET',
        url: 'http://localhost:4001/autos/' + id
    }).done(res => res);
};
//busca la informacion  y la coloca en el modal

const getInfoAutoUpdate = async id => {
    let auto = await getAutosById(id);

    document.getElementById('id_update_auto').value = auto.auto[0].id;
    document.getElementById('name_auto_update').value = auto.auto[0].name;
    document.getElementById('Matricula_update').value = auto.auto[0].Matricula;
    document.getElementById('Marca_update').value = auto.auto[0].Marca;
    console.log(auto);
};
//Actualiza los datos
const updateAutos = async () => {
    let id = document.getElementById('id_update_auto').value;
    let name = document.getElementById('name_auto_update').value;
    let Matricula = document.getElementById('Matricula_update').value;
    let Marca = document.getElementById('Marca_update').value;
    console.log(id);

    $.ajax({
        type: 'POST',
        url: 'http://localhost:4001/autos/update/' + id,
        data: { name, Matricula ,Marca }
    }).done(function (res) {
        console.log(res);
    });
};
//Lleva el id al delete
    const getIdAutos = async id => {
    let auto = await getAutosById(id);
    document.getElementById("id_delete_auto").value =  auto.auto[0].id;
    console.log(id_delete_auto);
    console.log(document.getElementById("id_delete_auto").value);
};
//Elimina el auto
const deleteAuto = async () => {
    let id = document.getElementById("id_delete_auto").value;
    await $.ajax({
        type: 'POST',
        url:'http://localhost:4001/autos/delete/' + id,
    }).done(res => {
        console.log(res);
    });
};
//Crear Auto
const create_Auto = async() =>{
    let name = document.getElementById('name_register_auto').value;
    let Matricula = document.getElementById('Matricula_register_auto').value;
    let yearVerification = document.getElementById('yearVerification_register_auto').value;
    let Marca = document.getElementById('Marca_register_auto').value;

    await $.ajax({
        type: 'POST',
        url: 'http://localhost:4001/autos/create',
        data: {name, Matricula, yearVerification,Marca }
    }).done(function(res){
        console.log(res);
    });
};