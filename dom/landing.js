$(document).ready(function(){
    /*agregar estilos css a un elemento del dom*/
    let parallax = $("#parallax");
    //console.log(parallax);
    let objParallax = {
        "padding": "0",
        "margin":"0"
    }
    //un solo atributo css
    //$("#parallax").css("height","500px"); 
    //varios estilo (objeto)
    //$("#parallax").css(objParallax).height(500);
    $("#parallax").addClass("addParallax")
    //$("#parallax").removeClass("addParallax")
    if($("#parallax").hasClass("addParallax")){
        //console.log("si");
    }
    $(".container-fluid,.row").css(objParallax);

    /*Consulta nodo padres e hijos */
    /*$(".row").find("article#pepe").css({
        "color":"red"
    });*/
    let hijos = $(".row").children();
    //console.log(hijos);
    console.log($(".row").parent());

    /*Eventos*/
    $(".cursor").css("cursor","pointer")
    let title = $("#clickTitulo").text();
    $("#clickTitulo").click(function(a){
        /*consulta atributos data*/
        //$(this).data("change");
        let val = $(this).attr("data-change");
        if(val == 1){
            $(this).text("Nuevo titulo");
            $(this).attr("data-change",0);
        }else{
            $(this).text(title);
            $(this).attr("data-change",1);
        }
    });

    $("#hoverTitulo").hover(function(a){
        if($(this).hasClass("hover")){
            $(this).removeClass("hover")
        }else{
            $(this).addClass("hover")
        }
    });

    //focus(function() => dentro)
    $(".hide").hide();
    $("#email").focusin(function(a){ /*entra n el focus*/
        $(this).attr("disabled",false);
        $(".hide").hide();
    });

    $("#email").focusout(function(a){ /*sale del focus*/
        let value = $(this).val();
        $(this).attr("disabled",true);
        console.log(value);  
        //append al final del nodo
        $(".mensaje").prepend(
            $("<div>",
                {class:"nodo-nuevo"}).text(
                    `Tu escribiste: ${value}`)
            .css("color","green"))
        $(".hide").show();
    });
});