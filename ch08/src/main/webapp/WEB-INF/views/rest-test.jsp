<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){
	$("#create").click(function(){
		var vo = {
				name: "흑임자",
				password: "1027",
				email: "imja@gmail.com",
				gender: "female"
		};
		
		
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user",
			async: true,
			type: 'post',		//요청 method
			dataType: 'json',	//받을 포맷
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response) {
				console.log(response);
				
			}
		});
	});
	
	
	$("#read").click(function(){
		var vo = {
				name: "흑임자",
				password: "1027",
				email: "imja@gmail.com",
				gender: "female"
		};
		
		
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user/10",
			async: true,
			type: 'get',		//요청 method
			dataType: 'json',	//받을 포맷
			contentType: 'application/json',
// 			data: JSON.stringify(vo),
			success: function(response) {
				console.log(response);
			}
		});
	});
	
	
	$("#update").click(function(){
		var vo = {
				name: "둘리",
				password: "1234",
				gender: "female"
		};
		
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user/10",
			type: 'put',		//요청 method
			dataType: 'json',	//받을 포맷
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response) {
				console.log(response);
			}
		});
	});
	
	
	
	$("#delete").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user/10",
			type: 'delete',		//요청 method
			dataType: 'json',	//받을 포맷
			contentType: 'application/x-www-form-urlencoded',
			data: "password=1234",
			success: function(response) {
				console.log(response);
			}
		});
	});
	
	
	
});
</script>
</head>
<body>
	<h1>AJAX Test - Restful API</h1>
	
	<button id="create">Create(post)</button>
	<br><br>
	
	<button id="read">Read(get)</button>
	<br><br>
	
	<button id="update">Update(put)</button>
	<br><br>
	
	<button id="delete">Delete(delete)</button>
	<br><br>
	
</body>
</html>