package kr.co.yonhapnews.web.send.controller;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.message.MessageClient;
import com.example.message.MessageTarget;

import kr.co.yonhapnews.biz.send.svc.SendBIZ;
import kr.co.yonhapnews.biz.send.vo.ArticleBVO;


@Controller
@RequestMapping("/article")
public class SendController {
	
	private final Logger logger = LoggerFactory.getLogger( this.getClass() );
	
 	@Resource 
	SendBIZ	sendBIZ;
 	
 
	@Autowired
	MessageClient messageClient;
 

        
	/**
	 * 기사 읽기
	 * @param mid
	 * @param model
	 * @return
	 */
	@RequestMapping(value={"/get/{articleNum}"},method={RequestMethod.GET})
	@ResponseBody
	public String articleView(@PathVariable("articleNum") int articleNum ){
		
		ArticleBVO articleBVO = sendBIZ.viewArticle(articleNum);
		
		messageClient.send(MessageTarget.PRESS, articleBVO);
		
		return "";	
	}

}
