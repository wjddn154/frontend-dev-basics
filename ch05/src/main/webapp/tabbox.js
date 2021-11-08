// DOM Level 2 Event 처리 : HTML element의 event Listener를 등록하는 방식
// 1) JavaScipt Code(DOM API)로만 작성하기

var tabBox = {
	init: function() {				//this: tabBox
		window.addEventListener("load", this.onWindwoLoad.bind(this));
	},
	onTabClicked: function() {

		//unselecte
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className = '');

		//select
		this.className = "selected";
	},

	onWindwoLoad: function() {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];

		console.log(this);

		var liTabs = ul.getElementsByTagName("li");
		for (var i = 0; i < liTabs.length; i++) {
			liTabs[i].addEventListener("click", this.onTabClicked);
		}
	}
}