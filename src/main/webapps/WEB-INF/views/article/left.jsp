<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<table border="0" cellpadding="4" width="184" align="center" cellspacing="4">
	<tr>
	    <td width="184" align="center" bgcolor="white" valign="middle" OnMouseOut="namosw_cell_rollout(this)" OnMouseOver="namosw_cell_rollover(this, 'nmsw_linked')" height="35">
	
	      <p align="left"><b><font size="2" face="맑은 고딕">&nbsp;<a href="list">기사 관리</a></font></b></p>
		</td>
	</tr>
	<tr>
	     <td width="184" bgcolor="white" align="center" valign="middle" height="35" OnMouseOut="namosw_cell_rollout(this)" OnMouseOver="namosw_cell_rollover(this, 'nmsw_linked')">
	
	        <p align="left"><b><font size="2" face="맑은 고딕">&nbsp;<a href="write">기사 작성</a></font></b></p>
		</td>
	</tr>
</table>       