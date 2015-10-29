package kr.co.yonhapnews.domain.send.svc;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import kr.co.yonhapnews.domain.send.vo.ArticleDVO;

@Repository
public interface SendDAO {

	public List<ArticleDVO> selListArticle(Map map);
	
	public int insArticle(ArticleDVO articleDVO);
	
	public ArticleDVO selArticle(int IDX);
	
	public int selArticleCnt(Map map);
	
}
