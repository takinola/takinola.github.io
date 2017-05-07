console.log('ver 1')
console.log(jQuery.fn.jquery + ' version - 1');

const jQuery19 = jQuery.noConflict(true);
(function(jQuery){
  console.log(jQuery.fn.jquery + ' version - 2');
  if(jQuery.ui){console.log('jQuery ui loaded...')}
    else {console.log('jQuery UI not found...')}

  console.log(jQuery.datepicker)

  jQuery("#date").datepicker( { 
    minDate: +1, 
    maxDate: '+2M',
    beforeShowDay: jQuery.datepicker.noWeekends
  });


}(jQuery19));



document.onreadystatechange = function(){
  if(document.readyState === 'complate'){
    console.log('yay - script tag loaded')
    jQuery(function() {
      console.log(jQuery.datepicker)
      jQuery("#date").datepicker( { 
        minDate: +1, 
        maxDate: '+2M',
        beforeShowDay: jQuery.datepicker.noWeekends
      });
    });
  } else {
    console.log('waiting on document complete...' + document.readyState);
  }
}
