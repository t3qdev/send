<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

로그인창
 
<form action="j_spring_security_check" method="post">  
<table>
	<tr>
		<td>아이디</td>
		<td><input type="text" name="j_username" maxlength="20"/></td>
		<td rowspan="2"><input type="submit" value="로그인" /></td>
	</tr>
	<tr>
		<td>패스워드</td>
		<td><input type="password" name="j_password" maxlength="20"/></td>
	</tr>	
</table>
</form> 

</body>
</html>