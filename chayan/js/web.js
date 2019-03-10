function flash(_titles, _bodies) {
    var defaultOpts = {
        interval: 3000,
        fadeInTime: 'slow',
        fadeOutTime: 'slow'
    };
    var _count = _titles.length;
    var _current = 0;
    var _intervalID = null;
    var stop = function() {
        window.clearInterval(_intervalID);
    };
    var slide = function(opts) {
        if (opts) {
            _current = opts.current || 0;
        } else {
            _current = (_current >= (_count - 1)) ? 0 : (++_current);
        };
        _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime,
        function() {
            _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
            //_bodies.removeClass("current").eq(_current).addClass("current");
        });
        _titles.removeClass("current").eq(_current).addClass("current");
        //_titles_bg.removeClass("current").eq(_current).addClass("current");
    }; //endof slide
    var go = function() {
        stop();
        _intervalID = window.setInterval(function() {
            slide();
        },
        defaultOpts.interval);
    }; //endof go
    var itemMouseOver = function(target, items) {
        stop();
        var i = $.inArray(target, items);
        slide({
            current: i
        });
    }; //endof itemMouseOver
    _titles.hover(function() {
        if ($(this).attr('class') != 'current') {
            itemMouseOver(this, _titles);
        } else {
            stop();
        }
    },
    go);
    //_titles_bg.hover(function() { itemMouseOver(this, _titles_bg); }, go);
    _bodies.hover(stop, go);
    //trigger the slidebox
    go();
}
//
function DY_scroll(wraper, prev, next, img, speed, or) {
    var wraper = $(wraper);
    var prev = $(prev);
    var next = $(next);
    var img = $(img).find('ul');
    var w = img.find('li').outerWidth(true);
    var s = speed;
    next.click(function() {
        img.animate({
            'margin-left': -w
        },
        function() {
            img.find('li').eq(0).appendTo(img);
            img.css({
                'margin-left': 0
            });
        });
    });
    prev.click(function() {
        img.find('li:last').prependTo(img);
        img.css({
            'margin-left': -w
        });
        img.animate({
            'margin-left': 0
        });
    });
    if (or == true) {
        ad = setInterval(function() {
            next.click();
        },
        s * 2000);
        wraper.hover(function() {
            clearInterval(ad);
        },
        function() {
            ad = setInterval(function() {
                next.click();
            },
            s * 2000);
        });

    }
}
	
//加入收藏
function AddFavorite(sURL, sTitle) {
			sURL = encodeURI(sURL); 
	try{   
			window.external.addFavorite(sURL, sTitle);   
	}catch(e) {   
			try{   
					window.sidebar.addPanel(sTitle, sURL, "");   
			}catch (e) {   
					alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
			}   
	}
}
$(document).ready(function(){
//图片轮播
var ulnumli = $("ul.ulnum li");
var fadearry = $("ul.fadearry li");
flash(ulnumli, fadearry);
//图片切换
DY_scroll('.img_scroll_a', '.prev_a', '.next_a', '.img_list_a', 3, true);  

//屏幕自适应
var minheighta = parseInt($(window.parent).height())-parseInt($(window.parent.document).find(".header").outerHeight())-parseInt($(window.parent.document).find(".footer").outerHeight());
var maina = $(window.parent.document).find(".pages_main");
maina.css("min-height",minheighta-20);
var minheightb = parseInt($(window.parent).height())-parseInt($(window.parent.document).find(".header").outerHeight())-parseInt($(window.parent.document).find(".footer").outerHeight())-parseInt($(window.parent.document).find(".index_banner").outerHeight());
var mainb = $(window.parent.document).find(".index_menu");
mainb.css("min-height",minheightb-26);
//选项卡
 var $tags = $('.tab_tags a');
   $tags.click(function(){
	  $(this).addClass('cur').siblings().removeClass('cur');
	  var index = $tags.index(this)
	  $('.tab_cont > div').eq(index).show().siblings().hide();
	   })
		
//登陆
$('#login').on('click', function(){
    layer.open({
        type: 2,
		title: '登陆',
        area: ['460px', '344px'],
        shadeClose: true, //点击遮罩关闭
        content: ['login.html', 'no']
    });
});
//登陆
$('#reg').on('click', function(){
    layer.open({
        type: 2,
		title: '注册',
        area: ['460px', '600px'],
        shadeClose: true, //点击遮罩关闭
        content: ['reg.html', 'no']
    });
});

});


