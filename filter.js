$("#forall").select(function(e){
    e.preventDefault();
    $("#product1").show();
	$("#product2").show();
	$("#product3").show();
	$("#product4").show();
  });
  $("#lessthan500").select(function(e){
    e.preventDefault(); 
    $(".filters div:not('#product1')").hide();
   $(".filters div:not('#product2')").hide();
   $(".filters div:not('#product3')").hide();
   $(".filters div:not('#product4')").hide();
  });
  $("#between500to1000").select(function(e){
    e.preventDefault(); 
    $("#product1").show();
	 $("#product4").show();
  });
  $("#between1000to2000").select(function(e){
    e.preventDefault(); 
	 $("#product2").show();
  });
  $("morethan2000").select(function(e){
    e.preventDefault(); 
	 $("#product3").show();
  });