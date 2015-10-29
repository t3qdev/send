package kr.co.yonhapnews.web.send.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import kr.co.yonhapnews.biz.send.vo.ArticleBVO;

public class ArticleValidator implements Validator {
	
	private final Logger logger = LoggerFactory.getLogger( this.getClass() );
	
	@Override
	public boolean supports(Class<?> clazz) {
		// ArticleBVO가 하위 클래스 인지 검사
		return ArticleBVO.class.isAssignableFrom(clazz);
		//return false;
	}

	@Override
	public void validate(Object target, Errors errors) {
		ArticleBVO articleBVO = (ArticleBVO) target;
		//타이틀
		if(articleBVO.getTITLE() == null || articleBVO.getTITLE().trim().isEmpty()){
			errors.rejectValue("TITLE", "required");
		}
		
		// null , " " , length =0  경우에 대해 오류
		//ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "required");
		// null, length =0 인 경우 오류처리
		//ValidationUtils.rejectIfEmpty(errors, "title", "required");
 
 
		//작성자 
		if( isEmpty(articleBVO.getWRITER()) ){
			logger.debug("WRITER EMTPY");
			errors.rejectValue("WRITER", "required");
		}
		//내용 
		if( isEmpty(articleBVO.getCONTENT() )){
			errors.rejectValue("CONTENT", "required");
		}		
	}
	
	// 빈값 체크용 내부 함수
	private boolean isEmpty(String value){
		if(value == null || value.length() == 0 || value.trim().isEmpty() ){
			return true;
		}
		return false;
	}

}
