package kr.co.yonhapnews.domain.send.svc;

import java.util.List;
import java.util.Map;

import kr.co.yonhapnews.domain.send.vo.ArticleDVO;
import kr.co.yonhapnews.domain.send.vo.ArticleSVO;

public interface SendSVC {
	
	/**
	 * 기사 쓰기
	 * @param articleDVO
	 * @return
	 */
	public int writeArticle(ArticleSVO articleSVO);
	
	/**
	 * 기사 리스트 가져오기
	 * @return
	 */
	public List<ArticleSVO> selListArticle(Map map);
	
	
	/**
	 * 기사 하나 보기
	 * @param articleDVO
	 * @return
	 */
	public ArticleSVO selArticle(int articleNum);

	
	/**
	 * 기사  목록수
	 * @param articleSVO
	 * @return
	 */
	public int selArticleCnt(Map map);
	
	
}
