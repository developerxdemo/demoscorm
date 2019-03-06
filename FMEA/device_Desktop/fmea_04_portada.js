if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
trivExitPage.trivExitPageItemExits=function(){
		textbutton9655.hide();
		shape9657.hide();
		text9658.hide();
		text9659.hide();
};
trivExitPage.transOutDone=function(){
		if (textbutton9655.isVisible() && textbutton9655.currTrans && !textbutton9655.trivWasDone) return false; else textbutton9655.trivWasDone=true;
		if (shape9657.isVisible() && shape9657.currTrans && !shape9657.trivWasDone) return false; else shape9657.trivWasDone=true;
		if (text9658.isVisible() && text9658.currTrans && !text9658.trivWasDone) return false; else text9658.trivWasDone=true;
		if (text9659.isVisible() && text9659.currTrans && !text9659.trivWasDone) return false; else text9659.trivWasDone=true;
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
image9654.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj9654Img\" src=\"images/Young_professionals_RnD_Chassis_1_R.jpg\" alt=\"Young_professionals_RnD_Chassis_1_R\" title=\"Young_professionals_RnD_Chassis_1_R\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1013px; height: 662px;\">",
	cssText:	"left: 0px; top: 0px; visibility: hidden; position: absolute; width: 1013px; height: 662px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj9654",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Young_professionals_RnD_Chassis_1_R"
	},
	objData:	{"a":[32,288,[35,null,6,7,0,1300],[0,0,1013,662]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1013,"height":662}}
};
textbutton9655.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 253 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(126.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 253 0 A 0 0 0 0 1 253 0 L 253 43 A 0 0 0 0 1 253 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-126.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(126.5 21.5)\">\n		<text font-family=\"\'Arial\',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(66,138,230); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-30.37\" y=\"8.4\" fill=\"#428ae6\">Start</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 37px; top: 368px; visibility: hidden; position: absolute; width: 253px; height: 43px; z-index: 4; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj9655",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Start",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('fmea_04_qms_01_presentation.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[292,32864,[34,34,6,7,2700,0],[37,368.00000000000006,253,43]],"shadoweffect":{"opacity":"0.5","depth":5,"color":"#000000","blurradius":7,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":37,"y":368,"width":253,"height":43},"imgDataNormal":"images/desktop_shape9655.png","imgDataOver":"images/desktop_shape9655_over.png","imgDataDown":"images/desktop_shape9655_down.png","imgDataDisabled":"images/desktop_shape9655_disabled.png","svgDataNormal":"<g transform=\"translate(126.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 253 0 A 0 0 0 0 1 253 0 L 253 43 A 0 0 0 0 1 253 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-126.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(126.5 21.5)\">\n\t\t<text font-family=\"'Arial',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(66,138,230); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-30.37\" y=\"8.4\" fill=\"#428ae6\">Start</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(126.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 253 0 A 0 0 0 0 1 253 0 L 253 43 A 0 0 0 0 1 253 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-126.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(126.5 21.5)\">\n\t\t<text font-family=\"'Arial',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(36,101,184); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-30.37\" y=\"8.4\" fill=\"#2465b8\">Start</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(126.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 253 0 A 0 0 0 0 1 253 0 L 253 43 A 0 0 0 0 1 253 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-126.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(126.5 21.5)\">\n\t\t<text font-family=\"'Arial',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(66,138,230); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-30.37\" y=\"8.4\" fill=\"#428ae6\">Start</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(126.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 253 0 A 0 0 0 0 1 253 0 L 253 43 A 0 0 0 0 1 253 43 L 0 43 A 0 0 0 0 1 0 43 L 0 0 A 0 0 0 0 1 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-126.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(126.5 21.5)\">\n\t\t<text font-family=\"'Arial',sans-serif\" font-size=\"26.666666\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(66,138,230); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-30.37\" y=\"8.4\" fill=\"#428ae6\">Start</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Start","titleValue":"Start","fallbackImg":"<img alt=\"Start\" title=\"Start\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape9657.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 327 662\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(163.5 331)\" style=\"\">\n	<path d=\"M 0 0 L 327 0 L 327 662 L 0 662 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.6;filter:alpha(opacity=60); pointer-events: auto;\" transform=\"translate(0 0) translate(-163.5, -331) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(163.5 331)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.6;filter:alpha(opacity=60);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: -8.52651e-14px; top: 5.68434e-14px; visibility: hidden; position: absolute; width: 327px; height: 662px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj9657",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[288,32,[39,38,8,6,800,1000,-8.526512829121202e-14,5.684341886080802e-14,1,1],[-8.526512829121202e-14,5.684341886080802e-14,327,662]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":327,"height":662},"btnState":"disabled","altValue":"Rectangle","titleValue":"Rectangle","fallbackImg":"<img src=\"images/desktop_shape9657.png\" alt=\"Rectangle\" title=\"Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.6;\">"}
};
text9658.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 273px; min-height: 139px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 273px; min-height: 139px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: &quot;century gothic&quot;, sans-serif; font-size:48pt;\">FMEA</span></strong></span></p><p style=\"text-align: center;\"><span><strong><span style=\"font-size:22pt; color: rgb(0, 62, 103); font-family: &quot;century gothic&quot;, sans-serif;\">Methodology</span></strong></span></p></div></div>",
	cssText:	"left: 29px; top: -159px; visibility: hidden; position: absolute; width: 273px; height: 139px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj9658",
	bInsAnc:	0,
	cwObj:		{
		"name":	"FMEA"
	},
	objData:	{"a":[288,32,[24,24,2,5,1500,0,29,46,1,1],[29,-159,273,139]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":29,"y":46,"width":273,"height":139},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text9659.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 281px; min-height: 129px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 281px; min-height: 129px;\"><p style=\"text-align: center;\"><span style=\"font-family: arial, sans-serif; color: rgb(0, 62, 103); font-size:28pt;\">Complaint Management</span></p></div></div>",
	cssText:	"left: 23px; top: 196px; visibility: hidden; position: absolute; width: 281px; height: 129px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj9659",
	bInsAnc:	0,
	cwObj:		{
		"name":	"getting started"
	},
	objData:	{"a":[288,32,[6,34,9,7,2300,0],[23,196,281,129]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":23,"y":196,"width":281,"height":129},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"normal","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	1
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Young_professionals_RnD_Chassis_1_R.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
