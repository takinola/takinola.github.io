console.log('ver 9')
console.log(jQuery.fn.jQuery + ' version');

const jQuery19 = jQuery.noConflict(true);
(function(jQuery){
  if(jQuery19.ui){console.log('jQuery ui loaded...')}
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
