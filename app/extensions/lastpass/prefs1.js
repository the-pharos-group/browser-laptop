var last_logout_on_close=0,hide_binary_dl_links=!1,show_notifications_help_button=!0,show_hotkeys_help_button=!0,show_advanced_help_button=!0,show_general_help_button=!0,showNotification_is_superset=!1,gray_color="#cdcdcd",black_color="black",notification_checkbox_ids=[{boxid:"showGenerateNotifications",labelid:"lp_docwrite_prefs24"},{boxid:"showFormFillNotifications",labelid:"lp_docwrite_prefs25"},{boxid:"showSaveSiteNotifications",labelid:"lp_docwrite_prefs26"},{boxid:"notificationsBottom",labelid:"lp_docwrite_prefs71"},
{boxid:"showNotificationsAfterClick",labelid:"lp_docwrite_prefs27"},{boxid:"showFillNotificationBar",labelid:"lp_docwrite_prefs28"},{boxid:"showSaveNotificationBar",labelid:"lp_docwrite_prefs29"},{boxid:"showChangeNotificationBar",labelid:"lp_docwrite_prefs30"}];
function onLoad(a){if(a){set_innertext(document.getElementById("save"),gs("Save"));set_innertext(document.getElementById("default"),gs("Restore 'General' Defaults"));set_innertext(document.getElementById("cancel"),gs("Cancel"));sr(document,"helptranslate","value","Help Translate");if(enable_native_idle&&"undefined"!=typeof chrome&&"undefined"!=typeof chrome.idle||(getBG().g_is_win||getBG().g_is_linux||getBG().g_is_mac)&&getBG().have_binary())document.getElementById("idlelogoffspan").style.display=
"block";else if(!g_issafari&&!g_isopera&&!g_ismaxthon&&!g_isfirefoxsdk&&(getBG().g_is_win||getBG().g_is_linux||getBG().g_is_mac))!1==hide_binary_dl_links&&(document.getElementById("idlelogoffneedbinaryspan").style.display="block");else if((g_issafari||g_isopera||g_ismaxthon)&&(getBG().g_is_win||getBG().g_is_mac||getBG().g_is_linux)&&!1==hide_binary_dl_links)document.getElementById("idlelogoffneedbinaryspansafari").style.display="block";if(!getBG().lppassusernamehash&&(getBG().g_is_win||getBG().g_is_mac||
getBG().g_is_linux)&&!getBG().LPISLOC&&!getBG().is_chrome_portable())if(!getBG().g_is_win||!g_issafari)if(getBG().have_binary())document.getElementById("enablenamedpipesspan").style.display="block";else if(!g_issafari&&!g_isopera&&!g_ismaxthon&&!g_isfirefoxsdk&&islastpass&&(getBG().g_is_win||getBG().g_is_linux||getBG().g_is_mac))document.getElementById("enablenamedpipesneedbinaryspan").style.display="block";g_ischrome&&getBG().g_shownewloginoption&&(document.getElementById("enablenewloginspan").style.display=
"block");"undefined"!=typeof chrome&&"undefined"!=typeof chrome.contextMenus&&(document.getElementById("hidecontextspan").style.display="block");g_isopera&&getBG().g_opera_context&&(document.getElementById("hidecontextspan").style.display="block");g_issafari&&(document.getElementById("hidecontextspan").style.display="block");g_isfirefoxsdk&&getBG().g_firefoxsdk_context&&(document.getElementById("hidecontextspan").style.display="block");if(!islastpass||getBG().g_hidehelptranslate)document.getElementById("helptranslate").style.display=
"none";getBG().can_clear_clipboard()&&(document.getElementById("clearclipboardspan").style.display="block");g_issafari&&(document.getElementById("hideshowacctsingroupsspan").style.display="none");if(g_issafari||g_isopera||g_ismaxthon)document.getElementById("shownotificationsspan").style.display="none",document.getElementById("showsavesitenotificationsspan").style.display="none";if(g_isopera||g_ismaxthon)document.getElementById("notificationsbottomspan").style.display="none";getBG().LPISLOC&&(document.getElementById("launchaccountsettings").style.display=
"none",document.getElementById("security_prompts").style.display="block");!getBG().g_can_open_popover&&!g_isfirefoxsdk&&(document.getElementById("popover").style.display="none");getBG().g_nopoll&&(document.getElementById("pollcontainer").style.display="none");getBG().LPISLOC&&(document.getElementById("pollcontainer").style.display=document.getElementById("otpcontainer").style.display="none");"0"===getBG().g_prefoverrides.account_recovery&&(document.getElementById("otpcontainer").style.display="none");
if(getBG().g_hidevault||getBG().g_hideshowvault)document.getElementById("showvaultcontainer").style.display="none";getBG().g_hidesaedhotkey&&(document.getElementById("saedhkrow").style.display="none");getBG().g_hidelogoffprefs&&(document.getElementById("logoffprefscontainer").style.display="none",document.getElementById("security").style.display="none");getBG().g_hideappearancebox&&(document.getElementById("appearancespan").style.display="none");getBG().g_hidesearch&&(document.getElementById("searchhkrow").style.display=
"none");getBG().g_offer_popupfill||(document.getElementById("usepopupfillrow").style.display="none");!g_ischrome&&!g_isfirefoxsdk&&(document.getElementById("showmatchingbadgerow").style.display="none");getBG().g_hidevault&&(document.getElementById("homehkrow").style.display="none");getBG().g_hiderecentlyusedlistsize&&(document.getElementById("recentlyusedlistsizespan").style.display="none");getBG().g_hidenotes&&(document.getElementById("searchnotesspan").style.display="none");show_hotkeys_help_button||
(document.getElementById("hotkeys_help").style.display="none");g_issafari&&(document.getElementById("htmlindialogspan").style.display="none");populate();if(!0==showNotification_is_superset&&!g_issafari&&!g_isopera){document.getElementById("showNotifications").addEventListener("click",function(a){supernotification_handler(a)});for(var b in notification_checkbox_ids)(g_issafari||g_isopera)&&"showSaveSiteNotifications"==notification_checkbox_ids[b].boxid||(document.getElementById(notification_checkbox_ids[b].boxid).addEventListener("click",
function(a){notification_checkbox_handler(a)}),!1==document.getElementById("showNotifications").checked?(document.getElementById(notification_checkbox_ids[b].boxid).addEventListener("click",function(a){notification_checkbox_handler(a)}),document.getElementById(notification_checkbox_ids[b].labelid).style.color=gray_color):document.getElementById(notification_checkbox_ids[b].labelid).style.color=black_color)}a=getBG().g_pref_tab;getBG().g_pref_tab=null;a||(a="general");menuaction(a)}else get_data("prefs",
function(){onLoad(!0)})}function check(a,b,c){document.getElementById(b).checked=1==a.lpGetPref(b,c)}function fillVal(a,b,c){a=a.lpGetPref(b,c);"recentUsedCount"==b&&(a=parseInt(a));document.getElementById(b).value=a}function setSelect(a,b,c){var e=document.getElementById(b);a=a.lpGetPref(b,c);for(b=0;b<e.options.length;b++)if(a==e.options[b].value){e.selectedIndex=b;break}}
function showChromeLanguageError(){alert(gs("Google Chrome requires that extensions use the same language as the browser, so in order to switch LastPass's language, please change the main browser language under Chrome's Options."));document.getElementById("save").focus()}
function populate(){createMenu();filldefaultffid();fillLanguage();var a=getBG();g_isfirefoxsdk?(document.getElementById("disablecrpw").checked=!getBG().remembersignons,getBG().remembersignons&&(document.getElementById("disablecrpwspan").style.display="block")):g_ischrome&&"undefined"!=typeof a.chrome.privacy&&"undefined"!=typeof a.chrome.privacy.services&&"undefined"!=typeof a.chrome.privacy.services.passwordSavingEnabled?a.chrome.privacy.services.passwordSavingEnabled.get({},function(a){document.getElementById("disablecrpw").checked=
!a.value;if("controlled_by_this_extension"==a.levelOfControl||"controllable_by_this_extension"==a.levelOfControl&&a.value)document.getElementById("disablecrpwspan").style.display="block"}):check(a,"disablecrpw",1);check(a,"logoffWhenCloseBrowser",0);check(a,"highlightFields",1);check(a,"automaticallyFill",1);check(a,"showvault",a.g_showvaultdefault);check(a,"showAcctsInGroups",1);check(a,"hideContextMenus",0);check(a,"donotoverwritefilledfields",0);check(a,"showNotifications",1);check(a,"showGenerateNotifications",
1);check(a,"showFormFillNotifications",1);check(a,"showSaveSiteNotifications",0);check(a,"notificationsBottom",0);check(a,"showNotificationsAfterClick",1);check(a,"showFillNotificationBar",1);check(a,"showSaveNotificationBar",1);check(a,"showChangeNotificationBar",1);check(a,"usepopupfill",1);check(a,"showmatchingbadge",1);check(a,"warninsecureforms",0);check(a,"dontfillautocompleteoff",0);check(a,"openloginstart",a.LPISUPEK?1:0);check(a,"storeLostOTP",1);check(a,"enablenamedpipes",1);check(a,"enablenewlogin",
1);check(a,"clearfilledfieldsonlogoff",0);check(a,"toplevelmatchingsites",0);check(a,"htmlindialog",0);fillVal(a,"logoffWhenCloseBrowserVal","0");fillVal(a,"idleLogoffVal","");a.lpdbg("idle","filled idleLogoffVal with "+document.getElementById("idleLogoffVal").value);document.getElementById("idleLogoffEnabled").checked=0<parseInt(document.getElementById("idleLogoffVal").value);fillVal(a,"autoautoVal","25");document.getElementById("autoautoEnabled").checked=0<parseInt(document.getElementById("autoautoVal").value);
fillVal(a,"pollServerVal","15");document.getElementById("pollServerEnabled").checked=0<parseInt(document.getElementById("pollServerVal").value);fillVal(a,"clearClipboardSecsVal","30");document.getElementById("clearClipboardSecsEnabled").checked=0<parseInt(document.getElementById("clearClipboardSecsVal").value);check(a,"searchNotes",1);check(a,"recentUsed",1);fillVal(a,"recentUsedCount","10");document.getElementById("recentUsed").checked=0<parseInt(document.getElementById("recentUsedCount").value);
setSelect(a,"openpref","tabs");setSelect(a,"defaultffid","0");setSelect(a,"language","");last_logout_on_close=a.lpGetPref("logoffWhenCloseBrowser",0);last_logout_on_close_val=a.lpGetPref("logoffWhenCloseBrowserVal",0);for(var b="generateHk recheckHk searchHk nextHk prevHk homeHk submitHk saveallHk logoffHk defaultffidHk openpopoverHk".split(" "),c=0;c<b.length;c++){var e=b[c],g=a.lpGetPref(e+"KeyCode"),f=a.lpGetPref(e+"Mods");"undefined"!=typeof g&&"undefined"==g&&(g=0);"undefined"!=typeof f&&"undefined"==
f&&(f=0);optionsData.HotKeys[e+"KeyCode"]=g;optionsData.HotKeys[e+"Mods"]=f;writeHotKeyValue(e)}document.getElementById("login_site_prompt").checked=a.g_prompts.login_site_prompt;document.getElementById("edit_site_prompt").checked=a.g_prompts.edit_site_prompt;document.getElementById("edit_sn_prompt").checked=a.g_prompts.edit_sn_prompt;document.getElementById("view_pw_prompt").checked=a.g_prompts.view_pw_prompt;document.getElementById("view_ff_prompt").checked=a.g_prompts.view_ff_prompt;a=parseInt(a.lpGetPref("Icon",
0))+1;1==a&&(a=2);document.getElementById("icons"+a)&&(document.getElementById("icons"+a).checked=!0)}function filldefaultffid(){var a=document.getElementById("defaultffid");a.options[0]=new Option("","0",!1,!1);for(var b in getBG().g_formfills)getBG().check_ident_ffid(getBG().g_formfills[b].ffid)&&(a.options[a.options.length]=new Option(getBG().g_formfills[b].decprofilename,getBG().g_formfills[b].ffid,!1,!1))}
function fillLanguage(){var a=document.getElementById("language"),b;for(b in g_langs)if(!g_ischrome||""==b)a.options[a.options.length]=new Option(gs(g_langs[b]),b,!1,!1)}
function createMenu(){var a={general:{title:gs("General"),cmd:"general"},notifications:{title:gs("Notifications"),cmd:"notifications"},hotkeys:{title:gs("HotKeys"),cmd:"hotkeys"},accountsettings:{title:gs("Account Settings"),cmd:"accountsettings",hidden:getBG().g_hideacctsettings},advanced:{title:gs("Advanced"),cmd:"advanced"},icons:{title:gs("Icons"),cmd:"icons",hidden:g_issafari||g_ismaxthon||!1},test:null},b=[],c,e={};for(c in a)if(null==a[c]){var g=document.createElement("div");g.id="menu"+c;
g.className="menuspacer";g.appendChild(document.createElement("div"));b.push(g)}else{g=document.createElement("div");g.id="menu"+c;var f="menubutton";"undefined"!=typeof a[c].hidden&&a[c].hidden&&(f+=" displaynone");g.className=f;"undefined"!=typeof a[c].cmd&&g.setAttribute("data-lpcmd",a[c].cmd);f=document.createElement("a");f.id="menutext"+c;f.className="menubuttontext";set_innertext(f,a[c].title);g.appendChild(f);b.push(g);"undefined"!=typeof a[c].cmd&&(e["menu"+c]=function(){menuaction(this.getAttribute("data-lpcmd"))})}LP_decimate_children(document.getElementById("menu"));
for(c=0;c<b.length;c++)document.getElementById("menu").appendChild(b[c]);for(c in a)a[c]&&("undefined"!=typeof a[c].hidden&&a[c].hidden)&&(document.getElementById("menu"+c).style.display="none");for(c in e)document.getElementById(c).addEventListener("click",e[c])}function ischecked(a){return document.getElementById(a).checked?1:0}function getVal(a){return document.getElementById(a).value}function selectedValue(a){a=document.getElementById(a);return a.options[a.selectedIndex].value}
function dosave(a){for(var b=getBG(),c=!1,e=!1,g="generateHk recheckHk searchHk nextHk prevHk homeHk submitHk saveallHk logoffHk defaultffidHk openpopoverHk".split(" "),f=!1,d=0;d<g.length-1;d++){var h=optionsData.HotKeys[g[d]+"KeyCode"];if(!("undefined"==typeof h||!h||""==h||0==h||"0"==h)){var l=optionsData.HotKeys[g[d]+"Mods"];if(!("undefined"==typeof l||!l||""==l)){for(var m=d+1;m<g.length;m++){var j=optionsData.HotKeys[g[m]+"KeyCode"];if(!("undefined"==typeof j||!j||""==j||0==j||"0"==j)){var n=
optionsData.HotKeys[g[m]+"Mods"];if(!("undefined"==typeof n||!n||""==n)&&j==h&&n==l){f=!0;break}}}if(f)break}}}if(f)return alert(gs("You cannot assign more than one HotKey the same value.")),!1;f=!1;document.getElementById("login_site_prompt").checked!=b.g_prompts.login_site_prompt&&(f=!0);document.getElementById("edit_site_prompt").checked!=b.g_prompts.edit_site_prompt&&(f=!0);document.getElementById("edit_sn_prompt").checked!=b.g_prompts.edit_sn_prompt&&(f=!0);document.getElementById("view_pw_prompt").checked!=
b.g_prompts.view_pw_prompt&&(f=!0);document.getElementById("view_ff_prompt").checked!=b.g_prompts.view_ff_prompt&&(f=!0);if(f&&!a&&b.lploggedin)b.security_prompt(function(){dosave(!0)});else{b.lpPutGblPref("disablecrpw",ischecked("disablecrpw"));var k=!1,d=b.g_prefoverrides;if("undefined"==typeof d.logoffclosebrowser||-1==d.logoffclosebrowser)b.lpPutGblPref("logoffWhenCloseBrowser",ischecked("logoffWhenCloseBrowser")),a=parseInt(getVal("logoffWhenCloseBrowserVal")),0<=a&&!isNaN(a)&&b.lpPutGblPref("logoffWhenCloseBrowserVal",
a);else if(ischecked("logoffWhenCloseBrowser")!=last_logout_on_close||getVal("logoffWhenCloseBrowserVal")!=last_logout_on_close_val)k=!0;h=getVal("idleLogoffVal");if(document.getElementById("idleLogoffEnabled").checked){if(a=parseInt(h),0>=a||isNaN(a))h="15"}else h="0";"undefined"==typeof d.logoffidle||-1==d.logoffidle?(b.lpdbg("idle","setting idleLogoffVal to "+h),b.lpPutUserPref("idleLogoffVal",h)):h!=d.logoffidle&&(b.lpdbg("idle","not setting idleLogoffVal due to company policy"),k=!0);b.lpGetPref("pollServerVal",
"15")!=getVal("pollServerVal")&&("undefined"==typeof b.g_flags.pollIntervalSetByPolicy?(d=getVal("pollServerVal"),document.getElementById("pollServerEnabled").checked?0>=parseInt(d)?d="15":5>parseInt(d)&&(d="5"):d="0",b.lpPutUserPref("pollServerVal",d)):k=!0);b.lpPutUserPref("highlightFields",ischecked("highlightFields"));b.lpPutUserPref("automaticallyFill",ischecked("automaticallyFill"));b.lpPutGblPref("showvault",ischecked("showvault"));b.lpPutUserPref("showAcctsInGroups",ischecked("showAcctsInGroups"));
b.lpPutGblPref("hideContextMenus",ischecked("hideContextMenus"));b.lpPutUserPref("donotoverwritefilledfields",ischecked("donotoverwritefilledfields"));b.lpPutUserPref("showNotifications",ischecked("showNotifications"));b.lpPutUserPref("showGenerateNotifications",ischecked("showGenerateNotifications"));b.lpPutUserPref("showFormFillNotifications",ischecked("showFormFillNotifications"));b.lpPutUserPref("showSaveSiteNotifications",ischecked("showSaveSiteNotifications"));b.lpPutUserPref("notificationsBottom",
ischecked("notificationsBottom"));b.lpPutGblPref("notificationsBottom",ischecked("notificationsBottom"));b.lpPutUserPref("showNotificationsAfterClick",ischecked("showNotificationsAfterClick"));b.lpPutUserPref("showFillNotificationBar",ischecked("showFillNotificationBar"));b.lpPutUserPref("showSaveNotificationBar",ischecked("showSaveNotificationBar"));b.lpPutUserPref("showChangeNotificationBar",ischecked("showChangeNotificationBar"));d=b.lpGetPref("usepopupfill",1);ischecked("usepopupfill")!=d&&(c=
!0);b.lpPutUserPref("usepopupfill",ischecked("usepopupfill"));b.lpPutGblPref("usepopupfill",ischecked("usepopupfill"));b.lpPutUserPref("showmatchingbadge",ischecked("showmatchingbadge"));"undefined"!=typeof chrome&&!ischecked("showmatchingbadge")&&b.clear_badge_text();d=getVal("autoautoVal");document.getElementById("autoautoEnabled").checked?0>=parseInt(d)?d="25":10>parseInt(d)&&(d="10"):d="0";b.lpPutUserPref("autoautoVal",d);b.lpPutUserPref("warninsecureforms",ischecked("warninsecureforms"));b.lpPutUserPref("dontfillautocompleteoff",
ischecked("dontfillautocompleteoff"));d=getVal("clearClipboardSecsVal");document.getElementById("clearClipboardSecsEnabled").checked?0>=parseInt(d)&&(d="30"):d="0";b.lpPutUserPref("clearClipboardSecsVal",d);b.lpPutUserPref("searchNotes",ischecked("searchNotes"));b.lpPutUserPref("recentUsed",ischecked("recentUsed"));ischecked("recentUsed")?b.lpPutUserPref("recentUsedCount",parseInt(getVal("recentUsedCount"))):b.lpPutUserPref("recentUsedCount","0");b.lpPutGblPref("openloginstart",ischecked("openloginstart"));
b.lpPutGblPref("storeLostOTP",ischecked("storeLostOTP"));b.lpPutUserPref("storeLostOTP",ischecked("storeLostOTP"));d=b.lpGetPref("enablenamedpipes",1);a=ischecked("enablenamedpipes");a!=d&&(c=!0);b.lpPutGblPref("enablenamedpipes",a);b.lpPutGblPref("enablenewlogin",ischecked("enablenewlogin"));b.lpPutUserPref("clearfilledfieldsonlogoff",ischecked("clearfilledfieldsonlogoff"));b.lpPutUserPref("toplevelmatchingsites",ischecked("toplevelmatchingsites"));b.lpPutGblPref("htmlindialog",ischecked("htmlindialog"));
b.lpPutUserPref("openpref",selectedValue("openpref"));b.lpPutUserPref("defaultffid",selectedValue("defaultffid"));d=b.lpGetPref("language","");a=selectedValue("language");d!=a&&(c=!0);b.lpPutGblPref("language",a);d=1==last_logout_on_close&&0==last_logout_on_close_val;(ischecked("logoffWhenCloseBrowser")&&0==getVal("logoffWhenCloseBrowserVal"))!=d&&(e=!0);ischecked("storeLostOTP")||b.DeleteOTP();for(d=0;d<g.length;d++)a=g[d],b.lpPutGblPref(a+"KeyCode",optionsData.HotKeys[a+"KeyCode"]),b.lpPutGblPref(a+
"Mods",optionsData.HotKeys[a+"Mods"]);for(d=2;5>=d;d++)document.getElementById("icons"+d)&&document.getElementById("icons"+d).checked&&b.lpPutGblPref("Icon",d-1);f&&(b.g_prompts.login_site_prompt=document.getElementById("login_site_prompt").checked,b.g_prompts.edit_site_prompt=document.getElementById("edit_site_prompt").checked,b.g_prompts.edit_sn_prompt=document.getElementById("edit_sn_prompt").checked,b.g_prompts.view_pw_prompt=document.getElementById("view_pw_prompt").checked,b.g_prompts.view_ff_prompt=
document.getElementById("view_ff_prompt").checked,(g_issafari||g_isopera||g_ismaxthon||g_isfirefoxsdk)&&b.update_prompts(),b.rewritelocalfile());(ischecked("logoffWhenCloseBrowser")||ischecked("idleLogoffEnabled"))&&(1==b.lpGetPref("rememberpassword",-1)||b.g_master_password_saved)?confirmex(gs("You currently have LastPass set to remember your password.  Doing so essentially makes the automatically log out options you've chosen useless.  Would you like LastPass to stop remembering your password?"),
function(){b.lpPutGblPref("rememberpassword",0);b.deletesavedpw(b.g_username);dosave2(c,e,k)},function(){dosave2(c,e,k)}):dosave2(c,e,k)}}
function dosave2(a,b,c){var e=getBG();"undefined"!=typeof chrome&&e.createContextMenus();e="";a?e=gs("You must restart your browser before all of the changes will take effect."):b&&(e=gs("You must restart Chrome or logoff and back in to get 'Logoff on Browser Close' changes to take effect"));c&&(""!=e&&(e="\n\n"+e),e=gs("Company policy prevents changing some settings, not all updates have been saved.")+e);""!=e?alertex(e,dosave3):dosave3()}
function dosave3(){var a=getBG();a.lpWriteAllPrefs();a.setprefs("all","all");g_issafari||g_isopera||g_ismaxthon||g_isfirefoxsdk?a.update_prefs("prefs"):(g_ischrome&&("undefined"!=typeof a.chrome.privacy&&"undefined"!=typeof a.chrome.privacy.services&&"undefined"!=typeof a.chrome.privacy.services.passwordSavingEnabled)&&a.chrome.privacy.services.passwordSavingEnabled.get({},function(b){var c=document.getElementById("disablecrpw").checked;c==b.value&&a.chrome.privacy.services.passwordSavingEnabled.set({value:!c})}),
a.drawIconAtRotation(0));setTimeout(function(){getBG().closecurrenttab("prefs.html")},0)}function docancel(){setTimeout(function(){getBG().closecurrenttab("prefs.html")},0)}function openaccountsettings(){var a=getBG();a&&(a.unlock_plug2web(),a.openURL(a.base_url+"?ac=1&opensettings=1"));setTimeout(function(){window_close("prefs.html")},0)}function openhelptranslate(){var a=getBG();a&&a.openURL(a.base_url+"translate.php");setTimeout(function(){window_close("prefs.html")},0)}
function getbinary(){var a=getBG();a&&a.install_binary()}var tabs="general notifications hotkeys accountsettings advanced icons".split(" ");
function menuaction(a){var b=a[0].toUpperCase()+a.substr(1),c=document.getElementById("default");c.style.display="Accountsettings"==b?"none":"block";set_innertext(c,sprintf("Restore '%s' Defaults",b));for(var e in tabs)b=tabs[e],document.getElementById("menu"+b).className="menubutton",document.getElementById(b).style.display="none";document.getElementById("menu"+a).className="menubutton active";document.getElementById(a).style.display="block"}
function supernotification_handler(a){if(!0==showNotification_is_superset){if(null==a)return!1;a=a.target;if(null==a)return!1;var b;if(null!=a&&"undefined"!=typeof a.checked){b=!0==a.checked?black_color:gray_color;for(var c in notification_checkbox_ids)(g_issafari||g_isopera)&&"showSaveSiteNotifications"==notification_checkbox_ids[c].boxid||(document.getElementById(notification_checkbox_ids[c].boxid).checked=a.checked,document.getElementById(notification_checkbox_ids[c].labelid).style.color=b)}}return!1}
function notification_checkbox_handler(a){if(!0==showNotification_is_superset){if(null==a)return!1;a=a.target;if(null==a)return!1;var b=document.getElementById("showNotifications");"undefined"!=typeof a.checked&&!1==b.checked&&(a.checked=!1)}return!1}
function openhelp(a){switch(a){case "general":a="gengeneralprefs";break;case "appearance":a="genappearanceprefs";break;case "formfill":a="genformfillprefs";break;case "security":a="gensecurityprefs";break;case "notifications":a="notificationprefs";break;case "hotkeys":a="hotkeysprefs";break;case "advanced":a="advancedprefs";break;case "icons":a="iconsprefs";break;default:a="generalprefs"}var b=getBG(),c;b&&(c="function"==typeof b.gethelpurl?b.gethelpurl():b.g_helpurl,b.openURL(c+"&topic="+a));return!1}
;