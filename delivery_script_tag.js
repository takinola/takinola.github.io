console.log('ver 7')
if($.ui){console.log('jQuery ui loaded...')}
  else {console.log('jQuery UI not found...')}

window.setTimeout(function() {
  console.log(jQuery.datepicker)
  jQuery("#date").datepicker( { 
    minDate: +1, 
    maxDate: '+2M',
    beforeShowDay: jQuery.datepicker.noWeekends
  });
}, 4000);

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
