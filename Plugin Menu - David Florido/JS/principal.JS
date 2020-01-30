$(document).ready(function () { 

    $("body").florido('crearNavegador');

    $(".navegador").florido('crearMenu', 'Inicio');
    $(".navegador").florido('crearMenu', 'Quienes Somos');
    $(".navegador").florido('crearMenu', 'Ubicacion');
    $(".navegador").florido('crearMenu', 'Historia');
    $(".navegador").florido('crearMenu', 'Productos');

    $("#quienes").florido('crearSubMenu', 'Nosotros');
    $("#productos").florido('crearSubMenu', 'Impersoras');
    $("#productos").florido('crearSubMenu', 'Ordenadores');

    $("#adios").florido('eliminarMenu');
 });