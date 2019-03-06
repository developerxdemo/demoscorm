if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
trivExitPage.trivExitPageItemExits=function(){
		textbutton673.hide();
};
trivExitPage.transOutDone=function(){
		if (textbutton673.isVisible() && textbutton673.currTrans && !textbutton673.trivWasDone) return false; else textbutton673.trivWasDone=true;
};
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
image10829.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj10829Img\" src=\"images/achievement-agreement-arms-1068523.jpg\" alt=\"achievement-agreement-arms-1068523\" title=\"achievement-agreement-arms-1068523\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1012px; height: 662px;\">",
	cssText:	"left: 0px; top: 0px; visibility: hidden; position: absolute; width: 1012px; height: 662px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj10829",
	bInsAnc:	0,
	cwObj:		{
		"name":	"achievement-agreement-arms-1068523"
	},
	objData:	{"a":[32,288,[35,0,8,0,0,0],[0,0,1012,662]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1012,"height":662}}
};
shape10830.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 287 538\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(143.5 269)\" style=\"\">\n	<path d=\"M 23.75 0 L 263.25 0 A 23.75 23.75 0 0 1 287 23.75 L 287 514.25 A 23.75 23.75 0 0 1 263.25 538 L 23.75 538 A 23.75 23.75 0 0 1 0 514.25 L 0 23.75 A 23.75 23.75 0 0 1 23.75 0 Z\" style=\"stroke: rgb(0, 62, 103); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.8;filter:alpha(opacity=80); pointer-events: auto;\" transform=\"translate(0 0) translate(-143.5, -269) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(143.5 269)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0.8;filter:alpha(opacity=80);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: -307px; top: 55px; visibility: hidden; position: absolute; width: 287px; height: 538px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj10830",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[32,32,[30,0,8,0,0,0,-25.000000000000057,55.00000000000006,1,0],[-307.00000000000006,55.00000000000006,287,538]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-25,"y":55,"width":287,"height":538},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape10830.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.8;\">"}
};
shape7449.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 198 4\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(99 2)\" style=\"\">\n	<path d=\"M 0 0 L 195 1\" style=\"stroke: rgb(0, 62, 103); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-97.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(99 8.5) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-95.5\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 32.5px; top: 248.5px; visibility: hidden; position: absolute; width: 198px; height: 4px; z-index: 2; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj7449",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[32,32,[7,0,8,0,1000,0],[32.5,248.50000000000003,198,4]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":34,"y":250,"width":198,"height":4},"btnState":"disabled","altValue":"Line","titleValue":"Line","fallbackImg":"<img src=\"images/desktop_shape7449.png\" alt=\"Line\" title=\"Line\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton673.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 155 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(77.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 155 0 A 0 0 0 0 1 155 0 L 155 43 A 0 0 0 0 1 155 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(77.5 21.5)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-44.43\" y=\"8.4\" fill=\"#003e67\">START</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 54px; top: 379px; visibility: hidden; position: absolute; width: 155px; height: 43px; z-index: 5; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj673",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Start",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('sap_course_01_special_cases_1.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[292,32864,[34,34,7,7,1500,0],[54,379,155,43]],"shadoweffect":{"opacity":"0.5","depth":5,"color":"#000000","blurradius":7,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":54,"y":379,"width":155,"height":43},"imgDataNormal":"images/desktop_shape673.png","imgDataOver":"images/desktop_shape673_over.png","imgDataDown":"images/desktop_shape673_down.png","imgDataDisabled":"images/desktop_shape673_disabled.png","svgDataNormal":"<g transform=\"translate(77.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 155 0 A 0 0 0 0 1 155 0 L 155 43 A 0 0 0 0 1 155 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(77.5 21.5)\">\n\t\t<text font-family=\"'Century Gothic',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-44.43\" y=\"8.4\" fill=\"#003e67\">START</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(77.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 155 0 A 0 0 0 0 1 155 0 L 155 43 A 0 0 0 0 1 155 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(77.5 21.5)\">\n\t\t<text font-family=\"'Century Gothic',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(36,101,184); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-44.43\" y=\"8.4\" fill=\"#2465b8\">START</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(77.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 155 0 A 0 0 0 0 1 155 0 L 155 43 A 0 0 0 0 1 155 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(77.5 21.5)\">\n\t\t<text font-family=\"'Century Gothic',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(66,138,230); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-44.43\" y=\"8.4\" fill=\"#428ae6\">START</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(77.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 155 0 A 0 0 0 0 1 155 0 L 155 43 A 0 0 0 0 1 155 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-77.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(77.5 21.5)\">\n\t\t<text font-family=\"'Century Gothic',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-44.43\" y=\"8.4\" fill=\"#003e67\">START</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"START","titleValue":"START","fallbackImg":"<img alt=\"Start\" title=\"Start\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text667.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 261px; min-height: 81px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 261px; min-height: 81px;\"><p style=\"text-align: center; line-height: 1; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(0, 62, 103); font-family: &quot;century gothic&quot;, sans-serif; font-size: 28pt;\">SAP HCM</span></b></span></p><p style=\"text-align: center; line-height: 1; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(0, 62, 103); font-family: &quot;century gothic&quot;, sans-serif; font-size: 28pt;\">Training</span></b></span></p></div></div>",
	cssText:	"left: 1px; top: 161px; visibility: hidden; position: absolute; width: 261px; height: 81px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj667",
	bInsAnc:	0,
	cwObj:		{
		"name":	"FMEA"
	},
	objData:	{"a":[32,32,[7,0,8,0,1000,0],[1,161,261,81]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1,"y":161,"width":261,"height":81},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text670.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 261px; min-height: 132px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 261px; min-height: 132px;\"><p style=\"text-align: center;\"><span style=\"font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 26.6667px; color: rgb(0, 66, 106);\">Advanced</span></p>\n\n<p style=\"text-align: center;\"><span style=\"font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 26.6667px; color: rgb(0, 66, 106);\">Module</span></p>\n\n<p><span style=\"font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 20pt;\">​</span></p></div></div>",
	cssText:	"left: 1px; top: 260px; visibility: hidden; position: absolute; width: 261px; height: 132px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj670",
	bInsAnc:	0,
	cwObj:		{
		"name":	"getting started"
	},
	objData:	{"a":[32,32,[7,0,8,0,1000,0],[1,260,261,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1,"y":260,"width":261,"height":132},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"11","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	1
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/achievement-agreement-arms-1068523.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#ffffff","",0,0,1];
