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
 
<script language="JavaScript">
<!--
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
	jQuery("form#reg").validationEngine('attach',{   // attach ,detach , validate
		autoPositionUpdate:true ,
		autoHidePrompt:true ,
		autoHideDelay:5000
		//validateNonVisibleFields: true,
		//scroll: false,
	});
 	
});
// -->
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
            <p>&nbsp;&nbsp;&nbsp;<font face="맑은 고딕"><b>&nbsp;&nbsp;◆ 정치부</b></font></p>
            <form action="writing" id="reg" method="post">
            <table border="1" align="center" width="640" bgcolor="#FAFAFA" bordercolor="#CCCCCC" cellspacing="0" bordercolordark="#999999" bordercolorlight="white">
                <tr>
                    <td width="111" bgcolor="#D7E4BD" height="35">
                        <p align="center"><font size="2" face="맑은 고딕"><b>제 목</b></font></p>
				</td>
                    <td width="519" bgcolor="#FAFAFA">
                            <p align="left">&nbsp;&nbsp;<font size="2" face="맑은 고딕">
                            <input type="text" name="TITLE" maxlength="120" size="65" 
                            class="validate[required]"
                            style="background-color:rgb(235,241,222); padding:2px; border-width:1px; border-color:rgb(153,153,153); border-style:solid;">
							</p>
					</td>
                </tr>
                <tr>
                    <td width="111" height="35" bgcolor="#D7E4BD">
                        <p align="center"><font size="2" face="맑은 고딕"><b>작성자</b></font></p>
					</td>
                    <td width="519" bgcolor="#FAFAFA">
                        <p align="left">&nbsp;&nbsp;<font size="2" face="맑은 고딕">
                        <input type="text" name="WRITER" maxlength="30" size="16" 
                         class="validate[required]"
                         style="background-color:rgb(232,236,216); padding:2px; border-width:1px; border-color:rgb(153,153,153); border-style:solid;">
						</p>
					</td>
                </tr>
                <tr>
                    <td width="111" height="35" bgcolor="#D7E4BD">
                        <p align="center"><font size="2" face="맑은 고딕"><b>엠바고</b></font></p>
					</td>
                    <td width="519" bgcolor="#FAFAFA">
                        <p>&nbsp;&nbsp;
                        	<select name="EMBAGO" size="1" style="font-family:'맑은 고딕'; font-size:10pt; background-color:rgb(235,241,222);">
	                            <option value="0" selected>비설정</option>
	                            <option value="1">설정</option>
							</select> </p>
					</td>
                </tr>
                <tr>
                    <td width="111" height="66" bgcolor="#D7E4BD">
                        <p align="center"><font size="2" face="맑은 고딕"><b>기사</b></font></p>
					</td>
                    <td width="519" bgcolor="#FAFAFA" style="padding:10px;">
                        <p>&nbsp;<textarea name="CONTENT" rows="15" cols="61"  class="validate[required]"
                        style="background-color:rgb(232,236,216); padding:2px; border-width:1px; border-color:rgb(153,153,153); border-style:solid;"></textarea></p>
                        <p align="center">
	                        <input type=image src="${ctx_res}/img/btn_write.jpg" width="65" height="20" border="0" hspace="10">
	                        <img src="${ctx_res}/img/btn_pause.jpg" width="65" height="20" border="0" hspace="10">
	                        <a href='list'><img src="${ctx_res}/img/btn_cancel.jpg" width="65" height="20" border="0" hspace="10"></a>
                        </p>
                        <p>&nbsp;</p>
					</td>
                </tr>
            </table> 
            </form>
 
</td>
    </tr>
</table>
</body>

</html>
