package kr.co.yonhapnews.biz.send.svc;

import java.util.List;
import java.util.Map;

import kr.co.yonhapnews.biz.send.vo.ArticleBVO;
import kr.co.yonhapnews.domain.send.vo.ArticleSVO;

public interface SendBIZ {
	
 
	public List<ArticleBVO> selListArticle(Map map);
	
	public int writeArticle(ArticleBVO articleBVO);
	
	public ArticleBVO viewArticle( int articleNum);
	
	public int selArticleCnt(Map map);
	
}
