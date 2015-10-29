/*
수환이가 만든 jQuery Paging  Version : 0.2
  2014.06.17 skin 대신 css 로 변경 	
  2010.11.15 밤 1시                    0.1


사용은
	$(function(){
		$("#paging").SHPaging({
			total_row : 100,     //총 글수
			rows_per_page : 10 , // 페이지당 글수
			current_page : 1 ,   // 현 페이지
			skin_file : "/lib/pg_skin/skin.css",  // 스킨 CSS 파일 위치
			page_link : "?page=",
			display_next : true ,   // 다음 버턴
			display_skip : false    // 다음 10페이지 버턴
		});

	});

	<!--paginate-->
	<div class="paginate">
		<a class="pre_end" href="#">처음</a> 
		<a class="pre" href="#">이전</a> 
		<a href="#">1</a> <strong>2</strong> <a href="#">3</a> <a href="#">4</a>
		<a href="#">5</a> <a href="#">6</a> <a href="#">7</a> <a href="#">8</a>
		<a href="#">9</a> <a href="#">10</a> 
		<a class="next" href="#">다음</a>
		<a class="next_end" href="#">끝</a>
	</div>
	<!--//paginate-->

*/		

(function($){
	$.fn.SHPaging = function(options) {
		var opt ={
			total_row : 0,
			rows_per_page : 10 ,
			current_page : 1 ,
			post_data : {},
			display_next : false ,
			display_skip : true
		};
		$.extend(opt,options);	
		var total_page   = Math.ceil(opt.total_row / opt.rows_per_page);
		total_page = (total_page) ? total_page : 1 ;
		return  this.each(function(){
			var el = $(this);
			el.empty();
			//el.append("<link rel='stylesheet' type='text/css' href='"+ opt.skin_file +"?ver="+Math.random()+"'>");
  
			var outbuff = "<div class='paginate'>";
  
			if( opt.display_skip ){ // 이전 스킵
				if(opt.current_page < opt.rows_per_page +1) { 
					//console.log ( 'opt.current_page' + opt.current_page +  'opt.rows_per_page'+opt.rows_per_page);
					 outbuff += "<a class='pre_end'>처음</a>" ; 
				}else{ 
					var pp = parseInt((opt.current_page -1)/ opt.rows_per_page )*opt.rows_per_page; 
					 outbuff += "<a class='pre_end' href=\"javascript:go_page('"+pp+"');void(0);\">처음</a>" ;
				} 
			}

			if( opt.display_next ){ // 이전
			   if(opt.current_page>1){
				 outbuff +=  "<a class='pre' href=\"javascript:go_page('"+( opt.current_page -1)+"');void(0);\">이전</a>" ;
			   }else{
				 outbuff +=  "<a class='pre'>이전</a>" ; 
			   }
			}

			// 넘버링
			//outbuff +="<div class='page-number'><ol>";

			var st1 = parseInt((opt.current_page-1)/ opt.rows_per_page)*opt.rows_per_page + 1;
			var st2 = st1 + opt.rows_per_page;

			for(var jn = st1; jn < st2; jn++){
				if ( jn <= total_page ){
					outbuff += (jn == opt.current_page)? "<strong>"+jn+"</strong>":"<a href=\"javascript:go_page('"+jn+"');void(0);\">"+jn+"</a>";
				}
			}
			//outbuff +="</ol></div>";

			if( opt.display_next ){ // 다음 스킵
				if( total_page < opt.rows_per_page  || total_page < jn) { 
					outbuff +=   "<a class='next'>다음</a>"; 
				}else{
					var np = jn; 
					outbuff += "<a class='next' href=\"javascript:go_page('"+np+"');void(0);\">다음</a>"; 
				}
			}

			if( opt.display_skip){// 다음 
			   if(  opt.current_page  < total_page){
				 outbuff += "<a class='next_end' href=\"javascript:go_page('"+(opt.current_page+1)+"');void(0);\">끝</a>";
			   }else{
				 outbuff += "<a class='next_end' >끝</a>";   
			   }
			}

			outbuff +="</div>";
			el.append(outbuff);
			//return el;
		});
	},
	$.SHPagingGO = function(options) {
 
		var opt = $.SHPagingUnParam( window.location.search.replace('?','') );
		$.extend(opt,options);	
		location.replace(window.location.pathname + "?" + jQuery.param(opt));  
	},
	$.SHPagingUnParam = function( value ) {
		var params = {}, pieces = value.split('&'), pair, i, l;
		for (i = 0, l = pieces.length; i < l; i++) {
			pair = pieces[i].split('=', 2);
			params[decodeURIComponent(pair[0])] = (pair.length == 2 ? decodeURIComponent(pair[1].replace(/\+/g, ' ')) : true);
		}
		return params;	
	};
})(jQuery);


