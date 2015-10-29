package kr.co.yonhapnews.web.common;

import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.BeanUtils;
 

public final class UserUtils {

	/**
	 * 페이징
	 * @param pAGE
	 * @param tOTAL
	 * @param rOW_PER_PAGE
	 * @param ORD_BY
	 * @return
	 */
	public static Map<String,Object> paging(int pAGE, int tOTAL , int rOW_PER_PAGE ,String ORD_BY){
		Map map = new HashMap();
		map.put("PAGE", pAGE);
		map.put("TOTAL", tOTAL);
		map.put("ROW_PER_PAGE", rOW_PER_PAGE);
		int rangeStart = (pAGE-1)*rOW_PER_PAGE +1;
		map.put("RANGE_START", rangeStart);
		map.put("RANGE_END", rangeStart + rOW_PER_PAGE-1);
		
		map.put("LIMIT_START", rangeStart-1);
		
		if( "DESC".equals(ORD_BY) ){
			map.put("CNT", tOTAL-rangeStart+1);
		}else{
			map.put("CNT", rangeStart);
		}
		return map;
	}
	
	/**
	 * List 복사
	 * @param src
	 * @param des
	 * @param properties
	 */
	/*
	public static void copyList(List<Object> src ,List<Object> des, String[] property){
 
		List<C> beanList = new ArrayList<C>();
        String srcProperty;
        String destProperty;
        if (property.length == 2) {
                srcProperty = property[0];
                destProperty = property[1];
        } else {
                srcProperty = property[0];
                destProperty = property[0];
        }
		//PropertyDescriptor[] targetPds = BeanUtils.getPropertyDescriptors(src.get(0));
        Collections.copy(des, src);
        
		for( Object item : src){
			target = new destProperty();
			BeanUtils.copyProperties(item, target);
			
		}
		while (src.hasNext()) {
		    // Identify the property name and value(s) to be assigned
		    String name = (String) names.next();
		    if (name == null) {
		        continue;
		    }
		    Object value = properties.get(name);
		    // Perform the assignment for this property
		    setProperty(bean, name, value);
		}
	} */
	
	/*
	public static copyList(){
		
		List<SomeBean> tempList = new ArrayList<>();

		for (CartItem item : prodList) {
		  tempList.add(item);
		}
		prodList.clear();
		prodList = new ArrayList<>(tempList);
		
	}
	*/
	public <T extends Map<String, Object>, C> List<C> convertMapToBean( List<T> list, Class<C> clazz) {
		List<C> beanList = new ArrayList<C>();
			for (Map<String, Object> source : list) {
			  C bean = toBean(source, clazz);
			  beanList.add(bean);
			}
			return beanList;
		}

	private <C> C toBean(Map<String, Object> source, Class<C> targetClass) {

		C bean = null;
		try {
			  bean = targetClass.newInstance();
			  PropertyDescriptor[] targetPds = BeanUtils.getPropertyDescriptors(targetClass);

			  for (PropertyDescriptor desc : targetPds) {
				  Object value = source.get(desc.getName());
				  if (value != null) {
					  Method writeMethod = desc.getWriteMethod();
				      if (writeMethod != null) {
				    	  writeMethod.invoke(bean, new Object[] { value });
				      }
			      }
			  }
			  
		 } catch (InstantiationException e) {
			 new IllegalArgumentException("Cannot initiate class",e);
		 } catch (IllegalAccessException e) {
			 new IllegalStateException("Cannot access the property",e);
		 } catch (InvocationTargetException e) {
			 new IllegalArgumentException(e);
		 }
		 return bean;
	}
			
			
    public static void copyProperties(Object src, Object dest, String... properties) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
	    for (String property : properties) {
	            String[] arr = property.split(" ");
	            String srcProperty;
	            String destProperty;
	            if (arr.length == 2) {
	                    srcProperty = arr[0];
	                    destProperty = arr[1];
	            } else {
	                    srcProperty = property;
	                    destProperty = property;
	            }
	           // BeanUtils.setProperty(dest, destProperty, BeanUtils.getProperty( src, srcProperty));
	            
	           // 아래 오류땜에 주석
	           //BeanUtils.setProperty(dest, destProperty, BeanUtils.getProperty( src, srcProperty));
	    }
	}	
    
    
    
}
