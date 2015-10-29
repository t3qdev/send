package kr.co.yonhapnews.biz.send.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import kr.co.yonhapnews.biz.send.vo.ArticleBVO;
import kr.co.yonhapnews.domain.send.svc.SendSVC;
import kr.co.yonhapnews.domain.send.vo.ArticleDVO;
import kr.co.yonhapnews.domain.send.vo.ArticleSVO;

@Service("ArticleBIZ")
public class SendBIZImpl implements SendBIZ {

	private final Logger logger = LoggerFactory.getLogger( this.getClass() );
	
	@Resource 
	SendSVC sendSVC;
 
	
	/**
	 * 기사 리스트를 가져온다.
	 * 여러가지 서비스를 
	 */
	@Override
	public List<ArticleBVO> selListArticle(Map map) {
		List<ArticleBVO>  list = new ArrayList<ArticleBVO>();
		List<ArticleSVO>  listArticle = sendSVC.selListArticle(map);
 		for(int i=0; i<listArticle.size(); i++){
			ArticleBVO articleBVO = new ArticleBVO();
			BeanUtils.copyProperties(listArticle.get(i) ,articleBVO );	
			list.add(articleBVO);			  
		}
 		return list;
	}

	/**
	 * 기사 작성
	 * 
	 */
	@Override
	public int writeArticle(ArticleBVO articleBVO) {
		ArticleSVO  articleSVO = new ArticleSVO();
		BeanUtils.copyProperties(articleBVO, articleSVO);
		sendSVC.writeArticle(articleSVO);
		return 0;
	}

	/**
	 * 기사 보기
	 */
	@Override
	public ArticleBVO viewArticle(int articleNum) {
		ArticleBVO articleBVO = new ArticleBVO();
		ArticleSVO  articleSVO = sendSVC.selArticle(articleNum);
		BeanUtils.copyProperties( articleSVO , articleBVO );
		return articleBVO;
	}

	@Override
	public int selArticleCnt(Map map) {
		return sendSVC.selArticleCnt(map);
	}
	
}
