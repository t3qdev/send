<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ include file="../top.jsp"%>
<style>
<!--
.nmsw_linked { color:white; background-color:rgb(94,150,194); }
-->
</style>


<style type="text/css">
 <!--
a:link { text-decoration:none; color:#000000; }
 a:visited { text-decoration:none; color:#000000; }
 a:active { text-decoration:none; color:#000000; }
 a:hover { text-decoration:none; color:#ffffff; }
 -->
 </style>
 
<script language="JavaScript"><!--
function namosw_cell_rollover(cell, classname) {
  if (document.all || document.getElementById) {
    cell.classBackup = cell.className;
    cell.className   = classname;
  }
}

function namosw_cell_rollout(cell)
{
  if (document.all || document.getElementById) {
    cell.className   = cell.classBackup;
  }
}
 
$(function(){
	$("#paging").SHPaging({
		total_row : ${paging.TOTAL},     //총 글수
		rows_per_page : ${paging.ROW_PER_PAGE} , // 페이지당 글수
		current_page : ${paging.PAGE} ,   // 현 페이지
		display_next : true ,   // 다음 버턴
		display_skip : false    // 다음 10페이지 버턴
	});
		
});		
var post_data = ${POST_DATA};  
function go_page(page){
	$.extend(post_data,{"PAGE":page});	
	var $Form = $(document.createElement('form')).attr("target","_top").attr("method","post");
	 $.each(post_data ,function(jName,jValue){
			$Form.append( $(document.createElement('input')).attr("type","hidden").attr("name", jName ).val(jValue));
	 }); 
	 $Form.submit();
}
function go_view(json ){
 	$.extend(post_data,json);	
	var action = 'ptnView/'+post_data.ISSUE_HASH
	var $Form = $(document.createElement('form')).attr("target","_top").attr("method","post").attr("action",action);
	 $.each(post_data ,function(jName,jValue){
			$Form.append( $(document.createElement('input')).attr("type","hidden").attr("name", jName ).val(jValue));
	 }); 
	 $Form.submit();
}
//-->
</script>
</head>

<body bgcolor="whitesmoke" text="black">
<table border="0" width="900" align="center">
    <tr>
        <td width="200" bordercolor="white" bgcolor="#666666" height="50" valign="middle">
            <p align="center"><b><font size="4" face="맑은 고딕" color="white">통합 CMS</font></b></p>
        </td>
        <td width="700" height="50" bgcolor="#CCCCCC" bordercolor="white" valign="middle">
           <b><font face="맑은 고딕"><span style="font-size:16pt;">&nbsp;&nbsp;&nbsp;</span><span style="font-size:14pt;">&nbsp;기사 관리</span></font></b> 
        </td>
    </tr>
    <tr>
        <td width="200" bordercolor="white" height="5"></td>
        <td width="700" bordercolor="white" height="5"></td>
    </tr>
    <tr>
        <td width="200" bordercolor="white" height="700" valign="top" bgcolor="#ACD6F6">

            <p align="center">&nbsp;</p>
			<!-- 레프트 -->
			<%@ include file="left.jsp"%>
			<!-- 레프트 -->
			
    
            
             <p align="center">&nbsp;</p>

		</td>
        <td width="700" bordercolor="white" align="left" valign="top" bgcolor="white">
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;<font face="맑은 고딕"><b>&nbsp;&nbsp;◆ 데스크</b></font></p>
            <table border="1" align="center" width="640" bgcolor="#FAFAFA" bordercolor="#CCCCCC" cellspacing="0" bordercolordark="#999999" bordercolorlight="white">
                <tr>
                    <td width="44" bgcolor="#D7E4BD" height="35">
                        <p align="center"><font size="2" face="맑은 고딕"><b>순번</b></font></p>
</td>
                    <td width="356" bgcolor="#D7E4BD">
                        <p align="center"><font size="2" face="맑은 고딕"><b>기사 제목</b></font></p>
</td>
                    <td width="144" bgcolor="#D7E4BD">
                        <p align="center"><font size="2" face="맑은 고딕"><b>등록일시</b></font></p>
</td>
                    <td width="78" bgcolor="#D7E4BD">
                        <p align="center"><font size="2" face="맑은 고딕"><b>부서</b></font></p>
</td>
                </tr>
                
                <!-- 기사리스트 반복... -->
             	<c:forEach var="list" items="${articleList}" varStatus="sts">   
                <tr>
                    <td width="44" height="35">
                        <p align="center"><font size="2" face="맑은 고딕"><b>${paging.CNT - sts.index}</b></font></p>
					</td>
                    <td width="356">
                        <p align="left"><font size="2" face="맑은 고딕"><a href="view/${list.IDX}">${list.TITLE}</a></font></p>
					</td>
                    <td width="144">
                        <p align="center"><font size="2" face="맑은 고딕">${list.REGDATE}</font></p>
					</td>
                    <td width="78" align="center" valign="middle">
                        <p align="center"><font size="2" face="맑은 고딕">${list.WRITER}</font></p>
					</td>
                </tr>
                </c:forEach> 

            </table>
            <div id="paging"></div>

 
</td>
    </tr>
</table>



</body>

</html>
