// 
// 
// function MarqueeUpB()
// {
	// var speedB=80;
	// demoB2.innerHTML=demoB1.innerHTML
	// function MarqueeB()
	// {
	 // if(demoB2.offsetTop-demoB.scrollTop<=0)
	  // demoB.scrollTop-=demoB1.offsetHeight;
	 // else
	  // demoB.scrollTop++;
	// }
	// var MyMarB=setInterval(MarqueeB,speedB)
	// demoB.onmouseover=function() {clearInterval(MyMarB)}
	// demoB.onmouseout=function() {MyMarB=setInterval(MarqueeB,speedB)}
// }
// 
// function ShowTabs(a,b,c,d) {
		// var i;
        // for (i = 0; i < b; i++) {
            // if (i == a) {
               	// document.getElementById("tit" + c + i).className = "over";
				// document.getElementById("txt" + c + i).className = "show";
            // }
            // else {
               	// document.getElementById("tit" + c + i).className = "";
				// document.getElementById("txt" + c + i).className = "hidden";
            // }
        // }
    // }
// 	
	
	
function banner(height,pics,links,texts) { //v2.0
	// var focus_width=width
	var focus_height=height
	var text_height=0
	var swf_height = focus_height+text_height
	var pics=pics
	var links=links
	var texts=''
	// var texts=texts
	// config 设置分别为: 自动播放时间(秒)|文字颜色|文字背景色|文字背景透明度|按键数字色|当前按键色|普通按键色
	var config='3|0xffffff|0x0099ff|50|0xffffff|0x0099ff|0x000000';
	
	document.write('<object ID="focus_flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="100%" height="'+ swf_height +'">');
	document.write('<param name="allowScriptAccess" value="always">');
	document.write('<param name="movie" value="sitemap/focus.swf">');
	document.write('<param name="quality" value="high">');
	document.write('<param name="bgcolor" value="#E7E7E7">');
	document.write('<param name="menu" value="false">');
	document.write('<param name="wmode" value="opaque">');
	document.write('<param name="FlashVars" value="config='+config+'&bcastr_flie='+pics+'&bcastr_link='+links+'&bcastr_title='+texts+'" />');
	document.write('<embed ID="focus_flash" src="/sitemap/focus.swf" wmode="opaque" FlashVars="config='+config+'&bcastr_flie='+pics+'&bcastr_link='+links+'&bcastr_title='+texts+'" menu="false" quality="high" width="100%" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>');
	document.write('</object>');
}
// 
// 
// function overProCat(tyle,i) {
		// var tyle;
		// var i;
		// if(tyle=="over"){
			// document.getElementById("proCat"+i).className = "proCat overCat";
		// }else{
			// document.getElementById("proCat"+i).className = "proCat";
		// }
// 
    // }

