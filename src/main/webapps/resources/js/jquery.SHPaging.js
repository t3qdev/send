/*
수환이가 만든 jQuery Paging  Version : 0.1
  2010.11.15 밤 1시

사용은
 $(function(){
  $("#paging").SHPaging({
   total_row : 100,     //총 글수
   rows_per_page : 10 , // 페이지당 글수
   current_page : 1 ,   // 현 페이지
   img_folder : "/lib/pg_skin/skin1",
   page_link : "?page=",
   display_next : true
  });
 });
*/
(function($){
 $.fn.SHPaging = function(options) {
  var opt ={
   total_row : 0,
   rows_per_page : 10 ,
   current_page : 1 ,
   img_folder : "/lib/pg_skin/skin1",
   page_link : "?page=",
   display_next : true
  };
  $.extend(opt,options); 
  var total_page   = Math.ceil(opt.total_row / opt.rows_per_page);
  total_page = (total_page) ? total_page : 1 ;
  return  this.each(function(){
   var el = $(this);
   el.empty();
   //el.append("<link rel='stylesheet' type='text/css' href='/lib/suhan_paging.css'>");
   var g_q = "<table border=0 cellpadding=0 cellspacing=0 id='navi_table'><tr>";
   var line = "<td  width=1 nowrap bgcolor=#cccccc></td>";
   var g_p1 = "<IMG src='"+opt.img_folder+"/prevsk_yes.gif' border='0' ALIGN=ABSMIDDLE>";
   var g_p2 = "<IMG src='"+opt.img_folder+"/prevsk_no.gif' border='0' ALIGN=ABSMIDDLE>";
   var g_py = "<IMG src='"+opt.img_folder+"/prev_yes.gif' border='0' ALIGN=ABSMIDDLE>";
   var g_pn = "<IMG src='"+opt.img_folder+"/prev_no.gif' border='0' ALIGN=ABSMIDDLE>";
   var g_ny = "<IMG src='"+opt.img_folder+"/next_yes.gif' border='0' ALIGN=ABSMIDDLE>";
   var g_nn = "<IMG src='"+opt.img_folder+"/next_no.gif' border='0' ALIGN=ABSMIDDLE>";
   var g_n1 = "<IMG src='"+opt.img_folder+"/nextsk_yes.gif' border='0' ALIGN=ABSMIDDLE>";
   var g_n2 = "<IMG src='"+opt.img_folder+"/nextsk_no.gif' border='0' ALIGN=ABSMIDDLE>";
   // 뒤로 스킵
   if(opt.current_page < opt.rows_per_page +1) { 
     g_q += "<td id=td_nolink>" + g_p1 + "</td>" ; 
   }else{ 
    var pp = parseInt((opt.current_page -1)/ opt.rows_per_page )*opt.rows_per_page; 
     g_q += "<td id=td_link  onclick=\"location.replace('"+opt.page_link+pp+"');\">"+g_p2+"</td>" ;
   }
   if( opt.display_next ){
   // 이전
      if(opt.current_page>1){
     g_q +=  "<td id=td_link onclick=\"location.replace('"+opt.page_link+( opt.current_page -1)+"');\">"+g_py+"</td>" ;
      }else{
     g_q +=  "<td id=td_nolink>"+ g_pn +"</td>" ; 
      }
   }
   var st1 = parseInt((opt.current_page-1)/ opt.rows_per_page)*opt.rows_per_page + 1;
   var st2 = st1 + opt.rows_per_page;
   for(var jn = st1; jn < st2; jn++)
   if ( jn <= total_page )
   (jn == opt.current_page)? g_q += line +"<td id=mytd onMouseOver=\"this.style.background='#f7f7f7'\" onMouseOut=\"this.style.background=''\" align=center onClick=\"location.replace('"+opt.page_link+jn+"');\"><font color=#ff7635><b>"+jn+"</b></font></td>" : g_q += line+"<td id=mytd onMouseOver=\"this.style.background='#f7f7f7'\" onMouseOut=\"this.style.background=''\" align=center onclick=\"location.replace('"+opt.page_link+jn+"');\"><b>"+jn+"</b></td>" ;
   g_q += line;
   if( opt.display_next ){
   // 다음 
      if(  opt.current_page  < total_page){
     g_q +=  "<td id=td_link  onclick=\"location.replace('"+opt.page_link+(opt.current_page+1)+"');\">"+g_ny+"</td>";
      }else{
     g_q += "<td id=td_nolink>"+ g_nn + "</td>";   
      }
   }
  //다음 스킵
   if( total_page < opt.rows_per_page  || total_page < jn) { 
    g_q +=   "<td id=td_nolink>"+ g_n1 + "</td>"; 
   }else{
    var np = jn; 
    g_q += "<td id=td_link onclick=\"location.replace('"+opt.page_link+np+"');\">"+g_n2+"</td>";
   }
   g_q +="</tr></table>";
   el.append(g_q);
   //return el;
  });
  
 };
})(jQuery);
