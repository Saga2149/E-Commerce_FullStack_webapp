<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>

<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="author" content="`-ecommerce by Vosidiy">

<title>Amazon OOAD Project</title>
<script src="js/jquery-1.11.0.min.js" type="text/javascript"></script>


<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">

<!-- jQuery -->
<script src="js/jquery-2.0.0.min.js" type="text/javascript"></script>

<!-- Bootstrap4 files-->
<script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>

<!-- Font awesome 5 -->
<link href="fonts/fontawesome/css/fontawesome-all.min.css" type="text/css" rel="stylesheet">

<!-- plugin: owl carousel  -->
<link href="plugins/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
<link href="plugins/owlcarousel/assets/owl.theme.default.css" rel="stylesheet">

<script src="plugins/owlcarousel/owl.carousel.min.js"></script>

<!-- custom style -->
<link href="css/ui.css" rel="stylesheet" type="text/css"/>
<link href="css/responsive.css" rel="stylesheet" media="only screen and (max-width: 1200px)" />
<link href="css/custom.css" rel="stylesheet"  />




<script src="scripts/default.js" type="text/javascript"></script>






<!-- jQuery -->

<!-- Data Table -->
		<script src="js/jquery.dataTables.js" type="text/javascript"></script>
		<link type="text/css" rel="stylesheet" href="css/jquery.dataTables.css">
<script type="text/javascript">


/*function sellerProducts(id) {
	localStorage.setItem("admin_seller_id", id);
	window.location.href ="prod_sell.html";
}*/
$(document).ready(function() {
    	
    	//alert("Call success");
    	
    	/*var obj = {
    			fullname	: $("#fullname").val(),
    			email 		: $("#email").val(),
    			phonenumber	: $("#phonenumber").val(),
    			password1	: $("#password1").val(),
    			dob 		: $('#dob').val().toString()
    	};
    	*/
    	
    	
		var i =1;
    	
    	//var userId = localStorage.getItem("admin_seller_id");
    	var api = "http://localhost:8055/amazon.com/webapi/AdminController/displayseller";
    	/*
    	$.get(api , function(data, status){
			data.forEach(function(item){
				
					$('#prod_sellerList').append("<tr><td>"+item.productlist[i].id+"</td><td>"+item.productlist[i].productname+"</td><td>"+item.productlist[i].price+"</td><td>"+item.productlist[i].discountedprice+"</td><td>"+item.productlist[i].quantityleft+"</td><td>"+item.productlist[i].description+"</td><td>"+item.productlist[i].category.super_cat.categoryname+"</td><td>"+item.productlist[i].category.categoryname+"</td><td><img src="+item.productlist[i].product_images[0].url+" style= 'width:100px;height:100px;'></td></tr>")
					
				i=i+1;				    		
			});		
		});*/
		
    	$.get(api , function(data, status){
    		
    		//alert(data.id);
			data.forEach(function(item){
				var count=0;
				$('#seller_repo').append("<tr><td>"+i+"</td><td>"+item.fname+"</td><td>"+item.id+"</td><td>"+item.productlist.length+"</td></tr>")
				i++;
				/*item.forEach(function(prod){
					count++;
				});*/
			});
			
		});
});
</script>

<!--  <script src="js/admin_layout.js" type="text/javascript"></script>  -->
</head>
<body>
<%@include file="header.jsp" %>
<div id="admin_header_container">
</div>
<!--  --------------------------------------------main    body------------------------------------------------------------   -->
 <section class="section-main bg padding-y-sm">
<div class="card">
  <div class="card-body" >
  <h4 class="card-title mt-3 text-center">Products Seller Table</h4>
  
  <table id="prod_sellertable" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Sr no.</th>
                <th>Seller name</th>
                <th>Seller ID</th>
                <th>Total Item</th>
            </tr>
        </thead>
        <tbody id="seller_repo">
        	
        </tbody>
  </table>
  	
  	    
    
</section>
<a href="home.jsp">
<button class="btn btn-warning btn-block" type="button" > Home </button>
</a>
 <!--  ---------------------------------------------main    body  end---------------------------------------------------------  -->
 


<div id="admin_footer_container">

</div>
<!-- ========================= FOOTER END // ========================= -->


</body>

</html>
