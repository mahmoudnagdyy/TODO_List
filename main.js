$("h2").slideDown(500);


$(".add input").focus(function(){
    $("h2").slideUp(500);
})



$(".add button").click(function(){
    if($(this).prev().val().trim().length >= 5){
        $(".tasks_cont").append(
            `
            <div class="task">
                <div style="display: flex; flex-direction: column;">
                    <p class="task_text">${$(".add input").val()}</p>
                    <input type="text" style="display: none;">
                </div>
                <div class="task_buttons">
                    <button title="Edit" class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button title="Delete" class="del"><i class="fa-solid fa-trash-can"></i></button>
                    <button title="Save" class="save" style="display: none;"><i class="fa-solid fa-floppy-disk"></i></button>
                </div>
            </div>
            `
        )
        
        $(".add input").val("")
    }
})


$(".tasks_cont").on("click", ".del", function(){
    $(this).parents(".task").remove();
})


$(".tasks_cont").on("click", ".edit", function(){
    $(this).parent().prev().children("p").hide();
    $(this).parent().prev().children("input").val($(this).parent().prev().children("p").text())
    $(this).parent().prev().children("input").show();
    
    $(this).hide().next().hide();
    $(this).siblings(".save").show();
})


$(".tasks_cont").on("click", ".save", function(){
    if($(this).parent().prev().children("input").val().trim().length >= 5){
        $(this).parent().prev().children("input").hide();
        $(this).parent().prev().children("p").show().text($(this).parent().prev().children("input").val().trim())
        $(this).hide().siblings().show();
    }
})