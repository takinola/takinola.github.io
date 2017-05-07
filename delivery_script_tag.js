console.log('ver 2')
console.log(jQuery.fn.jquery + ' version - 1');

const jq19 = jQuery.noConflict(true);
(function($){
  console.log($.fn.jquery + ' version - 2');
  if($.ui){console.log('jQuery ui loaded...')}
    else {console.log('jQuery UI not found...')}

  console.log(jQuery.datepicker)

  $("#date").datepicker( { 
    minDate: +1, 
    maxDate: '+2M',
    beforeShowDay: $.datepicker.noWeekends
  });


}(jq19));



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
