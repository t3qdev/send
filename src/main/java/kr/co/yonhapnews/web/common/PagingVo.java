package kr.co.yonhapnews.web.common;

public class PagingVo extends AbstractVo {

	public int PAGE = 1;
	public int ROW_PER_PAGE = 15;
	public int TOTAL = 1;
	public int RANGE_START = 0;
	public int RANGE_END = 0;
	public int LIMIT_START = 0;  //Mysql 용
	
	
	public int getPAGE() {
		return PAGE;
	}
	public void setPAGE(int pAGE) {
		PAGE = pAGE;
	}
	public int getROW_PER_PAGE() {
		return ROW_PER_PAGE;
	}
	public void setROW_PER_PAGE(int rOW_PER_PAGE) {
		ROW_PER_PAGE = rOW_PER_PAGE;
	}
	public int getTOTAL() {
		return TOTAL;
	}
	public void setTOTAL(int tOTAL) {
		TOTAL = tOTAL;
	}
	public int getRANGE_START() {
		return RANGE_START;
	}
	public void setRANGE_START(int rANGE_START) {
		RANGE_START = rANGE_START;
	}
	public int getRANGE_END() {
		return RANGE_END;
	}
	public void setRANGE_END(int rANGE_END) {
		RANGE_END = rANGE_END;
	}
	public int getLIMIT_START() {
		return LIMIT_START;
	}
	public void setLIMIT_START(int lIMIT_START) {
		LIMIT_START = lIMIT_START;
	}
	
	
}
