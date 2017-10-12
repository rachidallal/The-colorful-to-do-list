// check off spesific todos by clicking , and setting color
$("ul").on("click", "li", function () {
	//make li`s that are clicked gray and with a line through.
$(this).toggleClass("completed"); 
});


// click on trash to delete todo 
$("ul").on ("click" ,"span", function (event) {
$(this).parent().fadeOut (500,function() {
$(this).remove()

});
event.stopPropagation (); //stops span to bubble up to other elements
});

$("input[type='text']").keypress(function(enterpress){
if (event.which===13) {
	//taking todo text from input
	var todoText= $(this).val();
    //making input empty after hitting enter
    $(this).val(" "); 

	//putting that value inside the todo list.
	//create new li and add to ul. 
	$("ul").append (" <li> <span> <i class= 'fa fa-trash'> </i> </span> " + todoText + " </li> ")

}

});

$(".fa-list").on ("click", function () {
$("input[type='text']").fadeToggle(500);
$("ul").fadeToggle(500);

}); 
