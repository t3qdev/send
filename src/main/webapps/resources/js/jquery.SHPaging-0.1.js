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


	디자인 가이드 HTML 버턴 활성화 시에는 btnOn class 추가
	<div class='suhan-pager-wrap'>			
		<div class='bt-pager bt-pager-type f-left'><span class='bt-pager-left-skip btnOn'>◀</span></div>				
		<div class='bt-pager bt-pager-type f-left'><span class='bt-pager-left'></span>◁</div>				
		<div class='page-number'>
			<ol>
				<li class='bt-pager-type btnOn'><a >1</a></li>
				<li class='bt-pager-type'><a >2</a></li>
				<li class='bt-pager-type btnOn'><a >3</a></li>
				<li class='bt-pager-type btnOn'><a >4</a></li>
				<li class='bt-pager-type btnOn'><a >5</a></li>
			</ol>					
		</div>				
		<div class='bt-pager bt-pager-type f-right'><span class='bt-pager-right-skip'>▶</span></div>				
		<div class='bt-pager bt-pager-type f-right'><span class='bt-pager-right'>▷</span></div>				
	</div> 
*/		


(function($){
	$.fn.SHPaging = function(options) {
		var opt ={
			total_row : 0,
			rows_per_page : 10 ,
			current_page : 1 ,
			skin_file : "/lib/pg_skin/skin.css",
			page_link : "?page=",
			display_next : false ,
			display_skip : true
		};
		$.extend(opt,options);	
		var total_page   = Math.ceil(opt.total_row / opt.rows_per_page);
		total_page = (total_page) ? total_page : 1 ;
		return  this.each(function(){
			var el = $(this);
			el.empty();
			el.append("<link rel='stylesheet' type='text/css' href='"+ opt.skin_file +"?ver="+Math.random()+"'>");
  

			var outbuff = "<div class='suhan-pager-wrap'>";

			if( opt.display_skip ){ // 이전 스킵
				if(opt.current_page < opt.rows_per_page +1) { 
					console.log ( 'opt.current_page' + opt.current_page +  'opt.rows_per_page'+opt.rows_per_page);
					 outbuff += "<div class='bt-pager bt-pager-type f-left'><span class='bt-pager-left-skip'></span></div>" ; 
				}else{ 
					var pp = parseInt((opt.current_page -1)/ opt.rows_per_page )*opt.rows_per_page; 
					 outbuff += "<div class='bt-pager bt-pager-type f-left'><span class='bt-pager-left-skip btnOn' onclick=\"location.replace('"+opt.page_link+pp+"');\"></span></div>" ;
				} 
			}
			if( opt.display_next ){ // 이전
			   if(opt.current_page>1){
				 outbuff +=  "<div class='bt-pager bt-pager-type f-left'><span class='bt-pager-left btnOn' onclick=\"location.replace('"+opt.page_link+( opt.current_page -1)+"');\"></span></div>" ;
			   }else{
				 outbuff +=  "<div class='bt-pager bt-pager-type f-left'><span class='bt-pager-left'></span></div>" ; 
			   }
			}

			// 넘버링
			outbuff +="<div class='page-number'><ol>";

			var st1 = parseInt((opt.current_page-1)/ opt.rows_per_page)*opt.rows_per_page + 1;
			var st2 = st1 + opt.rows_per_page;

			for(var jn = st1; jn < st2; jn++){
				if ( jn <= total_page ){
					outbuff += (jn == opt.current_page)? "<li class='bt-pager-type selPage'>" : "<li class='bt-pager-type btnOn'>"  ;
					outbuff += "<a onClick=\"location.replace('"+opt.page_link+jn+"');\">"+jn+"</a></li>";
				}
			}
			outbuff +="</ol></div>";

			if( opt.display_skip ){ // 다음 스킵
				if( total_page < opt.rows_per_page  || total_page < jn) { 
					outbuff +=   "<div class='bt-pager bt-pager-type f-right'><span class='bt-pager-right-skip'></span></div>"; 
				}else{
					var np = jn; 
					outbuff += "<div class='bt-pager bt-pager-type f-right'><span class='bt-pager-right-skip btnOn' onclick=\"location.replace('"+opt.page_link+np+"');\"></span></div>"; 
				}
			}

			if( opt.display_next ){// 다음 
			   if(  opt.current_page  < total_page){
				 outbuff += "<div class='bt-pager bt-pager-type f-right'><span class='bt-pager-right btnOn' onclick=\"location.replace('"+opt.page_link+(opt.current_page+1)+"');\"></span></div>	";
			   }else{
				 outbuff += "<div class='bt-pager bt-pager-type f-right'><span class='bt-pager-right'></span></div>	";   
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


