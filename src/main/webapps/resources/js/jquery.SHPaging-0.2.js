/*

Virtual Form Submit 

0.1 : 초기버전...



$("body").SHVirtualForm({
  vForm:{action:""},
  vInput:[{input:"a":value:"a"},{input:"b":value:"b"}]
}).submit();


 
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


<div class="pagingWrapper">
	<a href="#" class="pre"><img src="/images/component/ico_prevIcon.png" alt="이전목록"></a>
	<a href="#"><span>1</span></a>
	<a href="#"><span>2</span></a>
	<a href="#"><span>3</span></a>
	<strong><span>4</span></strong>
	<a href="#"><span>5</span></a>
	<a href="#" class="next"><img src="/images/component/ico_nextIcon.png" alt="다음목록"></a>
</div>

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

;(function ($, window, document, undefined) {
    var pluginName = "SHPaging",
        dataKey = "plugin_" + pluginName;

    var Plugin = function (element, options) {

        this.target = element;
        this.$el = $().empty();
     
        this.options =  
            { 
				total_row : 100,     //총 글수
				rows_per_page : 10 , // 페이지당 글수
				current_page : 1 ,   // 현 페이지
				skin_file : "/lib/pg_skin/skin2.css",  // 스킨 CSS 파일 위치
				page_link : "?page=",
				display_next : true ,   // 다음 버턴
				display_skip : false    // 다음 10페이지 버턴
            };
         this.init(options);
    };

    Plugin.prototype = {
        init: function (options) {
            $.extend(this.options, options);
            /* Update Plugin Object form Options */
            this.$Form.attr( this.options.vForm); 
             _self = this;
            
            $.each(this.options.vInput ,function(i,jsonObj){
             _self.set(jsonObj);
            });
 
        },

        set: function (jsonObj) {
         this.$Form.append( $(document.createElement('input')).attr("type","hidden").attr(jsonObj));
        },

        submit: function () {
           this.target.append(this.$Form);
           this.$Form.submit();
        }
    };

 
    $.fn[pluginName] = function (options) {
        var plugin = this.data(dataKey);
        if (plugin instanceof Plugin) {
            // if have options arguments, call plugin.init() again
            if (typeof options !== 'undefined') {
                plugin.init(options);
            }
        } else {
            plugin = new Plugin(this, options);
            this.data(dataKey, plugin);
        }
        return plugin;
    };
}(jQuery, window, document));