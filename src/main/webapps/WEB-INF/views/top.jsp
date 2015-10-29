<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="ctx_res" value="${ctx}/resources"></c:set>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>뉴스데모</title>
<script type="text/javascript" src="${ctx_res}/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${ctx_res}/js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="${ctx_res}/js/jquery-ui.min.js"></script>
<link rel="stylesheet" href="${ctx_res}/css/ui/jquery-ui.min.css" />

<script type="text/javascript" src="${ctx_res}/js/jquery.placeholder.min.js"></script>

<script type="text/javascript" src="${ctx_res}/js/jquery.validationEngineM.js?v=2"></script>
<script type="text/javascript" src="${ctx_res}/js/jquery.validationEngine-ko.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx_res}/css/validationEngine/validationEngine.jquery.css" />

<script src="${ctx_res}/js/jquery.SHVirtualForm.js"></script>
<script src="${ctx_res}/js/jquery.SHVirtualSubmit.js"></script>
<script src="${ctx_res}/js/jquery.SHPaging.post.js"></script>
<link rel="stylesheet" type="text/css" href="${ctx_res}/css/SHPaging.skin.1.css" />

<script type="text/javascript">
/* $(function(){
    $.ajaxSetup({ cache: false ,async : true, type: "POST",dataType:"json" ,contentType:"application/json"});	
}); */
</script>
</head>
 