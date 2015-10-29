/*

Virtual Form Submit 

0.1 : 초기버전...



$("body").SHVirtualForm({
  vForm:{action:""},
  vInput:[{input:"a":value:"a"},{input:"b":value:"b"}]
}).submit();


*/

;(function ($, window, document, undefined) {

    var pluginName = "SHVirtualForm",
        dataKey = "plugin_" + pluginName;

    
    
    var Plugin = function (element, options) {

        this.element = element;
        
        this.$Form = $(document.createElement('form')).attr("target","_top");
        
        this.options =  
            { 
                vForm : {action :"",method :"POST",target:"_top" },
                vInput: []    // [{name:"",value:""},{name:"",value:""}]
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
           this.element.append(this.$Form);
           this.$Form.submit();
        }
    };

 
    $.fn[pluginName] = function (options) {

        var plugin = this.data(dataKey);

        // has plugin instantiated ?
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