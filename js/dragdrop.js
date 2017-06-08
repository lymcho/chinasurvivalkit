$(document).ready(function(){

$('.content').sortable();
$('.collection .container').draggable({
	  connectToSortable: '.content',
	  helper: 'clone',
	});

$('.collection').droppable({
  
  drop: function(e, ui) {
    if( $( ui.draggable ).parent().hasClass( 'content' ) )  {
     $(ui.draggable).remove(); 
    }
  }
});

});