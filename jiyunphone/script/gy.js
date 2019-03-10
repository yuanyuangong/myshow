
// 初始化
var list,dot,template,pushstatus, isempty=false,skips=0,cacheSize;
var now =Date.now();
var appKey = SHA1("A6902227200065"+"UZ"+"94BC5D5F-A237-4760-9350-865B677E12E5"+"UZ"+now)+"."+now;

  list=$('#list');
  template=$('#template');
  dot= doT.template(template.innerHTML);
  pushstatus=('#pushStatus');

    
function gyGetXdanzi(method,table,limit){
 

  var urls,param;
  param='?filter={"fields":{"updatedAt":false},"skip":'+skips+',"limit":'+limit+'}';
  urls="https://d.apicloud.com/mcm/api/"+table+param; 

      $.ajax({
         url: urls,
         method: method,
         timeout: 10,
          headers: {
            "X-APICloud-AppId": "A6902227200065",
            "X-APICloud-AppKey":appKey
          },

         dataType: 'json',
         cache:false
   }).success(function (data, status, header) {
       
        list.innerHTML=dot(data);
      }).fail(function (header, status, errorThrown) {
        alert("dsa")
      })

};
  
function gyCacheImage(gonggei,index){
  if(index>=gonggei.length){
    return
  }
  api.imageCache({
    url:gonggei[index].picture.url
  },function(ret,err){
    $api.byId('pic_'+gonggei[index].id).src = ret.url;
    gyCacheImage(gonggei,index+1);
  });
};

function gydelete(table,id){

  var urls;
  urls="https://d.apicloud.com/mcm/api/"+table+"/"+id; 
  api.showProgress({
        style: 'default',
        animationType: 'fade',
        title: '正在删除中...',
        text: '先喝杯茶...',
        modal: false
    }); 
     api.ajax({
         url: urls,
         method: 'POST',
         timeout: 10,
          headers: {
            "X-APICloud-AppId": "A6902227200065",
            "X-APICloud-AppKey":appKey
          },
         data:{
          "_method":"DELETE"
         },
     },function(ret,err){
      alert(urls);
      api.hideProgress();
      if(ret){ gyGetXdanzi(true,'GET','xuqiu',4); 
       
        alert("已删除")   }
        else{
          alert("云端数据暂时无法删除")
        }
     
     });
}

function gygetxiang(table,id){

  var urls;
  urls="https://d.apicloud.com/mcm/api/"+table+"/"+id; 
  api.showProgress({
        style: 'default',
        animationType: 'fade',
        title: '正在加载中...',
        text: '先喝杯茶...',
        modal: false
    }); 
     api.ajax({
         url: urls,
         method: 'GET',
         timeout: 10,
          headers: {
            "X-APICloud-AppId": "A6902227200065",
            "X-APICloud-AppKey":appKey
          },
     },function(ret,err){
      alert(urls);
      api.hideProgress();
      if(ret){
        $api.byId('liushui').innerHTML=ret.liushuiX;
        list.innerHTML=dot(ret);
        }else{
          alert("获取失败")
        }
     
     });
}