package kr.co.yonhapnews.biz.send.vo;

import java.io.Serializable;

import com.example.message.model.YMessage;

import kr.co.yonhapnews.web.common.PagingVo;

public class ArticleBVO extends YMessage  implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int IDX;
	private String TITLE;
	private String CONTENT;
	private String WRITER;
	private String STATE;
	private String REGDATE;
	
	
	public int getIDX() {
		return IDX;
	}
	public void setIDX(int iDX) {
		IDX = iDX;	
	}
	public String getTITLE() {
		return TITLE;
	}
	public void setTITLE(String tITLE) {
		TITLE = tITLE;
	}
	public String getCONTENT() {
		return CONTENT;
	}
	public void setCONTENT(String cONTENT) {
		CONTENT = cONTENT;
	}
	public String getWRITER() {
		return WRITER;
	}
	public void setWRITER(String wRITER) {
		WRITER = wRITER;
	}
	public String getSTATE() {
		return STATE;
	}
	public void setSTATE(String sTATE) {
		STATE = sTATE;
	}

	public String getREGDATE() {
		return REGDATE;
	}
	public void setREGDATE(String rEGDATE) {
		REGDATE = rEGDATE;
	}
	
	
}



