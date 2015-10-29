package kr.co.yonhapnews.web.common;

import java.io.Serializable;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

import com.example.message.model.YMessage;

public class AbstractVo extends YMessage  implements Serializable {

	public String toString(){
		return ToStringBuilder.reflectionToString(this, ToStringStyle.MULTI_LINE_STYLE);		
	}
}
