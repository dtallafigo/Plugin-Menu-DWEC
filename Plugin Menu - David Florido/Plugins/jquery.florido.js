(function ($) {
    var metodos = {
        crearNavegador: function (nombre = "navegador") {

            if ($("#" + nombre).length) {
                $("#" + nombre).append("<div class='navegador'></div>");
                $(".navegador").append("<ul id='menu'></ul>");
            } else {
                $(this).append("<div class='navegador'></div>");
                $(".navegador").append("<ul id='menu'></ul>");
            };

        },

        crearMenu: function (nombreMenu) {

            var id = nombreMenu.toLowerCase();
            var espacio = id.indexOf(" ");

            if ($("#" + id).length) {
                console.log("Error: No puedes poner un menu que ya es existente.")
            };

            if (espacio > 0) {
                $("#menu").append("<li id=" + id.substring(0, espacio) + "></li>");
                $("#" + id.substring(0, espacio)).append("<a href='#'>" + nombreMenu + "</a>");
            } else {
                $("#menu").append("<li id=" + id + "></li>");
                $("#" + id).append("<a href='#'>" + nombreMenu + "</a>");
            };
        },

        crearSubMenu: function (nombreSubMenu) {

            var id = nombreSubMenu.toLowerCase();
            var idP = $(this).attr("id");
            var espacio = id.indexOf(" ");

            if ($("#" + id).length) {
                console.log("Error: No puedes poner un submenu que ya existe");
            };

            if ($(this).length) {
                if (espacio > 0) {
                    if ($("." + idP + 1).length) {
                        $("." + idP + 1).append("<p id=" + id.substring(0, espacio) + "></p>");
                        $("#" + id.substring(0, espacio)).append("<a href='#'>" + nombreSubMenu + "</a>");
                    } else {
                        $(this).append("<div class=" + idP + 1 + "></div>");
                        $("." + idP + 1).append("<p id=" + id.substring(0, espacio) + "></p>");
                        $("#" + id.substring(0, espacio)).append("<a href='#'>" + nombreSubMenu + "</a>");
                    }
                } else {
                    if ($("." + idP + 1).length) {
                        $("." + idP + 1).append("<p id=" + id + "></p>");
                        $("#" + id).append("<a href='#'>" + nombreSubMenu + "</a>");
                    } else {
                        $(this).append("<div class=" + idP + 1 + "></div>");
                        $("." + idP + 1).append("<p id=" + id + "></p>");
                        $("#" + id).append("<a href='#'>" + nombreSubMenu + "</a>");
                    }
                }
            } else {
                console.log("Error: el elemento del que cuelga un submenu debe existir.");
            };

            $("#" + idP).mouseenter(function () {
                $("." + idP + 1).fadeIn();
            });

            $("#" + idP).mouseleave(function () {
                $("." + idP + 1).slideUp();
            });
        },

        eliminarMenu: function () {
            $(this).remove();
        }

    };

    $.fn.florido = function (metodo) {

        if (metodos[metodo]) {
            return metodos[metodo].apply(this, Array.prototype.slice.call
                (arguments, 1));
        } else if (typeof metodo === 'object' || !metodo) {
            return metodo.init.apply(this, arguments);
        } else {
            alert('La función ' + metodo + ' no existe en jQuery.tooltip');
        }
    };

})(jQuery);