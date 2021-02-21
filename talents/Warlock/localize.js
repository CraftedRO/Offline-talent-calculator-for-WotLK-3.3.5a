var lg = "/en"; // Example: /en

var imgPath = "shared/global/talents";
var pixelGif = "shared/wow-com/images/layout/pixel.gif";

var textLevelRequired = "Level Required:";
var textPointsLeft = "Points Left:";
var textPointsSpent = "Points Spent:";
var textPoint = "point";
var textPoints = "points";
var textColon = ":";
var textLeftClick = "Left Click to Learn"
var textRightClick = "Right Click to Unlearn"
var textRankColon = "Rank:"
var textToSave = "To save the template for future reference, copy the URL below:";
var textNextRank = "Next Rank:";
var requiresRequires = "Requires";
var requiresPointsIn = "points in";
var requiresTalents = "Talents";

function getStringRequires(requirementPoints, requirementName) {
	theS = "s";
	if (requirementPoints == 1)
		theS = "";
	var theString = 'Requires '+ requirementPoints +' point'+ theS +' in '+ requirementName;
	return theString;
}

function getStringRequiresTalents(requirementPoints, requirementName) {
	var theString = 'Requires '+ requirementPoints +' points in '+ requirementName +' Talents';
	return theString
}

function saveTheTemplate() {

	var templateString = "";
	for (i = 0; talent[i]; i++) {
		templateString = templateString + rankTop[i][0]
	}

	if (is_ie4up)
    	var w = window.open("","","resizable=0,toolbar=1,width=850,height=155,status=1,scrollbars=1,menubar=1, screenX=100, screenY=100, left=100, top=100");	
	else
	    var w = window.open("","","resizable=0,toolbar=1,width=850,height=175,status=1,scrollbars=1,menubar=1, screenX=100, screenY=100, left=100, top=100");	
	
	w.document.write("<html>");

	w.document.write('<body marginheight = 0 marginwidth = 0 topmargin = 0 leftmargin = 0 bgcolor = "#000000"><center><table cellspacing = "0" cellpadding = "0" border = "0" width = "100%"><tr><td><img src = "/info/classes/includes-new/images/bot-box/top-left.gif"></td>');
	w.document.write('<td width = "100%" background = "/info/classes/includes-new/images/bot-box/top.gif"></td><td><img src = "/info/classes/includes-new/images/bot-box/top-right.gif"></td></tr>	<tr>');
	w.document.write('<td background = "/info/classes/includes-new/images/bot-box/left.gif" valign = "top"><img src = "/shared/wow-com/images/layout/pixel.gif" width = "10" height = "1"></td><td align="center" width = "100%"><table cellspacing = "0" cellpadding = "0" border = "0" width = "100%" style = "background-image: url(\'/links/images/border-right.gif\'); background-repeat: repeat-y; background-position: right;">');
	w.document.write('<tr><td align = center><table cellspacing = "0" cellpadding = "0" border = "0"><tr><td>');
	
	w.document.write("<h3><span style = 'color: #ffffff;'>Saving the Template</span></h3>");	
	w.document.write("<span style = 'font-family: tahoma, arial; font-size: 10pt; color: #ffffff'><b>Copy the complete URL below:</b><br>");
	w.document.write("http://www.worldofwarcraft.com/info/classes/"+ nlclass +"/talents.html?" +templateString);		
	
	w.document.write('</td></tr></table></td></tr></table></td><td background = "/info/classes/includes-new/images/bot-box/right.gif" valign = "top"><img src = "/shared/wow-com/images/layout/pixel.gif" width = "14" height = "145"></td></tr>');
	w.document.write('	<tr><td><img src = "/info/classes/includes-new/images/bot-box/bot-left.gif"></td>	<td width = "100%" background = "/info/classes/includes-new/images/bot-box/bot.gif"></td>			<td width = "14"><img src = "/info/classes/includes-new/images/bot-box/bot-right.gif"></td>		</tr>		</table>					');
	w.document.write('</center></body></html>');

	
}


function printableVersion() {

	var levelRequired = rankPointsMax - rankPoints + levelMin - 1;	
	var pointsRequired = rankPointsMax - rankPoints;

    var w = window.open("","","resizable=1,toolbar=1,width=800,height=600,status=1,scrollbars=1,menubar=1, screenX=100, screenY=100, left=100, top=100");
	w.document.write("<html><body bgcolor=ffffff><span style = 'font-family: verdana; font-size = 10pt'>");
	w.document.write("<h3>"+ className + "</h3>Minimum Required Level: <b>"+ levelRequired +"</b><br>Required Talent Points: <b>"+ pointsRequired +"</b>");	
	w.document.write("<table border=0 cellpadding=0 cellspacing=0 width=100%>");

	
	if (pointsRequired == 0) {
		w.document.write("<br>&nbsp;&nbsp;&nbsp;Don't waste paper");
	}
	
	var rightTreeID = -1;
	for (var blah = 0; blah != talent.length; blah++){
		if (talent[blah][0] != rightTreeID) {
			rightTreeID = talent[blah][0];

			if (pointsTree[rightTreeID] != 0)
				w.document.write("<tr><td width=100%><br><b><u>"+tree[rightTreeID]+" Talents</u> - </b></span><span class=mySmall>&nbsp;<span id='"+ tree[rightTreeID] +"Points' class=mySmall>"+ pointsTree[rightTreeID] +"</span> point(s)<br><br></td></tr>");
		}

		if (rankTop[blah][0] != 0) {
			w.document.write("<tr><td colspan=2 style = \"padding-left:18px\"><span id='displayRight"+ blah +"'><li><b>"+ talent[blah][1] +"</b> - rank <span id='modifyRankRight"+ blah +"' class=mySmallBlack>"+ rankTop[blah][0] +"</span>/<span class=mySmallBlack>"+ talent[blah][2] +"</span><br></span></td></tr>");
			//w.document.write("<tr><td colspan=2 style = \"padding-left:36px\">"+ rankTop[blah][1] +"</td></tr>");
		}
	}

	w.document.write("</table>");	
	w.document.write("</font></body></html>");
	w.document.close();
	
}

