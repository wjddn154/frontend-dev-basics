package com.douzone.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.ch08.controller.dto.JsonResult;
import com.douzone.ch08.controller.vo.UserVO;

@RestController	//controller + responsebody
@RequestMapping("/api/user")
public class RestApiController {
	
	@GetMapping("")
	public Object read() {
		List<UserVO> list = new ArrayList<UserVO>();
		return JsonResult.success(list);
	}
	
	
	
	@PostMapping("")
	public Object create(@RequestBody UserVO vo) {
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	
	@GetMapping("/{no}")
	public Object read(@PathVariable("no") Long no) {
		UserVO vo = new UserVO();
		vo.setNo(no);
		vo.setName("둘리");
		vo.setEmail("123@123.com");
		vo.setGender("male");
		
		
		return JsonResult.success(vo);
	}
	
	
	@PutMapping("/{no}")
	public Object update(
			@PathVariable("no") Long no,
			@RequestBody UserVO vo) {

		vo.setNo(no);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	
	@DeleteMapping("/{no}")
	public Object delete(
			@PathVariable("no") Long no,
			@RequestParam(value="password", required = true, defaultValue = "") String password ){
		
		System.out.println(password);
		return JsonResult.success(no);
	}
	
	
	
	
	

}
