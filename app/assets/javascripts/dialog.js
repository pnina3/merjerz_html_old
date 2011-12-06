$(function() {
	$('.dialog_but').each(function() {
        //create a local scope of a dialog variable to attach
        var $dialog;
 
        //create the dialog for the div.dialog_content standing next to the anchor element
        //we make the autoOpen false so that it can be reusable
        //also we set the modal = true to appear the dialog as a modal prompt
        $dialog = $(this).next('div.dialog_content').dialog({modal: true, autoOpen: false, width: 400});
        //now attach the open even of the dialog to the anchor element
        $(this).click(function(e) {
            //prevent the anchor element to go to the hyperlinked page
            e.preventDefault();
 
            //open the dialog
            $dialog.dialog('open');
        });
    });
			
});