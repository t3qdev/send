/*

Virtual Form Submit 

0.1 : 초기버전...


<div data-vpost='[{input:"a":value:"a"},{input:"b":value:"b"}]'></div>

$(".btnVirtual").SHVirtualForm();

$().date("vaction")
$().data("vpost");
JSON.parse(str).

 $('<form action="form2.html"></form>').appendTo('body').submit().remove();

 var form = $(document.createElement('form'));
    $(form).attr("action", "reserves.php");
    $(form).attr("method", "POST");

    var input = $("<input>").attr("type", "hidden").attr("name", "mydata").val("bla");
    $(form).append($(input));
    $(form).submit();


	 JSON.stringify(
*/

;(function ($, window, document, undefined) {

    var pluginName = "SHVirtualSubmit",
        dataKey = "plugin_" + pluginName;

    var Plugin = function (element, options) {
         this.element = element;
         this.options =   { 
										vForm : {action :"",method :"POST",target:"_top" }
									};
         this.init(options);
    };

    Plugin.prototype = {
        init: function (options) {
			/* 이벤트 바인딩..*/
			this.element.each(function(idx){
				$(this).on("click",function( e){
					var  msgOk = true;
					 if(   $(this).data("vmsg")   ){
						 msgOk =  confirm($(this).data("vmsg") );
					 }
					 if( msgOk ){
						 var form = $(document.createElement('form'));
						 var opt =  $(this).data("vform") ;
						 $(form).attr("target", "_top");
						 $(form).attr("action", opt.action);
						 $(form).attr("method", opt.method);
						 $.each( $(this).data("vpost")  ,function(s,inputObj ){
							var input = $("<input>").attr("type", "hidden").attr("name", inputObj.name ).val( inputObj.value);
							$(form).append($(input));		
						 }); 
						$(form).submit();
					 }else  e.preventDefault();
 				});
			});
        }
    };
 
    $.fn[pluginName] = function (options) {
        var plugin = this.data(dataKey);
        if (plugin instanceof Plugin) {
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