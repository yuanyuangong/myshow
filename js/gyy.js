var jsondata=[
	{	theme:'youyou',
		imgurl:'images/youyou/1.png',
		datatype:'websites',
		title:"友游戏",
		pl:"转独立手机游戏发布提供渠道",
		leg:9
	},
	{	theme:'youweb',
		imgurl:'images/youweb/1.png',
		datatype:'websites',
		title:"友游戏web",
		pl:"转独立手机游戏发布提供渠道",
		leg:7
	},
	{	theme:'miyou',
		imgurl:'images/miyou/1.png',
		datatype:'logos',
		title:"觅友戏",
		pl:"寻找朋友玩新游戏",
		leg:5
	},
	{	theme:'oter',
		imgurl:'images/oter/6.png',
		datatype:'photos',
		title:"各种设计",
		pl:"showTime",
		leg:8
	},
	{
		imgurl:'images/wuliu/1.png',
		theme:'wuliu',
		datatype:'websites',
		title:"物流宝盒",
		pl:"货主，车主信息匹配平台",
		leg:16
	},
	{	theme:'jiyun',
		imgurl:'images/jiyun/1.png',
		datatype:'logos',
		title:"集运天下",
		pl:"解决集装箱回程空运程问题",
		leg:4
	},
	{	theme:'chay',
		imgurl:'images/chay/1.png',
		datatype:'logos',
		title:"查验预约",
		pl:"上海吴淞海关进出港查验预约系统",
		leg:6
	},
	{	theme:'youlun',
		imgurl:'images/youlun/1.png',
		datatype:'logos',
		title:"邮轮宝盒",
		pl:"邮轮票务，以及邮轮物资供应信息管理系统",
		leg:3
	},
	
]
function int(){
	for(var i=0;i<jsondata.length;i++){
		var data = jsondata[i]
		var html='<div class="portfolioFilterableItemWrapper" data-type="'+data.type+'">'+
          '<a href="singleProject.html?url="'+data.imgurl+'"" class="portfolioFilterableItemImageWrapper" style="padding:8px">'+
          '<img src="'+data.imgurl+'" alt=""/ >'+
          '</a>'+

          '<div class="portfolioFilterableItemInfoWrapper">'+

            '<h4 class="portfolioFilterableItemTitle">'+data.title+'</h4>'+

            '<p>'+data.pl+'</p>'+

          '</div>'+

          '<div class="portfolioFilterableItemButtonsWrapper"><a href="'+data.imgurl+
          '" class="portfolioFilterableExpandButton">放大</a>'+
          '<a href="singleProject.html?'+data.theme+'" class="portfolioFilterableDetailsButton">详情</a></div></div>'
		
		 $("#portfolioFilterableItemsWrapper").append(html)
	}
}
function ints(){
	for(var i=0;i<jsondata.length;i++){
		for(var j=0;j<jsondata[i].leg;j++){
			var jc='images/'+jsondata[i].theme+'/'+String(j+1)+'.png'
			var html='<div class="portfolioTwoItemWrapper"><a><img src="'+jc+'" alt="" style="width: 100%"/></a>'+

          '<div class="portfolioFilterableItemButtonsWrapper"><a href="'+jc+
          '" class="portfolioFilterableExpandButton">放大</a></div></div>'
			$("#portfolioItemsWrapper").append(html)
		}
	}
	
}
function intc(){
	var names =window.location.search.split('?')[1]
	console.log(names)
	for(var i=0;i<jsondata.length;i++){
		console.log(jsondata[i].theme == names)
		if(jsondata[i].theme == names){
			
			for(var j=0;j<jsondata[i].leg;j++){
				var jc='images/'+jsondata[i].theme+'/'+String(j+1)+'.png'
				console.log()
						var html ='<div class="singleProjectImageWrapper">'+
      		'<img src="'+jc+'" class="singleProjectImage" alt=""/> <a href="'+jc+'" class="singleProjectExpandButton">放大</a></div>'
     		 $("#singleProjectPageWrapper").append(html)
			}
			
			
		}
	}
}