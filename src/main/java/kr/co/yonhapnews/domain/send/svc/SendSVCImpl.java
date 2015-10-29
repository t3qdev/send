package kr.co.yonhapnews.domain.send.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import kr.co.yonhapnews.domain.send.vo.ArticleDVO;
import kr.co.yonhapnews.domain.send.vo.ArticleSVO;


@Service("ArticleSVC")
public class SendSVCImpl implements SendSVC {

	private final Logger logger = LoggerFactory.getLogger( this.getClass() );
	
	@Resource
	SendDAO  sendDAO;
	
	@Override
	public int writeArticle(ArticleSVO articleSVO) {

		ArticleDVO  articleDVO = new ArticleDVO();
		BeanUtils.copyProperties(articleSVO, articleDVO);	
		return sendDAO.insArticle(articleDVO);	
	}

 
	@Override
	public List<ArticleSVO> selListArticle(Map map) {
		
		List<ArticleSVO>  list = new ArrayList<ArticleSVO>();
		List<ArticleDVO> listArticle = sendDAO.selListArticle(map);
		for(int i=0; i < listArticle.size() ; i++){
			ArticleSVO articleSVO = new ArticleSVO();
			BeanUtils.copyProperties(listArticle.get(i) , articleSVO );
			list.add(articleSVO);
		} 
		return list;
	}

	@Override
	public ArticleSVO selArticle(int articleNum) {
		ArticleSVO articleSVO = new ArticleSVO();
		ArticleDVO articleDVO = sendDAO.selArticle(articleNum);
		BeanUtils.copyProperties(articleDVO , articleSVO );
		return articleSVO;
	}


	@Override
	public int selArticleCnt(Map map) {

		return sendDAO.selArticleCnt(map);
	}

 

}
