$(document).ready(function () {
    createFeature();
    removeFeature();
});


function createFeature() {

    $("#addToDo").keypress(function(event){
        texto = $("#addToDo").val()
        if ((event.which == '13') & (texto != "")) {
            createTodoItem(texto);
            $("#addToDo").val("")
        }
    });

}

function removeFeature() {

    removeBtns = $(".fa-trash");

    removeBtns.toArray().forEach((btn) => { 
        $(btn).click( () => { 
            $(btn).parent().parent().remove();
        } ) 
    });

}

function createTodoItem(text){
    newElements = `<li class="list-group-item"><span><i class="fa fa-trash"></i></span> ${text}</li>`;
    $('ul').append($(newElements));
    removeFeature();
}