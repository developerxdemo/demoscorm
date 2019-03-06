if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
trivExitPage.trivExitPageItemExits=function(){
		shape13350.hide();
		og658.hide();
		shape646.hide();
		shape12879.hide();
		text652.hide();
		text649.hide();
		textbutton650.hide();
		shape5352.hide();
};
trivExitPage.transOutDone=function(){
		if (shape13350.isVisible() && shape13350.currTrans && !shape13350.trivWasDone) return false; else shape13350.trivWasDone=true;
		if (og658.isVisible() && og658.currTrans && !og658.trivWasDone) return false; else og658.trivWasDone=true;
		if (shape646.isVisible() && shape646.currTrans && !shape646.trivWasDone) return false; else shape646.trivWasDone=true;
		if (shape12879.isVisible() && shape12879.currTrans && !shape12879.trivWasDone) return false; else shape12879.trivWasDone=true;
		if (text652.isVisible() && text652.currTrans && !text652.trivWasDone) return false; else text652.trivWasDone=true;
		if (text649.isVisible() && text649.currTrans && !text649.trivWasDone) return false; else text649.trivWasDone=true;
		if (textbutton650.isVisible() && textbutton650.currTrans && !textbutton650.trivWasDone) return false; else textbutton650.trivWasDone=true;
		if (shape5352.isVisible() && shape5352.currTrans && !shape5352.trivWasDone) return false; else shape5352.trivWasDone=true;
};
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	progress5344.cwObj.pbVar=VarPageInChapter;
	progress5344.setPosition(VarPageInChapter.getValue());
	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton570.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6038\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/help.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6038&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 614px; width: 40px; height: 40px; z-index: 47; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj570",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Help",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og5743.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[88.99999999999999,614,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":614,"width":40,"height":40},"imgDataNormal":"images/desktop_shape570.png","imgDataOver":"images/desktop_shape570_over.png","imgDataDown":"images/desktop_shape570_down.png","imgDataDisabled":"images/desktop_shape570_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6038\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/help.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6038&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6040\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/help_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6040&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6042\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/help_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6042&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6044\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6044&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Help","titleValue":"Help","fallbackImg":"<img alt=\"Help\" title=\"Help\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton575.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 44 44\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 22)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6046\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6046&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 22)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 157px; top: 612px; width: 44px; height: 44px; z-index: 48; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj575",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Index",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og658.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape13350.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[156.99999999999997,612,44,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":157,"y":612,"width":44,"height":44},"imgDataNormal":"images/desktop_shape575.png","imgDataOver":"images/desktop_shape575_over.png","imgDataDown":"images/desktop_shape575_down.png","imgDataDisabled":"images/desktop_shape575_disabled.png","svgDataNormal":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6046\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6046&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6048\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6048&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6050\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6050&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 22)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6052\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"44\" xlink:href=\"images/index_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 44 L 0 44 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6052&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 22)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Index","titleValue":"Index","fallbackImg":"<img alt=\"Index\" title=\"Index\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton581.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6054\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6054&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 235px; top: 614px; width: 40px; height: 40px; z-index: 49; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj581",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Glossary",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17634.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[234.99999999999997,614,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":235,"y":614,"width":40,"height":40},"imgDataNormal":"images/desktop_shape581.png","imgDataOver":"images/desktop_shape581_over.png","imgDataDown":"images/desktop_shape581_down.png","imgDataDisabled":"images/desktop_shape581_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6054\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6054&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6056\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6056&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6058\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary_dwon.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6058&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6060\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/glossary_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6060&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Glossary","titleValue":"Glossary","fallbackImg":"<img alt=\"Glossary\" title=\"Glossary\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton564.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6062\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6062&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 21px; top: 614px; width: 40px; height: 40px; z-index: 50; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj564",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Exit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('sap_advanced.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[20.999999999999982,614,40,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":614,"width":40,"height":40},"imgDataNormal":"images/desktop_shape564.png","imgDataOver":"images/desktop_shape564_over.png","imgDataDown":"images/desktop_shape564_down.png","imgDataDisabled":"images/desktop_shape570_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6062\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6062&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6064\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6064&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6066\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6066&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6068\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/exit_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6068&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Exit","titleValue":"Exit","fallbackImg":"<img alt=\"Exit\" title=\"Exit\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text10910.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 485px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 485px; min-height: 23px;\"><p><span style=\"font-size:12pt;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: &quot;Century Gothic&quot;, sans-serif;\">SAP HCM&nbsp;</span></strong><strong><span style=\"font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(255, 255, 255);\">Training / Advanced Module</span></strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 82px; top: 17px; width: 485px; height: 23px; z-index: 51;",
	cssClasses:	"",
	htmlId:		"tobj10910",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TITLE"
	},
	objData:	{"a":[0,96,0,[82,17,485,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":82,"y":17,"width":485,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton556.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 54 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(27 27)\" style=\"\">\n	<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6070\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6070&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(27 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 899px; top: 608px; width: 54px; height: 54px; z-index: 52; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj556",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('sap_course_15_differences_between_1.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[899,608,54,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":899,"y":608,"width":54,"height":54},"imgDataNormal":"images/desktop_shape556.png","imgDataOver":"images/desktop_shape556_over.png","imgDataDown":"images/desktop_shape556_down.png","imgDataDisabled":"images/desktop_shape556_disabled.png","svgDataNormal":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6070\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6070&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6072\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6072&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6074\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6074&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6076\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6076&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton548.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 54 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(27 27)\" style=\"\">\n	<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6078\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6078&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(27 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 955px; top: 608px; width: 54px; height: 54px; z-index: 53; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj548",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('sap_course_45_support_model_6.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[955,608,54,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":955,"y":608,"width":54,"height":54},"imgDataNormal":"images/desktop_shape556.png","imgDataOver":"images/desktop_shape556_over.png","imgDataDown":"images/desktop_shape556_down.png","imgDataDisabled":"images/desktop_shape556_disabled.png","svgDataNormal":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6078\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6078&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6080\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6080&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6082\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6082&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6084\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 54 0 L 54 54 L 0 54 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6084&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13350.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1012 665\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(506 332.5)\" style=\"\">\n	<path d=\"M 0 0 L 1012 0 L 1012 665 L 0 665 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40); pointer-events: auto;\" transform=\"translate(0 0) translate(-506, -332.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(506 332.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -3px; top: 5.68434e-13px; width: 1012px; height: 665px; z-index: 54; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13350",
	bInsAnc:	0,
	cwObj:		{
		"name":	"full_shadow_INDEX"
	},
	objData:	{"a":[288,64,[35,35,8,10,0,0],[-3.000000000000284,5.684341886080801e-13,1012,665]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-3,"y":0,"width":1012,"height":665},"btnState":"disabled","altValue":"full_shadow_INDEX","titleValue":"full_shadow_INDEX","fallbackImg":"<img src=\"images/desktop_shape13350.png\" alt=\"full_shadow_INDEX\" title=\"full_shadow_INDEX\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.4;\">"}
};
og5743.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og5743",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape5744.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 662\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 331)\" style=\"\">\n	<path d=\"M 19.69 0 L 989.31 0 A 19.69 19.69 0 0 1 1009 19.69 L 1009 642.31 A 19.69 19.69 0 0 1 989.31 662 L 19.69 662 A 19.69 19.69 0 0 1 0 642.31 L 0 19.69 A 19.69 19.69 0 0 1 19.69 0 Z\" style=\"stroke: rgb(36, 101, 184); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -331) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 331)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -2.84217e-13px; top: 5.68434e-13px; width: 1009px; height: 662px; z-index: 55; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5744",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[-2.8421709430404007e-13,5.684341886080801e-13,1009,662]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1009,"height":662},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape5744.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image12938.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj12938Img\" src=\"images/desktop_crop12938.png\" alt=\"Captura de pantalla 2018-06-22 a las 9.47.25\" title=\"Captura de pantalla 2018-06-22 a las 9.47.25\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 878px; height: 582px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 68px; top: 40px; width: 878px; height: 582px; z-index: 56; border: 1px solid rgb(0, 62, 103);",
	cssClasses:	"",
	htmlId:		"tobj12938",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Captura de pantalla 2018-06-22 a las 9.47.25"
	},
	objData:	{"a":[0,256,0,[68,40,878,582]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":1,"lineStyle":0,"borderColor":"#003e67"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":68,"y":40,"width":878,"height":582}}
};
shape20506.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 252 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(126 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 252 0 L 252 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-126, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(126 27.5)\">\n		<text font-family=\"\'Arial\',sans-serif\" font-size=\"21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 676px; top: 52px; width: 252px; height: 55px; z-index: 57; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj20506",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 4"
	},
	objData:	{"a":[0,0,0,[676,52.000000000000156,252,55]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":676,"y":52,"width":252,"height":55},"btnState":"disabled","altValue":"Rectangle 4","titleValue":"Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape20506.png\" alt=\"Rectangle 4\" title=\"Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton5747.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6086\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6086&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 952px; top: 12px; width: 45px; height: 45px; z-index: 58; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5747",
	bInsAnc:	1,
	cwObj:		{
		"name":	"close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og5743.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[952,12.000000000000036,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":952,"y":12,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6086\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6086&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6088\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6088&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6090\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6090&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6092\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6092&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"close","titleValue":"close","fallbackImg":"<img alt=\"close\" title=\"close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13341.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 133 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(66.5 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 133 0 L 133 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-66.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(66.5 12.5)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 134px; top: 53px; width: 133px; height: 25px; z-index: 59; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13341",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 3"
	},
	objData:	{"a":[0,0,0,[134,53.00000000000008,133,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":53,"width":133,"height":25},"btnState":"disabled","altValue":"Rectangle 3","titleValue":"Rectangle 3","fallbackImg":"<img src=\"images/desktop_shape13341.png\" alt=\"Rectangle 3\" title=\"Rectangle 3\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text13342.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 416px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 416px; min-height: 42px;\"><p><strong><span style=\"font-size: 10pt; color: rgb(255, 255, 255); font-family: &quot;Century Gothic&quot;, sans-serif;\">SAP HCM&nbsp;Training / Introduction</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 140px; top: 59px; width: 416px; height: 42px; z-index: 60;",
	cssClasses:	"",
	htmlId:		"tobj13342",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TITLE"
	},
	objData:	{"a":[0,64,0,[140,59,416,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":140,"y":59,"width":416,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5831.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 865px; top: 566px; width: 14px; height: 2px; z-index: 61; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj5831",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[865,566,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":866,"y":567,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5831.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5830.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 65px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 65px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Previous</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 839px; top: 542px; width: 65px; height: 22px; z-index: 62;",
	cssClasses:	"",
	htmlId:		"tobj5830",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[839,542,65,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":839,"y":542,"width":65,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5836.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 16 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8 1)\" style=\"\">\n	<path d=\"M 0 0 L 14 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-7, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 790px; top: 567px; width: 16px; height: 2px; z-index: 63; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj5836",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[790,567,16,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":791,"y":568,"width":16,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5836.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5835.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 65px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 65px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Screen</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 766px; top: 542px; width: 65px; height: 22px; z-index: 64;",
	cssClasses:	"",
	htmlId:		"tobj5835",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[766,542,65,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":766,"y":542,"width":65,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5841.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 16 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8 1)\" style=\"\">\n	<path d=\"M 0 0 L 14 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-7, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 567px; width: 16px; height: 2px; z-index: 65; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj5841",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[510,567,16,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":511,"y":568,"width":16,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5836.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5840.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 165px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 165px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Progress bar</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 435px; top: 542px; width: 165px; height: 22px; z-index: 66;",
	cssClasses:	"",
	htmlId:		"tobj5840",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[435,542,165,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":435,"y":542,"width":165,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5829.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 918px; top: 566px; width: 14px; height: 2px; z-index: 67; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj5829",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[918,566,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":919,"y":567,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5831.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5828.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 36px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 36px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Next</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 907px; top: 542px; width: 36px; height: 22px; z-index: 68;",
	cssClasses:	"",
	htmlId:		"tobj5828",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[907,542,36,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":907,"y":542,"width":36,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text5795.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 328px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 328px; min-height: 40px;\"><p style=\"text-align:left\"><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 12pt;\">Title of the Course / TIttle of the Lesson</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 363px; top: 57px; width: 328px; height: 40px; z-index: 69;",
	cssClasses:	"",
	htmlId:		"tobj5795",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[363,57,328,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":363,"y":57,"width":328,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5812.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 88px; top: 567px; width: 14px; height: 2px; z-index: 70; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj5812",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[88,567,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":568,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5831.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5811.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 30px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 30px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Exit</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 80px; top: 543px; width: 30px; height: 22px; z-index: 71;",
	cssClasses:	"",
	htmlId:		"tobj5811",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[80,543,30,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":80,"y":543,"width":30,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5817.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 152px; top: 567px; width: 14px; height: 2px; z-index: 72; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj5817",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[152,567,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":568,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5831.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5816.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 34px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 34px; min-height: 40px;\"><p style=\"text-align:center\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 12pt;\">Help</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 142px; top: 543px; width: 34px; height: 40px; z-index: 73;",
	cssClasses:	"",
	htmlId:		"tobj5816",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[142,543,34,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":142,"y":543,"width":34,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5824.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 215px; top: 567px; width: 14px; height: 2px; z-index: 74; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj5824",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[215,567,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":216,"y":568,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5831.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5823.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 46px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 46px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Index</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 199px; top: 543px; width: 46px; height: 22px; z-index: 75;",
	cssClasses:	"",
	htmlId:		"tobj5823",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[199,543,46,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":199,"y":543,"width":46,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5822.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 279px; top: 567px; width: 14px; height: 2px; z-index: 76; transform: rotate(270deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(270deg) ; -webkit-transform:rotate(270deg) ; -o-transform:rotate(270deg) ; -ms-transform:rotate(270deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1.8369701987210297e-16, M12=1, M21=-1, M22=-1.8369701987210297e-16) ",
	cssClasses:	"",
	htmlId:		"tobj5822",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[279,567,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":270,"anchorX":50,"anchorY":50},"desktopRect":{"x":280,"y":568,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5831.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5821.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 22px;\"><p style=\"text-align: center;\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Glossary</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 254px; top: 543px; width: 64px; height: 22px; z-index: 77;",
	cssClasses:	"",
	htmlId:		"tobj5821",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[254,543,64,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":254,"y":543,"width":64,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5794.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 11 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(5.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 9 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-4.5, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 349px; top: 65px; width: 11px; height: 2px; z-index: 78; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5794",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[349,65,11,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":350,"y":66,"width":11,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5794.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text5801.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 200px; min-height: 22px;\"><p style=\"text-align:left\"><span><strong><span style=\"color: rgb(207, 42, 39); font-family: &quot;century gothic&quot;, sans-serif; font-size: 12pt;\">Title of the Screen</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 385px; top: 78px; width: 200px; height: 22px; z-index: 79;",
	cssClasses:	"",
	htmlId:		"tobj5801",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[385,78,200,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":385,"y":78,"width":200,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5796.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 14 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(7 1)\" style=\"\">\n	<path d=\"M 0 0 L 12 0\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(207, 42, 39); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(8 8)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 368px; top: 87px; width: 14px; height: 2px; z-index: 80; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5796",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 2"
	},
	objData:	{"a":[0,0,0,[368,87.00000000000001,14,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":369,"y":88,"width":14,"height":2},"btnState":"disabled","altValue":"Line 2","titleValue":"Line 2","fallbackImg":"<img src=\"images/desktop_shape5831.png\" alt=\"Line 2\" title=\"Line 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5755.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 217 21\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(108.5 10.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 210.25 0 A 4.75 4.75 0 0 1 215 4.75 L 215 14.25 A 4.75 4.75 0 0 1 210.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-107.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(108.5 10.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 133px; top: 55px; width: 217px; height: 21px; z-index: 81; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5755",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[133,55.000000000000135,217,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":56,"width":217,"height":21},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5755.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5756.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 237 21\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(118.5 10.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 230.25 0 A 4.75 4.75 0 0 1 235 4.75 L 235 14.25 A 4.75 4.75 0 0 1 230.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-117.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(118.5 10.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 132px; top: 77px; width: 237px; height: 21px; z-index: 82; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5756",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[132,77.00000000000014,237,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":133,"y":78,"width":237,"height":21},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5756.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5781.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 211 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(105.5 25)\" style=\"\">\n	<path d=\"M 12 0 L 197 0 A 12 12 0 0 1 209 12 L 209 36 A 12 12 0 0 1 197 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-104.5, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(105.5 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 412px; top: 575px; width: 211px; height: 50px; z-index: 83; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5781",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[412,575.0000000000001,211,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":413,"y":576,"width":211,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5781.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5785.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 78 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(39 25)\" style=\"\">\n	<path d=\"M 12 0 L 64 0 A 12 12 0 0 1 76 12 L 76 36 A 12 12 0 0 1 64 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-38, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(39 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 759px; top: 575px; width: 78px; height: 50px; z-index: 84; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5785",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[759,575,78,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":760,"y":576,"width":78,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5785.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5768.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 69px; top: 574px; width: 52px; height: 50px; z-index: 85; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5768",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[68.99999999999997,574,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":575,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5768.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5777.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 260px; top: 574px; width: 52px; height: 50px; z-index: 86; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5777",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[259.99999999999994,574,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":261,"y":575,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5768.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5776.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 196px; top: 574px; width: 52px; height: 50px; z-index: 87; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5776",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[195.99999999999997,574,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":197,"y":575,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5768.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5790.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 899px; top: 574px; width: 52px; height: 50px; z-index: 88; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5790",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[899,574,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":575,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5768.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5789.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 846px; top: 574px; width: 52px; height: 50px; z-index: 89; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5789",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[846,574,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":847,"y":575,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5768.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5772.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(26 25)\" style=\"\">\n	<path d=\"M 12 0 L 38 0 A 12 12 0 0 1 50 12 L 50 36 A 12 12 0 0 1 38 48 L 12 48 A 12 12 0 0 1 0 36 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 133px; top: 574px; width: 52px; height: 50px; z-index: 90; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5772",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 2"
	},
	objData:	{"a":[0,0,0,[132.99999999999997,574,52,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":575,"width":52,"height":50},"btnState":"disabled","altValue":"Rounded Rectangle 2","titleValue":"Rounded Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape5768.png\" alt=\"Rounded Rectangle 2\" title=\"Rounded Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og658.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og658",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape646.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 463 663\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(231.5 331.5)\" style=\"\">\n	<path d=\"M 0 0 L 462 0 L 462 662 L 0 662 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-231, -331) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(231.5 331.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -9.5px; top: -0.5px; width: 463px; height: 663px; z-index: 91; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj646",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[288,0,[30,30,7,7,0,0,-9.500000000000426,-0.4999999999997158,1,1],[-9.500000000000426,-0.4999999999997158,463,663]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-9,"y":0,"width":463,"height":663},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape646.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape12879.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 380 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(190 1)\" style=\"\">\n	<path d=\"M 0 0 L 378 0\" style=\"stroke: rgb(0, 62, 103); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-189, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(190 8) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 98px; width: 380px; height: 2px; z-index: 92; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj12879",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 5"
	},
	objData:	{"a":[288,0,[30,30,7,7,0,0,25,98.00000000000023,1,1],[25,98.00000000000023,380,2]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":26,"y":99,"width":380,"height":2},"btnState":"disabled","altValue":"Line 5","titleValue":"Line 5","fallbackImg":"<img src=\"images/desktop_shape12879.png\" alt=\"Line 5\" title=\"Line 5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text652.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 335px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 335px; min-height: 47px;\"><h1><p style=\"text-align:left\"><span><strong><span style=\"font-family: &quot;century gothic&quot;, sans-serif; color: rgb(0, 62, 103); font-size: 28pt;\">Index</span></strong></span></p></h1></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 25px; top: 47px; width: 335px; height: 47px; z-index: 93;",
	cssClasses:	"",
	htmlId:		"tobj652",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[288,0,[30,30,7,7,0,0,25,47,1,1],[25,47,335,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":25,"y":47,"width":335,"height":47},"dwTextFlags":65536,"marginSize":0,"textPublishLang":"Inherit"}
};
text649.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 389px; min-height: 547px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 389px; min-height: 547px;\"><p style=\"text-align: left; margin-top: 0px; margin-bottom: 0px; line-height: 1.25;\"><span style=\"font-size: 18pt; color: rgb(0, 62, 103); font-family: Arial, sans-serif;\">01. Special Cases</span><span style=\"color: rgb(0, 62, 103); font-size: 12pt; font-family: Arial, sans-serif;\">​</span></p>\n\n<p style=\"text-align: left; margin-top: 0px; margin-bottom: 0px; line-height: 1.5;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 62, 103); font-size: 12pt;\">&nbsp; &nbsp;<span style=\"color: rgb(0, 62, 103);\"> · <a id=\"triv20368\" href=\"javascript:hyperlink20368()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline;\">Global employee &amp; expatriation process</span></u></a></span></span></p>\n\n<p style=\"text-align: left; margin-top: 0px; margin-bottom: 0px; line-height: 1.5;\"><span style=\"color: rgb(0, 62, 103); font-family: Arial, sans-serif; font-size: 12pt;\">&nbsp; &nbsp; · <a id=\"triv20370\" href=\"javascript:hyperlink20370()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline;\">Transfered employees</span></u></a></span></p>\n\n<p style=\"text-align: left; margin-top: 0px; margin-bottom: 0px; line-height: 1.5;\"></p>\n\n<p style=\"text-align: left; margin-top: 0px; margin-bottom: 0px; line-height: 1.25;\"><u><span style=\"color: rgb(0, 62, 103); font-family: Arial, sans-serif; font-size: 12pt; text-decoration: underline;\">​</span></u></p>\n\n<p style=\"text-align: left; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><span style=\"color: rgb(0, 62, 103); font-family: Arial, sans-serif; font-size: 18pt;\">02. <a id=\"triv20376\" href=\"javascript:hyperlink20376()\" style=\"cursor: pointer;\"><span style=\"text-decoration: underline;\"><u>Differences be</u><u>tween actions</u></span></a></span></p>\n\n<p style=\"text-align: left; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"></p>\n\n<p style=\"text-align: left; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"></p>\n\n<p style=\"text-align: left; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"></p>\n\n<p style=\"text-align: left; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><span style=\"color: rgb(0, 62, 103); font-family: Arial, sans-serif; font-size: 18pt;\">​</span></p>\n\n<p style=\"text-align: left; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><span style=\"color: rgb(0, 62, 103); font-family: Arial, sans-serif; font-size: 18pt;\">05. <a id=\"triv20394\" href=\"javascript:hyperlink20394()\" style=\"cursor: pointer;\"><span style=\"text-decoration: underline;\"><u>Support M</u><u>odel</u></span></a></span></p>\n\n<p style=\"text-align: left; margin-top: 0px; margin-bottom: 0px; line-height: 1.25;\"></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 42px; top: 115px; width: 389px; height: 547px; z-index: 94;",
	cssClasses:	"",
	htmlId:		"tobj649",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[288,0,[30,30,7,7,0,0,42,115,1,1],[42,115,389,547]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":42,"y":115,"width":389,"height":547},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton650.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6094\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6094&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 4px; width: 45px; height: 45px; z-index: 95; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj650",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og658.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape13350.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[292,33088,[30,30,7,7,0,0,404.99999999999994,4.0000000000000355,1,1],[404.99999999999994,4.0000000000000355,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":405,"y":4,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6094\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6094&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6096\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6096&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6098\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6098&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6100\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6100&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og17634.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17634",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape17635.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1008 0 L 1008 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -8.5px; width: 1009px; height: 671px; z-index: 96; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17635",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000002842,-8.499999999999432,1009,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":-8,"width":1009,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape17635.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17636.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6102\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6102&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 952px; top: 606px; width: 45px; height: 45px; z-index: 97; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17636",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17594.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17634.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[952,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":952,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6102\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6102&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6104\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6104&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6106\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6106&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6108\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6108&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image17639.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj17639Img\" src=\"images/forward_dis.png\" alt=\"forward_dis\" title=\"forward_dis\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 45px; height: 45px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 895px; top: 606px; width: 45px; height: 45px; z-index: 98; transform: rotate(180deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj17639",
	bInsAnc:	0,
	cwObj:		{
		"name":	"forward_dis"
	},
	objData:	{"a":[0,256,0,[895,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":895,"y":606,"width":45,"height":45}}
};
shape17640.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 30\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 15)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 15)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 93px; width: 970px; height: 30px; z-index: 99; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17640",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,93.0000000000006,970,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":93,"width":970,"height":30},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17640.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17641.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 26)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 189px; width: 970px; height: 52px; z-index: 100; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17641",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,189.0000000000006,970,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":189,"width":970,"height":52},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17641.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17642.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"font-size: 11pt; color: rgb(36, 101, 184); font-family: Arial, sans-serif;\">Action</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 128px; width: 134px; height: 40px; z-index: 101;",
	cssClasses:	"",
	htmlId:		"tobj17642",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,128,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":128,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17643.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 67\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 33.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 67 L 0 67 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -33.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 33.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 292px; width: 970px; height: 67px; z-index: 102; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17643",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,292.0000000000006,970,67]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":292,"width":970,"height":67},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17643.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17644.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 26)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 486px; width: 970px; height: 52px; z-index: 103; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17644",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,486.00000000000057,970,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":486,"width":970,"height":52},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17641.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17645.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 60px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Subdivisions according to payroll employee groups or other similarities or administrative requirements. </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Lets you further determine what work schedules are allowed for what type of employee, what </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">wage types </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">an employee is allowed to </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">have,</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> and many other configuration for </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Tims</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> and Payroll management.</span></span><span style=\"font-size:11pt;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0);\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 299px; width: 808px; height: 60px; z-index: 104;",
	cssClasses:	"",
	htmlId:		"tobj17645",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,299,808,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":299,"width":808,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17646.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Employee Subgroup</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 299px; width: 134px; height: 42px; z-index: 105;",
	cssClasses:	"",
	htmlId:		"tobj17646",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,299,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":299,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17647.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);\"><span style=\"color: rgb(0, 0, 0);\">​</span></span><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Defines a primary</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> division </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">of your staff</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> and </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">serve as selection criteria for reporting</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> (1 Active, 2 Expatriate, 3 Transferred, 9 External employee).</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 248px; width: 808px; height: 41px; z-index: 106;",
	cssClasses:	"",
	htmlId:		"tobj17647",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,248,808,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":248,"width":808,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17648.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Employee group</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 248px; width: 134px; height: 40px; z-index: 107;",
	cssClasses:	"",
	htmlId:		"tobj17648",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,248,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":248,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17649.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 406px; width: 970px; height: 34px; z-index: 108; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17649",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,406.00000000000057,970,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":406,"width":970,"height":34},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17649.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17650.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Infotype</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 493px; width: 134px; height: 42px; z-index: 109;",
	cssClasses:	"",
	htmlId:		"tobj17650",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,493,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":493,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17651.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 60px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Infotypes</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> are the screens which store logically grouped information. By means of the </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">infotypes</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> it is possible to create, modify or delete master data.</span></span><span style=\"font-size: 11pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 493px; width: 808px; height: 60px; z-index: 110;",
	cssClasses:	"",
	htmlId:		"tobj17651",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,493,808,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":493,"width":808,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17652.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Job</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 544px; width: 134px; height: 42px; z-index: 111;",
	cssClasses:	"",
	htmlId:		"tobj17652",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,544,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":544,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17653.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">A specific job defines a functional classification of responsibilities, which are defined by a specific group of attributes, competencies, organizational assignments</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">typical of a workstation.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 544px; width: 808px; height: 40px; z-index: 112;",
	cssClasses:	"",
	htmlId:		"tobj17653",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,544,808,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":544,"width":808,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17654.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 24px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">An </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Infotype</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> groups</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">several fields. Each field contains concrete information of an employee.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 413px; width: 808px; height: 24px; z-index: 113;",
	cssClasses:	"",
	htmlId:		"tobj17654",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,413,808,24]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":413,"width":808,"height":24},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17655.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">Field</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 413px; width: 134px; height: 23px; z-index: 114;",
	cssClasses:	"",
	htmlId:		"tobj17655",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,413,134,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":413,"width":134,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17656.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 38px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 38px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><span style=\"font-family:Arial, sans-serif\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">It is </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">a group</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> of Infotypes which </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">guarantees that during the personnel action, all information needed for the business processes is stored.&nbsp;</span></span><span style=\"color: rgb(4, 4, 4); font-family: Arial, sans-serif; font-size: 11pt;\">&nbsp;&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 445px; width: 808px; height: 38px; z-index: 115;",
	cssClasses:	"",
	htmlId:		"tobj17656",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,445,808,38]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":445,"width":808,"height":38},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17657.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">Infogroup<span style=\"color: rgb(36, 101, 184);\">&nbsp;</span></span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 445px; width: 134px; height: 23px; z-index: 116;",
	cssClasses:	"",
	htmlId:		"tobj17657",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,445,134,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":445,"width":134,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17658.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"color: rgb(0, 0, 0);\">​</span></span><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Infotype</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> 0000 Actions</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">stores the status of an employee. The four standard options are 0 Withdrawn, 1 Inactive, 2 Retiree, and 3 Active.&nbsp;</span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 362px; width: 808px; height: 40px; z-index: 117;",
	cssClasses:	"",
	htmlId:		"tobj17658",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,362,808,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":362,"width":808,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17659.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Employment status</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 362px; width: 134px; height: 42px; z-index: 118;",
	cssClasses:	"",
	htmlId:		"tobj17659",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,362,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":362,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17660.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">It</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> i</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">s </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">an external object, not part of SAP OM</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> and </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">will be </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">created </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">in FICO modules.</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Every OU and</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> Position should have a Cost Centre assigned, it will </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">determine where should be recognized the costs incurred by this unit or that position</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">.</span> </span><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 196px; width: 808px; height: 40px; z-index: 119;",
	cssClasses:	"",
	htmlId:		"tobj17660",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,196,808,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":196,"width":808,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17661.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Cost centre</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 196px; width: 134px; height: 40px; z-index: 120;",
	cssClasses:	"",
	htmlId:		"tobj17661",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,196,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":196,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17662.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 61px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 61px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-size: 11pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"color: rgb(0, 0, 0);\"><span style=\"color: rgb(0, 0, 0);\">It is a sequence of </span><span style=\"color: rgb(0, 0, 0);\">infotypes</span><span style=\"color: rgb(0, 0, 0);\">. In the case of Personnel Administration Action, it represents a change in the employee life cycle (Hiring, Leaving, </span><span style=\"color: rgb(0, 0, 0);\">etc</span><span style=\"color: rgb(0, 0, 0);\">). In case Organizational </span><span style=\"color: rgb(0, 0, 0);\">Management, </span><span style=\"color: rgb(0, 0, 0);\">Action </span><span style=\"color: rgb(0, 0, 0);\">represents </span><span style=\"color: rgb(0, 0, 0);\">a creation or update of the object (</span><span style=\"color: rgb(0, 0, 0);\">org.unit</span><span style=\"color: rgb(0, 0, 0);\">, positions, job...)</span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 128px; width: 808px; height: 61px; z-index: 121;",
	cssClasses:	"",
	htmlId:		"tobj17662",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,128,808,61]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":128,"width":808,"height":61},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17663.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 35px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"font-size: 14pt; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(36, 101, 184);\">​Main terms (I)</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 55px; width: 519px; height: 35px; z-index: 122;",
	cssClasses:	"",
	htmlId:		"tobj17663",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[32,55,519,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":55,"width":519,"height":35},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17664.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 123;",
	cssClasses:	"",
	htmlId:		"tobj17664",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17665.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">​TERM</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 36px; top: 99px; width: 135px; height: 25px; z-index: 124;",
	cssClasses:	"",
	htmlId:		"tobj17665",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM"
	},
	objData:	{"a":[0,0,0,[36,99,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":99,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17666.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 99px; width: 519px; height: 28px; z-index: 125;",
	cssClasses:	"",
	htmlId:		"tobj17666",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[169,99,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":99,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton17667.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6110\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6110&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 126; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17667",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17634.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000036,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6110\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6110&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6112\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6112&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6114\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6114&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6116\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6116&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og17594.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17594",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape17595.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1008 0 L 1008 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -8.5px; width: 1009px; height: 671px; z-index: 127; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17595",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000002842,-8.499999999999432,1009,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":-8,"width":1009,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape17635.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17596.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6118\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6118&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 952px; top: 606px; width: 45px; height: 45px; z-index: 128; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17596",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17554.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17594.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[952,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":952,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6118\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6118&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6120\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6120&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6122\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6122&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6124\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6124&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17599.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6126\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6126&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 896px; top: 606px; width: 45px; height: 45px; z-index: 129; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj17599",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17634.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17594.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[896,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":896,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6126\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6126&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6128\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6128&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6130\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6130&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6132\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6132&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17602.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 30\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 15)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 15)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 93px; width: 970px; height: 30px; z-index: 130; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17602",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,93.0000000000006,970,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":93,"width":970,"height":30},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17640.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17603.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 26)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 152px; width: 970px; height: 52px; z-index: 131; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17603",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,152.0000000000006,970,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":152,"width":970,"height":52},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17641.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17604.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">Job family</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 128px; width: 134px; height: 40px; z-index: 132;",
	cssClasses:	"",
	htmlId:		"tobj17604",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,128,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":128,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17605.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 26)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 255px; width: 970px; height: 52px; z-index: 133; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17605",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,255.0000000000006,970,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":255,"width":970,"height":52},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17641.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17606.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 453px; width: 970px; height: 34px; z-index: 134; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17606",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,453.00000000000057,970,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":453,"width":970,"height":34},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17649.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17607.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 524px; width: 970px; height: 34px; z-index: 135; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17607",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,524.0000000000006,970,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":524,"width":970,"height":34},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17649.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17608.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Transaction</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 531px; width: 134px; height: 42px; z-index: 136;",
	cssClasses:	"",
	htmlId:		"tobj17608",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,531,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":531,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17609.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 29px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">It</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> is</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">the menu option which executes SAP programs. These programs allow the user to access the functionalities needed.</span></span><span style=\"font-size: 11pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 532px; width: 808px; height: 29px; z-index: 137;",
	cssClasses:	"",
	htmlId:		"tobj17609",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,532,808,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":532,"width":808,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17610.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 60px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">The organizational unit is the basis for the Organizational Planning. It shows the company units. These organizational units can be </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">departments, </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">groups...</span></span><span style=\"font-size: 11pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 262px; width: 808px; height: 60px; z-index: 138;",
	cssClasses:	"",
	htmlId:		"tobj17610",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,262,808,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":262,"width":808,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17611.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Organizational Unit</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 262px; width: 134px; height: 42px; z-index: 139;",
	cssClasses:	"",
	htmlId:		"tobj17611",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,262,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":262,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17612.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family:Arial, sans-serif\"><span style=\"font-size:11pt; font-family:arial; color:rgb(4, 4, 4)\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Different</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> e</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">lements of OM, which are independent</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">and maintained separately. Can be linked between them by using relationships.</span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 211px; width: 808px; height: 41px; z-index: 140;",
	cssClasses:	"",
	htmlId:		"tobj17612",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,211,808,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":211,"width":808,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17613.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Object</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 211px; width: 134px; height: 40px; z-index: 141;",
	cssClasses:	"",
	htmlId:		"tobj17613",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,211,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":211,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17614.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 48\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 24)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 48 L 0 48 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 24)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 357px; width: 970px; height: 48px; z-index: 142; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17614",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,357.00000000000057,970,48]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":357,"width":970,"height":48},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17614.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17615.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Relationship</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 460px; width: 134px; height: 42px; z-index: 143;",
	cssClasses:	"",
	htmlId:		"tobj17615",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,460,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":460,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17616.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 24px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial; color: rgb(4, 4, 4); font-size: 11pt;\">Specific link between the Organizational Management Objects.</span><span style=\"font-size: 11pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 460px; width: 808px; height: 24px; z-index: 144;",
	cssClasses:	"",
	htmlId:		"tobj17616",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,460,808,24]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":460,"width":808,"height":24},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17617.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Subtypes</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 497px; width: 134px; height: 42px; z-index: 145;",
	cssClasses:	"",
	htmlId:		"tobj17617",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,497,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":497,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17618.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 27px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"color: rgb(0, 0, 0);\">​</span></span><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(4, 4, 4);\">Subdivisions of </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(4, 4, 4);\">infotypes</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(4, 4, 4);\">.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 497px; width: 808px; height: 27px; z-index: 146;",
	cssClasses:	"",
	htmlId:		"tobj17618",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,497,808,27]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":497,"width":808,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17619.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 54px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family:Arial, sans-serif\"><span style=\"font-size:11pt; font-family:arial; color:rgb(4, 4, 4)\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Sub groupings of Personnel areas, with</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> different codes depending of type of business (Corporate, Division, Regional, Plant, BU, Tooling).</span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 364px; width: 808px; height: 54px; z-index: 147;",
	cssClasses:	"",
	htmlId:		"tobj17619",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,364,808,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":364,"width":808,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17620.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 36px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">Personnel </span></strong></p>\n\n<p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">Subarea</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 364px; width: 134px; height: 36px; z-index: 148;",
	cssClasses:	"",
	htmlId:		"tobj17620",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,364,134,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":364,"width":134,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17621.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 38px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 38px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">A position represents a job which can be </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">occupied by an employee </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">of the organizational unit and includes specific responsibilities, based on the general characteristics described by the job assigned to it.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 410px; width: 808px; height: 38px; z-index: 149;",
	cssClasses:	"",
	htmlId:		"tobj17621",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,410,808,38]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":410,"width":808,"height":38},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17622.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">Position<span style=\"color: rgb(36, 101, 184);\">&nbsp;</span></span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 410px; width: 134px; height: 23px; z-index: 150;",
	cssClasses:	"",
	htmlId:		"tobj17622",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,410,134,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":410,"width":134,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17623.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">C</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">odes to divide the company into subunits according to physical allocation </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">or</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">other classification (currently starting to use </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">the management company).</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 313px; width: 808px; height: 40px; z-index: 151;",
	cssClasses:	"",
	htmlId:		"tobj17623",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,313,808,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":313,"width":808,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17624.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Personnel area</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 313px; width: 134px; height: 42px; z-index: 152;",
	cssClasses:	"",
	htmlId:		"tobj17624",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,313,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":313,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17625.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Through this function, </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">values available are shown, and also sometimes</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">the </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">system </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">allows</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> searches and </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">proposes </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">the results of the search according to the value indicated.</span></span><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 159px; width: 808px; height: 40px; z-index: 153;",
	cssClasses:	"",
	htmlId:		"tobj17625",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,159,808,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":159,"width":808,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17626.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">Match code or Search Help</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 159px; width: 134px; height: 42px; z-index: 154;",
	cssClasses:	"",
	htmlId:		"tobj17626",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,159,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":159,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17627.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 808px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 808px; min-height: 25px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><span style=\"font-family: Arial; color: rgb(41, 42, 45); font-size: 11pt;\">Jobs are grouped by Family Jobs when they have similar characteristics or they are into the same area. </span><span style=\"color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: 11pt;\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 128px; width: 808px; height: 25px; z-index: 155;",
	cssClasses:	"",
	htmlId:		"tobj17627",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,128,808,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":128,"width":808,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17628.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 35px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"font-size: 14pt; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(36, 101, 184);\">​Main terms (II)</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 55px; width: 519px; height: 35px; z-index: 156;",
	cssClasses:	"",
	htmlId:		"tobj17628",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[32,55,519,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":55,"width":519,"height":35},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17629.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 157;",
	cssClasses:	"",
	htmlId:		"tobj17629",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17630.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">​TERM</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 36px; top: 99px; width: 135px; height: 25px; z-index: 158;",
	cssClasses:	"",
	htmlId:		"tobj17630",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM"
	},
	objData:	{"a":[0,0,0,[36,99,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":99,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17631.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 99px; width: 519px; height: 28px; z-index: 159;",
	cssClasses:	"",
	htmlId:		"tobj17631",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[169,99,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":99,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton17632.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6134\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6134&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 160; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17632",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17594.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000036,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6134\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6134&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6136\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6136&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6138\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6138&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6140\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6140&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og17554.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17554",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape17555.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1008 0 L 1008 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -8.5px; width: 1009px; height: 671px; z-index: 161; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17555",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000002842,-8.499999999999432,1009,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":-8,"width":1009,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape17635.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17556.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6142\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6142&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 952px; top: 606px; width: 45px; height: 45px; z-index: 162; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17556",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17502.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17554.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[952,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":952,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6142\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6142&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6144\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6144&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6146\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6146&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6148\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6148&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17559.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6150\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6150&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 896px; top: 606px; width: 45px; height: 45px; z-index: 163; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj17559",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17594.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17554.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[896,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":896,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6150\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6150&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6152\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6152&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6154\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6154&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6156\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6156&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17562.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 30\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 15)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 15)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 93px; width: 970px; height: 30px; z-index: 164; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17562",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,93.0000000000006,970,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":93,"width":970,"height":30},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17640.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17563.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 152px; width: 970px; height: 34px; z-index: 165; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17563",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,152.0000000000006,970,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":152,"width":970,"height":34},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17649.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17564.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">PA20</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 128px; width: 134px; height: 40px; z-index: 166;",
	cssClasses:	"",
	htmlId:		"tobj17564",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,128,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":128,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17565.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 66\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 33)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 66 L 0 66 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 33)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 216px; width: 970px; height: 66px; z-index: 167; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17565",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,216.0000000000006,970,66]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":216,"width":970,"height":66},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17565.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17566.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 101px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 101px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">Organizational</span></p>\n\n<p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">Management</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 223px; width: 101px; height: 40px; z-index: 168;",
	cssClasses:	"",
	htmlId:		"tobj17566",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,223,101,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":223,"width":101,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17567.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">PP01</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 223px; width: 134px; height: 42px; z-index: 169;",
	cssClasses:	"",
	htmlId:		"tobj17567",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,223,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":223,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17568.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 169px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 169px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">Personnel Administration</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 191px; width: 169px; height: 41px; z-index: 170;",
	cssClasses:	"",
	htmlId:		"tobj17568",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,191,169,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":191,"width":169,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17569.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">PA40</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 191px; width: 134px; height: 40px; z-index: 171;",
	cssClasses:	"",
	htmlId:		"tobj17569",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,191,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":191,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17570.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 52\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 26)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 52 L 0 52 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -26) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 26)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 350px; width: 970px; height: 52px; z-index: 172; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17570",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,350.00000000000057,970,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":350,"width":970,"height":52},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17641.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17571.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 36px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">Organizational</span></p>\n\n<p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">Management</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 357px; width: 102px; height: 36px; z-index: 173;",
	cssClasses:	"",
	htmlId:		"tobj17571",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,357,102,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":357,"width":102,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17572.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 36px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">PP03</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 357px; width: 134px; height: 36px; z-index: 174;",
	cssClasses:	"",
	htmlId:		"tobj17572",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,357,134,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":357,"width":134,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17573.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 684px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 684px; min-height: 24px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial; color: rgb(0, 0, 0); font-size: 11pt;\">Display HR Master Data.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 347px; top: 128px; width: 684px; height: 24px; z-index: 175;",
	cssClasses:	"",
	htmlId:		"tobj17573",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[347,128,684,24]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":347,"y":128,"width":684,"height":24},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17574.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 684px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 684px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial; color: rgb(41, 42, 45); font-size: 11pt;\">Maintain HR Master Data. To update or make changes to an employee´s master data.</span><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 347px; top: 159px; width: 684px; height: 40px; z-index: 176;",
	cssClasses:	"",
	htmlId:		"tobj17574",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[347,159,684,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":347,"y":159,"width":684,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17575.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 677px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 677px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial, sans-serif; color: rgb(4, 4, 4);\">Execute</span> <span style=\"font-size: 11pt; font-family: Arial, sans-serif; color: rgb(4, 4, 4);\">Personnel</span> <span style=\"font-size: 11pt; font-family: Arial, sans-serif; color: rgb(4, 4, 4);\">Actions.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 347px; top: 191px; width: 677px; height: 41px; z-index: 177;",
	cssClasses:	"",
	htmlId:		"tobj17575",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[347,191,677,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":347,"y":191,"width":677,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17576.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 627px; min-height: 59px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 627px; min-height: 59px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">This transaction is used to create and modify all different </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Infotypes</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> associated with objects. The difference between the transaction PP03 and PP01 is that with PP01 it is possible selecting the </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">infotype</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> you wish to create or update directly in the first screen</span></span><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 220px; width: 627px; height: 59px; z-index: 178;",
	cssClasses:	"",
	htmlId:		"tobj17576",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,220,627,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":220,"width":627,"height":59},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17577.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 625px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 625px; min-height: 54px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">This transaction is used to create and modify all different </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Infotypes</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> associated with objects. The difference between the transaction PP03 and PP02 is that with PP02 it is possible selecting the </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">infotype</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> you wish to create or update directly in the first screen</span></span><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 288px; width: 625px; height: 54px; z-index: 179;",
	cssClasses:	"",
	htmlId:		"tobj17577",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,288,625,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":288,"width":625,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17578.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 624px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 624px; min-height: 36px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">This transaction is used to execute all different actions related with each Organizational management objects: objects creation and objects modification</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> (cost centre update)</span></span><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 357px; width: 624px; height: 36px; z-index: 180;",
	cssClasses:	"",
	htmlId:		"tobj17578",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,357,624,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":357,"width":624,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17579.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 36px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">PPOSE</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 407px; width: 134px; height: 36px; z-index: 181;",
	cssClasses:	"",
	htmlId:		"tobj17579",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,407,134,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":407,"width":134,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17580.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 36px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">Organizational</span></p>\n\n<p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">Management</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 407px; width: 102px; height: 36px; z-index: 182;",
	cssClasses:	"",
	htmlId:		"tobj17580",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,407,102,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":407,"width":102,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17581.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 624px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 624px; min-height: 54px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial; color: rgb(41, 42, 45); font-size: 11pt;\">This transaction is used to review your organizational structure for every organizational unit and details of every organization unit available. PPOSE allows just to Display objects and no changes can be made</span><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 407px; width: 624px; height: 54px; z-index: 183;",
	cssClasses:	"",
	htmlId:		"tobj17581",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,407,624,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":407,"width":624,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17582.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 106px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 106px; min-height: 40px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">Organizational</span></p>\n\n<p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 11pt;\">Management</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 288px; width: 106px; height: 40px; z-index: 184;",
	cssClasses:	"",
	htmlId:		"tobj17582",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,288,106,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":288,"width":106,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17583.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">PP02</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 288px; width: 134px; height: 42px; z-index: 185;",
	cssClasses:	"",
	htmlId:		"tobj17583",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,288,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":288,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17584.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 164px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 164px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">Personnel&nbsp;Administration</span><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 159px; width: 164px; height: 40px; z-index: 186;",
	cssClasses:	"",
	htmlId:		"tobj17584",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,159,164,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":159,"width":164,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17585.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">PA30</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 159px; width: 134px; height: 42px; z-index: 187;",
	cssClasses:	"",
	htmlId:		"tobj17585",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,159,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":159,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17586.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 167px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 167px; min-height: 36px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: 11pt;\">Personnel&nbsp;Administration</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 128px; width: 167px; height: 36px; z-index: 188;",
	cssClasses:	"",
	htmlId:		"tobj17586",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[169,128,167,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":128,"width":167,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17587.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 35px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"font-size: 14pt; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(36, 101, 184);\">​Transaction list</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 55px; width: 519px; height: 35px; z-index: 189;",
	cssClasses:	"",
	htmlId:		"tobj17587",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[32,55,519,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":55,"width":519,"height":35},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17588.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 190;",
	cssClasses:	"",
	htmlId:		"tobj17588",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17589.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">​TRANSACTION</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 36px; top: 99px; width: 135px; height: 25px; z-index: 191;",
	cssClasses:	"",
	htmlId:		"tobj17589",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM"
	},
	objData:	{"a":[0,0,0,[36,99,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":99,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17590.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: arial,sans-serif; font-size: 11pt;\">​DESCRIPTION</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 347px; top: 99px; width: 519px; height: 28px; z-index: 192;",
	cssClasses:	"",
	htmlId:		"tobj17590",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[347,99,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":347,"y":99,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17591.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 67px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 67px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">PA/OM</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 169px; top: 99px; width: 67px; height: 28px; z-index: 193;",
	cssClasses:	"",
	htmlId:		"tobj17591",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[169,99,67,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":169,"y":99,"width":67,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton17592.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6158\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6158&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 194; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17592",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17554.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000036,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6158\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6158&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6160\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6160&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6162\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6162&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6164\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6164&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og17502.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17502",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape17503.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1008 0 L 1008 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -8.5px; width: 1009px; height: 671px; z-index: 195; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17503",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000002842,-8.499999999999432,1009,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":-8,"width":1009,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape17635.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17504.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6166\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6166&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 952px; top: 606px; width: 45px; height: 45px; z-index: 196; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17504",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17469.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17502.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[952,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":952,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6166\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6166&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6168\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6168&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6170\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6170&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6172\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6172&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17507.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6174\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6174&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 896px; top: 606px; width: 45px; height: 45px; z-index: 197; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj17507",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17554.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17502.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[896,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":896,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6174\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6174&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6176\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6176&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6178\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6178&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6180\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6180&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17510.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 30\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 15)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 15)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 93px; width: 970px; height: 30px; z-index: 198; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17510",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,93.0000000000006,970,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":93,"width":970,"height":30},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17640.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17511.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 25)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -25) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 152px; width: 970px; height: 50px; z-index: 199; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17511",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,152.0000000000006,970,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":152,"width":970,"height":50},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17511.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17512.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 22px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">0000</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 128px; width: 134px; height: 22px; z-index: 200;",
	cssClasses:	"",
	htmlId:		"tobj17512",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,128,134,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":128,"width":134,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17513.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 235px; width: 970px; height: 34px; z-index: 201; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17513",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,235.0000000000006,970,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":235,"width":970,"height":34},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17649.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17514.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 101px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 101px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Addresses</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 242px; width: 101px; height: 40px; z-index: 202;",
	cssClasses:	"",
	htmlId:		"tobj17514",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,242,101,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":242,"width":101,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17515.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0006</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 242px; width: 134px; height: 42px; z-index: 203;",
	cssClasses:	"",
	htmlId:		"tobj17515",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,242,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":242,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17516.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 169px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 169px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">Personal Data</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 210px; width: 169px; height: 41px; z-index: 204;",
	cssClasses:	"",
	htmlId:		"tobj17516",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,210,169,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":210,"width":169,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17517.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0002</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 210px; width: 134px; height: 40px; z-index: 205;",
	cssClasses:	"",
	htmlId:		"tobj17517",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,210,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":210,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17518.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 320px; width: 970px; height: 34px; z-index: 206; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17518",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,320.00000000000057,970,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":320,"width":970,"height":34},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17649.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17519.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 89\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 44.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 89 L 0 89 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -44.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 44.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 473px; width: 970px; height: 89px; z-index: 207; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17519",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,473.0000000000006,970,89]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":473,"width":970,"height":89},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17519.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17521.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 25)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -25) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 385px; width: 970px; height: 50px; z-index: 208; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17521",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,385.00000000000057,970,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":385,"width":970,"height":50},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17511.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17522.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 36px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Bank Data</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 327px; width: 102px; height: 36px; z-index: 209;",
	cssClasses:	"",
	htmlId:		"tobj17522",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,327,102,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":327,"width":102,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17523.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 36px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">0</span></strong><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">009</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 327px; width: 134px; height: 36px; z-index: 210;",
	cssClasses:	"",
	htmlId:		"tobj17523",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,327,134,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":327,"width":134,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17524.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 684px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 684px; min-height: 24px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Each action represents a change in the employee life cycle. (</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">I.e</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> Hiring, Leaving, Contract Change...)</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 337px; top: 128px; width: 684px; height: 24px; z-index: 211;",
	cssClasses:	"",
	htmlId:		"tobj17524",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[337,128,684,24]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":337,"y":128,"width":684,"height":24},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17525.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 640px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 640px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">This </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Infotypes</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> deals with the incorporation of the employee into the organizational structure and the personnel structure. </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">It</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> shows </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">the</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> position, </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">organizational</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">unit</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> and </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">job</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">.</span></span><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 337px; top: 159px; width: 640px; height: 40px; z-index: 212;",
	cssClasses:	"",
	htmlId:		"tobj17525",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[337,159,640,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":337,"y":159,"width":640,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17526.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 677px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 677px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial; color: rgb(4, 4, 4); font-size: 11pt;\">Stores the employee data for its identification.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 337px; top: 210px; width: 677px; height: 41px; z-index: 213;",
	cssClasses:	"",
	htmlId:		"tobj17526",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[337,210,677,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":337,"y":210,"width":677,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17527.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 36px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">0</span></strong><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">041</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 480px; width: 134px; height: 36px; z-index: 214;",
	cssClasses:	"",
	htmlId:		"tobj17527",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,480,134,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":480,"width":134,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17528.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 168px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 168px; min-height: 36px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Date Specifications</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 480px; width: 168px; height: 36px; z-index: 215;",
	cssClasses:	"",
	htmlId:		"tobj17528",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,480,168,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":480,"width":168,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17529.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 624px; min-height: 92px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 624px; min-height: 92px;\"><p style=\"text-align: justify; margin-bottom: 0pt; margin-top: 0pt;\"><span style=\"font-family: Arial; color: rgb(41, 42, 45); font-size: 11pt;\">First Hiring date corresponds to the date when the employee is hired for the first time in Gestamp.</span></p>\n\n<p style=\"text-align: justify; margin-bottom: 0pt; margin-top: 0pt;\"><span style=\"font-family: Arial; color: rgb(41, 42, 45); font-size: 11pt;\">Seniority date corresponds to the years working recognized for the company that concern to calculate the payroll.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 480px; width: 624px; height: 92px; z-index: 216;",
	cssClasses:	"",
	htmlId:		"tobj17529",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,480,624,92]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":480,"width":624,"height":92},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17530.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 106px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 106px; min-height: 40px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial; font-size: 11pt; color: rgb(41, 42, 45);\">Education</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 446px; width: 106px; height: 40px; z-index: 217;",
	cssClasses:	"",
	htmlId:		"tobj17530",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,446,106,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":446,"width":106,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17531.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0022</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 445px; width: 134px; height: 42px; z-index: 218;",
	cssClasses:	"",
	htmlId:		"tobj17531",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,445,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":445,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17532.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 625px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 625px; min-height: 27px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">In this </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">infotype</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> information about employee, education is stored.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 445px; width: 625px; height: 27px; z-index: 219;",
	cssClasses:	"",
	htmlId:		"tobj17532",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,445,625,27]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":445,"width":625,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17533.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 643px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 643px; min-height: 40px;\"><p style=\"line-height: 1; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 14pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">In this </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">infotype</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">, is stored the data concerning the employee’s family members and other related persons.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 392px; width: 643px; height: 40px; z-index: 220;",
	cssClasses:	"",
	htmlId:		"tobj17533",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,392,643,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":392,"width":643,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17534.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 169px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 169px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(0, 0, 0); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Contract</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Elements</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 360px; width: 169px; height: 41px; z-index: 221;",
	cssClasses:	"",
	htmlId:		"tobj17534",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,360,169,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":360,"width":169,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17535.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0016</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 360px; width: 134px; height: 40px; z-index: 222;",
	cssClasses:	"",
	htmlId:		"tobj17535",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,360,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":360,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17536.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 194px; min-height: 46px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 194px; min-height: 46px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(4, 4, 4); font-size: 14pt;\"><span style=\"font-size: 11pt; font-family: Arial, sans-serif; color: rgb(41, 42, 45);\">Family</span> <span style=\"font-size: 11pt; font-family: Arial, sans-serif; color: rgb(41, 42, 45);\">Member</span><span style=\"font-size: 11pt; font-family: Arial, sans-serif; color: rgb(41, 42, 45);\">/</span><span style=\"font-size: 11pt; font-family: Arial, sans-serif; color: rgb(41, 42, 45);\">Dependents</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 389px; width: 194px; height: 46px; z-index: 223;",
	cssClasses:	"",
	htmlId:		"tobj17536",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,389,194,46]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":389,"width":194,"height":46},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17537.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0021</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 392px; width: 134px; height: 42px; z-index: 224;",
	cssClasses:	"",
	htmlId:		"tobj17537",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,392,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":392,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17538.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 677px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 677px; min-height: 25px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">In the Contract Elements, </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">infotype</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> is stored the data related to the employee’s contract of employment.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 360px; width: 677px; height: 25px; z-index: 225;",
	cssClasses:	"",
	htmlId:		"tobj17538",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,360,677,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":360,"width":677,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17539.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 627px; min-height: 59px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 627px; min-height: 59px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Employees addresses data.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 242px; width: 627px; height: 59px; z-index: 226;",
	cssClasses:	"",
	htmlId:		"tobj17539",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,242,627,59]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":242,"width":627,"height":59},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17540.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 625px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 625px; min-height: 54px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial; color: rgb(41, 42, 45); font-size: 11pt;\">It stores the theoretical remuneration of the employee and the theoretical costs of the employee to the company.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 277px; width: 625px; height: 54px; z-index: 227;",
	cssClasses:	"",
	htmlId:		"tobj17540",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,277,625,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":277,"width":625,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17541.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 624px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 624px; min-height: 23px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Bank details</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 327px; width: 624px; height: 23px; z-index: 228;",
	cssClasses:	"",
	htmlId:		"tobj17541",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,327,624,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":327,"width":624,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17542.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 106px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 106px; min-height: 40px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Basic Pay</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 277px; width: 106px; height: 40px; z-index: 229;",
	cssClasses:	"",
	htmlId:		"tobj17542",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,277,106,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":277,"width":106,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17543.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0008</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 277px; width: 134px; height: 42px; z-index: 230;",
	cssClasses:	"",
	htmlId:		"tobj17543",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,277,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":277,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17544.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 185px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 185px; min-height: 29px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">Organizational Assignment</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 159px; width: 185px; height: 29px; z-index: 231;",
	cssClasses:	"",
	htmlId:		"tobj17544",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,159,185,29]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":159,"width":185,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17545.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 27px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0001</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 159px; width: 134px; height: 27px; z-index: 232;",
	cssClasses:	"",
	htmlId:		"tobj17545",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,159,134,27]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":159,"width":134,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17546.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 167px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 167px; min-height: 36px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: 11pt;\">Actions</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 128px; width: 167px; height: 36px; z-index: 233;",
	cssClasses:	"",
	htmlId:		"tobj17546",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,128,167,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":128,"width":167,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17547.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 35px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"font-size: 14pt; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(36, 101, 184);\">Global Infotypes for Personnel Administration (I)</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 55px; width: 519px; height: 35px; z-index: 234;",
	cssClasses:	"",
	htmlId:		"tobj17547",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[32,55,519,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":55,"width":519,"height":35},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17548.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 235;",
	cssClasses:	"",
	htmlId:		"tobj17548",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17549.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(255, 255, 255);\">INFOTYPE</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 36px; top: 99px; width: 135px; height: 25px; z-index: 236;",
	cssClasses:	"",
	htmlId:		"tobj17549",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM"
	},
	objData:	{"a":[0,0,0,[36,99,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":99,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17550.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">​COMMENTS</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 337px; top: 99px; width: 519px; height: 28px; z-index: 237;",
	cssClasses:	"",
	htmlId:		"tobj17550",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[337,99,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":337,"y":99,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17551.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 123px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 123px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">DESCRIPTION</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 99px; width: 123px; height: 28px; z-index: 238;",
	cssClasses:	"",
	htmlId:		"tobj17551",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[139,99,123,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":99,"width":123,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton17552.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6182\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6182&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 239; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17552",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17502.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000036,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6182\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6182&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6184\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6184&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6186\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6186&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6188\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6188&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og17469.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17469",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape17470.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1008 0 L 1008 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -8.5px; width: 1009px; height: 671px; z-index: 240; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17470",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000002842,-8.499999999999432,1009,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":-8,"width":1009,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape17635.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17471.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6190\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6190&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 952px; top: 606px; width: 45px; height: 45px; z-index: 241; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17471",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17416.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17469.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[952,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":952,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6190\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6190&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6192\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6192&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6194\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6194&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6196\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6196&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Next","titleValue":"Next","fallbackImg":"<img alt=\"Next\" title=\"Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17474.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6198\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6198&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 896px; top: 606px; width: 45px; height: 45px; z-index: 242; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj17474",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17502.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17469.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[896,606,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":896,"y":606,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6198\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6198&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6200\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6200&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6202\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6202&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6204\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6204&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17477.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 30\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 15)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 15)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 93px; width: 970px; height: 30px; z-index: 243; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17477",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,93.0000000000006,970,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":93,"width":970,"height":30},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17640.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17478.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 50\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 25)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 50 L 0 50 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -25) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 25)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 188px; width: 970px; height: 50px; z-index: 244; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17478",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,188.0000000000006,970,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":188,"width":970,"height":50},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17511.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17479.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 22px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">0105</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 128px; width: 134px; height: 22px; z-index: 245;",
	cssClasses:	"",
	htmlId:		"tobj17479",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,128,134,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":128,"width":134,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape17480.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 48\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 24)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 48 L 0 48 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 24)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 289px; width: 970px; height: 48px; z-index: 246; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17480",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,289.00000000000057,970,48]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":289,"width":970,"height":48},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17614.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17481.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 143px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 143px; min-height: 54px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Time Management Information</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 295px; width: 143px; height: 54px; z-index: 247;",
	cssClasses:	"",
	htmlId:		"tobj17481",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,295,143,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":295,"width":143,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17482.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">9001</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 295px; width: 134px; height: 42px; z-index: 248;",
	cssClasses:	"",
	htmlId:		"tobj17482",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,295,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":295,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17483.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 169px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 169px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">Personal ID</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 246px; width: 169px; height: 41px; z-index: 249;",
	cssClasses:	"",
	htmlId:		"tobj17483",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,246,169,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":246,"width":169,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17484.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 40px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0709</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 246px; width: 134px; height: 40px; z-index: 250;",
	cssClasses:	"",
	htmlId:		"tobj17484",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,246,134,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":246,"width":134,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17485.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 642px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 642px; min-height: 60px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-family: Arial; color: rgb(41, 42, 45);\">Employee communication IDs are stored in this Infotype</span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(41, 42, 45);\"><span style=\"font-size:11pt;\">: System SAP user, Company Telephone, Company Mail and in this subtype, it is stored the Payroll System Identifier which links the local system identifier with the SAP Person ID.</span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 337px; top: 128px; width: 642px; height: 60px; z-index: 251;",
	cssClasses:	"",
	htmlId:		"tobj17485",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[337,128,642,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":337,"y":128,"width":642,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17486.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 640px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 640px; min-height: 40px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial; color: rgb(41, 42, 45); font-size: 11pt;\">Used to store the information of destination for transferred employees, who do not legally change country destination and who are not expatriates.</span><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 337px; top: 195px; width: 640px; height: 40px; z-index: 252;",
	cssClasses:	"",
	htmlId:		"tobj17486",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[337,195,640,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":337,"y":195,"width":640,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17487.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 637px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 637px; min-height: 41px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">This infotype will be used to store the information of employees who have more than one personnel assignment in different countries</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">. Don’t make any changes.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 337px; top: 246px; width: 637px; height: 41px; z-index: 253;",
	cssClasses:	"",
	htmlId:		"tobj17487",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[337,246,637,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":337,"y":246,"width":637,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17488.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 627px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 627px; min-height: 25px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 14pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">The working time, absenteeism and overtime hours. </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Updated</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">by</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">the</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> interface.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 292px; width: 627px; height: 25px; z-index: 254;",
	cssClasses:	"",
	htmlId:		"tobj17488",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,292,627,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":292,"width":627,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17489.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 625px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 625px; min-height: 54px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: arial; color: rgb(4, 4, 4); font-size: 11pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Received by interface file from Payroll Systems to SAP Personnel Administration</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">. </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">Updated</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">by</span> <span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\">the</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(41, 42, 45);\"> interface.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 335px; top: 343px; width: 625px; height: 54px; z-index: 255;",
	cssClasses:	"",
	htmlId:		"tobj17489",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[335,343,625,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":343,"width":625,"height":54},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17490.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 128px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 128px; min-height: 25px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Payroll Information</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 343px; width: 128px; height: 25px; z-index: 256;",
	cssClasses:	"",
	htmlId:		"tobj17490",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,343,128,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":343,"width":128,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17491.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 42px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">9002</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 343px; width: 134px; height: 42px; z-index: 257;",
	cssClasses:	"",
	htmlId:		"tobj17491",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,343,134,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":343,"width":134,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17492.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 185px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 185px; min-height: 36px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">External Organizational Assignment</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 195px; width: 185px; height: 36px; z-index: 258;",
	cssClasses:	"",
	htmlId:		"tobj17492",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,195,185,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":195,"width":185,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17493.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 134px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 134px; min-height: 27px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">0395</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 195px; width: 134px; height: 27px; z-index: 259;",
	cssClasses:	"",
	htmlId:		"tobj17493",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,195,134,27]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":195,"width":134,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17494.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 167px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 167px; min-height: 36px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: 11pt;\">Communications</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 128px; width: 167px; height: 36px; z-index: 260;",
	cssClasses:	"",
	htmlId:		"tobj17494",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,128,167,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":128,"width":167,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17495.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 35px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"font-size: 14pt; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(36, 101, 184);\">Global Infotypes for Personnel Administration (II)</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 55px; width: 519px; height: 35px; z-index: 261;",
	cssClasses:	"",
	htmlId:		"tobj17495",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[32,55,519,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":55,"width":519,"height":35},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17496.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 6px; width: 234px; height: 52px; z-index: 262;",
	cssClasses:	"",
	htmlId:		"tobj17496",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,6,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":6,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17497.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(255, 255, 255);\">INFOTYPE</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 36px; top: 99px; width: 135px; height: 25px; z-index: 263;",
	cssClasses:	"",
	htmlId:		"tobj17497",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM"
	},
	objData:	{"a":[0,0,0,[36,99,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":99,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17498.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">​COMMENTS</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 337px; top: 99px; width: 519px; height: 28px; z-index: 264;",
	cssClasses:	"",
	htmlId:		"tobj17498",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[337,99,519,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":337,"y":99,"width":519,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17499.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 123px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 123px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">DESCRIPTION</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 99px; width: 123px; height: 28px; z-index: 265;",
	cssClasses:	"",
	htmlId:		"tobj17499",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[139,99,123,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":99,"width":123,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton17500.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6206\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6206&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 14px; width: 45px; height: 45px; z-index: 266; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17500",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17469.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,14.000000000000036,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":14,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6206\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6206&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6208\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6208&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6210\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6210&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6212\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6212&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og17416.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17416",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape17417.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 671\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 335.5)\" style=\"\">\n	<path d=\"M 0 0 L 1008 0 L 1008 670 L 0 670 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504, -335) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 335.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -0.5px; top: -7.5px; width: 1009px; height: 671px; z-index: 267; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17417",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu_fondo"
	},
	objData:	{"a":[0,0,0,[-0.5000000000002842,-7.499999999999432,1009,671]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":-7,"width":1009,"height":671},"btnState":"disabled","altValue":"menu_fondo","titleValue":"menu_fondo","fallbackImg":"<img src=\"images/desktop_shape17635.png\" alt=\"menu_fondo\" title=\"menu_fondo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton17418.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6214\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6214&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 896px; top: 607px; width: 45px; height: 45px; z-index: 268; cursor: pointer; transform: rotate(180deg); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg) ; -webkit-transform:rotate(180deg) ; -o-transform:rotate(180deg) ; -ms-transform:rotate(180deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	htmlId:		"tobj17418",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Previous",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17469.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17416.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[896,607,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":896,"y":607,"width":45,"height":45},"imgDataNormal":"images/desktop_shape17636.png","imgDataOver":"images/desktop_shape17636_over.png","imgDataDown":"images/desktop_shape17636_down.png","imgDataDisabled":"images/desktop_shape17636_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6214\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6214&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6216\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6216&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6218\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_press.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6218&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6220\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/forward_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6220&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Previous","titleValue":"Previous","fallbackImg":"<img alt=\"Previous\" title=\"Previous\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image17421.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj17421Img\" src=\"images/forward_dis.png\" alt=\"forward_dis\" title=\"forward_dis\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 43px; height: 43px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 953px; top: 607px; width: 43px; height: 43px; z-index: 269;",
	cssClasses:	"",
	htmlId:		"tobj17421",
	bInsAnc:	0,
	cwObj:		{
		"name":	"forward_dis"
	},
	objData:	{"a":[0,256,0,[953,607,43,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":953,"y":607,"width":43,"height":43}}
};
shape17422.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 30\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 15)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 15)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 94px; width: 970px; height: 30px; z-index: 270; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17422",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,94.0000000000006,970,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":94,"width":970,"height":30},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17640.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17423.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(138, 179, 238); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 125px; width: 970px; height: 35px; z-index: 271; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17423",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,125.00000000000058,970,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":125,"width":970,"height":35},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17423.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.7;\">"}
};
shape17424.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 377px; width: 970px; height: 35px; z-index: 272; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17424",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,377.00000000000057,970,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":377,"width":970,"height":35},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17424.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17425.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(138, 179, 238); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 341px; width: 970px; height: 35px; z-index: 273; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17425",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,341.00000000000057,970,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":341,"width":970,"height":35},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17423.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.7;\">"}
};
shape17426.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 305px; width: 970px; height: 35px; z-index: 274; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17426",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,305.00000000000057,970,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":305,"width":970,"height":35},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17424.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17427.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(138, 179, 238); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 269px; width: 970px; height: 35px; z-index: 275; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17427",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,269.00000000000057,970,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":269,"width":970,"height":35},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17423.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.7;\">"}
};
shape17428.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 233px; width: 970px; height: 35px; z-index: 276; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17428",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,233.0000000000006,970,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":233,"width":970,"height":35},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17424.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17429.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(138, 179, 238); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:0.7;filter:alpha(opacity=70);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 197px; width: 970px; height: 35px; z-index: 277; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17429",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,197.0000000000006,970,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":197,"width":970,"height":35},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17423.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.7;\">"}
};
shape17430.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 970 0 L 970 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(236, 243, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 17.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,36,61); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#00243d\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 20px; top: 161px; width: 970px; height: 35px; z-index: 278; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17430",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 2"
	},
	objData:	{"a":[0,0,0,[20,161.0000000000006,970,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":20,"y":161,"width":970,"height":35},"btnState":"disabled","altValue":"Rectangle 2","titleValue":"Rectangle 2","fallbackImg":"<img src=\"images/desktop_shape17424.png\" alt=\"Rectangle 2\" title=\"Rectangle 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17431.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 327\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 163.5)\" style=\"\">\n	<path d=\"M 0 0 L 0 326\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(0, -163) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 163.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 126.5px; top: 92.5px; width: 1px; height: 327px; z-index: 279; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	htmlId:		"tobj17431",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[0,0,0,[126.4999999999998,92.5,1,327]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":127,"y":93,"width":1,"height":327},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17431.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17432.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 327\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 163.5)\" style=\"\">\n	<path d=\"M 0 0 L 0 326\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(0, -163) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 163.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 302.5px; top: 92.5px; width: 1px; height: 327px; z-index: 280; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	htmlId:		"tobj17432",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[0,0,0,[302.4999999999998,92.5,1,327]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":303,"y":93,"width":1,"height":327},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17431.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17433.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 327\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 163.5)\" style=\"\">\n	<path d=\"M 0 0 L 0 326\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(0, -163) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 163.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 894.5px; top: 92.5px; width: 1px; height: 327px; z-index: 281; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	htmlId:		"tobj17433",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[0,0,0,[894.4999999999998,92.5,1,327]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":895,"y":93,"width":1,"height":327},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17431.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17434.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 327\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 163.5)\" style=\"\">\n	<path d=\"M 0 0 L 0 326\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(0, -163) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 163.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 741.5px; top: 92.5px; width: 1px; height: 327px; z-index: 282; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	htmlId:		"tobj17434",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[0,0,0,[741.4999999999998,92.5,1,327]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":742,"y":93,"width":1,"height":327},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17431.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17435.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 327\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 163.5)\" style=\"\">\n	<path d=\"M 0 0 L 0 326\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(0, -163) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 163.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 607.5px; top: 92.5px; width: 1px; height: 327px; z-index: 283; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	htmlId:		"tobj17435",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[0,0,0,[607.4999999999998,92.5,1,327]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":608,"y":93,"width":1,"height":327},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17431.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17436.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 327\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 163.5)\" style=\"\">\n	<path d=\"M 0 0 L 0 326\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(0, -163) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 163.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 402.5px; top: 92.5px; width: 1px; height: 327px; z-index: 284; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	htmlId:		"tobj17436",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[0,0,0,[402.4999999999998,92.5,1,327]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":93,"width":1,"height":327},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17431.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape17437.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 327\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 163.5)\" style=\"\">\n	<path d=\"M 0 0 L 0 326\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(0, -163) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7.5 163.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"37.3333324\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"11.76\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 502.5px; top: 92.5px; width: 1px; height: 327px; z-index: 285; transform: scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	htmlId:		"tobj17437",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[0,0,0,[502.4999999999998,92.5,1,327]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":503,"y":93,"width":1,"height":327},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17431.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text17438.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 93px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 93px; min-height: 22px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">1000</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 133px; width: 93px; height: 22px; z-index: 286;",
	cssClasses:	"",
	htmlId:		"tobj17438",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,133,93,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":133,"width":93,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17439.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 143px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 143px; min-height: 23px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial\',sans-serif;font-size:11pt;color:0\">Sizing</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 241px; width: 143px; height: 23px; z-index: 287;",
	cssClasses:	"",
	htmlId:		"tobj17439",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,241,143,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":241,"width":143,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17440.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 78px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 78px; min-height: 24px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">9007</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 241px; width: 78px; height: 24px; z-index: 288;",
	cssClasses:	"",
	htmlId:		"tobj17440",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,241,78,24]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":241,"width":78,"height":24},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17441.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 169px; min-height: 21px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 169px; min-height: 21px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">Description</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 205px; width: 169px; height: 21px; z-index: 289;",
	cssClasses:	"",
	htmlId:		"tobj17441",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,205,169,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":205,"width":169,"height":21},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17442.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 87px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 87px; min-height: 23px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">1028</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 385px; width: 87px; height: 23px; z-index: 290;",
	cssClasses:	"",
	htmlId:		"tobj17442",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,385,87,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":385,"width":87,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17443.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 128px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 128px; min-height: 25px;\"><p style=\"text-align:justify\"><span style=\"font-family:\'Arial\',sans-serif;font-size:11pt;color:0\">Address</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 385px; width: 128px; height: 25px; z-index: 291;",
	cssClasses:	"",
	htmlId:		"tobj17443",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,385,128,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":385,"width":128,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17444.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 633px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 633px; min-height: 27px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">X&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;X&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;X</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 132px; width: 633px; height: 27px; z-index: 292;",
	cssClasses:	"",
	htmlId:		"tobj17444",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,132,633,27]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":132,"width":633,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17445.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 632px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 632px; min-height: 36px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">X&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;X&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;X</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 169px; width: 632px; height: 36px; z-index: 293;",
	cssClasses:	"",
	htmlId:		"tobj17445",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,169,632,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":169,"width":632,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17446.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 663px; min-height: 21px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 663px; min-height: 21px;\"><p style=\"text-align:justify\"><span style=\"font-family:\'Arial\',sans-serif;font-size:11pt;color:0\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 205px; width: 663px; height: 21px; z-index: 294;",
	cssClasses:	"",
	htmlId:		"tobj17446",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,205,663,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":205,"width":663,"height":21},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17447.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 663px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 663px; min-height: 23px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial\',sans-serif;font-size:11pt;color:0\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 241px; width: 663px; height: 23px; z-index: 295;",
	cssClasses:	"",
	htmlId:		"tobj17447",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,241,663,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":241,"width":663,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17448.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 663px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 663px; min-height: 25px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;X</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 277px; width: 663px; height: 25px; z-index: 296;",
	cssClasses:	"",
	htmlId:		"tobj17448",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,277,663,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":277,"width":663,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17449.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 663px; min-height: 21px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 663px; min-height: 21px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">X</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 313px; width: 663px; height: 21px; z-index: 297;",
	cssClasses:	"",
	htmlId:		"tobj17449",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,313,663,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":313,"width":663,"height":21},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17450.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 663px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 663px; min-height: 36px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial\',sans-serif;font-size:11pt;color:0\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 350px; width: 663px; height: 36px; z-index: 298;",
	cssClasses:	"",
	htmlId:		"tobj17450",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,350,663,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":350,"width":663,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17451.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 663px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 663px; min-height: 25px;\"><p style=\"text-align:justify\"><span style=\"font-family:\'Arial\',sans-serif;font-size:11pt;color:0\">X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; X</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 385px; width: 663px; height: 25px; z-index: 299;",
	cssClasses:	"",
	htmlId:		"tobj17451",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[345,385,663,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":385,"width":663,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17452.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 173px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 173px; min-height: 36px;\"><p style=\"text-align:left\"><span style=\"font-family:\'Arial\',sans-serif;font-size:11pt;color:0\">Planned Compensation</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 350px; width: 173px; height: 36px; z-index: 300;",
	cssClasses:	"",
	htmlId:		"tobj17452",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,350,173,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":350,"width":173,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17453.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 78px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 78px; min-height: 24px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">1005</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 350px; width: 78px; height: 24px; z-index: 301;",
	cssClasses:	"",
	htmlId:		"tobj17453",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,350,78,24]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":350,"width":78,"height":24},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17454.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 79px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 79px; min-height: 22px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">1010</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 313px; width: 79px; height: 22px; z-index: 302;",
	cssClasses:	"",
	htmlId:		"tobj17454",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,313,79,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":313,"width":79,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17455.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 169px; min-height: 21px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 169px; min-height: 21px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">Authorities/Resources</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 313px; width: 169px; height: 21px; z-index: 303;",
	cssClasses:	"",
	htmlId:		"tobj17455",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,313,169,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":313,"width":169,"height":21},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17456.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 79px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 79px; min-height: 22px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(36, 101, 184);\">1002</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 205px; width: 79px; height: 22px; z-index: 304;",
	cssClasses:	"",
	htmlId:		"tobj17456",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,205,79,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":205,"width":79,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17457.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 128px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 128px; min-height: 25px;\"><p style=\"line-height: 1.25; text-align: justify; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 14.6667px; color: rgb(4, 4, 4);\">Obsolete</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 277px; width: 128px; height: 25px; z-index: 305;",
	cssClasses:	"",
	htmlId:		"tobj17457",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,277,128,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":277,"width":128,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17458.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 87px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 87px; min-height: 23px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">1014</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 277px; width: 87px; height: 23px; z-index: 306;",
	cssClasses:	"",
	htmlId:		"tobj17458",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,277,87,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":277,"width":87,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17459.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 185px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 185px; min-height: 36px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 11pt;\">Relationships</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 169px; width: 185px; height: 36px; z-index: 307;",
	cssClasses:	"",
	htmlId:		"tobj17459",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,169,185,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":169,"width":185,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17460.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 69px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 69px; min-height: 27px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><b><span style=\"color: rgb(36, 101, 184); font-family: Arial, sans-serif; font-size: 11pt;\">1001</span></b></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 32px; top: 169px; width: 69px; height: 27px; z-index: 308;",
	cssClasses:	"",
	htmlId:		"tobj17460",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM_word"
	},
	objData:	{"a":[0,0,0,[32,169,69,27]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":32,"y":169,"width":69,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17461.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 152px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 152px; min-height: 36px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: 11pt;\">Object</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 132px; width: 152px; height: 36px; z-index: 309;",
	cssClasses:	"",
	htmlId:		"tobj17461",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[139,132,152,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":132,"width":152,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17462.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 519px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 519px; min-height: 35px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"font-size: 14pt; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(36, 101, 184);\">Infotypes for Organizational Management</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 37px; top: 56px; width: 519px; height: 35px; z-index: 310;",
	cssClasses:	"",
	htmlId:		"tobj17462",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION_paragraph"
	},
	objData:	{"a":[0,0,0,[37,56,519,35]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":37,"y":56,"width":519,"height":35},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17463.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 52px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><strong><span style=\"color: rgb(0, 62, 103); font-family: arial,sans-serif; font-size: 24pt;\">GLOSSARY</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 18px; top: 7px; width: 234px; height: 52px; z-index: 311;",
	cssClasses:	"",
	htmlId:		"tobj17463",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Glossary"
	},
	objData:	{"a":[0,0,0,[18,7,234,52]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":18,"y":7,"width":234,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17464.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 135px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 135px; min-height: 25px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 11pt; color: rgb(255, 255, 255);\">INFOTYPE</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 36px; top: 100px; width: 135px; height: 25px; z-index: 312;",
	cssClasses:	"",
	htmlId:		"tobj17464",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TERM"
	},
	objData:	{"a":[0,0,0,[36,100,135,25]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":36,"y":100,"width":135,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17465.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 681px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 681px; min-height: 36px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">&nbsp; &nbsp;​U. ORG&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;POSITION</span></strong><strong style=\"null\"><span style=\"font-size: 11pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></strong><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">JOB&nbsp;</span></strong><strong style=\"null\"><span style=\"font-size: 11pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></strong><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">JOB FAMILY</span></strong><strong style=\"null\"><span style=\"font-size: 11pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></strong><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">COST CENTRE</span></strong><strong style=\"null\"><span style=\"font-size: 11pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></strong><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">PERSON</span></strong></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 315px; top: 100px; width: 681px; height: 36px; z-index: 313;",
	cssClasses:	"",
	htmlId:		"tobj17465",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[315,100,681,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":100,"width":681,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17466.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 123px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 123px; min-height: 28px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><strong><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 11pt;\">DESCRIPTION</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 100px; width: 123px; height: 28px; z-index: 314;",
	cssClasses:	"",
	htmlId:		"tobj17466",
	bInsAnc:	0,
	cwObj:		{
		"name":	"DESCRIPTION"
	},
	objData:	{"a":[0,0,0,[139,100,123,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":139,"y":100,"width":123,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton17467.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_2_6222\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6222&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 950px; top: 15px; width: 45px; height: 45px; z-index: 315; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj17467",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og17416.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[950,15.000000000000036,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":950,"y":15,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6222\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6222&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6224\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6224&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6226\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6226&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_2_6228\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_2_6228&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape13356.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1012 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(506 27)\" style=\"\">\n	<path d=\"M 0 0 L 1012 0 L 1012 54 L 0 54 L 0 0 Z\" style=\"stroke: rgb(207, 42, 39); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-506, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(506 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -2px; top: 608px; width: 1012px; height: 54px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj13356",
	bInsAnc:	0,
	cwObj:		{
		"name":	"fondo_botonera"
	},
	objData:	{"a":[0,32,0,[-2,608.0000000000006,1012,54]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-2,"y":608,"width":1012,"height":54},"btnState":"disabled","altValue":"fondo_botonera","titleValue":"fondo_botonera","fallbackImg":"<img src=\"images/desktop_shape13356.png\" alt=\"fondo_botonera\" title=\"fondo_botonera\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
progress5344.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 198px; height: 20px;\"><div style=\"overflow: hidden; background-color: rgb(238, 238, 238); position: absolute; left: 0px; top: 0px; border: 1px solid rgb(153, 153, 153); width: 198px; height: 18px;\"><div style=\"overflow: hidden; position: absolute; left: 0px; top: 0px; width: 22px; height: 100%; background-color: rgb(34, 175, 198);\"></div></div><div name=\"dCon2\" style=\"position: absolute; width: 100%; left: 1px; bottom: 0px; height: 6px;\"></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 420px; top: 624px; width: 200px; height: 20px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj5344",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Progress Bar 2"
	},
	objData:	{"a":[0,16777248,0,[420,624,200,20]],"desktopRect":{"x":420,"y":624,"width":200,"height":20},"step":1,"range":45,"barPos":"5","tickTime":1000,"dwBarFlags":16,"imgsrc":"","varName":"VarPageInChapter"}
};
text618.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 67px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 67px; min-height: 20px;\"><p><span style=\"font-size:10pt; color: rgb(66, 138, 230); font-family: Arial, sans-serif;\"><span style=\"color: rgb(66, 138, 230);\">&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 817px; top: 626px; width: 67px; height: 20px; z-index: 316;",
	cssClasses:	"",
	htmlId:		"tobj618",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Page Count",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'Set Page in Chapter',actItem:function(){ if(!VarCurrentChapterName.equals('~~~null~~~'))text618.changeContents( "      " +  VarPageInChapter.getValueForDisplay() + " / " +  VarPagesInChapter.getValueForDisplay() + "" ); else text618.changeContents( "      " +  VarPageInTitle.getValueForDisplay() + " / " +  VarPagesInTitle.getValueForDisplay() + "" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:11,delay:0,name:'Show Text',actItem:function(){ text618.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,96,0,[817,626,67,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#cccccc"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":817,"y":626,"width":67,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape5236.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 62 26\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(31 13)\" style=\"\">\n	<path d=\"M 0 0 L 61 0 L 61 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(31 13)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 810.5px; top: 621.5px; width: 62px; height: 26px; z-index: 317; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5236",
	bInsAnc:	0,
	cwObj:		{
		"name":	"borde_contador"
	},
	objData:	{"a":[0,96,0,[810.5,621.5,62,26]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":811,"y":622,"width":62,"height":26},"btnState":"disabled","altValue":"borde_contador","titleValue":"borde_contador","fallbackImg":"<img src=\"images/desktop_shape5236.png\" alt=\"borde_contador\" title=\"borde_contador\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape5352.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1012 665\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(506 332.5)\" style=\"\">\n	<path d=\"M 0 0 L 1012 0 L 1012 665 L 0 665 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40); pointer-events: auto;\" transform=\"translate(0 0) translate(-506, -332.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(506 332.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.4;filter:alpha(opacity=40);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -3px; top: 5.68434e-13px; width: 1012px; height: 665px; z-index: 318; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj5352",
	bInsAnc:	0,
	cwObj:		{
		"name":	"full_shadow"
	},
	objData:	{"a":[288,64,[35,35,7,7,0,0],[-3.000000000000284,5.684341886080801e-13,1012,665]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-3,"y":0,"width":1012,"height":665},"btnState":"disabled","altValue":"full_shadow","titleValue":"full_shadow","fallbackImg":"<img src=\"images/desktop_shape13350.png\" alt=\"full_shadow\" title=\"full_shadow\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.4;\">"}
};
image19552.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj19552Img\" src=\"images/desktop_crop19552.png\" alt=\"61\" title=\"61\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1010px; height: 232px;\">",
	cssText:	"left: 0px; top: 375px; visibility: hidden; position: absolute; width: 1010px; height: 232px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj19552",
	bInsAnc:	0,
	cwObj:		{
		"name":	"61"
	},
	objData:	{"a":[32,288,[35,0,7,0,6000,0],[0,375,1010,232]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":375,"width":1010,"height":232}}
};
text16721.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 931px; min-height: 21px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 931px; min-height: 21px;\"><p style=\"text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0);\"><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\">These</span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\"> are </span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\">the</span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\"> roles and </span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\">responsibilities</span><span style=\"font-size: 12pt; font-family: arial; color: rgb(0, 0, 0);\"> </span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\">of</span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\"> CA </span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\">Service</span><span style=\"font-size: 12pt; font-family: arial; color: rgb(0, 0, 0);\"> </span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\">Desk</span><span style=\"font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0);\"> Manager:</span></span></p></div></div>",
	cssText:	"left: 41px; top: 101px; visibility: hidden; position: absolute; width: 931px; height: 21px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj16721",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 6"
	},
	objData:	{"a":[32,32,[6,0,9,0,200,0],[41,101,931,21]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":41,"y":101,"width":931,"height":21},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape16782.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 186 130\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(93 65)\" style=\"\">\n	<path d=\"M 20.68 0 L 165.32 0 A 20.68 20.68 0 0 1 186 20.68 L 186 109.32 A 20.68 20.68 0 0 1 165.32 130 L 20.68 130 A 20.68 20.68 0 0 1 0 109.32 L 0 20.68 A 20.68 20.68 0 0 1 20.68 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -65) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(93 65)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"-85.83\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 19px; top: 181px; visibility: hidden; position: absolute; width: 186px; height: 130px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16782",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[32,32,[35,0,8,0,1300,0],[18.999999999999986,181.00000000000003,186,130]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":181,"width":186,"height":130},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape16782.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape16778.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 186 130\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(93 65)\" style=\"\">\n	<path d=\"M 18.3 0 L 167.7 0 A 18.3 18.3 0 0 1 186 18.3 L 186 111.7 A 18.3 18.3 0 0 1 167.7 130 L 18.3 130 A 18.3 18.3 0 0 1 0 111.7 L 0 18.3 A 18.3 18.3 0 0 1 18.3 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(34, 175, 198); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -65) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(93 65)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"-86.43\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 413px; top: 181px; visibility: hidden; position: absolute; width: 186px; height: 130px; z-index: 5; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16778",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[32,32,[35,0,8,0,3300,0],[413,181.00000000000003,186,130]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":413,"y":181,"width":186,"height":130},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape16778.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape16773.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 186 130\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(93 65)\" style=\"\">\n	<path d=\"M 19.31 0 L 166.69 0 A 19.31 19.31 0 0 1 186 19.31 L 186 110.69 A 19.31 19.31 0 0 1 166.69 130 L 19.31 130 A 19.31 19.31 0 0 1 0 110.69 L 0 19.31 A 19.31 19.31 0 0 1 19.31 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(66, 138, 230); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -65) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(93 65)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"-86.17\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 216px; top: 181px; visibility: hidden; position: absolute; width: 186px; height: 130px; z-index: 6; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16773",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[32,32,[35,0,8,0,2300,0],[216,181.00000000000003,186,130]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":216,"y":181,"width":186,"height":130},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape16773.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape16769.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 186 130\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(93 65)\" style=\"\">\n	<path d=\"M 17.5 0 L 168.5 0 A 17.5 17.5 0 0 1 186 17.5 L 186 112.5 A 17.5 17.5 0 0 1 168.5 130 L 17.5 130 A 17.5 17.5 0 0 1 0 112.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 194, 0); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -65) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(93 65)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.75;filter:alpha(opacity=75);\">\n			<tspan x=\"-86.63\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 610px; top: 181px; visibility: hidden; position: absolute; width: 186px; height: 130px; z-index: 7; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16769",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[32,32,[35,0,8,0,4300,0],[610,181.00000000000003,186,130]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":610,"y":181,"width":186,"height":130},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape16769.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.75;\">"}
};
shape16795.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 186 130\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(93 65)\" style=\"\">\n	<path d=\"M 15.5 0 L 170.5 0 A 15.5 15.5 0 0 1 186 15.5 L 186 114.5 A 15.5 15.5 0 0 1 170.5 130 L 15.5 130 A 15.5 15.5 0 0 1 0 114.5 L 0 15.5 A 15.5 15.5 0 0 1 15.5 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(192, 199, 0); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-93, -65) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(93 65)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"-87.13\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 807px; top: 181px; visibility: hidden; position: absolute; width: 186px; height: 130px; z-index: 8; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16795",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[32,32,[35,0,8,0,5300,0],[807,181.00000000000003,186,130]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":807,"y":181,"width":186,"height":130},"btnState":"disabled","altValue":"Rounded Rectangle","titleValue":"Rounded Rectangle","fallbackImg":"<img src=\"images/desktop_shape16795.png\" alt=\"Rounded Rectangle\" title=\"Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
text16779.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 137px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 137px; min-height: 60px;\"><p style=\"text-align:justify\"><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(255, 255, 255);\">Final User.</span></p></div></div>",
	cssText:	"left: 43px; top: 232px; visibility: hidden; position: absolute; width: 137px; height: 60px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj16779",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[32,32,[35,0,8,0,1300,0],[43,232,137,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":43,"y":232,"width":137,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og19509.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19509",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape19510.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 80 80\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(40 40)\" style=\"\">\n	<path d=\"M 0 40 A 40 40 0 1 1 80 40 A 40 40 0 1 1 0 40 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -40) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(40 40)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 74px; top: 140px; visibility: hidden; position: absolute; width: 80px; height: 80px; z-index: 10; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19510",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[32,32,[37,0,9,0,1000,0,74,140,1,0],[74,140,80,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":74,"y":140,"width":80,"height":80},"btnState":"disabled","altValue":"Ellipse","titleValue":"Ellipse","fallbackImg":"<img src=\"images/desktop_shape17702.png\" alt=\"Ellipse\" title=\"Ellipse\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19511.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 68 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(34 34)\" style=\"\">\n	<path d=\"M 0 33 A 33 33 0 1 1 66 33 A 33 33 0 1 1 0 33 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(34 34)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 80px; top: 146px; visibility: hidden; position: absolute; width: 68px; height: 68px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19511",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse 2"
	},
	objData:	{"a":[32,32,[37,0,9,0,1000,0,80,146,1,0],[80,146,68,68]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":81,"y":147,"width":68,"height":68},"btnState":"disabled","altValue":"Ellipse 2","titleValue":"Ellipse 2","fallbackImg":"<img src=\"images/desktop_shape17701.png\" alt=\"Ellipse 2\" title=\"Ellipse 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19512.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 26 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(13 15.5)\" style=\"\">\n	<path d=\"M 0 0 L 22 27\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-11, -13.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(13 15.5) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 108px; top: 166px; visibility: hidden; position: absolute; width: 26px; height: 31px; z-index: 12; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj19512",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[32,32,[37,0,9,0,1000,0,108,166,1,0],[108,166,26,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":110,"y":168,"width":26,"height":31},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17700.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19513.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 10)\" style=\"\">\n	<path d=\"M 0 0 L 13 16\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6.5, -8) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9 10)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 94px; top: 177px; visibility: hidden; position: absolute; width: 17px; height: 20px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19513",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 5"
	},
	objData:	{"a":[32,32,[37,0,9,0,1000,0,94,177,1,0],[94,177,17,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":96,"y":179,"width":17,"height":20},"btnState":"disabled","altValue":"Line 5","titleValue":"Line 5","fallbackImg":"<img src=\"images/desktop_shape17699.png\" alt=\"Line 5\" title=\"Line 5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og19504.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19504",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape19505.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 80 80\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(40 40)\" style=\"\">\n	<path d=\"M 0 40 A 40 40 0 1 1 80 40 A 40 40 0 1 1 0 40 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 194, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -40) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(40 40)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 661px; top: 140px; visibility: hidden; position: absolute; width: 80px; height: 80px; z-index: 14; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19505",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[32,32,[37,0,9,0,4000,0,661,140,1,0],[661,140,80,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":140,"width":80,"height":80},"btnState":"disabled","altValue":"Ellipse","titleValue":"Ellipse","fallbackImg":"<img src=\"images/desktop_shape17698.png\" alt=\"Ellipse\" title=\"Ellipse\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19506.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 26 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(13 15.5)\" style=\"\">\n	<path d=\"M 0 0 L 22 27\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-11, -13.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(13 15.5) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 695px; top: 166px; visibility: hidden; position: absolute; width: 26px; height: 31px; z-index: 15; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj19506",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[32,32,[37,0,9,0,4000,0,695,166,1,0],[695,166,26,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":697,"y":168,"width":26,"height":31},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17700.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19507.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 10)\" style=\"\">\n	<path d=\"M 0 0 L 13 16\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6.5, -8) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9 10)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 681px; top: 177px; visibility: hidden; position: absolute; width: 17px; height: 20px; z-index: 16; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19507",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 5"
	},
	objData:	{"a":[32,32,[37,0,9,0,4000,0,681,177,1,0],[681,177,17,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":683,"y":179,"width":17,"height":20},"btnState":"disabled","altValue":"Line 5","titleValue":"Line 5","fallbackImg":"<img src=\"images/desktop_shape17699.png\" alt=\"Line 5\" title=\"Line 5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19508.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 68 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(34 34)\" style=\"\">\n	<path d=\"M 0 33 A 33 33 0 1 1 66 33 A 33 33 0 1 1 0 33 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(34 34)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 667px; top: 146px; visibility: hidden; position: absolute; width: 68px; height: 68px; z-index: 17; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19508",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse 2"
	},
	objData:	{"a":[32,32,[37,0,9,0,4000,0,667,146,1,0],[667,146,68,68]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":668,"y":147,"width":68,"height":68},"btnState":"disabled","altValue":"Ellipse 2","titleValue":"Ellipse 2","fallbackImg":"<img src=\"images/desktop_shape17701.png\" alt=\"Ellipse 2\" title=\"Ellipse 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og19527.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19527",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape19528.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 80 80\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(40 40)\" style=\"\">\n	<path d=\"M 0 40 A 40 40 0 1 1 80 40 A 40 40 0 1 1 0 40 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(192, 199, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -40) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(40 40)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 851px; top: 140px; visibility: hidden; position: absolute; width: 80px; height: 80px; z-index: 18; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19528",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[32,32,[37,0,9,0,5000,0,851,140,1,0],[851,140,80,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":851,"y":140,"width":80,"height":80},"btnState":"disabled","altValue":"Ellipse","titleValue":"Ellipse","fallbackImg":"<img src=\"images/desktop_shape19528.png\" alt=\"Ellipse\" title=\"Ellipse\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19529.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 26 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(13 15.5)\" style=\"\">\n	<path d=\"M 0 0 L 22 27\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-11, -13.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(13 15.5) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 885px; top: 166px; visibility: hidden; position: absolute; width: 26px; height: 31px; z-index: 19; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj19529",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[32,32,[37,0,9,0,5000,0,885,166,1,0],[885,166,26,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":887,"y":168,"width":26,"height":31},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17700.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19530.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 10)\" style=\"\">\n	<path d=\"M 0 0 L 13 16\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6.5, -8) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9 10)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 871px; top: 177px; visibility: hidden; position: absolute; width: 17px; height: 20px; z-index: 20; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19530",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 5"
	},
	objData:	{"a":[32,32,[37,0,9,0,5000,0,871,177,1,0],[871,177,17,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":873,"y":179,"width":17,"height":20},"btnState":"disabled","altValue":"Line 5","titleValue":"Line 5","fallbackImg":"<img src=\"images/desktop_shape17699.png\" alt=\"Line 5\" title=\"Line 5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19531.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 68 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(34 34)\" style=\"\">\n	<path d=\"M 0 33 A 33 33 0 1 1 66 33 A 33 33 0 1 1 0 33 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(34 34)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 857px; top: 146px; visibility: hidden; position: absolute; width: 68px; height: 68px; z-index: 21; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19531",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse 2"
	},
	objData:	{"a":[32,32,[37,0,9,0,5000,0,857,146,1,0],[857,146,68,68]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":858,"y":147,"width":68,"height":68},"btnState":"disabled","altValue":"Ellipse 2","titleValue":"Ellipse 2","fallbackImg":"<img src=\"images/desktop_shape17701.png\" alt=\"Ellipse 2\" title=\"Ellipse 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og19499.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19499",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape19500.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 80 80\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(40 40)\" style=\"\">\n	<path d=\"M 0 40 A 40 40 0 1 1 80 40 A 40 40 0 1 1 0 40 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(34, 175, 198); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -40) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(40 40)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 464px; top: 140px; visibility: hidden; position: absolute; width: 80px; height: 80px; z-index: 22; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19500",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[32,32,[37,0,9,0,3000,0,464,140,1,0],[464,140,80,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":140,"width":80,"height":80},"btnState":"disabled","altValue":"Ellipse","titleValue":"Ellipse","fallbackImg":"<img src=\"images/desktop_shape17694.png\" alt=\"Ellipse\" title=\"Ellipse\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19501.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 26 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(13 15.5)\" style=\"\">\n	<path d=\"M 0 0 L 22 27\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-11, -13.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(13 15.5) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 498px; top: 166px; visibility: hidden; position: absolute; width: 26px; height: 31px; z-index: 23; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj19501",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[32,32,[37,0,9,0,3000,0,498,166,1,0],[498,166,26,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":500,"y":168,"width":26,"height":31},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17700.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19502.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 10)\" style=\"\">\n	<path d=\"M 0 0 L 13 16\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6.5, -8) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9 10)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 484px; top: 177px; visibility: hidden; position: absolute; width: 17px; height: 20px; z-index: 24; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19502",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 5"
	},
	objData:	{"a":[32,32,[37,0,9,0,3000,0,484,177,1,0],[484,177,17,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":486,"y":179,"width":17,"height":20},"btnState":"disabled","altValue":"Line 5","titleValue":"Line 5","fallbackImg":"<img src=\"images/desktop_shape17699.png\" alt=\"Line 5\" title=\"Line 5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19503.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 68 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(34 34)\" style=\"\">\n	<path d=\"M 0 33 A 33 33 0 1 1 66 33 A 33 33 0 1 1 0 33 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(34 34)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 470px; top: 146px; visibility: hidden; position: absolute; width: 68px; height: 68px; z-index: 25; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19503",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse 2"
	},
	objData:	{"a":[32,32,[37,0,9,0,3000,0,470,146,1,0],[470,146,68,68]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":471,"y":147,"width":68,"height":68},"btnState":"disabled","altValue":"Ellipse 2","titleValue":"Ellipse 2","fallbackImg":"<img src=\"images/desktop_shape17701.png\" alt=\"Ellipse 2\" title=\"Ellipse 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og19494.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19494",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape19495.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 80 80\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(40 40)\" style=\"\">\n	<path d=\"M 0 40 A 40 40 0 1 1 80 40 A 40 40 0 1 1 0 40 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(66, 138, 230); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -40) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(40 40)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 271px; top: 140px; visibility: hidden; position: absolute; width: 80px; height: 80px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19495",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[32,32,[37,0,9,0,2000,0,271,140,1,0],[271,140,80,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":271,"y":140,"width":80,"height":80},"btnState":"disabled","altValue":"Ellipse","titleValue":"Ellipse","fallbackImg":"<img src=\"images/desktop_shape17690.png\" alt=\"Ellipse\" title=\"Ellipse\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19496.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 26 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(13 15.5)\" style=\"\">\n	<path d=\"M 0 0 L 22 27\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-11, -13.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(13 15.5) matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 305px; top: 166px; visibility: hidden; position: absolute; width: 26px; height: 31px; z-index: 27; transform: scaleY(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1); -webkit-transform:ScaleY(-1); -o-transform:ScaleY(-1); -ms-transform:ScaleY(-1); filter:flipv; -ms-filter:flipv",
	cssClasses:	"",
	htmlId:		"tobj19496",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 6"
	},
	objData:	{"a":[32,32,[37,0,9,0,2000,0,305,166,1,0],[305,166,26,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":307,"y":168,"width":26,"height":31},"btnState":"disabled","altValue":"Line 6","titleValue":"Line 6","fallbackImg":"<img src=\"images/desktop_shape17700.png\" alt=\"Line 6\" title=\"Line 6\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19497.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 17 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(8.5 10)\" style=\"\">\n	<path d=\"M 0 0 L 13 16\" style=\"stroke: rgb(255, 255, 255); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6.5, -8) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9 10)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 291px; top: 177px; visibility: hidden; position: absolute; width: 17px; height: 20px; z-index: 28; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19497",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line 5"
	},
	objData:	{"a":[32,32,[37,0,9,0,2000,0,291,177,1,0],[291,177,17,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":293,"y":179,"width":17,"height":20},"btnState":"disabled","altValue":"Line 5","titleValue":"Line 5","fallbackImg":"<img src=\"images/desktop_shape17699.png\" alt=\"Line 5\" title=\"Line 5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape19498.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 68 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(34 34)\" style=\"\">\n	<path d=\"M 0 33 A 33 33 0 1 1 66 33 A 33 33 0 1 1 0 33 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 2; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -33) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(34 34)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,62,103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#003e67\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"left: 277px; top: 146px; visibility: hidden; position: absolute; width: 68px; height: 68px; z-index: 29; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19498",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse 2"
	},
	objData:	{"a":[32,32,[37,0,9,0,2000,0,277,146,1,0],[277,146,68,68]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":278,"y":147,"width":68,"height":68},"btnState":"disabled","altValue":"Ellipse 2","titleValue":"Ellipse 2","fallbackImg":"<img src=\"images/desktop_shape17701.png\" alt=\"Ellipse 2\" title=\"Ellipse 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text16775.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 145px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 145px; min-height: 60px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size: 12pt;\">Global Solutions Team: Second level support.</span></p></div></div>",
	cssText:	"left: 433px; top: 231px; visibility: hidden; position: absolute; width: 145px; height: 60px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj16775",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[32,32,[35,0,8,0,3300,0],[433,231,145,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":433,"y":231,"width":145,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text16771.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 144px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 144px; min-height: 80px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; color: rgb(255, 255, 255); font-size: 12pt;\">Country Team: First level support.</span></p></div></div>",
	cssText:	"left: 237px; top: 230px; visibility: hidden; position: absolute; width: 144px; height: 80px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj16771",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[32,32,[35,0,8,0,2300,0],[237,230,144,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":230,"width":144,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text16768.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 145px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 145px; min-height: 42px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(255, 255, 255);\">Business Process Owner (HR).</span></p></div></div>",
	cssText:	"left: 630px; top: 230px; visibility: hidden; position: absolute; width: 145px; height: 42px; z-index: 32;",
	cssClasses:	"",
	htmlId:		"tobj16768",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[32,32,[35,0,8,0,4300,0],[630,230,145,42]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":230,"width":145,"height":42},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape16766.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 0.5)\" style=\"\">\n	<path d=\"M 0.25 0 L 0.75 0 A 0.25 0.25 0 0 1 1 0.25 L 1 0.75 A 0.25 0.25 0 0 1 0.75 1 L 0.25 1 A 0.25 0.25 0 0 1 0 0.75 L 0 0.25 A 0.25 0.25 0 0 1 0.25 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(66, 138, 230); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-0.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7 7)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 277px; top: 475px; width: 1px; height: 1px; z-index: 33; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16766",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 4"
	},
	objData:	{"a":[0,32,0,[277,475,1,1]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":277,"y":475,"width":1,"height":1},"btnState":"disabled","altValue":"Rounded Rectangle 4","titleValue":"Rounded Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape16766.png\" alt=\"Rounded Rectangle 4\" title=\"Rounded Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text16792.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 146px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 146px; min-height: 60px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: justify;\"><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(255, 255, 255);\">Application Owner (IT).</span></p></div></div>",
	cssText:	"left: 827px; top: 231px; visibility: hidden; position: absolute; width: 146px; height: 60px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj16792",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[32,32,[35,0,8,0,5300,0],[827,231,146,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":827,"y":231,"width":146,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
shape16787.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(0.5 0.5)\" style=\"\">\n	<path d=\"M 0.25 0 L 0.75 0 A 0.25 0.25 0 0 1 1 0.25 L 1 0.75 A 0.25 0.25 0 0 1 0.75 1 L 0.25 1 A 0.25 0.25 0 0 1 0 0.75 L 0 0.25 A 0.25 0.25 0 0 1 0.25 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(66, 138, 230); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-0.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7 7)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 277px; top: 605px; width: 1px; height: 1px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16787",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 4"
	},
	objData:	{"a":[0,32,0,[277,605,1,1]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":277,"y":605,"width":1,"height":1},"btnState":"disabled","altValue":"Rounded Rectangle 4","titleValue":"Rounded Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape16766.png\" alt=\"Rounded Rectangle 4\" title=\"Rounded Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape16725.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1010 83\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505 41.5)\" style=\"\">\n	<path d=\"M 0 0 L 1010 0 L 1010 83 L 0 83 L 0 0 Z\" style=\"stroke: rgb(66, 138, 230); stroke-width: 0; stroke-dasharray: 1, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 62, 103); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-505, -41.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505 41.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.333333\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-503\" y=\"4.2\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1px; top: -4px; width: 1010px; height: 83px; z-index: 36; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16725",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle 3"
	},
	objData:	{"a":[0,32,0,[-1,-3.999999999999879,1010,83]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-1,"y":-4,"width":1010,"height":83},"btnState":"disabled","altValue":"Rectangle 3","titleValue":"Rectangle 3","fallbackImg":"<img src=\"images/desktop_shape5380.png\" alt=\"Rectangle 3\" title=\"Rectangle 3\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape16726.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1011 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505.5 0.5)\" style=\"\">\n	<path d=\"M 0 0 L 1010 0\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-505, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505.5 7.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -1.5px; top: 606.5px; width: 1011px; height: 1px; z-index: 37; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16726",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[-1.5,606.5000000000001,1011,1]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-1,"y":607,"width":1011,"height":1},"btnState":"disabled","altValue":"Line","titleValue":"Line","fallbackImg":"<img src=\"images/desktop_shape741.png\" alt=\"Line\" title=\"Line\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text16727.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 588px; min-height: 31px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 588px; min-height: 31px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(255, 255, 255); font-size: 16pt;\">SUPPORT MODEL (1/6)</span></strong></p></div></div>",
	cssText:	"left: 82px; top: 37px; visibility: hidden; position: absolute; width: 588px; height: 31px; z-index: 38;",
	cssClasses:	"",
	htmlId:		"tobj16727",
	bInsAnc:	0,
	cwObj:		{
		"name":	"LESSON"
	},
	objData:	{"a":[32,32,[7,0,9,0,0,0],[82,37,588,31]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":82,"y":37,"width":588,"height":31},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text16728.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 61px; min-height: 64px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 61px; min-height: 64px;\"><p style=\"text-align:left\"><span style=\"font-size: 38pt; color: rgb(255, 255, 255); font-family: &quot;Century Gothic&quot;, sans-serif;\">05</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 21px; top: 7px; width: 61px; height: 64px; z-index: 39;",
	cssClasses:	"",
	htmlId:		"tobj16728",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 7"
	},
	objData:	{"a":[0,32,0,[21,7,61,64]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":7,"width":61,"height":64},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton19607.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 188 171\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_16718_6289\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n	<linearGradient id=\"SVGID_16718_6289\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6289&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(94 85.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 16.5px; top: 136.5px; width: 188px; height: 171px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19607",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Final User",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og19553.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape5352.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[16.499999999999986,136.50000000000003,188,171]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":17,"y":137,"width":188,"height":171},"imgDataNormal":"images/desktop_shape19607.png","imgDataOver":"images/desktop_shape19607.png","imgDataDown":"images/desktop_shape19607.png","imgDataDisabled":"images/desktop_shape19607.png","svgDataNormal":"<linearGradient id=\"SVGID_16718_6289\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6289\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6289&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_16718_6290\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6290\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6290&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_16718_6291\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"171\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6291\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"171.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6291&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_16718_6292\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6292\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6292&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Final User","titleValue":"Final User","fallbackImg":"<img alt=\"Final User\" title=\"Final User\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
textbutton19609.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 188 171\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_16718_6293\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n	<linearGradient id=\"SVGID_16718_6293\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6293&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(94 85.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 214.5px; top: 136.5px; width: 188px; height: 171px; z-index: 41; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19609",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Country Team",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og19563.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape5352.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[214.5,136.50000000000003,188,171]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":215,"y":137,"width":188,"height":171},"imgDataNormal":"images/desktop_shape19607.png","imgDataOver":"images/desktop_shape19607.png","imgDataDown":"images/desktop_shape19607.png","imgDataDisabled":"images/desktop_shape19607.png","svgDataNormal":"<linearGradient id=\"SVGID_16718_6293\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6293\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6293&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_16718_6294\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6294\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6294&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_16718_6295\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"171\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6295\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"171.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6295&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_16718_6296\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6296\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6296&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Country Team","titleValue":"Country Team","fallbackImg":"<img alt=\"Country Team\" title=\"Country Team\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
textbutton19621.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 188 171\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_16718_6297\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n	<linearGradient id=\"SVGID_16718_6297\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6297&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(94 85.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 808.5px; top: 136.5px; width: 188px; height: 171px; z-index: 42; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19621",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Application Owner",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og19590.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape5352.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[808.5,136.50000000000003,188,171]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":809,"y":137,"width":188,"height":171},"imgDataNormal":"images/desktop_shape19607.png","imgDataOver":"images/desktop_shape19607.png","imgDataDown":"images/desktop_shape19607.png","imgDataDisabled":"images/desktop_shape19607.png","svgDataNormal":"<linearGradient id=\"SVGID_16718_6297\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6297\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6297&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_16718_6298\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6298\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6298&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_16718_6299\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"171\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6299\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"171.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6299&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_16718_6300\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6300\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6300&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Application Owner","titleValue":"Application Owner","fallbackImg":"<img alt=\"Application Owner\" title=\"Application Owner\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
textbutton19619.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 188 171\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_16718_6301\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n	<linearGradient id=\"SVGID_16718_6301\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6301&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(94 85.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 610.5px; top: 136.5px; width: 188px; height: 171px; z-index: 43; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19619",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Business Process Owner",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og19581.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape5352.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[610.5,136.50000000000003,188,171]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":611,"y":137,"width":188,"height":171},"imgDataNormal":"images/desktop_shape19607.png","imgDataOver":"images/desktop_shape19607.png","imgDataDown":"images/desktop_shape19607.png","imgDataDisabled":"images/desktop_shape19607.png","svgDataNormal":"<linearGradient id=\"SVGID_16718_6301\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6301\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6301&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_16718_6302\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6302\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6302&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_16718_6303\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"171\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6303\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"171.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6303&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_16718_6304\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6304\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6304&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Business Process Owner","titleValue":"Business Process Owner","fallbackImg":"<img alt=\"Business Process Owner\" title=\"Business Process Owner\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
textbutton19614.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 188 171\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_16718_6305\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n	<linearGradient id=\"SVGID_16718_6305\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6305&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(94 85.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 412.5px; top: 136.5px; width: 188px; height: 171px; z-index: 44; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19614",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Global Solutions Team",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og19572.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ shape5352.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[412.5,136.50000000000003,188,171]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":413,"y":137,"width":188,"height":171},"imgDataNormal":"images/desktop_shape19607.png","imgDataOver":"images/desktop_shape19607.png","imgDataDown":"images/desktop_shape19607.png","imgDataDisabled":"images/desktop_shape19607.png","svgDataNormal":"<linearGradient id=\"SVGID_16718_6305\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6305\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6305&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_16718_6306\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6306\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6306&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_16718_6307\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"171\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6307\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"171.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6307&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_16718_6308\" gradientUnits=\"userSpaceOnUse\" x1=\"94\" y1=\"171\" x2=\"94\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(94 85.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_16718_6308\" gradientUnits=\"userSpaceOnUse\" x1=\"94.5\" y1=\"171.5\" x2=\"94.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 24.61 0 L 162.39 0 A 24.61 24.61 0 0 1 187 24.61 L 187 145.39 A 24.61 24.61 0 0 1 162.39 170 L 24.61 170 A 24.61 24.61 0 0 1 0 145.39 L 0 24.61 A 24.61 24.61 0 0 1 24.61 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6308&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-93.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(94 85.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Global Solutions Team","titleValue":"Global Solutions Team","fallbackImg":"<img alt=\"Global Solutions Team\" title=\"Global Solutions Team\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
og19599.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19599",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text19600.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 246px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 246px; min-height: 20px;\"><p><span style=\"color: rgb(36, 101, 184); font-size: 9pt;\">(Click on each role&nbsp;to see more information</span><span style=\"color: rgb(36, 101, 184); font-size: 9pt; background-color: transparent;\">)</span></p></div></div>",
	cssText:	"left: 76px; top: 340px; visibility: hidden; position: absolute; width: 246px; height: 20px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj19600",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 6"
	},
	objData:	{"a":[32,32,[35,0,7,0,3000,0],[76,340,246,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":76,"y":340,"width":246,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image19601.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj19601Img\" src=\"images/ampliar.png\" alt=\"ampliar\" title=\"ampliar\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 50px;\">",
	cssText:	"left: 23px; top: 320px; visibility: hidden; position: absolute; width: 50px; height: 50px; z-index: 46;",
	cssClasses:	"",
	htmlId:		"tobj19601",
	bInsAnc:	0,
	cwObj:		{
		"name":	"ampliar"
	},
	objData:	{"a":[32,288,[35,0,7,0,3000,0],[23,320,50,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":23,"y":320,"width":50,"height":50}}
};
og19553.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19553",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape19554.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 416 129\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(208 64.5)\" style=\"\">\n	<path d=\"M 9.65 0 L 406.35 0 A 9.65 9.65 0 0 1 416 9.65 L 416 119.35 A 9.65 9.65 0 0 1 406.35 129 L 9.65 129 A 9.65 9.65 0 0 1 0 119.35 L 0 9.65 A 9.65 9.65 0 0 1 9.65 0 Z\" style=\"stroke: rgb(229, 87, 83); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-208, -64.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(208 64.5)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 297px; top: 394px; width: 416px; height: 129px; z-index: 319; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19554",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 4"
	},
	objData:	{"a":[0,0,0,[297,394.00000000000006,416,129]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":297,"y":394,"width":416,"height":129},"btnState":"disabled","altValue":"Rounded Rectangle 4","titleValue":"Rounded Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape19554.png\" alt=\"Rounded Rectangle 4\" title=\"Rounded Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text19556.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 203px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 203px; min-height: 47px;\"><p style=\"text-align: center;\"><span style=\"font-family: Arial, sans-serif; font-size: 16px; color: rgb(41, 42, 45);\">Regular user of the system.</span></p>\n\n<p style=\"margin-bottom: 0pt; margin-top: 0pt; text-align: center;\"><span>​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 451px; width: 203px; height: 47px; z-index: 320;",
	cssClasses:	"",
	htmlId:		"tobj19556",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 10"
	},
	objData:	{"a":[0,0,0,[405,451,203,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":405,"y":451,"width":203,"height":47},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton19557.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_6310\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6310&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 654px; top: 406px; width: 45px; height: 45px; z-index: 321; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19557",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og19553.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape5352.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[654,406,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":654,"y":406,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6310\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6310&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6312\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6312&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6314\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6314&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6316\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6316&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og19563.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19563",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape19564.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 627 196\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(313.5 98)\" style=\"\">\n	<path d=\"M 10.02 0 L 616.98 0 A 10.02 10.02 0 0 1 627 10.02 L 627 185.98 A 10.02 10.02 0 0 1 616.98 196 L 10.02 196 A 10.02 10.02 0 0 1 0 185.98 L 0 10.02 A 10.02 10.02 0 0 1 10.02 0 Z\" style=\"stroke: rgb(229, 87, 83); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-313.5, -98) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(313.5 98)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 183px; top: 394px; width: 627px; height: 196px; z-index: 322; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19564",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 4"
	},
	objData:	{"a":[0,0,0,[183,394.00000000000006,627,196]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":183,"y":394,"width":627,"height":196},"btnState":"disabled","altValue":"Rounded Rectangle 4","titleValue":"Rounded Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape19564.png\" alt=\"Rounded Rectangle 4\" title=\"Rounded Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text19490.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 503px; min-height: 119px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 503px; min-height: 119px;\"><p><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0);\">· S</span><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0);\">olves some of the tickets from the users.</span></span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 12pt;\">· Reach Solutions Team for further support.</span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 12pt;\">· Alert Solutions Team for legal changes requirements.</span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size: 12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0);\">·&nbsp;</span><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0);\">Collect and analyse new tool improvements triggered by Final Users.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 250px; top: 452px; width: 503px; height: 119px; z-index: 323;",
	cssClasses:	"",
	htmlId:		"tobj19490",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[0,0,0,[250,452,503,119]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":250,"y":452,"width":503,"height":119},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton19566.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_6318\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6318&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 752px; top: 406px; width: 45px; height: 45px; z-index: 324; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19566",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og19563.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape5352.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[752,406,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":752,"y":406,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6318\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6318&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6320\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6320&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6322\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6322&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6324\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6324&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og19572.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19572",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape19573.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 970 180\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(485 90)\" style=\"\">\n	<path d=\"M 11.69 0 L 958.31 0 A 11.69 11.69 0 0 1 970 11.69 L 970 168.31 A 11.69 11.69 0 0 1 958.31 180 L 11.69 180 A 11.69 11.69 0 0 1 0 168.31 L 0 11.69 A 11.69 11.69 0 0 1 11.69 0 Z\" style=\"stroke: rgb(229, 87, 83); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-485, -90) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(485 90)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 21px; top: 394px; width: 970px; height: 180px; z-index: 325; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19573",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 4"
	},
	objData:	{"a":[0,0,0,[21,394.0000000000001,970,180]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":394,"width":970,"height":180},"btnState":"disabled","altValue":"Rounded Rectangle 4","titleValue":"Rounded Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape19573.png\" alt=\"Rounded Rectangle 4\" title=\"Rounded Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text19539.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 911px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 911px; min-height: 69px;\"><p><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0);\">·&nbsp;</span><span style=\"color: rgb(0, 0, 0); font-size: 12pt; font-family: Arial, sans-serif;\">Review the classification of tickets according to the type of service.</span></span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0);\">·&nbsp;</span><span style=\"color: rgb(0, 0, 0); font-size: 12pt; font-family: Arial, sans-serif;\">Look for the correct team to provide a solution, estimate the effort needed and manage the approval of Corporate BPO and AO.</span></span></p>\n\n<p><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0);\">·&nbsp;</span><span style=\"color: rgb(0, 0, 0); font-size: 12pt; font-family: Arial, sans-serif;\">Development of solutions / changes required by SAP HCM&amp;BW Tickets.</span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 49px; top: 451px; width: 911px; height: 69px; z-index: 326;",
	cssClasses:	"",
	htmlId:		"tobj19539",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[0,0,0,[49,451,911,69]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":49,"y":451,"width":911,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton19575.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_6326\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6326&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 931px; top: 406px; width: 45px; height: 45px; z-index: 327; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19575",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og19572.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape5352.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[931,406,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":931,"y":406,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6326\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6326&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6328\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6328&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6330\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6330&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6332\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6332&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og19581.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19581",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape19582.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 467 147\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(233.5 73.5)\" style=\"\">\n	<path d=\"M 11.02 0 L 455.98 0 A 11.02 11.02 0 0 1 467 11.02 L 467 135.98 A 11.02 11.02 0 0 1 455.98 147 L 11.02 147 A 11.02 11.02 0 0 1 0 135.98 L 0 11.02 A 11.02 11.02 0 0 1 11.02 0 Z\" style=\"stroke: rgb(229, 87, 83); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-233.5, -73.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(233.5 73.5)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 271px; top: 394px; width: 467px; height: 147px; z-index: 328; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19582",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 4"
	},
	objData:	{"a":[0,0,0,[271,394.00000000000006,467,147]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":271,"y":394,"width":467,"height":147},"btnState":"disabled","altValue":"Rounded Rectangle 4","titleValue":"Rounded Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape19582.png\" alt=\"Rounded Rectangle 4\" title=\"Rounded Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text19543.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 370px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 370px; min-height: 28px;\"><p><span style=\"font-family: Arial; color: rgb(0, 0, 0); font-size: 12pt;\">Approves functional modifications of the processes.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 313px; top: 455px; width: 370px; height: 28px; z-index: 329;",
	cssClasses:	"",
	htmlId:		"tobj19543",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[0,0,0,[313,455,370,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":313,"y":455,"width":370,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton19584.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_6334\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6334&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 681px; top: 406px; width: 45px; height: 45px; z-index: 330; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19584",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og19581.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape5352.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[681,406,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":681,"y":406,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6334\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6334&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6336\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6336&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6338\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6338&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6340\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6340&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og19590.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og19590",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape19591.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 450 149\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(225 74.5)\" style=\"\">\n	<path d=\"M 11.06 0 L 438.94 0 A 11.06 11.06 0 0 1 450 11.06 L 450 137.94 A 11.06 11.06 0 0 1 438.94 149 L 11.06 149 A 11.06 11.06 0 0 1 0 137.94 L 0 11.06 A 11.06 11.06 0 0 1 11.06 0 Z\" style=\"stroke: rgb(229, 87, 83); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-225, -74.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(225 74.5)\">\n		<text font-family=\"\'Century Gothic\',sans-serif\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#ffffff\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 280px; top: 394px; width: 450px; height: 149px; z-index: 331; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19591",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle 4"
	},
	objData:	{"a":[0,0,0,[280,394.00000000000006,450,149]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":280,"y":394,"width":450,"height":149},"btnState":"disabled","altValue":"Rounded Rectangle 4","titleValue":"Rounded Rectangle 4","fallbackImg":"<img src=\"images/desktop_shape19591.png\" alt=\"Rounded Rectangle 4\" title=\"Rounded Rectangle 4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text19547.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 319px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 319px; min-height: 40px;\"><p><span style=\"font-family: Arial; color: rgb(0, 0, 0); font-size: 12pt;\">Decides if the system must cover an specific requirement and how it will be solved.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 345px; top: 452px; width: 319px; height: 40px; z-index: 332;",
	cssClasses:	"",
	htmlId:		"tobj19547",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[0,0,0,[345,452,319,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":452,"width":319,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton19593.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 45 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16718_6342\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6342&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22.5 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 673px; top: 406px; width: 45px; height: 45px; z-index: 333; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj19593",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og19590.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ shape5352.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[673,406,45,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":673,"y":406,"width":45,"height":45},"imgDataNormal":"images/desktop_shape5747.png","imgDataOver":"images/desktop_shape5747_over.png","imgDataDown":"images/desktop_shape5747_down.png","imgDataDisabled":"images/desktop_shape5747_disabled.png","svgDataNormal":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6342\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6342&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6344\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6344&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6346\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_down.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6346&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22.5 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16718_6348\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"45\" height=\"45\" xlink:href=\"images/close_dis.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 45 0 L 45 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16718_6348&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22.5 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Close","titleValue":"Close","fallbackImg":"<img alt=\"Close\" title=\"Close\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"11","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	6
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/forward.png","images/forward_hover.png","images/forward_press.png","images/forward_dis.png","images/exit.png","images/exit_hover.png","images/exit_down.png","images/exit_dis.png","images/help.png","images/help_hover.png","images/help_down.png","images/index.png","images/index_hover.png","images/index_down.png","images/index_dis.png","images/glossary.png","images/glossary_hover.png","images/glossary_dwon.png","images/glossary_dis.png","images/close.png","images/close_hover.png","images/close_down.png","images/close_dis.png","images/ampliar.png","images/Captura%20de%20pantalla%202018-06-22%20a%20las%209.47.25.png","images/61.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#ffffff","",0,0,1];
