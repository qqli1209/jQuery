

$(function(){
	var page = 1;
	var i = 4;
	//向后
	$("span.next").click(function(){
		var $parent = $(this).parents("div.v_show");
		var $v_show = $parent.find("div.v_content_list");
		var $v_content = $parent.find("div.v_content");
		var $v_width = $v_content.width();
		var $len = $v_show.find("li").length;
		var page_count = Math.ceil($len/i);

		if (!$v_show.is(":animated")) { //若没有正在执行动画，则继续
			if (page_count == page) {
			//当前在最后一个版面
			$v_show.animate({left:"0px"});
			page = 1;
		} else {
			//当前不在最后一个版面
			$v_show.animate({left:"-="+$v_width+"px"});
			page++;
		}
		$("div.highlight_tip").children()
							  .eq(page-1).addClass("current")
							  .siblings().removeClass("current");
		}
		
	})

	//向前
	$("span.prev").click(function(){
		var $parent = $(this).parents("div.v_show");
		var $v_content = $parent.find("div.v_content");
		var $v_show = $parent.find("div.v_content_list");
		var $v_width = $v_content.width();
		var $len = $v_show.find("li").length;
		var page_count = Math.ceil($len/i);

		if(!$v_show.is(":animated")){ //若没有正在执行动画，则继续
			if (page == 1) {
			//在第一页
			$v_show.animate({left:(-(page_count-1)*$v_width)+"px"});
			page = page_count;
		} else {
			//不在第一页
			$v_show.animate({left:"+="+$v_width+"px"});
			page--;
		}
		$("div.highlight_tip").children()
							  .eq(page-1).addClass("current")
							  .siblings().removeClass("current");
		}
		
	})

	//蓝色点
	var $choose_point = $(".highlight_tip").find("span");
		$choose_point.eq(0).click(function(){
			var $parent = $(this).parents("div.v_show");
			var $v_content = $parent.find("div.v_content");
			var $v_show = $parent.find("div.v_content_list");
			var $v_width = $v_content.width();
			if (!$v_show.is(":animated")) {
				$v_show.animate({left:"0px"});
				page = 1;
			}
			$("div.highlight_tip").children()
							  .eq(0).addClass("current")
							  .siblings().removeClass("current");
		
		})

		$choose_point.eq(1).click(function(){
			var $parent = $(this).parents("div.v_show");
			var $v_content = $parent.find("div.v_content");
			var $v_show = $parent.find("div.v_content_list");
			var $v_width = $v_content.width();
			if (!$v_show.is(":animated")) {
				$v_show.animate({left:(-1*$v_width)+"px"});
				page = 1;
			}
			$("div.highlight_tip").children()
							  .eq(1).addClass("current")
							  .siblings().removeClass("current");
		
		})

		$choose_point.eq(2).click(function(){
			var $parent = $(this).parents("div.v_show");
			var $v_content = $parent.find("div.v_content");
			var $v_show = $parent.find("div.v_content_list");
			var $v_width = $v_content.width();
			if (!$v_show.is(":animated")) {
				$v_show.animate({left:(-2*$v_width)+"px"});
				page = 3;
			}
			$("div.highlight_tip").children()
							  .eq(2).addClass("current")
							  .siblings().removeClass("current");
		
		})

		$choose_point.eq(3).click(function(){
			var $parent = $(this).parents("div.v_show");
			var $v_content = $parent.find("div.v_content");
			var $v_show = $parent.find("div.v_content_list");
			var $v_width = $v_content.width();
			if (!$v_show.is(":animated")) {
				$v_show.animate({left:(-3*$v_width)+"px"});
				page = 4;
			}
			$("div.highlight_tip").children()
							  .eq(3).addClass("current")
							  .siblings().removeClass("current");
		
		})



/*
	$("#1").click(function(){
		var $parent = $(this).parents("div.v_show");
		var $v_content = $parent.find("div.v_content");
		var $v_show = $parent.find("div.v_content_list");
		var $v_width = $v_content.width();
		if(!$v_show.is(":animated")){
			$v_show.animate({left:"0px"});
			page = 1;
		}
		$("div.highlight_tip").children()
							  .eq(0).addClass("current")
							  .siblings().removeClass("current");
	})
	*/

})