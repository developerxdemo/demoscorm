if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
trivExitPage.trivExitPageItemExits=function(){
		og13984.hide();
		shape13985.hide();
		toc13986.hide();
		shape13987.hide();
		text13988.hide();
		textbutton13989.hide();
		text13993.hide();
		text13994.hide();
		textbutton13995.hide();
		textbutton13997.hide();
		og1095.hide();
		image9481.hide();
		shape7889.hide();
		shape1098.hide();
		shape11583.hide();
		text11584.hide();
		shape12805.hide();
		textbutton1099.hide();
		shape18.hide();
};
trivExitPage.transOutDone=function(){
		if (og13984.isVisible() && og13984.currTrans && !og13984.trivWasDone) return false; else og13984.trivWasDone=true;
		if (shape13985.isVisible() && shape13985.currTrans && !shape13985.trivWasDone) return false; else shape13985.trivWasDone=true;
		if (toc13986.isVisible() && toc13986.currTrans && !toc13986.trivWasDone) return false; else toc13986.trivWasDone=true;
		if (shape13987.isVisible() && shape13987.currTrans && !shape13987.trivWasDone) return false; else shape13987.trivWasDone=true;
		if (text13988.isVisible() && text13988.currTrans && !text13988.trivWasDone) return false; else text13988.trivWasDone=true;
		if (textbutton13989.isVisible() && textbutton13989.currTrans && !textbutton13989.trivWasDone) return false; else textbutton13989.trivWasDone=true;
		if (text13993.isVisible() && text13993.currTrans && !text13993.trivWasDone) return false; else text13993.trivWasDone=true;
		if (text13994.isVisible() && text13994.currTrans && !text13994.trivWasDone) return false; else text13994.trivWasDone=true;
		if (textbutton13995.isVisible() && textbutton13995.currTrans && !textbutton13995.trivWasDone) return false; else textbutton13995.trivWasDone=true;
		if (textbutton13997.isVisible() && textbutton13997.currTrans && !textbutton13997.trivWasDone) return false; else textbutton13997.trivWasDone=true;
		if (og1095.isVisible() && og1095.currTrans && !og1095.trivWasDone) return false; else og1095.trivWasDone=true;
		if (image9481.isVisible() && image9481.currTrans && !image9481.trivWasDone) return false; else image9481.trivWasDone=true;
		if (shape7889.isVisible() && shape7889.currTrans && !shape7889.trivWasDone) return false; else shape7889.trivWasDone=true;
		if (shape1098.isVisible() && shape1098.currTrans && !shape1098.trivWasDone) return false; else shape1098.trivWasDone=true;
		if (shape11583.isVisible() && shape11583.currTrans && !shape11583.trivWasDone) return false; else shape11583.trivWasDone=true;
		if (text11584.isVisible() && text11584.currTrans && !text11584.trivWasDone) return false; else text11584.trivWasDone=true;
		if (shape12805.isVisible() && shape12805.currTrans && !shape12805.trivWasDone) return false; else shape12805.trivWasDone=true;
		if (textbutton1099.isVisible() && textbutton1099.currTrans && !textbutton1099.trivWasDone) return false; else textbutton1099.trivWasDone=true;
		if (shape18.isVisible() && shape18.currTrans && !shape18.trivWasDone) return false; else shape18.trivWasDone=true;
};
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	progress9479.cwObj.pbVar=VarPageInChapter;
	progress9479.setPosition(VarPageInChapter.getValue());
	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
shape28.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1012 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(506 27)\" style=\"\">\n	<path d=\"M 0 0 L 1012 0 L 1012 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-506, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(506 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -2px; top: 608px; width: 1012px; height: 54px; z-index: 7; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj28",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,96,0,[-2,608.0000000000008,1012,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-2,"y":608,"width":1012,"height":54},"btnState":"disabled","altValue":"Rectangle","titleValue":"Rectangle","fallbackImg":"<img src=\"images/desktop_shape28.png\" alt=\"Rectangle\" title=\"Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1011 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505.5 0.5)\" style=\"\">\n	<path d=\"M 0 0 L 1010 0\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-505, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505.5 7.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: 606.5px; width: 1011px; height: 1px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,96,0,[-0.5,606.5000000000008,1011,1]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":607,"width":1011,"height":1},"btnState":"disabled","altValue":"Line","titleValue":"Line","fallbackImg":"<img src=\"images/desktop_shape17.png\" alt=\"Line\" title=\"Line\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text11.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 339px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 339px; min-height: 36px;\"><p style=\"text-align: center;\"><strong><span style=\"font-size: 20pt; color: rgb(255, 255, 255); font-family: &quot;century gothic&quot;, sans-serif;\">Complaint Management</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 335px; top: 20px; width: 339px; height: 36px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj11",
	bInsAnc:	0,
	cwObj:		{
		"name":	"QMS"
	},
	objData:	{"a":[0,96,0,[335,20,339,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":20,"width":339,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton26.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_197\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/help.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_197&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 614px; width: 40px; height: 40px; z-index: 10; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj26",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Help",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og14006.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[88.99999999999997,614,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":614,"width":40,"height":40},"imgDataNormal":"images/desktop_shape26.png","imgDataOver":"images/desktop_shape26_over.png","imgDataDown":"images/desktop_shape26_down.png","imgDataDisabled":"images/desktop_shape26_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_197\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/help.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_197&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_199\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/help_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_199&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_201\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/help_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_201&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_203\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_203&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Help","titleValue":"Help","fallbackImg":"<img alt=\"Help\" title=\"Help\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton23.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_205\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_205&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 157px; top: 612px; width: 44px; height: 44px; z-index: 11; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj23",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Index",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13984.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[156.99999999999994,612,44,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":157,"y":612,"width":44,"height":44},"imgDataNormal":"images/desktop_shape23.png","imgDataOver":"images/desktop_shape23_over.png","imgDataDown":"images/desktop_shape23_down.png","imgDataDisabled":"images/desktop_shape23_disabled.png","svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_205\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_205&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_207\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_207&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_209\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_209&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_211\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_211&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Index","titleValue":"Index","fallbackImg":"<img alt=\"Index\" title=\"Index\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton19.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_213\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_213&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 21px; top: 614px; width: 40px; height: 40px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Exit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('fmea_demo.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[20.99999999999998,614,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":614,"width":40,"height":40},"imgDataNormal":"images/desktop_shape19.png","imgDataOver":"images/desktop_shape19_over.png","imgDataDown":"images/desktop_shape19_down.png","imgDataDisabled":"images/desktop_shape26_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_213\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_213&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_215\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_215&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_217\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_217&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_219\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_219&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Exit","titleValue":"Exit","fallbackImg":"<img alt=\"Exit\" title=\"Exit\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton21.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_221\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_221&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 235px; top: 614px; width: 40px; height: 40px; z-index: 13; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj21",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Glossary",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og14006.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[234.99999999999997,614,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":235,"y":614,"width":40,"height":40},"imgDataNormal":"images/desktop_shape21.png","imgDataOver":"images/desktop_shape21_over.png","imgDataDown":"images/desktop_shape21_down.png","imgDataDisabled":"images/desktop_shape21_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_221\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_221&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_223\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_223&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_225\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary_dwon.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_225&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_227\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_227&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Glossary","titleValue":"Glossary","fallbackImg":"<img alt=\"Glossary\" title=\"Glossary\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton14.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 54 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(27 27)\" style=\"\">\n	<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_229\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_229&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(27 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 899px; top: 608px; width: 54px; height: 54px; z-index: 14; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj14",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('fmea_04_qms_24_activity.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[899,608,54,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":899,"y":608,"width":54,"height":54},"imgDataNormal":"images/desktop_shape14.png","imgDataOver":"images/desktop_shape14_over.png","imgDataDown":"images/desktop_shape14_down.png","imgDataDisabled":"images/desktop_shape14_disabled.png","svgDataNormal":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_229\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_229&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_231\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_231&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_233\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_233&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_235\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_235&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton12.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 54 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(27 27)\" style=\"\">\n	<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_237\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_237&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(27 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 955px; top: 608px; width: 54px; height: 54px; z-index: 15; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj12",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ false }}
	]
	},
	objData:	{"a":[4,33120,0,[955,608,54,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":955,"y":608,"width":54,"height":54},"imgDataNormal":"images/desktop_shape14.png","imgDataOver":"images/desktop_shape14_over.png","imgDataDown":"images/desktop_shape14_down.png","imgDataDisabled":"images/desktop_shape14_disabled.png","svgDataNormal":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_237\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_237&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_239\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_239&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_241\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_241&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_243\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_243&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og14006.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og14006",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape14007.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1008 0 L 1008 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -8.5px; width: 1009px; height: 671px; z-index: 16; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14007",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000003411,-8.499999999999318,1009,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":-8,"width":1009,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape14007.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14008.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 86\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 43)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 86 L 0 86 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -43) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 43)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 17px; top: 230px; width: 908px; height: 86px; z-index: 17; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14008",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[17,230.00000000000068,908,86]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":17,"y":230,"width":908,"height":86},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14008.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14009.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 39\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 19.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 39 L 0 39 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -19.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 19.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 16px; top: 399px; width: 908px; height: 39px; z-index: 18; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14009",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[16,399.0000000000007,908,39]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":16,"y":399,"width":908,"height":39},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14009.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14010.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 133\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 66.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 133 L 0 133 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -66.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 66.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 16px; top: 489px; width: 908px; height: 133px; z-index: 19; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14010",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[16,489.0000000000007,908,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":16,"y":489,"width":908,"height":133},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14010.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14011.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 18.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 37 L 0 37 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -18.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 18.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 63px; width: 908px; height: 37px; z-index: 20; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14011",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,63.00000000000066,908,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":63,"width":908,"height":37},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14011.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14012.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 906 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(453 20)\" style=\"\">\n	<path d=\"M 0 0 L 906 0 L 906 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-453, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(453 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 146px; width: 906px; height: 40px; z-index: 21; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14012",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,146.00000000000065,906,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":146,"width":906,"height":40},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14012.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton14013.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_245\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_245&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 601px; width: 45px; height: 45px; z-index: 22; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14013",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13394.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og14006.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,601,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":601,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_245\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_245&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_247\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_247&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_249\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_249&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_251\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_251&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14016.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 33px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(36, 101, 184); font-size: 11pt;\">B-Diagram</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 189px; width: 155px; height: 33px; z-index: 23;",
	cssClasses:	"",
	htmlId:		"tobj14016",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[25,189,155,33]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":189,"width":155,"height":33},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14017.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 78px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><span style=\"font-size: 11pt; font-family: Arial, sans-serif;\">Shows classification of interfaces on the system boundaries. A boundary diagram represents all the interfaces of a system in the form of a block diagram.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 189px; width: 519px; height: 78px; z-index: 24;",
	cssClasses:	"",
	htmlId:		"tobj14017",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,189,519,78]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":189,"width":519,"height":78},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14018.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 53px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(36, 101, 184); font-size: 11pt;\">Boundary Diagram</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 172px; top: 189px; width: 135px; height: 53px; z-index: 25;",
	cssClasses:	"",
	htmlId:		"tobj14018",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[172,189,135,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":172,"y":189,"width":135,"height":53},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14019.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 62px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">BOM​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 239px; width: 155px; height: 62px; z-index: 26;",
	cssClasses:	"",
	htmlId:		"tobj14019",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[25,239,155,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":239,"width":155,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14020.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 71px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 71px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">Bill of Materials​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 172px; top: 239px; width: 135px; height: 71px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj14020",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[172,239,135,71]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":172,"y":239,"width":135,"height":71},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14021.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 97px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 97px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><span style=\"font-family: arial; font-size: 11pt;\">​I</span><span style=\"font-family: arial; font-size: 11pt;\">s a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts and the quantities of each needed to manufacture an end product. A BOM may be used for communication between manufacturing partners, or confined to a single manufacturing plant.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 239px; width: 519px; height: 97px; z-index: 28;",
	cssClasses:	"",
	htmlId:		"tobj14021",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,239,519,97]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":239,"width":519,"height":97},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14022.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 73px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 73px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">BOP​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 322px; width: 155px; height: 73px; z-index: 29;",
	cssClasses:	"",
	htmlId:		"tobj14022",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[25,322,155,73]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":322,"width":155,"height":73},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14023.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 78px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">Bill of Process​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 172px; top: 322px; width: 135px; height: 78px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj14023",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[172,322,135,78]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":172,"y":322,"width":135,"height":78},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14024.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 111px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 111px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><span style=\"font-family: arial; font-size: 11pt;\">​​I</span><span style=\"font-family: arial; font-size: 11pt;\">s comprised of detailed plans explaining the manufacturing processes for a particular product. Within these plans resides in-depth information on machinery, plant resources, equipment layout, configurations, tools, and instructions.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 322px; width: 519px; height: 111px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj14024",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,322,519,111]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":322,"width":519,"height":111},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14025.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 122px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 122px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">The Complaint Management simplifies the process of capturing and categorizing internal and external complaint data, helping you identify, prioritize and correct product and process deficiencies. </span></p><p style=\"text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">Comprehensive tracking, evaluation, analysis and reporting capabilities provide the actionable information needed to drive continuous improvement in quality and productivity. ​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 501px; width: 519px; height: 122px; z-index: 32;",
	cssClasses:	"",
	htmlId:		"tobj14025",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,501,519,122]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":501,"width":519,"height":122},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14026.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 41px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">AIAG​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 104px; width: 155px; height: 41px; z-index: 33;",
	cssClasses:	"",
	htmlId:		"tobj14026",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[25,104,155,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":104,"width":155,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14027.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 192px; min-height: 57px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 192px; min-height: 57px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(36, 101, 184); font-family: arial,sans-serif; font-size: 11pt;\">Automotive Industry Action Group​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 172px; top: 104px; width: 192px; height: 57px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj14027",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[172,104,192,57]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":172,"y":104,"width":192,"height":57},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14028.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 35px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span>​</span><span style=\"font-family: arial; font-size: 11pt;\">American Association of the Automotive Industry.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 104px; width: 519px; height: 35px; z-index: 35;",
	cssClasses:	"",
	htmlId:		"tobj14028",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,104,519,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":104,"width":519,"height":35},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14029.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 34px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(36, 101, 184); font-family: arial,sans-serif; font-size: 11pt;\">Alert Sheet​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 152px; width: 155px; height: 34px; z-index: 36;",
	cssClasses:	"",
	htmlId:		"tobj14029",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[25,152,155,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":152,"width":155,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14030.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​ABREVIATION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 29px; top: 70px; width: 155px; height: 25px; z-index: 37;",
	cssClasses:	"",
	htmlId:		"tobj14030",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[29,70,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":70,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14031.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 38;",
	cssClasses:	"",
	htmlId:		"tobj14031",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14032.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​MEANING</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 176px; top: 70px; width: 135px; height: 25px; z-index: 39;",
	cssClasses:	"",
	htmlId:		"tobj14032",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[176,70,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":70,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14033.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 204px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 204px; min-height: 33px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">Business Case Accountable​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 172px; top: 401px; width: 204px; height: 33px; z-index: 40;",
	cssClasses:	"",
	htmlId:		"tobj14033",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[172,401,204,33]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":172,"y":401,"width":204,"height":33},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14034.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 204px; min-height: 102px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 204px; min-height: 102px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">Corrective Actions Preventive Actions​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 172px; top: 442px; width: 204px; height: 102px; z-index: 41;",
	cssClasses:	"",
	htmlId:		"tobj14034",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[172,442,204,102]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":172,"y":442,"width":204,"height":102},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14035.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 75px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 75px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">CM​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 501px; width: 134px; height: 75px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj14035",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[25,501,134,75]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":501,"width":134,"height":75},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14036.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 204px; min-height: 82px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 204px; min-height: 82px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">Complaint Management​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 172px; top: 501px; width: 204px; height: 82px; z-index: 43;",
	cssClasses:	"",
	htmlId:		"tobj14036",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[172,501,204,82]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":172,"y":501,"width":204,"height":82},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14037.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 117px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 117px; min-height: 27px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(36, 101, 184); font-family: Arial,sans-serif; font-size: 11pt;\">BUS</span></strong></span></p><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span>&nbsp;</span></p><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span>&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 401px; width: 117px; height: 27px; z-index: 44;",
	cssClasses:	"",
	htmlId:		"tobj14037",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[25,401,117,27]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":401,"width":117,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14038.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 43px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 43px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">CAPA​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 442px; width: 134px; height: 43px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj14038",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[25,442,134,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":442,"width":134,"height":43},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14039.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 37px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 37px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​</span><span style=\"font-family: arial; font-size: 11pt;\">Document through which shows which type of issue is.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 152px; width: 519px; height: 37px; z-index: 46;",
	cssClasses:	"",
	htmlId:		"tobj14039",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,152,519,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":152,"width":519,"height":37},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14040.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 72px; width: 519px; height: 28px; z-index: 47;",
	cssClasses:	"",
	htmlId:		"tobj14040",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,72,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton14041.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_253\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_253&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 48; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14041",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og14006.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_253\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_253&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_255\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_255&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_257\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_257&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_259\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_259&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og13984.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og13984",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape13985.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1012 665\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(506 332.5)\" style=\"\">\n	<path d=\"M 0 0 L 1012 0 L 1012 665 L 0 665 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40); pointer-events: auto;\" transform=\"translate(0 0) translate(-506, -332.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(506 332.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -3px; top: 6.82121e-13px; width: 1012px; height: 665px; z-index: 49; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13985",
	bInsAnc:	0,
	cwObj:		{
		"name":	"full_shadow"
	},
	objData:	{"a":[288,64,[30,30,7,7,0,0,-3.000000000000341,6.821210263296962e-13,1,1],[-3.000000000000341,6.821210263296962e-13,1012,665]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-3,"y":0,"width":1012,"height":665},"btnState":"disabled","altValue":"full_shadow","titleValue":"full_shadow","fallbackImg":"<img src=\"images/desktop_shape13985.png\" alt=\"full_shadow\" title=\"full_shadow\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.4;\">"}
};
toc13986.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"toc\" class=\"DLG_treeview\" style=\"background-color: rgb(255, 255, 255); font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); position: absolute; left: 0px; top: 0px; width: 150px; height: 300px; border: thin solid; overflow: hidden auto;\"><ul id=\"tree_ul_0\" style=\"list-style-type: none; display: block; padding: 0px; white-space: nowrap; font-family: Arial, sans-serif; font-size: 12pt;\"><li id=\"node_0\" class=\"TV_midLine\"><img src=\"images/trivantis-minus.gif\" id=\"expandImg\" style=\"visibility: hidden;\"><a href=\'javascript:trivExitPage(\"fmea_04_portada.html\", false );\' style=\"color: rgb(0, 0, 0); cursor: pointer;\"><img src=\"images/trivantis-page.gif\" border=\"0\" style=\"margin-right: 3px; cursor: pointer;\">portada</a></li><li id=\"node_1\" class=\"TV_lastLine\"><a id=\"toc_13986_a1\" href=\"javascript:toc13986.expand(this,\'trivantis-plus.gif\',\'trivantis-minus.gif\',\'toc_13986_a1\');\"><img src=\"images/trivantis-minus.gif\" id=\"expandImg\" style=\"visibility: inherit; border: 0px;\"></a><a href=\'javascript:trivExitPage(\"fmea_04_qms_01_presentation.html\", false );\' style=\"color: rgb(0, 0, 0); cursor: pointer;\"><img src=\"images/trivantis-chapter.gif\" border=\"0\" style=\"margin-right: 3px; cursor: pointer;\">QMS</a><ul id=\"tree_ul_1\" style=\"list-style-type: none; display: block; padding-left: 20px; white-space: nowrap; font-family: Arial, sans-serif; font-size: 12pt;\"><li id=\"node_2\" class=\"TV_midLine\"><img src=\"images/trivantis-minus.gif\" id=\"expandImg\" style=\"visibility: hidden;\"><a href=\'javascript:trivExitPage(\"fmea_04_qms_01_presentation.html\", false );\' style=\"color: rgb(0, 0, 0); cursor: pointer;\"><img src=\"images/trivantis-page.gif\" border=\"0\" style=\"margin-right: 3px; cursor: pointer;\">01_presentation</a></li><li id=\"node_3\" class=\"TV_midLine\"><img src=\"images/trivantis-minus.gif\" id=\"expandImg\" style=\"visibility: hidden;\"><a href=\'javascript:trivExitPage(\"fmea_04_qms_03_qms.html\", false );\' style=\"color: rgb(0, 0, 0); cursor: pointer;\"><img src=\"images/trivantis-page.gif\" border=\"0\" style=\"margin-right: 3px; cursor: pointer;\">03_QMS</a></li><li id=\"node_4\" class=\"TV_midLine\"><img src=\"images/trivantis-minus.gif\" id=\"expandImg\" style=\"visibility: hidden;\"><a href=\'javascript:trivExitPage(\"fmea_04_qms_05_qms.html\", false );\' style=\"color: rgb(0, 0, 0); cursor: pointer;\"><img src=\"images/trivantis-page.gif\" border=\"0\" style=\"margin-right: 3px; cursor: pointer;\">05_QMS</a></li><li id=\"node_5\" class=\"TV_midLine\"><img src=\"images/trivantis-minus.gif\" id=\"expandImg\" style=\"visibility: hidden;\"><a href=\'javascript:trivExitPage(\"fmea_04_qms_11_activity.html\", false );\' style=\"color: rgb(0, 0, 0); cursor: pointer;\"><img src=\"images/trivantis-page.gif\" border=\"0\" style=\"margin-right: 3px; cursor: pointer;\">11_activity</a></li><li id=\"node_6\" class=\"TV_midLine\"><img src=\"images/trivantis-minus.gif\" id=\"expandImg\" style=\"visibility: hidden;\"><a href=\'javascript:trivExitPage(\"fmea_04_qms_24_activity.html\", false );\' style=\"color: rgb(0, 0, 0); cursor: pointer;\"><img src=\"images/trivantis-page.gif\" border=\"0\" style=\"margin-right: 3px; cursor: pointer;\">24_activity</a></li><li id=\"node_7\" class=\"TV_lastLine\"><img src=\"images/trivantis-minus.gif\" id=\"expandImg\" style=\"visibility: hidden;\"><a href=\'javascript:trivExitPage(\"fmea_04_qms_30_summary.html\", false );\' style=\"color: rgb(0, 0, 0); cursor: pointer; background-color: rgb(195, 218, 249);\"><img src=\"images/trivantis-page.gif\" border=\"0\" style=\"margin-right: 3px; cursor: pointer;\">30_summary</a></li></ul></li></ul></div>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 12px; width: 150px; height: 300px; z-index: 50;",
	cssClasses:	"",
	htmlId:		"tobj13986",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Table of Contents 1"
	},
	objData:	{"a":[288,50331648,[30,30,7,7,0,0,12,12,1,1],[12,12,150,300]],"desktopRect":{"x":12,"y":12,"width":150,"height":300},"iAppear":1,"res":null,"resNotStarted":null,"resInProgress":null}
};
shape13987.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 313 662\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(156.5 331)\" style=\"\">\n	<path d=\"M 0 0 L 312 0 L 312 661 L 0 661 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-156, -330.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(156.5 331)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -0.5px; width: 313px; height: 662px; z-index: 51; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13987",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[288,0,[30,30,7,7,0,0,-0.5000000000005116,-0.49999999999965894,1,1],[-0.5000000000005116,-0.49999999999965894,313,662]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":313,"height":662},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape13987.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13988.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 335px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 335px; min-height: 53px;\"><h1><p style=\"text-align:left\"><span><strong><span style=\"color:#003E67;font-family:arial,sans-serif;font-size:28pt;\">Index</span></strong></span></p></h1></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 33px; top: 37px; width: 335px; height: 53px; z-index: 52;",
	cssClasses:	"",
	htmlId:		"tobj13988",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[288,0,[30,30,7,7,0,0,33,37,1,1],[33,37,335,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":37,"width":335,"height":53},"dwTextFlags":65536,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13989.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_261\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_261&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 267px; top: 1px; width: 45px; height: 45px; z-index: 53; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13989",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13984.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1095.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[292,33088,[30,30,7,7,0,0,266.99999999999994,1.0000000000000426,1,1],[266.99999999999994,1.0000000000000426,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":267,"y":1,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_261\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_261&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_263\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_263&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_265\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_265&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_267\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_267&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13993.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 259px; min-height: 528px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 259px; min-height: 528px;\"><p style=\"text-align:left\"><span style=\"font-size: 12pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Introduction</span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; font-size:12pt;\"><span style=\"color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· </span><span style=\"font-family: Arial, sans-serif;\"><a id=\"triv13999\" href=\"javascript:hyperlink13999()\" style=\"cursor: pointer;\"><span style=\"color: rgb(36, 101, 184); text-decoration: underline;\"><u>Presentatio</u><u>n</u></span></a></span></span></p>\n\n<p></p>\n\n<p><span style=\"font-size: 12pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">&nbsp;</span></p>\n\n<p><span style=\"font-size: 12pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">The Complaint</span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; font-size: 12pt; background-color: transparent;\">&nbsp; &nbsp; &nbsp; &nbsp; · <span style=\"color:#2465b8;\"><a id=\"triv14001\" href=\"javascript:hyperlink14001()\" style=\"cursor: pointer;\"><u><u><span style=\"text-decoration: underline;\">Types</span></u></u></a></span></span></p>\n\n<p><span>&nbsp;</span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\">​</span><span style=\"font-family: Arial, sans-serif; font-size: 12pt;\">New AIAG-VDA Standard</span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 12pt;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; · <span style=\"color:#2465b8;\"><a id=\"triv14002\" href=\"javascript:hyperlink14002()\" style=\"cursor: pointer;\"><u><u><span style=\"text-decoration: underline;\">Activity</span></u></u></a></span></span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\">​</span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\">6. Remember that...</span></p>\n\n<p><span><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; · </span><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 12pt;\"><a id=\"triv14000\" href=\"javascript:hyperlink14000()\" style=\"cursor: pointer;\"><span style=\"text-decoration: underline;\"><u><u>Summary</u></u></span></a></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 41px; top: 117px; width: 259px; height: 528px; z-index: 54;",
	cssClasses:	"",
	htmlId:		"tobj13993",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[288,0,[30,30,7,7,0,0,41,117,1,1],[41,117,259,528]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":41,"y":117,"width":259,"height":528},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13994.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 229px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 229px; min-height: 32px;\"><p style=\"text-align: center;\"><span style=\"font-size:9pt; color: rgb(66, 138, 230); font-family: arial, sans-serif;\">(Click here to see full diagram)</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 36px; top: 617px; width: 229px; height: 32px; z-index: 55;",
	cssClasses:	"",
	htmlId:		"tobj13994",
	bInsAnc:	0,
	cwObj:		{
		"name":	"click"
	},
	objData:	{"a":[288,0,[30,30,7,7,0,0,36,617,1,1],[36,617,229,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":617,"width":229,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13995.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 65 65\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32.5 32.5)\" style=\"\">\n	<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_269\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"65\" height=\"65\" xlink:href=\"images/ampliar_btn.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_269&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32.5 32.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 235px; top: 587px; width: 65px; height: 65px; z-index: 56; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13995",
	bInsAnc:	1,
	cwObj:		{
		"name":	"amplify",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1095.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[292,33088,[30,30,7,7,0,0,234.99999999999994,587,1,1],[234.99999999999994,587,65,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":235,"y":587,"width":65,"height":65},"imgDataNormal":"images/desktop_shape13995.png","imgDataOver":"images/desktop_shape13995_over.png","imgDataDown":"images/desktop_shape13995.png","imgDataDisabled":"images/desktop_shape13995_disabled.png","svgDataNormal":"<g transform=\"translate(32.5 32.5)\" style=\"\">\n\t<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_269\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"65\" height=\"65\" xlink:href=\"images/ampliar_btn.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_269&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32.5 32.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32.5 32.5)\" style=\"\">\n\t<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_271\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"65\" height=\"65\" xlink:href=\"images/ampliar.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_271&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32.5 32.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32.5 32.5)\" style=\"\">\n\t<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_273\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"65\" height=\"65\" xlink:href=\"images/ampliar_btn.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_273&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32.5 32.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32.5 32.5)\" style=\"\">\n\t<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_275\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"65\" height=\"65\" xlink:href=\"images/ampliar_btn.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 65 L 0 65 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_275&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -32.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32.5 32.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"amplify","titleValue":"amplify","fallbackImg":"<img alt=\"amplify\" title=\"amplify\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13997.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 172 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_12276_1023_276\" gradientUnits=\"userSpaceOnUse\" x1=\"86\" y1=\"25\" x2=\"86\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(86 12.5)\" style=\"\">\n	<linearGradient id=\"SVGID_12276_1023_276\" gradientUnits=\"userSpaceOnUse\" x1=\"86.5\" y1=\"25.5\" x2=\"86.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 0.56 0 L 170.44 0 A 0.56 0.56 0 0 1 171 0.56 L 171 23.44 A 0.56 0.56 0 0 1 170.44 24 L 0.56 24 A 0.56 0.56 0 0 1 0 23.44 L 0 0.56 A 0.56 0.56 0 0 1 0.56 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_276&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-85.5, -12) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(86 12.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 63.5px; top: 611.5px; width: 172px; height: 25px; z-index: 57; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13997",
	bInsAnc:	1,
	cwObj:		{
		"name":	"FMEA Diagram",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1095.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[292,32832,[30,30,7,7,0,0,63.5,611.5000000000001,1,1],[63.5,611.5000000000001,172,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":64,"y":612,"width":172,"height":25},"imgDataNormal":"images/desktop_shape13997.png","imgDataOver":"images/desktop_shape13997.png","imgDataDown":"images/desktop_shape13997.png","imgDataDisabled":"images/desktop_shape13997.png","svgDataNormal":"<linearGradient id=\"SVGID_12276_1023_276\" gradientUnits=\"userSpaceOnUse\" x1=\"86\" y1=\"25\" x2=\"86\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(86 12.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_12276_1023_276\" gradientUnits=\"userSpaceOnUse\" x1=\"86.5\" y1=\"25.5\" x2=\"86.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0.56 0 L 170.44 0 A 0.56 0.56 0 0 1 171 0.56 L 171 23.44 A 0.56 0.56 0 0 1 170.44 24 L 0.56 24 A 0.56 0.56 0 0 1 0 23.44 L 0 0.56 A 0.56 0.56 0 0 1 0.56 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_276&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-85.5, -12) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(86 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_12276_1023_277\" gradientUnits=\"userSpaceOnUse\" x1=\"86\" y1=\"25\" x2=\"86\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(86 12.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_12276_1023_277\" gradientUnits=\"userSpaceOnUse\" x1=\"86.5\" y1=\"25.5\" x2=\"86.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0.56 0 L 170.44 0 A 0.56 0.56 0 0 1 171 0.56 L 171 23.44 A 0.56 0.56 0 0 1 170.44 24 L 0.56 24 A 0.56 0.56 0 0 1 0 23.44 L 0 0.56 A 0.56 0.56 0 0 1 0.56 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_277&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-85.5, -12) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(86 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_12276_1023_278\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"25\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(86 12.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_12276_1023_278\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"25.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0.56 0 L 170.44 0 A 0.56 0.56 0 0 1 171 0.56 L 171 23.44 A 0.56 0.56 0 0 1 170.44 24 L 0.56 24 A 0.56 0.56 0 0 1 0 23.44 L 0 0.56 A 0.56 0.56 0 0 1 0.56 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_278&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-85.5, -12) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(86 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_12276_1023_279\" gradientUnits=\"userSpaceOnUse\" x1=\"86\" y1=\"25\" x2=\"86\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(86 12.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_12276_1023_279\" gradientUnits=\"userSpaceOnUse\" x1=\"86.5\" y1=\"25.5\" x2=\"86.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0.56 0 L 170.44 0 A 0.56 0.56 0 0 1 171 0.56 L 171 23.44 A 0.56 0.56 0 0 1 170.44 24 L 0.56 24 A 0.56 0.56 0 0 1 0 23.44 L 0 0.56 A 0.56 0.56 0 0 1 0.56 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_279&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-85.5, -12) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(86 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"FMEA Diagram","titleValue":"FMEA Diagram","fallbackImg":"<img alt=\"FMEA Diagram\" title=\"FMEA Diagram\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
og14046.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og14046",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape14047.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 662\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 331)\" style=\"\">\n	<path d=\"M 19.69 0 L 989.31 0 A 19.69 19.69 0 0 1 1009 19.69 L 1009 642.31 A 19.69 19.69 0 0 1 989.31 662 L 19.69 662 A 19.69 19.69 0 0 1 0 642.31 L 0 19.69 A 19.69 19.69 0 0 1 19.69 0 Z\" style=\"stroke: rgb(36, 101, 184); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -331) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 331)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -3.41061e-13px; top: 6.82121e-13px; width: 1009px; height: 662px; z-index: 58; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14047",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[-3.410605131648481e-13,6.821210263296962e-13,1009,662]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":662},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape14047.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton14048.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_281\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_281&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 952px; top: 12px; width: 45px; height: 45px; z-index: 59; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14048",
	bInsAnc:	1,
	cwObj:		{
		"name":	"close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og14046.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[952,12.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":952,"y":12,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_281\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_281&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_283\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_283&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_285\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_285&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_287\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_287&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"close","titleValue":"close","fallbackImg":"<img alt=\"close\" title=\"close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image14050.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj14050Img\" src=\"images/help_pop_up.png\" alt=\"help_pop_up\" title=\"help_pop_up\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 882px; height: 578px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 64px; top: 40px; width: 882px; height: 578px; z-index: 60;",
	cssClasses:	"",
	htmlId:		"tobj14050",
	bInsAnc:	0,
	cwObj:		{
		"name":	"help_pop_up"
	},
	objData:	{"a":[0,256,0,[64,40,882,578]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":64,"y":40,"width":882,"height":578}}
};
shape14051.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 287 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(143.5 29)\" style=\"\">\n	<path d=\"M 0 0 L 287 0 L 287 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-143.5, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(143.5 29)\">\n		<text font-family=\"\'Arial\',sans-serif\" font-size=\"21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 649px; top: 45px; width: 287px; height: 58px; z-index: 61; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14051",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 4"
	},
	objData:	{"a":[0,0,0,[649,45.00000000000021,287,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":649,"y":45,"width":287,"height":58},"btnState":"disabled","altValue":"Rectangle 4","titleValue":"Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape14051.png\" alt=\"Rectangle 4\" title=\"Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14052.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 865px; top: 560px; width: 14px; height: 2px; z-index: 62; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj14052",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[865,560,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":866,"y":561,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14053.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 65px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 65px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Previous</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 839px; top: 536px; width: 65px; height: 22px; z-index: 63;",
	cssClasses:	"",
	htmlId:		"tobj14053",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[839,536,65,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":839,"y":536,"width":65,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14054.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 16 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8 1)\" style=\"\">\n	<path d=\"M 0 0 L 14 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-7, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 790px; top: 561px; width: 16px; height: 2px; z-index: 64; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj14054",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[790,561,16,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":791,"y":562,"width":16,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14054.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14055.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 65px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 65px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Screen</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 766px; top: 536px; width: 65px; height: 22px; z-index: 65;",
	cssClasses:	"",
	htmlId:		"tobj14055",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[766,536,65,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":766,"y":536,"width":65,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14056.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 16 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8 1)\" style=\"\">\n	<path d=\"M 0 0 L 14 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-7, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 561px; width: 16px; height: 2px; z-index: 66; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj14056",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[510,561,16,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":511,"y":562,"width":16,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14054.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14057.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 165px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 165px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Progress bar</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 435px; top: 536px; width: 165px; height: 22px; z-index: 67;",
	cssClasses:	"",
	htmlId:		"tobj14057",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[435,536,165,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":435,"y":536,"width":165,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14058.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 918px; top: 560px; width: 14px; height: 2px; z-index: 68; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj14058",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[918,560,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":919,"y":561,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14059.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 36px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 36px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Next</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 907px; top: 536px; width: 36px; height: 22px; z-index: 69;",
	cssClasses:	"",
	htmlId:		"tobj14059",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[907,536,36,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":907,"y":536,"width":36,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text14060.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 22px;\"><p style=\"text-align:left\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Title of the Unit</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 216px; top: 55px; width: 200px; height: 22px; z-index: 70;",
	cssClasses:	"",
	htmlId:		"tobj14060",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[216,55,200,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":216,"y":55,"width":200,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14061.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 88px; top: 561px; width: 14px; height: 2px; z-index: 71; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj14061",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[88,561,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":562,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14062.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 30px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 30px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Exit</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 80px; top: 537px; width: 30px; height: 22px; z-index: 72;",
	cssClasses:	"",
	htmlId:		"tobj14062",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[80,537,30,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":80,"y":537,"width":30,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14063.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 152px; top: 561px; width: 14px; height: 2px; z-index: 73; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj14063",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[152,561,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":562,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14064.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 34px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 34px; min-height: 40px;\"><p style=\"text-align:center\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 12pt;\">Help</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 142px; top: 537px; width: 34px; height: 40px; z-index: 74;",
	cssClasses:	"",
	htmlId:		"tobj14064",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[142,537,34,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":142,"y":537,"width":34,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14065.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 215px; top: 561px; width: 14px; height: 2px; z-index: 75; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj14065",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[215,561,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":216,"y":562,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14066.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 46px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 46px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Index</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 199px; top: 537px; width: 46px; height: 22px; z-index: 76;",
	cssClasses:	"",
	htmlId:		"tobj14066",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[199,537,46,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":199,"y":537,"width":46,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14067.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 279px; top: 561px; width: 14px; height: 2px; z-index: 77; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj14067",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[279,561,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":280,"y":562,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14068.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Glossary</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 254px; top: 537px; width: 64px; height: 22px; z-index: 78;",
	cssClasses:	"",
	htmlId:		"tobj14068",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[254,537,64,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":254,"y":537,"width":64,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14069.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 203px; top: 65px; width: 14px; height: 2px; z-index: 79; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14069",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[203,65.00000000000001,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":204,"y":66,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14070.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 22px;\"><p style=\"text-align:left\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Title of the Chapter</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 325px; top: 73px; width: 200px; height: 22px; z-index: 80;",
	cssClasses:	"",
	htmlId:		"tobj14070",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[325,73,200,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":325,"y":73,"width":200,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14071.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 411px; top: 138px; width: 14px; height: 2px; z-index: 81; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14071",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[411,138,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":412,"y":139,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14072.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 22px;\"><p style=\"text-align:left\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Title of the Screen</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 424px; top: 128px; width: 200px; height: 22px; z-index: 82;",
	cssClasses:	"",
	htmlId:		"tobj14072",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[424,128,200,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":424,"y":128,"width":200,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14073.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 712px; top: 467px; width: 14px; height: 2px; z-index: 83; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14073",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[712,467,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":713,"y":468,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text14074.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 22px;\"><p style=\"text-align:left\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 12pt;\">Link</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 725px; top: 457px; width: 200px; height: 22px; z-index: 84;",
	cssClasses:	"",
	htmlId:		"tobj14074",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[725,457,200,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":725,"y":457,"width":200,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape14075.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 312px; top: 83px; width: 14px; height: 2px; z-index: 85; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14075",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[312,83.00000000000001,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":313,"y":84,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape14052.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14076.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 128 21\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(64 10.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 121.25 0 A 4.75 4.75 0 0 1 126 4.75 L 126 14.25 A 4.75 4.75 0 0 1 121.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-63, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(64 10.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 77px; top: 55px; width: 128px; height: 21px; z-index: 86; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14076",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[77,55.0000000000001,128,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":56,"width":128,"height":21},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14076.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14077.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 237 21\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(118.5 10.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 230.25 0 A 4.75 4.75 0 0 1 235 4.75 L 235 14.25 A 4.75 4.75 0 0 1 230.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-117.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(118.5 10.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 77px; top: 74px; width: 237px; height: 21px; z-index: 87; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14077",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[77,74.00000000000017,237,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":75,"width":237,"height":21},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14077.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14078.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 310 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(155 15.5)\" style=\"\">\n	<path d=\"M 7.25 0 L 300.75 0 A 7.25 7.25 0 0 1 308 7.25 L 308 21.75 A 7.25 7.25 0 0 1 300.75 29 L 7.25 29 A 7.25 7.25 0 0 1 0 21.75 L 0 7.25 A 7.25 7.25 0 0 1 7.25 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-154, -14.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(155 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 103px; top: 124px; width: 310px; height: 31px; z-index: 88; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14078",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[103,124.00000000000023,310,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":104,"y":125,"width":310,"height":31},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14078.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14079.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 365 69\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(182.5 34.5)\" style=\"\">\n	<path d=\"M 16.75 0 L 346.25 0 A 16.75 16.75 0 0 1 363 16.75 L 363 50.25 A 16.75 16.75 0 0 1 346.25 67 L 16.75 67 A 16.75 16.75 0 0 1 0 50.25 L 0 16.75 A 16.75 16.75 0 0 1 16.75 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-181.5, -33.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(182.5 34.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 347px; top: 435px; width: 365px; height: 69px; z-index: 89; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14079",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[347,435.0000000000002,365,69]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":348,"y":436,"width":365,"height":69},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14079.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14080.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 211 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(105.5 25)\" style=\"\">\n	<path d=\"M 12 0 L 197 0 A 12 12 0 0 1 209 12 L 209 36 A 12 12 0 0 1 197 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-104.5, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(105.5 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 412px; top: 569px; width: 211px; height: 50px; z-index: 90; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14080",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[412,569.0000000000001,211,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":413,"y":570,"width":211,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14080.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14081.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 78 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(39 25)\" style=\"\">\n	<path d=\"M 12 0 L 64 0 A 12 12 0 0 1 76 12 L 76 36 A 12 12 0 0 1 64 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-38, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(39 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 759px; top: 569px; width: 78px; height: 50px; z-index: 91; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14081",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[759,569.0000000000001,78,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":760,"y":570,"width":78,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14081.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14082.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 69px; top: 568px; width: 52px; height: 50px; z-index: 92; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14082",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[68.99999999999996,568,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":569,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14082.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14083.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 260px; top: 568px; width: 52px; height: 50px; z-index: 93; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14083",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[259.99999999999994,568,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":261,"y":569,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14082.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14084.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 196px; top: 568px; width: 52px; height: 50px; z-index: 94; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14084",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[195.99999999999994,568,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":197,"y":569,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14082.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14085.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 899px; top: 568px; width: 52px; height: 50px; z-index: 95; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14085",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[899,568,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":569,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14082.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14086.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 846px; top: 568px; width: 52px; height: 50px; z-index: 96; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14086",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[846,568,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":847,"y":569,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14082.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape14087.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 133px; top: 568px; width: 52px; height: 50px; z-index: 97; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj14087",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[132.99999999999994,568,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":569,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14082.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og1095.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og1095",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
image9481.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj9481Img\" src=\"images/complete_FMEA.png\" alt=\"complete_FMEA\" title=\"complete_FMEA\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 695px; height: 293px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 314px; top: 187px; width: 695px; height: 293px; z-index: 98;",
	cssClasses:	"",
	htmlId:		"tobj9481",
	bInsAnc:	0,
	cwObj:		{
		"name":	"complete_FMEA"
	},
	objData:	{"a":[288,256,[30,34,9,9,0,0,314,187,1,0],[314,187,695,293]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":314,"y":187,"width":695,"height":293}}
};
shape7889.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 498 293\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(249 146.5)\" style=\"\">\n	<path d=\"M 0 0 L 498 0 L 498 293 L 0 293 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40); pointer-events: auto;\" transform=\"translate(0 0) translate(-249, -146.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(249 146.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 313px; top: 187px; width: 498px; height: 293px; z-index: 99; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj7889",
	bInsAnc:	0,
	cwObj:		{
		"name":	"shadow"
	},
	objData:	{"a":[288,0,[30,34,9,9,0,0,312.99999999999983,187.00000000000034,1,0],[312.99999999999983,187.00000000000034,498,293]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":313,"y":187,"width":498,"height":293},"btnState":"disabled","altValue":"shadow","titleValue":"shadow","fallbackImg":"<img src=\"images/desktop_shape7889.png\" alt=\"shadow\" title=\"shadow\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.4;\">"}
};
shape1098.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 105 293\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(52.5 146.5)\" style=\"\">\n	<path d=\"M 0 0 L 102 0 L 102 290 L 0 290 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 3; stroke-dasharray: 1, 4; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-51, -145) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(52.5 146.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-49\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 809.5px; top: 186.5px; width: 105px; height: 293px; z-index: 100; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1098",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[288,0,[30,34,9,9,0,0,809.4999999999998,186.5,1,0],[809.4999999999998,186.5,105,293]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":811,"y":188,"width":105,"height":293},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape1098.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape11583.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 10)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 10)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 828px; top: 305px; width: 52px; height: 20px; z-index: 101; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj11583",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 3"
	},
	objData:	{"a":[288,0,[30,34,9,9,0,0,828,305.00000000000006,1,0],[828,305.00000000000006,52,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":828,"y":305,"width":52,"height":20},"btnState":"disabled","altValue":"Rectangle 3","titleValue":"Rectangle 3","fallbackImg":"<img src=\"images/desktop_shape11583.png\" alt=\"Rectangle 3\" title=\"Rectangle 3\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text11584.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 81px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 81px; min-height: 30px;\"><p style=\"text-align: left; line-height: 11px; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: Arial, sans-serif; font-size: 9pt;\">Complaint </span></strong></span></p><p style=\"text-align: left; line-height: 11px; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: Arial, sans-serif; font-size: 9pt;\">Management</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 827px; top: 304px; width: 81px; height: 30px; z-index: 102;",
	cssClasses:	"",
	htmlId:		"tobj11584",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[288,0,[30,34,9,9,0,0,827,304,1,0],[827,304,81,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":827,"y":304,"width":81,"height":30},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape12805.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 286 51\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(143 25.5)\" style=\"\">\n	<path d=\"M 12.25 0 L 271.75 0 A 12.25 12.25 0 0 1 284 12.25 L 284 36.75 A 12.25 12.25 0 0 1 271.75 49 L 12.25 49 A 12.25 12.25 0 0 1 0 36.75 L 0 12.25 A 12.25 12.25 0 0 1 12.25 0 Z\" style=\"stroke: rgb(36, 101, 184); stroke-width: 2; stroke-dasharray: 1, 3; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -24.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(143 25.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 627px; top: 296px; width: 286px; height: 51px; z-index: 103; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj12805",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[288,0,[30,34,9,9,0,0,627,296.0000000000002,1,0],[627,296.0000000000002,286,51]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":628,"y":297,"width":286,"height":51},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape12805.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1099.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 442 123\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_12276_1023_288\" gradientUnits=\"userSpaceOnUse\" x1=\"221\" y1=\"123\" x2=\"221\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(221 61.5)\" style=\"\">\n	<linearGradient id=\"SVGID_12276_1023_288\" gradientUnits=\"userSpaceOnUse\" x1=\"221.5\" y1=\"123.5\" x2=\"221.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 2.86 0 L 438.14 0 A 2.86 2.86 0 0 1 441 2.86 L 441 119.14 A 2.86 2.86 0 0 1 438.14 122 L 2.86 122 A 2.86 2.86 0 0 1 0 119.14 L 0 2.86 A 2.86 2.86 0 0 1 2.86 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_288&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-220.5, -61) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(221 61.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 515.5px; top: 43.5px; width: 442px; height: 123px; z-index: 104; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1099",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1095.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[292,32832,[30,34,9,9,0,0,515.4999999999998,43.50000000000034,1,0],[515.4999999999998,43.50000000000034,442,123]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":516,"y":44,"width":442,"height":123},"imgDataNormal":"images/desktop_shape1099.png","imgDataOver":"images/desktop_shape1099.png","imgDataDown":"images/desktop_shape1099.png","imgDataDisabled":"images/desktop_shape1099.png","svgDataNormal":"<linearGradient id=\"SVGID_12276_1023_288\" gradientUnits=\"userSpaceOnUse\" x1=\"221\" y1=\"123\" x2=\"221\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(221 61.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_12276_1023_288\" gradientUnits=\"userSpaceOnUse\" x1=\"221.5\" y1=\"123.5\" x2=\"221.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 2.86 0 L 438.14 0 A 2.86 2.86 0 0 1 441 2.86 L 441 119.14 A 2.86 2.86 0 0 1 438.14 122 L 2.86 122 A 2.86 2.86 0 0 1 0 119.14 L 0 2.86 A 2.86 2.86 0 0 1 2.86 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_288&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-220.5, -61) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(221 61.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_12276_1023_289\" gradientUnits=\"userSpaceOnUse\" x1=\"221\" y1=\"123\" x2=\"221\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(221 61.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_12276_1023_289\" gradientUnits=\"userSpaceOnUse\" x1=\"221.5\" y1=\"123.5\" x2=\"221.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 2.86 0 L 438.14 0 A 2.86 2.86 0 0 1 441 2.86 L 441 119.14 A 2.86 2.86 0 0 1 438.14 122 L 2.86 122 A 2.86 2.86 0 0 1 0 119.14 L 0 2.86 A 2.86 2.86 0 0 1 2.86 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_289&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-220.5, -61) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(221 61.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_12276_1023_290\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"123\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(221 61.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_12276_1023_290\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"123.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 2.86 0 L 438.14 0 A 2.86 2.86 0 0 1 441 2.86 L 441 119.14 A 2.86 2.86 0 0 1 438.14 122 L 2.86 122 A 2.86 2.86 0 0 1 0 119.14 L 0 2.86 A 2.86 2.86 0 0 1 2.86 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_290&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-220.5, -61) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(221 61.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_12276_1023_291\" gradientUnits=\"userSpaceOnUse\" x1=\"221\" y1=\"123\" x2=\"221\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(221 61.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_12276_1023_291\" gradientUnits=\"userSpaceOnUse\" x1=\"221.5\" y1=\"123.5\" x2=\"221.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 2.86 0 L 438.14 0 A 2.86 2.86 0 0 1 441 2.86 L 441 119.14 A 2.86 2.86 0 0 1 438.14 122 L 2.86 122 A 2.86 2.86 0 0 1 0 119.14 L 0 2.86 A 2.86 2.86 0 0 1 2.86 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_291&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-220.5, -61) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(221 61.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
og13394.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og13394",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape13395.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1008 0 L 1008 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -8.5px; width: 1009px; height: 671px; z-index: 105; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13395",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000003411,-8.499999999999318,1009,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":-8,"width":1009,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape14007.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13396.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_293\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_293&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 106; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13396",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13394.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_293\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_293&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_295\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_295&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_297\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_297&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_299\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_299&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13399.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 107;",
	cssClasses:	"",
	htmlId:		"tobj13399",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13400.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_301\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_301&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 601px; width: 45px; height: 45px; z-index: 108; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13400",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13359.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13394.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,601,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":601,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_301\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_301&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_303\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_303&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_305\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_305&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_307\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_307&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13403.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 913 76\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456.5 38)\" style=\"\">\n	<path d=\"M 0 0 L 913 0 L 913 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456.5 38)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 433px; width: 913px; height: 76px; z-index: 109; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13403",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,433.0000000000007,913,76]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":433,"width":913,"height":76},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13403.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13404.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 18.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 37 L 0 37 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -18.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 18.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 63px; width: 908px; height: 37px; z-index: 110; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13404",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,63.00000000000066,908,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":63,"width":908,"height":37},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14011.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13405.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​MEANING</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 176px; top: 70px; width: 135px; height: 25px; z-index: 111;",
	cssClasses:	"",
	htmlId:		"tobj13405",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[176,70,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":70,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13406.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 72px; width: 519px; height: 28px; z-index: 112;",
	cssClasses:	"",
	htmlId:		"tobj13406",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,72,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13407.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​ABREVIATION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 29px; top: 70px; width: 155px; height: 25px; z-index: 113;",
	cssClasses:	"",
	htmlId:		"tobj13407",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[29,70,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":70,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape13408.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 50)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 50)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 219px; width: 912px; height: 100px; z-index: 114; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13408",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,219.00000000000068,912,100]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":219,"width":912,"height":100},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13408.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13409.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_309\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_309&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 894px; top: 602px; width: 45px; height: 45px; z-index: 115; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj13409",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og14006.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13394.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[894,602,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":894,"y":602,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_309\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_309&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_311\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_311&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_313\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_313&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_315\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_315&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13412.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 32px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​CMM​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 124px; width: 155px; height: 32px; z-index: 116;",
	cssClasses:	"",
	htmlId:		"tobj13412",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,124,155,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":124,"width":155,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13413.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 128px; min-height: 56px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 128px; min-height: 56px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Complaint, Claim or Concern​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 224px; width: 128px; height: 56px; z-index: 117;",
	cssClasses:	"",
	htmlId:		"tobj13413",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,224,128,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":224,"width":128,"height":56},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13414.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 41px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Controls ​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 320px; width: 155px; height: 41px; z-index: 118;",
	cssClasses:	"",
	htmlId:		"tobj13414",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,320,155,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":320,"width":155,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13415.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 114px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 114px; min-height: 33px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​CP​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 436px; width: 114px; height: 33px; z-index: 119;",
	cssClasses:	"",
	htmlId:		"tobj13415",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,436,114,33]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":436,"width":114,"height":33},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13416.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 189px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 189px; min-height: 50px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Coordinate measuring machines​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 146px; top: 124px; width: 189px; height: 50px; z-index: 120;",
	cssClasses:	"",
	htmlId:		"tobj13416",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[146,124,189,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":146,"y":124,"width":189,"height":50},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13417.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 189px; min-height: 57px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 189px; min-height: 57px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Control Plan​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 146px; top: 436px; width: 189px; height: 57px; z-index: 121;",
	cssClasses:	"",
	htmlId:		"tobj13417",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[146,436,189,57]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":146,"y":436,"width":189,"height":57},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13418.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 69px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span>​</span><span style=\"font-family: arial; font-size: 11pt;\">Is a description of the methods used in the manufacturing.&nbsp; Its main goal is to minimize variation and control product and process characteristics in order to ensure capability and stability; the robustness. </span></p><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 436px; width: 543px; height: 69px; z-index: 122;",
	cssClasses:	"",
	htmlId:		"tobj13418",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,436,543,69]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":436,"width":543,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13419.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 48px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 48px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​CUS​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 517px; width: 107px; height: 48px; z-index: 123;",
	cssClasses:	"",
	htmlId:		"tobj13419",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,517,107,48]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":517,"width":107,"height":48},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13420.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 189px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 189px; min-height: 53px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Customer Interface Accountable​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 146px; top: 517px; width: 189px; height: 53px; z-index: 124;",
	cssClasses:	"",
	htmlId:		"tobj13420",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[146,517,189,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":146,"y":517,"width":189,"height":53},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13421.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 546px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 546px; min-height: 88px;\"><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​A</span><span style=\"font-family: arial; font-size: 11pt;\">re mechanical systems designed to move a measuring probe to determine coordinates of points on a workpiece surface. They provide precise measurements of objects for design, testing, assessment, profiling, and reverse engineering of parts.​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 124px; width: 546px; height: 88px; z-index: 125;",
	cssClasses:	"",
	htmlId:		"tobj13421",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,124,546,88]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":124,"width":546,"height":88},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13422.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 545px; min-height: 95px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 545px; min-height: 95px;\"><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Is a qualitative methodology which is applied during whole project cycle life from the design analysis (D-FMEA) pass through process analysis (P-FMEA) until the end of the production cycle life, which objective is to identify in advance possible risks and define the possible solutions to reduce them.​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 224px; width: 545px; height: 95px; z-index: 126;",
	cssClasses:	"",
	htmlId:		"tobj13422",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,224,545,95]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":224,"width":545,"height":95},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13423.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 545px; min-height: 116px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 545px; min-height: 116px;\"><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Are the methods or actions currently planned, or that are already in place, to reduce or eliminate the risk associated with each potential cause. Controls can be the methods to prevent or detect the cause during product development, or actions to detect a problem during service before it becomes catastrophic. There can be many controls for each cause.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 320px; width: 545px; height: 116px; z-index: 127;",
	cssClasses:	"",
	htmlId:		"tobj13423",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,320,545,116]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":320,"width":545,"height":116},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og13359.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og13359",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape13360.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -0.5px; width: 1010px; height: 671px; z-index: 128; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13360",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000003411,-0.4999999999993179,1010,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape13360.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13361.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 129;",
	cssClasses:	"",
	htmlId:		"tobj13361",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape13362.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 18.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 37 L 0 37 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -18.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 18.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 63px; width: 908px; height: 37px; z-index: 130; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13362",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,63.00000000000066,908,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":63,"width":908,"height":37},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14011.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13363.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​ABREVIATION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 29px; top: 70px; width: 155px; height: 25px; z-index: 131;",
	cssClasses:	"",
	htmlId:		"tobj13363",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[29,70,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":70,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13364.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​MEANING</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 176px; top: 70px; width: 135px; height: 25px; z-index: 132;",
	cssClasses:	"",
	htmlId:		"tobj13364",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[176,70,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":70,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13365.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 72px; width: 519px; height: 28px; z-index: 133;",
	cssClasses:	"",
	htmlId:		"tobj13365",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,72,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13366.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_317\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_317&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 134; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13366",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13359.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_317\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_317&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_319\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_319&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_321\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_321&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_323\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_323&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13369.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 913 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456.5 32)\" style=\"\">\n	<path d=\"M 0 0 L 913 0 L 913 64 L 0 64 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456.5, -32) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456.5 32)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 422px; width: 913px; height: 64px; z-index: 135; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13369",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,422.0000000000007,913,64]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":422,"width":913,"height":64},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13369.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13370.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 913 48\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456.5 24)\" style=\"\">\n	<path d=\"M 0 0 L 913 0 L 913 48 L 0 48 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456.5, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456.5 24)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 540px; width: 913px; height: 48px; z-index: 136; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13370",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,540.0000000000007,913,48]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":540,"width":913,"height":48},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13370.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13371.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 57\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 28.5)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 57 L 0 57 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 28.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 262px; width: 912px; height: 57px; z-index: 137; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13371",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,262.0000000000007,912,57]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":262,"width":912,"height":57},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13371.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13372.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 32px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Detection rating​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 109px; width: 155px; height: 32px; z-index: 138;",
	cssClasses:	"",
	htmlId:		"tobj13372",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,109,155,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":109,"width":155,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13373.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_325\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_325&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 894px; top: 610px; width: 45px; height: 45px; z-index: 139; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj13373",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13394.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13359.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[894,610,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":894,"y":610,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_325\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_325&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_327\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_327&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_329\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_329&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_331\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_331&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13376.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_333\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_333&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 609px; width: 45px; height: 45px; z-index: 140; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13376",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13322.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13359.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,609,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":609,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_333\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_333&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_335\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_335&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_337\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_337&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_339\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_339&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13379.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 74px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 74px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​DFMA_GE_STD​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 270px; width: 155px; height: 74px; z-index: 141;",
	cssClasses:	"",
	htmlId:		"tobj13379",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,270,155,74]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":270,"width":155,"height":74},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13380.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 114px; min-height: 113px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 114px; min-height: 113px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​D-FMEA​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 327px; width: 114px; height: 113px; z-index: 142;",
	cssClasses:	"",
	htmlId:		"tobj13380",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,327,114,113]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":327,"width":114,"height":113},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13381.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 58px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Design FMEA​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 327px; width: 178px; height: 58px; z-index: 143;",
	cssClasses:	"",
	htmlId:		"tobj13381",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,327,178,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":327,"width":178,"height":58},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13382.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 56px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 56px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Design FMEA Gestamp Standard​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 270px; width: 178px; height: 56px; z-index: 144;",
	cssClasses:	"",
	htmlId:		"tobj13382",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,270,178,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":270,"width":178,"height":56},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13383.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 100px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 100px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span><span style=\"font-family: arial; font-size: 11pt;\">Is a methodical approach used for identifying potential risks introduced in a new or changed design of a product/service.</span></p><p style=\"text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">The Design FMEA initially identifies design functions, failure modes and their effects on the customer with corresponding severity ranking / danger of the effect.​</span></p><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 327px; width: 543px; height: 100px; z-index: 145;",
	cssClasses:	"",
	htmlId:		"tobj13383",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,327,543,100]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":327,"width":543,"height":100},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13384.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 51px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 51px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-family: arial; font-size: 11pt;\">Another methodology to analyse potential failures modes and the way to mitigate them​.</span></span></p><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 433px; width: 543px; height: 51px; z-index: 146;",
	cssClasses:	"",
	htmlId:		"tobj13384",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,433,543,51]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":433,"width":543,"height":51},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13385.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 179px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 179px; min-height: 52px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Design Review Based on Failure Mode​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 433px; width: 179px; height: 52px; z-index: 147;",
	cssClasses:	"",
	htmlId:		"tobj13385",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,433,179,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":433,"width":179,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13386.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 57px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 57px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​DVP&amp;R​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 494px; width: 107px; height: 57px; z-index: 148;",
	cssClasses:	"",
	htmlId:		"tobj13386",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,494,107,57]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":494,"width":107,"height":57},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13387.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 177px; min-height: 59px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 177px; min-height: 59px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Design Validation Plan and Report​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 494px; width: 177px; height: 59px; z-index: 149;",
	cssClasses:	"",
	htmlId:		"tobj13387",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,494,177,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":494,"width":177,"height":59},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13388.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 77px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 77px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span><span style=\"font-family: arial; font-size: 11pt;\">Test report.</span></p><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 494px; width: 543px; height: 77px; z-index: 150;",
	cssClasses:	"",
	htmlId:		"tobj13388",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,494,543,77]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":494,"width":543,"height":77},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13389.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 32px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​ESOW​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 548px; width: 107px; height: 32px; z-index: 151;",
	cssClasses:	"",
	htmlId:		"tobj13389",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,548,107,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":548,"width":107,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13390.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 54px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​</span><span style=\"font-family: arial; font-size: 11pt;\">Customer Technical Specification.</span></p><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 548px; width: 543px; height: 54px; z-index: 152;",
	cssClasses:	"",
	htmlId:		"tobj13390",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,548,543,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":548,"width":543,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13391.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 51px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 51px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​DRBFM​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 433px; width: 107px; height: 51px; z-index: 153;",
	cssClasses:	"",
	htmlId:		"tobj13391",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,433,107,51]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":433,"width":107,"height":51},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13392.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 52px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Estate of Work​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 548px; width: 174px; height: 52px; z-index: 154;",
	cssClasses:	"",
	htmlId:		"tobj13392",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,548,174,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":548,"width":174,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13393.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 546px; min-height: 146px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 546px; min-height: 146px;\"><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Is a ranking number associated with the best control from the list of detection-type controls, based on the criteria fromthe detection scale. The detection ranking considers the likelihood of detection of the failure mode/cause, according to defined criteria. Detection is a relative ranking within the scope of the specific FMEA and is determined without regard to the severity or likelihood of occurrence.</span></p><p><span style=\"font-family: arial; font-size: 11pt;\">This rating estimates how well the controls can detect either the cause or its failure mode after they have happened but before the customer is affected. ​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 109px; width: 546px; height: 146px; z-index: 155;",
	cssClasses:	"",
	htmlId:		"tobj13393",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,109,546,146]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":109,"width":546,"height":146},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og13322.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og13322",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape13323.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -0.5px; width: 1010px; height: 671px; z-index: 156; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13323",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000003411,-0.4999999999993179,1010,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape13360.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13324.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 18.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 37 L 0 37 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -18.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 18.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 63px; width: 908px; height: 37px; z-index: 157; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13324",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,63.00000000000066,908,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":63,"width":908,"height":37},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14011.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13325.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 158;",
	cssClasses:	"",
	htmlId:		"tobj13325",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13326.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​ABREVIATION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 29px; top: 70px; width: 155px; height: 25px; z-index: 159;",
	cssClasses:	"",
	htmlId:		"tobj13326",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[29,70,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":70,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13327.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​MEANING</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 176px; top: 70px; width: 135px; height: 25px; z-index: 160;",
	cssClasses:	"",
	htmlId:		"tobj13327",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[176,70,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":70,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13328.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 72px; width: 519px; height: 28px; z-index: 161;",
	cssClasses:	"",
	htmlId:		"tobj13328",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,72,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13329.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_341\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_341&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 162; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13329",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13359.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13322.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_341\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_341&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_343\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_343&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_345\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_345&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_347\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_347&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13332.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_349\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_349&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 894px; top: 613px; width: 45px; height: 45px; z-index: 163; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj13332",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13359.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13394.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[894,613,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":894,"y":613,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_349\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_349&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_351\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_351&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_353\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_353&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_355\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_355&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13335.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_357\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_357&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 612px; width: 45px; height: 45px; z-index: 164; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13335",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13283.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13394.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,612,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":612,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_357\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_357&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_359\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_359&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_361\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_361&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_363\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_363&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13338.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 913 197\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456.5 98.5)\" style=\"\">\n	<path d=\"M 0 0 L 913 0 L 913 197 L 0 197 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456.5, -98.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456.5 98.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 406px; width: 913px; height: 197px; z-index: 165; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13338",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,406.0000000000007,913,197]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":406,"width":913,"height":197},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13338.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13339.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 90\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 45)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 90 L 0 90 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -45) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 45)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 133px; width: 912px; height: 90px; z-index: 166; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13339",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,133.00000000000068,912,90]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":133,"width":912,"height":90},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13339.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13340.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 33\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 16.5)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 16.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 268px; width: 912px; height: 33px; z-index: 167; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13340",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,268.0000000000007,912,33]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":268,"width":912,"height":33},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13340.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13341.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 33\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 16.5)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 16.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 344px; width: 912px; height: 33px; z-index: 168; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13341",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,344.0000000000007,912,33]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":344,"width":912,"height":33},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13340.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13342.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 32px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​FLCA​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 105px; width: 155px; height: 32px; z-index: 169;",
	cssClasses:	"",
	htmlId:		"tobj13342",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,105,155,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":105,"width":155,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13343.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 58px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​FMEA​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 136px; width: 155px; height: 58px; z-index: 170;",
	cssClasses:	"",
	htmlId:		"tobj13343",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,136,155,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":136,"width":155,"height":58},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13344.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 114px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 114px; min-height: 34px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​GPCS​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 224px; width: 114px; height: 34px; z-index: 171;",
	cssClasses:	"",
	htmlId:		"tobj13344",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,224,114,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":224,"width":114,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13345.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 90px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 90px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Failure Mode Effects Analysis​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 136px; width: 178px; height: 90px; z-index: 172;",
	cssClasses:	"",
	htmlId:		"tobj13345",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,136,178,90]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":136,"width":178,"height":90},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13346.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 45px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Front Lower Control Arm​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 105px; width: 178px; height: 45px; z-index: 173;",
	cssClasses:	"",
	htmlId:		"tobj13346",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,105,178,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":105,"width":178,"height":45},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13347.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 179px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 179px; min-height: 60px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Gestamp Product Creation System​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 224px; width: 179px; height: 60px; z-index: 174;",
	cssClasses:	"",
	htmlId:		"tobj13347",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,224,179,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":224,"width":179,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13348.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 28px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​IND​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 302px; width: 107px; height: 28px; z-index: 175;",
	cssClasses:	"",
	htmlId:		"tobj13348",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,302,107,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":302,"width":107,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13349.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 56px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 56px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Jaguar Land Rover​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 351px; width: 174px; height: 56px; z-index: 176;",
	cssClasses:	"",
	htmlId:		"tobj13349",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,351,174,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":351,"width":174,"height":56},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13350.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 34px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​JLR​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 351px; width: 107px; height: 34px; z-index: 177;",
	cssClasses:	"",
	htmlId:		"tobj13350",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,351,107,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":351,"width":107,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13351.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 177px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 177px; min-height: 44px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Interference Matrix​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 271px; width: 177px; height: 44px; z-index: 178;",
	cssClasses:	"",
	htmlId:		"tobj13351",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,271,177,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":271,"width":177,"height":44},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13352.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 24px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​M</span><span style=\"font-family: arial; font-size: 11pt;\">etric nut 6.​</span></p><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 378px; width: 543px; height: 24px; z-index: 179;",
	cssClasses:	"",
	htmlId:		"tobj13352",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,378,543,24]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":378,"width":543,"height":24},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13353.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 31px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 31px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​M6​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 378px; width: 107px; height: 31px; z-index: 180;",
	cssClasses:	"",
	htmlId:		"tobj13353",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,378,107,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":378,"width":107,"height":31},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13354.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 44px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Occurrence rating ​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 407px; width: 107px; height: 44px; z-index: 181;",
	cssClasses:	"",
	htmlId:		"tobj13354",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,407,107,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":407,"width":107,"height":44},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13355.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 236px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 236px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">The Occurrence rating estimates the probability of failure occurring for that reason during the lifetime of the product. </span><span style=\"font-family: arial; font-size: 11pt;\">Is a ranking number associated with the likelihood that the failure mode and its associated cause will be present in the item being analyzed. For System and Design FMEAs, the occurrence ranking considers the likelihood of occurrence during the design life of the product. For Process FMEAs the occurrence ranking considers the likelihood of occurrence during production. It is based on the criteria from the corresponding occurrence scale. The occurrence ranking has a relative meaning rather than an absolute value and is determined without regard to the severity or likelihood of detection.​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 407px; width: 543px; height: 236px; z-index: 182;",
	cssClasses:	"",
	htmlId:		"tobj13355",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,407,543,236]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":407,"width":543,"height":236},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13356.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 42px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​IM​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 271px; width: 107px; height: 42px; z-index: 183;",
	cssClasses:	"",
	htmlId:		"tobj13356",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,271,107,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":271,"width":107,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13357.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 42px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Industrial Facilities Accountable​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 302px; width: 174px; height: 42px; z-index: 184;",
	cssClasses:	"",
	htmlId:		"tobj13357",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,302,174,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":302,"width":174,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13358.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 546px; min-height: 115px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 546px; min-height: 115px;\"><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Is a qualitative methodology which is applied during whole project cycle life from the design analysis (D-FMEA) pass through process analysis (P-FMEA) until the end of the production cycle life, which objective is to identify in advance possible risks and define the possible solutions to reduce them.​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 136px; width: 546px; height: 115px; z-index: 185;",
	cssClasses:	"",
	htmlId:		"tobj13358",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,136,546,115]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":136,"width":546,"height":115},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og13283.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og13283",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape13284.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -0.5px; width: 1010px; height: 671px; z-index: 186; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13284",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000003411,-0.4999999999993179,1010,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape13360.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13285.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 18.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 37 L 0 37 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -18.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 18.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 63px; width: 908px; height: 37px; z-index: 187; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13285",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,63.00000000000066,908,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":63,"width":908,"height":37},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14011.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13286.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 188;",
	cssClasses:	"",
	htmlId:		"tobj13286",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13287.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​ABREVIATION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 29px; top: 70px; width: 155px; height: 25px; z-index: 189;",
	cssClasses:	"",
	htmlId:		"tobj13287",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[29,70,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":70,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13288.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​MEANING</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 176px; top: 70px; width: 135px; height: 25px; z-index: 190;",
	cssClasses:	"",
	htmlId:		"tobj13288",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[176,70,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":70,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13289.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 72px; width: 519px; height: 28px; z-index: 191;",
	cssClasses:	"",
	htmlId:		"tobj13289",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,72,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13290.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_365\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_365&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 192; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13290",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13283.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13322.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_365\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_365&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_367\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_367&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_369\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_369&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_371\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_371&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13293.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_373\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_373&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 612px; width: 45px; height: 45px; z-index: 193; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13293",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13243.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13283.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,612,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":612,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_373\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_373&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_375\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_375&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_377\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_377&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_379\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_379&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13296.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_381\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_381&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 894px; top: 613px; width: 45px; height: 45px; z-index: 194; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj13296",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13322.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13283.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[894,613,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":894,"y":613,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_381\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_381&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_383\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_383&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_385\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_385&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_387\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_387&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13299.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 913 49\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456.5 24.5)\" style=\"\">\n	<path d=\"M 0 0 L 913 0 L 913 49 L 0 49 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456.5, -24.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456.5 24.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 538px; width: 913px; height: 49px; z-index: 195; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13299",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,538.0000000000007,913,49]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":538,"width":913,"height":49},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13299.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13300.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 18)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 18)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 170px; width: 912px; height: 36px; z-index: 196; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13300",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,170.00000000000065,912,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":170,"width":912,"height":36},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13300.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13301.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 26)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 247px; width: 912px; height: 52px; z-index: 197; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13301",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,247.00000000000065,912,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":247,"width":912,"height":52},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13301.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13302.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 39)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 39)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 410px; width: 912px; height: 78px; z-index: 198; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13302",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,410.0000000000007,912,78]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":410,"width":912,"height":78},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13302.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13303.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 32px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​OEM ​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 124px; width: 155px; height: 32px; z-index: 199;",
	cssClasses:	"",
	htmlId:		"tobj13303",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,124,155,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":124,"width":155,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13304.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 37px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 37px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​OIL ​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 176px; width: 155px; height: 37px; z-index: 200;",
	cssClasses:	"",
	htmlId:		"tobj13304",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,176,155,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":176,"width":155,"height":37},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13305.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 114px; min-height: 63px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 114px; min-height: 63px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​OP: (number)​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 214px; width: 114px; height: 63px; z-index: 201;",
	cssClasses:	"",
	htmlId:		"tobj13305",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,214,114,63]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":214,"width":114,"height":63},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13306.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 70px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 70px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Open Issues List&nbsp;</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 175px; width: 178px; height: 70px; z-index: 202;",
	cssClasses:	"",
	htmlId:		"tobj13306",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,175,178,70]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":175,"width":178,"height":70},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13307.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 45px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Original Equipment Manufacturer​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 124px; width: 178px; height: 45px; z-index: 203;",
	cssClasses:	"",
	htmlId:		"tobj13307",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,124,178,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":124,"width":178,"height":45},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13308.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 179px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 179px; min-height: 60px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Operation number​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 214px; width: 179px; height: 60px; z-index: 204;",
	cssClasses:	"",
	htmlId:		"tobj13308",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,214,179,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":214,"width":179,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13309.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 43px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 43px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">P-Diagram​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 306px; width: 107px; height: 43px; z-index: 205;",
	cssClasses:	"",
	htmlId:		"tobj13309",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,306,107,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":306,"width":107,"height":43},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13310.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 75px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 75px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Process FMEA​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 416px; width: 174px; height: 75px; z-index: 206;",
	cssClasses:	"",
	htmlId:		"tobj13310",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,416,174,75]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":416,"width":174,"height":75},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13311.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 68px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 68px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Process FMEA Gestamp Standard​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 494px; width: 174px; height: 68px; z-index: 207;",
	cssClasses:	"",
	htmlId:		"tobj13311",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,494,174,68]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":494,"width":174,"height":68},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13312.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 50px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Project Management Accountable​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 541px; width: 174px; height: 50px; z-index: 208;",
	cssClasses:	"",
	htmlId:		"tobj13312",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,541,174,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":541,"width":174,"height":50},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13313.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 47px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​P-FMEA​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 416px; width: 107px; height: 47px; z-index: 209;",
	cssClasses:	"",
	htmlId:		"tobj13313",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,416,107,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":416,"width":107,"height":47},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13314.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 177px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 177px; min-height: 44px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Product Creation Process​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 251px; width: 177px; height: 44px; z-index: 210;",
	cssClasses:	"",
	htmlId:		"tobj13314",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,251,177,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":251,"width":177,"height":44},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13315.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 132px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 132px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Takes the inputs from a system/ customer and relates those inputs to desired outputs of a desing. </span><span style=\"font-family: arial; font-size: 11pt;\">It is one of the tools and methods used to identify Functions, Requirements, and Potential Failure Modes&nbsp;that will be documented and controlled using the&nbsp;DFMEA, PFMEA&nbsp;and&nbsp;Control Plan.​​​</span></p><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 306px; width: 543px; height: 132px; z-index: 211;",
	cssClasses:	"",
	htmlId:		"tobj13315",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,306,543,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":306,"width":543,"height":132},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13316.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 66px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 66px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">PFMEA_GE_STD​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 494px; width: 107px; height: 66px; z-index: 212;",
	cssClasses:	"",
	htmlId:		"tobj13316",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,494,107,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":494,"width":107,"height":66},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13317.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 58px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​PJM​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 541px; width: 107px; height: 58px; z-index: 213;",
	cssClasses:	"",
	htmlId:		"tobj13317",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,541,107,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":541,"width":107,"height":58},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13318.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 81px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 81px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">It is a structured approach that assigns quality risk levels to each step in a process. At this stage, potential failures in the production process are detected and analyzed.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 416px; width: 543px; height: 81px; z-index: 214;",
	cssClasses:	"",
	htmlId:		"tobj13318",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,416,543,81]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":416,"width":543,"height":81},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13319.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 40px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​PCP​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 251px; width: 107px; height: 40px; z-index: 215;",
	cssClasses:	"",
	htmlId:		"tobj13319",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,251,107,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":251,"width":107,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13320.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 44px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Parameter Diagram​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 306px; width: 174px; height: 44px; z-index: 216;",
	cssClasses:	"",
	htmlId:		"tobj13320",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,306,174,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":306,"width":174,"height":44},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13321.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 546px; min-height: 48px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 546px; min-height: 48px;\"><p style=\"line-height: 1.5; margin-bottom: 0px; margin-top: 0px; text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">&nbsp;It shows in which process operation we are.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 214px; width: 546px; height: 48px; z-index: 217;",
	cssClasses:	"",
	htmlId:		"tobj13321",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,214,546,48]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":214,"width":546,"height":48},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og13243.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og13243",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape13244.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -0.5px; width: 1010px; height: 671px; z-index: 218; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13244",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000003411,-0.4999999999993179,1010,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape13360.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13245.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 18.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 37 L 0 37 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -18.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 18.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 63px; width: 908px; height: 37px; z-index: 219; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13245",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,63.00000000000066,908,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":63,"width":908,"height":37},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14011.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13246.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 220;",
	cssClasses:	"",
	htmlId:		"tobj13246",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13247.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​ABREVIATION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 29px; top: 70px; width: 155px; height: 25px; z-index: 221;",
	cssClasses:	"",
	htmlId:		"tobj13247",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[29,70,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":70,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13248.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​MEANING</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 176px; top: 70px; width: 135px; height: 25px; z-index: 222;",
	cssClasses:	"",
	htmlId:		"tobj13248",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[176,70,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":70,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13249.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 72px; width: 519px; height: 28px; z-index: 223;",
	cssClasses:	"",
	htmlId:		"tobj13249",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,72,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13250.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_389\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_389&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 224; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13250",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13243.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13322.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_389\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_389&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_391\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_391&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_393\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_393&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_395\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_395&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13253.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_397\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_397&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 612px; width: 45px; height: 45px; z-index: 225; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13253",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13207.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13243.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,612,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":612,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_397\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_397&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_399\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_399&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_401\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_401&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_403\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_403&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13256.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_405\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_405&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 894px; top: 613px; width: 45px; height: 45px; z-index: 226; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj13256",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13283.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13243.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[894,613,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":894,"y":613,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_405\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_405&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_407\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_407&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_409\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_409&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_411\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_411&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13259.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 913 116\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456.5 58)\" style=\"\">\n	<path d=\"M 0 0 L 913 0 L 913 116 L 0 116 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456.5, -58) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456.5 58)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 430px; width: 913px; height: 116px; z-index: 227; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13259",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,430.0000000000007,913,116]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":430,"width":913,"height":116},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13259.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13260.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 53\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 26.5)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 53 L 0 53 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 26.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 170px; width: 912px; height: 53px; z-index: 228; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13260",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,170.00000000000065,912,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":170,"width":912,"height":53},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13260.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13261.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 15.5)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 31 L 0 31 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 257px; width: 912px; height: 31px; z-index: 229; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13261",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,257.0000000000007,912,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":257,"width":912,"height":31},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13261.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13262.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 59\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 29.5)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 29.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 329px; width: 912px; height: 59px; z-index: 230; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13262",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,329.0000000000007,912,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":329,"width":912,"height":59},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13262.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13263.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 32px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​PRC​ ​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 124px; width: 155px; height: 32px; z-index: 231;",
	cssClasses:	"",
	htmlId:		"tobj13263",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,124,155,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":124,"width":155,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13264.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 37px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 37px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​PRD​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 175px; width: 155px; height: 37px; z-index: 232;",
	cssClasses:	"",
	htmlId:		"tobj13264",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,175,155,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":175,"width":155,"height":37},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13265.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 114px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 114px; min-height: 22px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​PRO</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 229px; width: 114px; height: 22px; z-index: 233;",
	cssClasses:	"",
	htmlId:		"tobj13265",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,229,114,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":229,"width":114,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13266.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 70px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 70px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Product Development Accountable​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 175px; width: 178px; height: 70px; z-index: 234;",
	cssClasses:	"",
	htmlId:		"tobj13266",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,175,178,70]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":175,"width":178,"height":70},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13267.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 45px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Process Development Assembly &amp; Forming Acc.​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 124px; width: 178px; height: 45px; z-index: 235;",
	cssClasses:	"",
	htmlId:		"tobj13267",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,124,178,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":124,"width":178,"height":45},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13268.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 179px; min-height: 21px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 179px; min-height: 21px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Production Accountable​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 229px; width: 179px; height: 21px; z-index: 236;",
	cssClasses:	"",
	htmlId:		"tobj13268",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,229,179,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":229,"width":179,"height":21},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13269.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 52px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">PUR​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 296px; width: 107px; height: 52px; z-index: 237;",
	cssClasses:	"",
	htmlId:		"tobj13269",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,296,107,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":296,"width":107,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13270.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 32px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Quality Accountable​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 395px; width: 174px; height: 32px; z-index: 238;",
	cssClasses:	"",
	htmlId:		"tobj13270",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,395,174,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":395,"width":174,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13271.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 61px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 61px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Risk Priority Number​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 434px; width: 174px; height: 61px; z-index: 239;",
	cssClasses:	"",
	htmlId:		"tobj13271",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,434,174,61]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":434,"width":174,"height":61},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13272.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 59px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 59px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​QR &amp; PRR​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 335px; width: 107px; height: 59px; z-index: 240;",
	cssClasses:	"",
	htmlId:		"tobj13272",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,335,107,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":335,"width":107,"height":59},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13273.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 197px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 197px; min-height: 34px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Problem Resolution Report​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 261px; width: 197px; height: 34px; z-index: 241;",
	cssClasses:	"",
	htmlId:		"tobj13273",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,261,197,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":261,"width":197,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13274.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 45px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">QUA​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 393px; width: 107px; height: 45px; z-index: 242;",
	cssClasses:	"",
	htmlId:		"tobj13274",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,393,107,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":393,"width":107,"height":45},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13275.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 63px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 63px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​RPN​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 434px; width: 107px; height: 63px; z-index: 243;",
	cssClasses:	"",
	htmlId:		"tobj13275",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,434,107,63]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":434,"width":107,"height":63},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13276.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 50px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Special Characteristics​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 554px; width: 174px; height: 50px; z-index: 244;",
	cssClasses:	"",
	htmlId:		"tobj13276",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,554,174,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":554,"width":174,"height":50},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13277.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 126px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 126px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Is a numerical ranking of the risk of each potential failure mode/cause, made up of the arithmetic product of the three elements: severity of the effect, likelihood of occurrence of the cause, and </span><span style=\"font-family: arial; font-size: 11pt;\">likelihood of detection of the cause.</span></p><p style=\"text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">Is a measure used when assessing risk to help identify critical failure modes associated with your design or process. ​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 434px; width: 543px; height: 126px; z-index: 245;",
	cssClasses:	"",
	htmlId:		"tobj13277",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,434,543,126]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":434,"width":543,"height":126},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13278.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 53px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 53px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​SC​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 554px; width: 107px; height: 53px; z-index: 246;",
	cssClasses:	"",
	htmlId:		"tobj13278",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,554,107,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":554,"width":107,"height":53},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13279.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 64px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 64px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Acronyms related with those documents through which the customer initiate a complaint. In this case are from FORD and General Motors respectively.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 335px; width: 543px; height: 64px; z-index: 247;",
	cssClasses:	"",
	htmlId:		"tobj13279",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,335,543,64]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":335,"width":543,"height":64},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13280.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 41px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Some of the characteristics which identify the product process.</span></p><p style=\"text-align: justify;\"><span>&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 554px; width: 543px; height: 41px; z-index: 248;",
	cssClasses:	"",
	htmlId:		"tobj13280",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,554,543,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":554,"width":543,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13281.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 29px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​PRS​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 262px; width: 107px; height: 29px; z-index: 249;",
	cssClasses:	"",
	htmlId:		"tobj13281",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,262,107,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":262,"width":107,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13282.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 54px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Purchasing Accountable​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 296px; width: 174px; height: 54px; z-index: 250;",
	cssClasses:	"",
	htmlId:		"tobj13282",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,296,174,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":296,"width":174,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og13207.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og13207",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape13208.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -0.5px; width: 1010px; height: 671px; z-index: 251; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13208",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000003411,-0.4999999999993179,1010,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape13360.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13209.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 18.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 37 L 0 37 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -18.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 18.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 63px; width: 908px; height: 37px; z-index: 252; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13209",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,63.00000000000066,908,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":63,"width":908,"height":37},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14011.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13210.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 253;",
	cssClasses:	"",
	htmlId:		"tobj13210",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13211.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​ABREVIATION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 29px; top: 70px; width: 155px; height: 25px; z-index: 254;",
	cssClasses:	"",
	htmlId:		"tobj13211",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[29,70,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":70,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13212.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​MEANING</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 176px; top: 70px; width: 135px; height: 25px; z-index: 255;",
	cssClasses:	"",
	htmlId:		"tobj13212",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[176,70,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":70,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13213.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 72px; width: 519px; height: 28px; z-index: 256;",
	cssClasses:	"",
	htmlId:		"tobj13213",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,72,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13214.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_413\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_413&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 257; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13214",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13207.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13322.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_413\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_413&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_415\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_415&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_417\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_417&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_419\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_419&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13217.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_421\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_421&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 612px; width: 45px; height: 45px; z-index: 258; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13217",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13182.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13207.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,612,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":612,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_421\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_421&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_423\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_423&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_425\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_425&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_427\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_427&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13220.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_429\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_429&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 894px; top: 613px; width: 45px; height: 45px; z-index: 259; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj13220",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13243.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13207.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[894,613,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":894,"y":613,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_429\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_429&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_431\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_431&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_433\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_433&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_435\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_435&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13223.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 913 51\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456.5 25.5)\" style=\"\">\n	<path d=\"M 0 0 L 913 0 L 913 51 L 0 51 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456.5, -25.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456.5 25.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 509px; width: 913px; height: 51px; z-index: 260; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13223",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,509.0000000000007,913,51]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":509,"width":913,"height":51},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13223.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13224.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 49\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 24.5)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 49 L 0 49 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -24.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 24.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 238px; width: 912px; height: 49px; z-index: 261; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13224",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,238.00000000000065,912,49]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":238,"width":912,"height":49},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13224.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13225.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 912 81\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(456 40.5)\" style=\"\">\n	<path d=\"M 0 0 L 912 0 L 912 81 L 0 81 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-456, -40.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(456 40.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 12px; top: 366px; width: 912px; height: 81px; z-index: 262; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13225",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[12,366.0000000000007,912,81]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":366,"width":912,"height":81},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13225.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13226.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 32px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(36, 101, 184); font-family: arial,sans-serif; font-size: 11pt;\">​Severity rating​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 124px; width: 155px; height: 32px; z-index: 263;",
	cssClasses:	"",
	htmlId:		"tobj13226",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,124,155,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":124,"width":155,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13227.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​SOP​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 249px; width: 155px; height: 25px; z-index: 264;",
	cssClasses:	"",
	htmlId:		"tobj13227",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,249,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":249,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13228.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 26px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 26px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Start of Production​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 249px; width: 178px; height: 26px; z-index: 265;",
	cssClasses:	"",
	htmlId:		"tobj13228",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,249,178,26]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":249,"width":178,"height":26},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13229.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 52px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">SPC​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 295px; width: 107px; height: 52px; z-index: 266;",
	cssClasses:	"",
	htmlId:		"tobj13229",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,295,107,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":295,"width":107,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13230.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 66px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 66px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">Special Charactistics Sheet​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 375px; width: 107px; height: 66px; z-index: 267;",
	cssClasses:	"",
	htmlId:		"tobj13230",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,375,107,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":375,"width":107,"height":66},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13231.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 31px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 31px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Tier 1</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 452px; width: 107px; height: 31px; z-index: 268;",
	cssClasses:	"",
	htmlId:		"tobj13231",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,452,107,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":452,"width":107,"height":31},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13232.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 26px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 26px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Time point where the serial production starts.</span></p><p style=\"text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 249px; width: 543px; height: 26px; z-index: 269;",
	cssClasses:	"",
	htmlId:		"tobj13232",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,249,543,26]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":249,"width":543,"height":26},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13233.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 37px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 37px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Tier N​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 514px; width: 107px; height: 37px; z-index: 270;",
	cssClasses:	"",
	htmlId:		"tobj13233",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,514,107,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":514,"width":107,"height":37},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13234.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 64px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 64px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Tier N companies are the key suppliers to tier one suppliers, without supplying a product directly to OEM companies.</span></p><p style=\"text-align: justify;\"><span>&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 514px; width: 543px; height: 64px; z-index: 271;",
	cssClasses:	"",
	htmlId:		"tobj13234",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,514,543,64]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":514,"width":543,"height":64},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13235.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 107px; min-height: 43px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 43px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​​VDA</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 569px; width: 107px; height: 43px; z-index: 272;",
	cssClasses:	"",
	htmlId:		"tobj13235",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,569,107,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":569,"width":107,"height":43},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13236.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 113px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 113px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Is a ranking number associated with the most serious effect for a given failure mode, based on the criteria from a severity scale. Itis a relative ranking within the scope of the specific FMEA and is determined without regard to the likelihood of occurrence or detection.</span></p><p><span style=\"font-family: arial; font-size: 11pt;\">Severity determine how serious each effect is, should it occur. ​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 124px; width: 543px; height: 113px; z-index: 273;",
	cssClasses:	"",
	htmlId:		"tobj13236",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,124,543,113]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":124,"width":543,"height":113},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13237.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 79px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">A statistical tool that helps define the output of a process to determine the capability of the process against the specification and then to maintain control of the process in the future.</span></p><p style=\"text-align: justify;\"><span>&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 295px; width: 543px; height: 79px; z-index: 274;",
	cssClasses:	"",
	htmlId:		"tobj13237",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,295,543,79]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":295,"width":543,"height":79},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13238.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 62px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Is a formal worksheet to facilitate all special process and product characteristics agreed by the customer and the supplier.</span></p><p style=\"text-align: justify;\"><span>&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 375px; width: 543px; height: 62px; z-index: 275;",
	cssClasses:	"",
	htmlId:		"tobj13238",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,375,543,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":375,"width":543,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13239.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 75px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 75px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Tier one companies are direct suppliers to OEMs. The term is especially common in the automobile industry and refers to major suppliers of parts to OEMs.</span></p><p style=\"text-align: justify;\"><span>&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 452px; width: 543px; height: 75px; z-index: 276;",
	cssClasses:	"",
	htmlId:		"tobj13239",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,452,543,75]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":452,"width":543,"height":75},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13240.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 37px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 37px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">German Association of the Automotive Industry.</span></p><p style=\"text-align: justify;\"><span style=\"font-size: 12pt;\">&nbsp;​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 569px; width: 543px; height: 37px; z-index: 277;",
	cssClasses:	"",
	htmlId:		"tobj13240",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,569,543,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":569,"width":543,"height":37},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13241.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 54px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Statistical Process Control​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 295px; width: 174px; height: 54px; z-index: 278;",
	cssClasses:	"",
	htmlId:		"tobj13241",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,295,174,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":295,"width":174,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13242.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 174px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 174px; min-height: 45px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Verband der Automobileindustrie​​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 569px; width: 174px; height: 45px; z-index: 279;",
	cssClasses:	"",
	htmlId:		"tobj13242",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,569,174,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":569,"width":174,"height":45},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og13182.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og13182",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape13183.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -0.5px; width: 1010px; height: 671px; z-index: 280; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13183",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000003411,-0.4999999999993179,1010,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape13360.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13184.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 908 37\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(454 18.5)\" style=\"\">\n	<path d=\"M 0 0 L 908 0 L 908 37 L 0 37 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-454, -18.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(454 18.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 63px; width: 908px; height: 37px; z-index: 281; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13184",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,63.00000000000066,908,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":63,"width":908,"height":37},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape14011.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13185.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 282;",
	cssClasses:	"",
	htmlId:		"tobj13185",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13186.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​ABREVIATION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 29px; top: 70px; width: 155px; height: 25px; z-index: 283;",
	cssClasses:	"",
	htmlId:		"tobj13186",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[29,70,155,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":70,"width":155,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13187.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​MEANING</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 176px; top: 70px; width: 135px; height: 25px; z-index: 284;",
	cssClasses:	"",
	htmlId:		"tobj13187",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[176,70,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":70,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13188.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 72px; width: 519px; height: 28px; z-index: 285;",
	cssClasses:	"",
	htmlId:		"tobj13188",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[390,72,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":390,"y":72,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton13189.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_437\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_437&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 286; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13189",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13182.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13322.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000043,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14041.png","imgDataOver":"images/desktop_shape14041_over.png","imgDataDown":"images/desktop_shape14041_down.png","imgDataDisabled":"images/desktop_shape14041_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_437\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_437&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_439\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_439&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_441\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_441&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_443\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_443&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton13192.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_12276_1023_445\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_445&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 613px; width: 45px; height: 45px; z-index: 287; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj13192",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og13207.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og13182.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,613,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":613,"width":45,"height":45},"imgDataNormal":"images/desktop_shape14013.png","imgDataOver":"images/desktop_shape14013_over.png","imgDataDown":"images/desktop_shape14013_down.png","imgDataDisabled":"images/desktop_shape14013_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_445\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_445&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_447\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_447&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_449\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_449&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_12276_1023_451\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_12276_1023_451&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13195.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 905 153\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(452.5 76.5)\" style=\"\">\n	<path d=\"M 0 0 L 905 0 L 905 153 L 0 153 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-452.5, -76.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(452.5 76.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 191px; width: 905px; height: 153px; z-index: 288; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13195",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,191.00000000000068,905,153]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":191,"width":905,"height":153},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13195.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13196.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 905 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(452.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 905 0 L 905 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-452.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(452.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 19px; top: 432px; width: 905px; height: 132px; z-index: 289; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13196",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[19,432.0000000000007,905,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":432,"width":905,"height":132},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape13196.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13197.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 43px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 43px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​YC, YS...​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 124px; width: 155px; height: 43px; z-index: 290;",
	cssClasses:	"",
	htmlId:		"tobj13197",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,124,155,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":124,"width":155,"height":43},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13198.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 62px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​Potential Special Characteristics</span></strong></span></p><p><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">C=Critical, S=Significant​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 125px; width: 178px; height: 62px; z-index: 291;",
	cssClasses:	"",
	htmlId:		"tobj13198",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,125,178,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":125,"width":178,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13199.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 40px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Some of the potential characteristics which identify the product process.</span></p><p style=\"text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 125px; width: 543px; height: 40px; z-index: 292;",
	cssClasses:	"",
	htmlId:		"tobj13199",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,125,543,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":125,"width":543,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13200.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 47px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​8D​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 439px; width: 155px; height: 47px; z-index: 293;",
	cssClasses:	"",
	htmlId:		"tobj13200",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,439,155,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":439,"width":155,"height":47},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13201.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 178px; min-height: 66px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 178px; min-height: 66px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​&nbsp;Eight Disciplines ​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 156px; top: 439px; width: 178px; height: 66px; z-index: 294;",
	cssClasses:	"",
	htmlId:		"tobj13201",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[156,439,178,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":156,"y":439,"width":178,"height":66},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13202.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 140px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 140px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">The Eight Disciplines of Problem Solving (8D) is a problem solving methodology designed to find the root cause of a problem, devise a short-term fix and implement a long-term solution to prevent recurring problems. When it\'s clear that your product is defective or isn\'t satisfying your customers, an 8D is an excellent first step to improving Quality and Reliability.</span></p><p style=\"text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 439px; width: 543px; height: 140px; z-index: 295;",
	cssClasses:	"",
	htmlId:		"tobj13202",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,439,543,140]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":439,"width":543,"height":140},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13203.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 66px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 66px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​5Ms​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 353px; width: 155px; height: 66px; z-index: 296;",
	cssClasses:	"",
	htmlId:		"tobj13203",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,353,155,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":353,"width":155,"height":66},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13204.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 85px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 85px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">The 5M model is a troubleshooting and risk-management model used for automotive safety. Man, Machine, Medium, Mission &amp; Management are the factors that make up 5Ms.</span></p><p style=\"text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 353px; width: 543px; height: 85px; z-index: 297;",
	cssClasses:	"",
	htmlId:		"tobj13204",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,353,543,85]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":353,"width":543,"height":85},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13205.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 155px; min-height: 97px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 155px; min-height: 97px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color:#2465B8;font-family:arial,sans-serif;font-size:11pt;\">​5 Whys​</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 22px; top: 203px; width: 155px; height: 97px; z-index: 298;",
	cssClasses:	"",
	htmlId:		"tobj13205",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[22,203,155,97]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":203,"width":155,"height":97},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text13206.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 543px; min-height: 150px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 543px; min-height: 150px;\"><p style=\"text-align: justify; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: arial; font-size: 11pt;\">​​​​​​​​​​​​​​</span><span style=\"font-family: arial; font-size: 11pt;\">Is an iterative interrogative technique used to explore the cause-and-effect relationships underlying a particular problem.[1] The primary goal of the technique is to determine the root cause of a defect or problem by repeating the question \"Why?\" Each answer forms the basis of the next question. The \"5\" in the name derives from an anecdotal observation on the number of iterations needed to resolve the problem.</span></p><p style=\"text-align: justify;\"><span style=\"font-family: arial; font-size: 11pt;\">​​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 201px; width: 543px; height: 150px; z-index: 299;",
	cssClasses:	"",
	htmlId:		"tobj13206",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[367,201,543,150]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":367,"y":201,"width":543,"height":150},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
progress9479.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; height: 20px;\"><div style=\"overflow: hidden; background-color: rgb(238, 238, 238); position: absolute; left: 0px; top: 0px; border: 1px solid rgb(153, 153, 153); width: 198px; height: 18px;\"><div style=\"overflow: hidden; position: absolute; left: 0px; top: 0px; width: 40px; height: 100%; background-color: rgb(138, 179, 238);\"></div></div><div name=\"dCon2\" style=\"position: absolute; width: 100%; left: 1px; bottom: 0px; height: 6px;\"></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 405px; top: 624px; width: 200px; height: 20px; z-index: 300;",
	cssClasses:	"",
	htmlId:		"tobj9479",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Progress Bar 1"
	},
	objData:	{"a":[0,16777312,0,[405,624,200,20]],"desktopRect":{"x":405,"y":624,"width":200,"height":20},"step":1,"range":30,"barPos":"6","tickTime":1000,"dwBarFlags":16,"imgsrc":"","varName":"VarPageInChapter"}
};
text1042.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 67px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 67px; min-height: 20px;\"><p><span style=\"font-size:10pt; color: rgb(66, 138, 230); font-family: Arial, sans-serif;\"><span style=\"color: rgb(66, 138, 230);\">&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 819px; top: 626px; width: 67px; height: 20px; z-index: 301;",
	cssClasses:	"",
	htmlId:		"tobj1042",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Page Count",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'Set Page in Chapter',actItem:function(){ if(!VarCurrentChapterName.equals('~~~null~~~'))text1042.changeContents( "      " +  VarPageInChapter.getValueForDisplay() + " / " +  VarPagesInChapter.getValueForDisplay() + "" ); else text1042.changeContents( "      " +  VarPageInTitle.getValueForDisplay() + " / " +  VarPagesInTitle.getValueForDisplay() + "" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0,name:'Show Text',actItem:function(){ text1042.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,96,0,[819,626,67,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#cccccc"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":819,"y":626,"width":67,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape1041.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 62 26\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(31 13)\" style=\"\">\n	<path d=\"M 0 0 L 61 0 L 61 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(31 13)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 807.5px; top: 620.5px; width: 62px; height: 26px; z-index: 302; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1041",
	bInsAnc:	0,
	cwObj:		{
		"name":	"borde_contador"
	},
	objData:	{"a":[0,96,0,[807.5,620.5,62,26]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":808,"y":621,"width":62,"height":26},"btnState":"disabled","altValue":"borde_contador","titleValue":"borde_contador","fallbackImg":"<img src=\"images/desktop_shape1041.png\" alt=\"borde_contador\" title=\"borde_contador\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape18.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1012 665\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(506 332.5)\" style=\"\">\n	<path d=\"M 0 0 L 1012 0 L 1012 665 L 0 665 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40); pointer-events: auto;\" transform=\"translate(0 0) translate(-506, -332.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(506 332.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -3px; top: 6.82121e-13px; width: 1012px; height: 665px; z-index: 303; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj18",
	bInsAnc:	0,
	cwObj:		{
		"name":	"full_shadow"
	},
	objData:	{"a":[288,64,[35,35,7,7,0,0],[-3.000000000000341,6.821210263296962e-13,1012,665]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-3,"y":0,"width":1012,"height":665},"btnState":"disabled","altValue":"full_shadow","titleValue":"full_shadow","fallbackImg":"<img src=\"images/desktop_shape13985.png\" alt=\"full_shadow\" title=\"full_shadow\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.4;\">"}
};
image13471.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj13471Img\" src=\"images/Personas_Gestamp%20Palencia_2013%20(1).JPG%20(1).jpg\" alt=\"Personas_Gestamp Palencia_2013 (1).JPG (1)\" title=\"Personas_Gestamp Palencia_2013 (1).JPG (1)\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1009px; height: 672px;\">",
	cssText:	"left: 0px; top: 0px; visibility: hidden; position: absolute; width: 1009px; height: 672px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj13471",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Personas_Gestamp Palencia_2013 (1).JPG (1)"
	},
	objData:	{"a":[32,288,[35,0,5,0,0,0],[0,0,1009,672]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":672}}
};
shape13467.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 387 223\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(193.5 111.5)\" style=\"\">\n	<path d=\"M 0 0 L 387 0 L 387 223 L 0 223 L 0 0 Z\" style=\"stroke: rgb(0, 62, 103); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-193.5, -111.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(193.5 111.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-191.5\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 47px; top: 95px; visibility: hidden; position: absolute; width: 387px; height: 223px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13467",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 4"
	},
	objData:	{"a":[32,32,[35,0,8,0,500,0],[46.99999999999997,95.00000000000004,387,223]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":47,"y":95,"width":387,"height":223},"btnState":"disabled","altValue":"Rectangle 4","titleValue":"Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape13467.png\" alt=\"Rectangle 4\" title=\"Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image12281.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj12281Img\" src=\"images/forward_dis.png\" alt=\"forward_dis\" title=\"forward_dis\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 54px; height: 54px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 955px; top: 608px; width: 54px; height: 54px; z-index: 304;",
	cssClasses:	"",
	htmlId:		"tobj12281",
	bInsAnc:	0,
	cwObj:		{
		"name":	"forward_dis"
	},
	objData:	{"a":[0,352,0,[955,608,54,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":955,"y":608,"width":54,"height":54}}
};
text12443.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 333px; min-height: 168px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 333px; min-height: 168px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; font-size: 12pt;\">We are confident that you have found this training useful to understand that reducing potential failures as well as minimizing their impact is everyone\'s job, and that this is possible and mandatory for all employees using the FMEA&nbsp; methodology.</span></p></div></div>",
	cssText:	"left: 75px; top: 151px; visibility: hidden; position: absolute; width: 333px; height: 168px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj12443",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 3"
	},
	objData:	{"a":[32,32,[6,0,9,0,1500,0],[75,151,333,168]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":75,"y":151,"width":333,"height":168},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape12282.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 83\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 41.5)\" style=\"\">\n	<path d=\"M 0 0 L 1010 0 L 1010 83 L 0 83 L 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: 1, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(36, 101, 184); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-505, -41.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 41.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-503\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1px; top: -4px; width: 1010px; height: 83px; z-index: 3; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj12282",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 3"
	},
	objData:	{"a":[0,32,0,[-1,-3.999999999999879,1010,83]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-1,"y":-4,"width":1010,"height":83},"btnState":"disabled","altValue":"Rectangle 3","titleValue":"Rectangle 3","fallbackImg":"<img src=\"images/desktop_shape1024.png\" alt=\"Rectangle 3\" title=\"Rectangle 3\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape12395.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1011 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505.5 0.5)\" style=\"\">\n	<path d=\"M 0 0 L 1010 0\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-505, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505.5 7.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 21.5px; top: 606.5px; width: 1011px; height: 1px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj12395",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[21.5,606.5000000000001,1011,1]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":22,"y":607,"width":1011,"height":1},"btnState":"disabled","altValue":"Line","titleValue":"Line","fallbackImg":"<img src=\"images/desktop_shape17.png\" alt=\"Line\" title=\"Line\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape12414.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 346 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(173 0.5)\" style=\"\">\n	<path d=\"M 0 0 L 345 0\" style=\"stroke: rgb(0, 62, 103); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-172.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(173 7.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 68.5px; top: 139.5px; visibility: hidden; position: absolute; width: 346px; height: 1px; z-index: 5; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj12414",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[32,32,[7,0,9,0,1200,0],[68.5,139.50000000000003,346,1]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":69,"y":140,"width":346,"height":1},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape12414.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text12415.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 268px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 268px; min-height: 32px;\"><p style=\"text-align:left\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: Arial, sans-serif; font-size: 18pt;\">Congratulations!</span></strong></span></p></div></div>",
	cssText:	"left: 69px; top: 110px; visibility: hidden; position: absolute; width: 268px; height: 32px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj12415",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[32,32,[6,0,8,0,1000,0],[69,110,268,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":69,"y":110,"width":268,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og12419.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og12419",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	7
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/forward.png","images/forward_hover.png","images/forward_press.png","images/forward_dis.png","images/exit.png","images/exit_hover.png","images/exit_down.png","images/exit_dis.png","images/glossary.png","images/glossary_hover.png","images/glossary_dwon.png","images/glossary_dis.png","images/index.png","images/index_hover.png","images/index_down.png","images/index_dis.png","images/help.png","images/help_hover.png","images/help_down.png","images/ampliar.png","images/ampliar_btn.png","images/close.png","images/close_hover.png","images/close_down.png","images/close_dis.png","images/complete_FMEA.png","images/help_pop_up.png","images/Personas_Gestamp%20Palencia_2013%20(1).JPG%20(1).jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
