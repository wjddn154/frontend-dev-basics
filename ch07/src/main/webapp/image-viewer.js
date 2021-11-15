var ImageViewer = {
	____images: [ 
		"국화:Chrysanthemum.jpg", 
		"사막:Desert.jpg", 
		"수국:Hydrangeas.jpg", 
		"해파리:Jellyfish.jpg", 
		"코알라:Koala.jpg", 
		"등대:Lighthouse.jpg", 
		"펭귄:Penguins.jpg", 
		"툴립:Tulips.jpg"
	],
	init: function() {
		var temp;
		$(function(){
			$("#btn-change").click(function(){
				
				// 랜덤 변수 
				var result = Math.floor( Math.random() * (__images.length)  );	//0 ~ 7
				
				// 중복 방지
				if(result == temp){
					result = Math.floor( Math.random() * (__images.length)  );
				}
				temp = result;
				console.log(__images[temp].split(':')[1]);
				
				$("img").attr("src", "__images/" + __images[temp].split(':')[1]);				
			});
		});
		
		
		var index = 1;
		var flag = 1;
		
		//슬리아드 쇼/중지 버튼
		$(function(){
			$("#btn-slideshow").click(function(){
				if(flag == 1){
					slideShowOn();
				} else {
					slideShowOff();
				}
		
			});
		});
		
		
		//슬라이드 쇼 on
		function slideShowOn() {
			flag=0;
			$("#btn-slideshow").html("슬라이드쇼 중지");
			$("img").attr("src", "__images/" + __images[index].split(':')[1]);
			slideShow();
		}
		function slideShow() {
			setTimeout(function() {
				
				if(index > __images.length) {
					index = (index-1) % (__images.length);
					flag = 1;
					console.log("index : " + index);
					return false;
				}
		
				$("img").attr("src", "__images/" + __images[index].split(':')[1]);
				index++;
				
				if(index < __images.length) {
					slideShow();
				} else {
					index -= __images.length;
					slideShow();
				}
				
			}, 500);
		}
		
		
		
		//슬라이드쇼 off
		function slideShowOff() {
			$("#btn-slideshow").html("슬라이드쇼 시작");
		
				index = index + (__images.length+1);
				console.log("index : " + index);
		};
	}	
}