

function MarqueeUpB()
{
	var speedB=80;
	demoB2.innerHTML=demoB1.innerHTML
	function MarqueeB()
	{
	 if(demoB2.offsetTop-demoB.scrollTop<=0)
	  demoB.scrollTop-=demoB1.offsetHeight;
	 else
	  demoB.scrollTop++;
	}
	var MyMarB=setInterval(MarqueeB,speedB)
	demoB.onmouseover=function() {clearInterval(MyMarB)}
	demoB.onmouseout=function() {MyMarB=setInterval(MarqueeB,speedB)}
}

function ShowTabs(a,b,c,d) {
		var i;
        for (i = 0; i < b; i++) {
            if (i == a) {
               	document.getElementById("tit" + c + i).className = "over";
				document.getElementById("txt" + c + i).className = "show";
            }
            else {
               	document.getElementById("tit" + c + i).className = "";
				document.getElementById("txt" + c + i).className = "hidden";
            }
        }
    }
	
	
	
function banner(width,height,pics,links,texts) { //v2.0
	var focus_width=width
	var focus_height=height
	var text_height=0
	var swf_height = focus_height+text_height
	var pics=pics
	var links=links
	var texts=texts
	var config = '3|0xffffff|0x000000|50|0xffffff|0x000000|0x000000';
    var texts = '';

	document.write('<object ID="focus_flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="100%" height="'+ swf_height +'">');
	document.write('<param name="allowScriptAccess" value="always"><param name="movie" value="sitemap/pixviewer.swf"><param name="quality" value="high"><param name="bgcolor" value="#E7E7E7">');
	document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
	// document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'">');
	// document.write('<embed ID="focus_flash" src="sitemap/focus.swf" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'" menu="false" bgcolor="#E7E7E7" quality="high" width="100%" height="'+ focus_height +'" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
	document.write('<param name="FlashVars" value="config='+config+'&bcastr_flie='+pics+'&bcastr_link='+links+'&bcastr_title='+texts+'&borderheight='+focus_height+'&textheight='+text_height+'" />');
	document.write('<embed ID="focus_flash" src="sitemap/focus.swf" wmode="opaque" FlashVars="config='+config+'&bcastr_flie='+pics+'&bcastr_link='+links+'&bcastr_title='+texts+'" menu="false" quality="high" width="100%" height="'+ swf_height +'&borderheight='+focus_height+'&textheight='+text_height+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
	document.write('</object>');
	
	// document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="100%" height="405">');
	// document.write('<param name="movie" value="/boloni/images/xshow/focus.swf" />');
	// document.write('<param name="quality" value="high" />');
	// document.write('<param name="menu" value="false" />');
	// document.write('<param name="wmode" value="transparent" />');
	// document.write('<param name="FlashVars" value="config='+config+'&bcastr_flie='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'" />');
	// document.write('<embed src="/boloni/images/xshow/focus.swf" wmode="opaque" FlashVars="config='+config+'&bcastr_flie='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'" menu="false" quality="high" width="100%" height="405" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
	// document.write('</object>');
	
	// document.write('<object ID="focus_flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ focus_width +'" height="'+ swf_height +'">');
	// document.write('<param name="allowScriptAccess" value="always"><param name="movie" value="sitemap/pixviewer.swf"><param name="quality" value="high"><param name="bgcolor" value="#E7E7E7">');
	// document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
	// document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'">');
	// document.write('<embed ID="focus_flash" src="sitemap/pixviewer.swf" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'" menu="false" bgcolor="#E7E7E7" quality="high" width="'+ focus_width +'" height="'+ focus_height +'" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');		document.write('</object>');
}


function overProCat(tyle,i) {
		var tyle;
		var i;
		if(tyle=="over"){
			document.getElementById("proCat"+i).className = "proCat overCat";
		}else{
			document.getElementById("proCat"+i).className = "proCat";
		}

    }

