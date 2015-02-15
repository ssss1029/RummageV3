(function ($) {
  // custom css expression for a case-insensitive contains()
  function filter(element,list) {
      var value = $(element).val().toLowerCase();
      var $li = $(list).children(":visible");

      $li.hide();
      $li.filter(function() {
          return $(this).text().toLowerCase().indexOf(value) > -1;
      }).show();
  }  
  $(function () {
    $('#filter_services').keyup(function() {
      filter(this, "#services"); 
    });
    $('#filter_accounts').keyup(function() {
      filter(this, "#accounts"); 
    });

  });
}(jQuery));