(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* 필수입력란 입니다.",
                    "alertTextCheckboxMultiple": "* 옵션을 선택하세요",
                    "alertTextCheckboxe": "* 필수체크란 입니다",
                    "alertTextDateRange": "* 2개의 기간 필드는 필수입니다."
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                                        "length":{
                                                "regex":"none",
                                                "alertText":"* ",
                                                "alertText2":"자 이상, 최대  ",
                                                "alertText3": " 자의 입력이 가능합니다."},
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Range"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Time Range"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* 최소 ",
                    "alertText2": " 문자가 필요합니다."
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* 최대 ",
                    "alertText2": " 문자까지 가능합니다."
                },
				"length":{
						"regex":"none",
						"alertText":"* ",
						"alertText2":"자 이상, 최대  ",
						"alertText3": " 자의 입력이 가능합니다."},
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* 해당 필드중 최소 하나는 값을 입력하셔야 합니다.",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* 최소값은 "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* 최대값은 "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* 최대 ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* 선택하세요 ",
                    "alertText2": " 옵션"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* 항목이 일치하지 않습니다."
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Invalid credit card number"
                },
                "phone": {  // 미국??
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Invalid phone number"
                },
				"telephone":{
						"regex":/^0[0-9]{1,2}-?[0-9]{3,4}-?[0-9]{4}$/,
						//"regex":/^0[0-9]{1,2}\-\[0-9]{3,4}\-\[0-9]{3,4}$/,
						"alertText":"* 전화번호 형식이 아닙니다.( - 포함)"
				}, 
				"mobile":{
						"regex":/^((01[1|6|7|8|9])-?[1-9]+[0-9]{2,3}-?[0-9]{4})|(010-?[1-9][0-9]{3}-?[0-9]{4})$/,    
						"alertText":"* 휴대폰 형식이 아닙니다.( - 포함)"
				}, 
				"userid":{
						"regex":/^[a-zA-Z0-9\ \']+$/,
						"alertText":"* 아이디는 영어와 숫자만 가능합니다"
				},
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* 이메일 형식이 아닙니다"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* Must be first and last name"
                },

                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* 숫자만 가능합니다."
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date2": {                    
                    //	Check if date is valid by leap year
					"func": function (field) {
							var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
							var match = pattern.exec(field.val());
							if (match == null)
							   return false;
			
							var year = match[1];
							var month = match[2]*1;
							var day = match[3]*1;					
							var date = new Date(year, month - 1, day); // because months starts from 0.
			
							return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
						},                		
					"alertText": "* Invalid date, must be in YYYY-MM-DD format"
				},

                "zip": {
                    "regex":/^\d{3}-\d{3}$/,
                    "alertText":"* 잘못된 우편번호입니다."
                },
				"date":{
						 "regex":/^[0-9]{4}\-\[0-9]{1,2}\-\[0-9]{1,2}$/,
						 "alertText":"* 날짜형식이 아닙니다. 'YYYY-MM-DD'"
				},
				"onlyNumber":{
						"regex":/^[0-9\ ]+$/,
						"alertText":"* 숫자만 가능합니다."
				},    
				"noSpecialCaracters":{
						"regex":/^[0-9a-zA-Z]+$/,
						"alertText":"* 특수문자는 허용되지 않습니다"
				},                       
				"onlyLetter":{
						"regex":/^[a-zA-Z\ \']+$/,
						"alertText":"* 영문자만 가능합니다"
				},
				"onlyLetterUnd":{
						"regex":/^[_A-Z']+$/,
						"alertText":"* 영어 대문자와 '_'만 가능합니다"
				},
				"onlyEngNumber":{
						"regex":/^[a-zA-Z0-9\ \']+$/,
						"alertText":"* 영어와 숫자만 가능합니다"
				},
				"UpperEngNumber":{
						"regex":/^[_A-Z0-9]+$/,
						"alertText":"* 영어 대문자와 숫자와 '_'만  가능합니다"
				},       
				"LowerEngNumber":{
						"regex":/^[_a-z0-9]+$/,
						"alertText":"* 영어 소문자와 숫자와 '_'만  가능합니다"
				},       
				"onlyKor":{
						"regex":/^[ 가-힣ㄱ-ㅎ]+$/,
						"alertText":"* 한글만 입력가능합니다"
				},   
				"noKor":{
						"regex":/^[ _a-zA-Z0-9]+$/,
						"alertText":"* 영어와 숫자와 '-'만 가능합니다."
				},   
				"onlyKorEng":{
						"regex":/^[ 가-힣a-zA-Zㄱ-ㅎ]+$/,
						"alertText":"* 한글과 영문만 입력가능합니다"
				},       
				"onlyKorEngNumber":{
						"regex":/^[ 가-힣a-zA-Z0-9ㄱ-ㅎ]+$/,
						"alertText":"* 한글,영문,숫자만 입력가능합니다"
				},
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* IP 주소 형식이 아닙니다."
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URL형식이 아닙니다."
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* 숫자만 가능합니다."
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* Letters only (accents allowed)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* This name is already taken",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
