document.onload(function()=>{
  console.log('yay - script tag loaded')
  jQuery(function() {
    console.log(jQuery.datepicker)
    jQuery("#date").datepicker( { 
      minDate: +1, 
      maxDate: '+2M',
      beforeShowDay: jQuery.datepicker.noWeekends
    });
  });
})
