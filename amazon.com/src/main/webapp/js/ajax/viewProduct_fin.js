
function viewProduct() {
	if(localStorage.getItem("viewingProduct") != "") {
		var api = "http://localhost:8055/amazon.com/webapi/ProductController/productsById/"+localStorage.getItem("viewingProduct");
		var product;

		//Ajax Call for getting individual product
		$.get(api , function(data, status){
		    product = data[0];
		    
		    
		    console.log(product);
		    
		    $("#category_display").html("You are Here: <b>" + product.category.super_cat.categoryname + "</b> > <b>" + product.category.categoryname + "</b>");
		    var api2 = "http://localhost:8055/amazon.com/webapi/UserController/checkSellerDetails/"+product.seller;
		    $.get(api2 , function(data, status){
		    	console.log(data);
			    $('#sellerInfo').html("User ID: " + data.userid + "<br>Company Name : " + data.companyname + "<br>Contact No: "+data.contact_no+ "<br>Address: "+data.address);
			});
		    
		    
		    localStorage.setItem("seller_id", product.seller);
		    
		    var customString = "<table>";
		    if (product.category.temp1_name != "" || product.category.temp1_name != null)
				customString += "<tr><td>" + product.category.temp1_name + ":</td><td>" + product.temp1_value +"</td></tr>";

			if (product.category.temp2_name != "" || product.category.temp2_name != null)
				customString += "<tr><td>" + product.category.temp2_name + ":</td><td>" + product.temp2_value +"</td></tr>";

			if (product.category.temp3_name != "" || product.category.temp3_name != null)
				customString += "<tr><td>" + product.category.temp3_name + ":</td><td>" + product.temp3_value +"</td></tr>";

			if (product.category.temp4_name != "" || product.category.temp4_name != null)
				customString += "<tr><td>" + product.category.temp4_name + ":</td><td>" + product.temp4_value +"</td></tr>";

			if (product.category.temp5_name != "" || product.category.temp5_name != null)
				customString += "<tr><td>" + product.category.temp5_name + ":</td><td>" + product.temp5_value +"</td></tr>";

			if (product.category.temp6_name != "" || product.category.temp6_name != null)
				customString += "<tr><td>" + product.category.temp6_name + ":</td><td>" + product.temp6_value +"</td></tr>";

		    var label = product.description + "<br><br>" + customString;
		    
		   

			$.ajax({
			    url: "http://localhost:8055/amazon.com/webapi/LabelController/allLabels/"+localStorage.getItem("viewingProduct"),
			    type: 'GET',
			    async: false,
			    success: function(data1){ 
			    for(var x = 0 ; x < data1.length; x++){
		    		label = label + "<tr><td>" + data1[x].lname + ":</td><td>" + data1[x].lvalue +"</td></tr>";
					
		    	}
				    
			    } 
			});
			
		    label = label + "</table>";
		    
		    

		    //Inserting places to div
		    console.log("heree" + product.productid);
		    $('#productId').html(product.productid);
		    $('#productTitle').html(product.productname);
		    $('#originalPrice').html(product.price);
		    $('#discountedPrice').html(product.discountedprice);
//		    $('#description').html(product.description + "<br><br>" +
//		    		"<table>" +
//		    			"<tr><td>" + product.category.temp1_name + ":</td><td>" + product.temp1_value +"</td></tr>" +
//		    			"<tr><td>" + product.category.temp2_name + ":</td><td>" + product.temp2_value +"</td></tr>" +
//		    			"<tr><td>" + product.category.temp3_name + ":</td><td>" + product.temp3_value +"</td></tr>" +
//		    			"<tr><td>" + product.category.temp4_name + ":</td><td>" + product.temp4_value +"</td></tr>" +
//		    			"<tr><td>" + product.category.temp5_name + ":</td><td>" + product.temp5_value +"</td></tr>" +
//		    			"<tr><td>" + product.category.temp6_name + ":</td><td>" + product.temp6_value +"</td></tr>" +
//		    		"</table>");
//		    alert("string" + label);
		    $('#description').html(label);
		    $('#qty_left').html(product.quantityleft);
		    localStorage.setItem('qtyleft', product.quantityleft);
		    $('#itemImage').html("<img src='"+product.product_images[0].url+"'/>");
		    var udata = JSON.parse(localStorage.getItem("userdata"));

		    var responsebirthdate = new Date(udata.dob);
			var currentdate = new Date();

			if(product.offerType == "birthday" && currentdate.getMonth() == responsebirthdate.getMonth() &&  currentdate.getDate() == responsebirthdate.getDate() ){
				console.log("here");
				var discountRate = product.discountedprice * (100 - product.offerdiscpercent)/100;
				$('#discountedPrice').html("<del>"+product.discountedprice+"</del>");
				$('#birthday_price').html("<hr/>"+product.offerMessage+"<hr/><span class=\"currency\">INR  ₹</span><span class=\"num\" id=\"discountedPrice\">"+discountRate+"</span>");
				console.log("Works");
			}
			else if(product.offerType == "discount" && Date.now() < product.offerEndDate) {
				var discountRate = product.discountedprice * (100 - product.offerdiscpercent)/100;
			    $('#discountedPrice').html("<del>"+product.discountedprice+"</del>");
				$('#birthday_price').html("<hr/>"+product.offerMessage+"<hr/><span class=\"currency\">INR  ₹</span><span class=\"num\" id=\"discountedPrice\">"+discountRate+"</span>");
				$('#expiryDate').html("Expiring On :"+new Date(product.offerEndDate));
			}
			else if(product.offerType == "buy1get1" && Date.now() < product.offerEndDate) {
				//var discountRate = product.discountedprice * (100 - product.offerdiscpercent)/100;
			    //$('#discountedPrice').html("<del>"+product.discountedprice+"</del>");
				$('#birthday_price').html("<hr/>"+product.offerMessage+"<hr/>");
				$('#expiryDate').html("Expiring On :"+new Date(product.offerEndDate));
			}
		   // $('#product_hidden').html("<input type='hidden' name='product_id' value='"+localStorage.getItem("viewingProduct")+"' id='product_id' />");
		});
		
	} else {
		window.location.href = "404.html";
	}
}

