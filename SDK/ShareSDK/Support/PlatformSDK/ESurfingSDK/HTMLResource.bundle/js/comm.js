function getQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=decodeURI(window.location.search).substr(1).match(t);return null!==n?unescape(n[2]):null}function checkSDKFunction(e){return!(!window.JSKitOnClient||"function"!=typeof window.JSKitOnClient[e])}function closeWindow(){checkSDKFunction("methodWithJsonPara")&&(_uxt.push(["_trackEvent",_uxtsdkid+"+SDK"+_uxt_version,"客户端调用","退出登录"]),window.JSKitOnClient.methodWithJsonPara('{"result":-7002,"msg":"退出登录，关闭webview"}'))}function backWay(e,t,n){"undifined"!=typeof t&&("autoLogin"===t?(e.setAttribute("href",_mini_prefix+"auto_login.html"),_uxt.push(["_trackEvent",n,"点击","返回免密登录页面"])):(e.setAttribute("href","javascript:closeWindow();"),_uxt.push(["_trackEvent",n,"点击","调用客户端关闭登录"])))}function fshowNormalLogin(e){commLogin.showDivIndex=1,normalLogin.className="block",codeGroup.className="hide",secondValidate.className="hide",e&&1===e?_uxt.push(["_trackEvent",_uxtsdkid+"+SDK"+_uxt_version+"+安全验证","点击","返回上一页"]):e&&2===e&&_uxt.push(["_trackEvent",_uxtsdkid+"+SDK"+_uxt_version+"+设备校验","点击","返回上一页"])}function uibtnBackClick(){document.getElementById("j-client-back").click()}function linkURL(e){window.location.href=encodeURI(e)}function checkEmpty(e){return e.value.replace(/\s+/g,"").length>0}function show(e){e.classList.remove("hide"),e.classList.add("block")}function hidden(e){e.classList.add("hide"),e.classList.remove("block")}function displayblock(e){e.style.display="block"}function changeBtnDisable(e,t){t?(e.className=btnClasses,e.removeAttribute("disabled")):(e.className=btnClassesDis,e.setAttribute("disabled",!0))}function changeSafeDisable(e,t){t?(e.className=safebtnClasses,e.removeAttribute("disabled")):(e.className=safbtneClassesDis,e.setAttribute("disabled",!0))}function getGuid(){var e=checkSDKFunction("getUserGUID"),t={key:"guid",value:""};return e&&(t.value=window.JSKitOnClient.getUserGUID()),t}function hasThreeLogin(e){if(e&&e.length>0){var t=e.split("|");return-1!=t.indexOf("qq")||(-1!=t.indexOf("weibo")||-1!=t.indexOf("weixin"))}return!1}function checkEntryMobileTitle(e){var t="CT"===e.accessOperator||"CU"===e.accessOperator,n=e.encryptMobile.length>0;return t&&n}function ajax(options){function empty(){}function obj2Url(e){if(e&&e instanceof Object){var t=[];for(var n in e)e.hasOwnProperty(n)&&("function"==typeof e[n]&&(e[n]=e[n]()),null===e[n]&&(e[n]=""),t.push(escape(n)+"="+escape(e[n])));return t.join("&").replace(/%20/g,"+")}return e}var opt={url:"",sync:!0,method:"GET",data:null,username:null,password:null,dataType:null,success:empty,error:empty,timeout:0,header:null};for(var i in options)options.hasOwnProperty(i)&&(opt[i]=options[i]);var accepts={script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},abortTimeout=null,xhr=new XMLHttpRequest;if(xhr.onreadystatechange=function(){if(4==xhr.readyState){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var protocol=/^([\w-]+:)\/\//.test(options.url)?RegExp.$1:window.location.protocol,result,dataType,error=!1;if(xhr.status>=200&&xhr.status<300||304==xhr.status||0===xhr.status&&"file:"==protocol){if("arraybuffer"==xhr.responseType||"blob"==xhr.responseType)result=xhr.response;else{result=xhr.responseText,dataType=opt.dataType?opt.dataType:xhr.getResponseHeader("content-type").split(";",1)[0];for(var i in accepts)accepts.hasOwnProperty(i)&&accepts[i].indexOf(dataType)>-1&&(dataType=i);try{"script"==dataType?eval(result):"xml"==dataType?result=xhr.responseXML:"json"==dataType&&(result=""===result.trim()?null:JSON.parse(result))}catch(e){opt.error(e,xhr),xhr.abort()}}opt.success(result,xhr)}else opt.error(xhr.statusText,xhr)}},"GET"==opt.method){var parse=opt.url.parseURL();opt.data=Object.assign({},opt.data,parse.params),opt.url=parse.pathname+"?"+obj2Url(opt.data),opt.data=null}xhr.open(opt.method,opt.url,opt.sync,opt.username,opt.password),"POST"==opt.method&&xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),opt.header&&xhr.setRequestHeader(opt.header.key,opt.header.value),opt.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),opt.error("timeout",xhr)},opt.timeout)),xhr.send(opt.data?obj2Url(opt.data):null)}function loginByWeibo(){window.JSKitOnClient.methodWithJsonPara('{"result":7003,"msg":"用户选择用微博登录"}')}function loginByQQ(){window.JSKitOnClient.methodWithJsonPara('{"result":7002,"msg":"用户选择用QQ登录"}')}function loginByWechat(){window.JSKitOnClient.methodWithJsonPara('{"result":7001,"msg":"用户选择用微信登录"}')}function loginByeHealthy(){window.JSKitOnClient.methodWithJsonPara('{"result":7010,"msg":"用户选择用翼健康登录"}')}var uxt={initUxt:function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=(document.location.protocol,"https://ux.21cn.com/api/htmlReportRest/getJs.js?pid=A22FA6F381D849C3BFEA045E327FEDE1");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},j_other_line=document.getElementById("j-other-line"),j_other_logo=document.getElementById("j-other-logo"),normalLogin=document.getElementById("j-normal-login"),codeGroup=document.getElementById("j-code-group"),secondValidate=document.getElementById("j-second-validate"),timeouttimmer="8000",waittimmer=500,hasTouch="ontouchstart"in window,START_EV=hasTouch?"touchend":"click",isloginText="该账号已登录，请登录其他账号",_uxtsdkid="test",otherloginText="其他登录方式",onlineTypeText={0:"仅移动数据网络",1:"WiFi和移动数据网络",2:"只开WiFi",3:"无网络"},checkUserLogin=function(e){"true"===e&&("undefined"!=typeof commLogin?(fshowNormalLogin(),popup.showErrorPopup(isloginText,!0)):popup.showErrorPopup(isloginText,!0))},extend=function(e,t){for(var n in t)e.hasOwnProperty(n)&&"object"==typeof e[n]?extend(e[n],t[n]):e[n]=t[n];return t},mobileFormat={strimVal:function(e){return _val=e.value.replace(/\s+/g,""),_val},b_MobileCheck:function(e){return/^1\d{10}$/.test(this.strimVal(e))},b_MobileCodeCheck:function(e){return/^[0-9]{6}$/.test(this.strimVal(e))},b_captchaCheck:function(e){return/^[A-Za-z0-9]{4,6}$/.test(this.strimVal(e))}},btnClasses="ui-btn ",btnClassesDis="ui-btn ui-btn-disable",safebtnClasses="ui-btn mt-87",safbtneClassesDis="ui-btn ui-btn-disable mt-87",guid=getGuid(),kanJianTitle="其他登录方式",smsTitle="短信验证登录",accoutTitle="账号密码登录",popup=function(){var e,t,n,i,o,a,s,r={loadElement:"j-loading-popup",loadingText:"j-loading-text",element:"j-popup",errorText:"j-error-text",errorLoginLink:"j-login-link",okBtn:"j-error-ok",loadAnimate:"j-loading-animate"},l=function(t,r){i.innerHTML=t,isios?setTimeout(function(){a.innerHTML="确定",n.classList.add("block"),n.classList.remove("hide2"),s.classList.remove("loading-animate"),e.classList.add("hide2")},100):(a.innerHTML="确定",n.classList.add("block"),n.classList.remove("hide2"),s.classList.remove("loading-animate"),e.classList.add("hide2")),r?(o.classList.add("hide"),o.classList.remove("block"),a.classList.add("btn-block")):(o.classList.remove("hide"),o.classList.add("block"),a.classList.remove("btn-block")),a.setAttribute("onclick","_uxt.push(['_trackEvent','SDK"+_uxt_version+"+popup弹框','"+t+"','点击确定']);")},c=function(e,t,n){a.innerHTML=e,o.innerHTML=t,o.setAttribute("href",n),o.setAttribute("onclick","_uxt.push(['_trackEvent','SDK"+_uxt_version+"+popup弹框','"+i.innerHTML+"','点击"+t+"']);")},u=function(n){s.classList.add("loading-animate"),e.classList.remove("hide2"),e.classList.add("block"),t.innerHTML=n},d=function(){e.classList.add("hide2")},p=function(){a.addEventListener("click",function(t){n.classList.add("hide2"),e.classList.add("hide2"),t.stopPropagation()})},m={};return m.setOptions=function(l){return extend(r,l),n=document.getElementById(r.element),e=document.getElementById(r.loadElement),t=document.getElementById(r.loadingText),i=document.getElementById(r.errorText),o=document.getElementById(r.errorLoginLink),a=document.getElementById(r.okBtn),s=document.getElementById(r.loadAnimate),p(),m},m.showErrorPopup=l,m.showLoadingPopup=u,m.closePopup=d,m.showErrorBtn=c,m}(),appkeyForUrl={page:"",helpURL:function(){return"https://e.189.cn/sdk/agreement/help.do?returnUrl="+appkeyForUrl.page+"&appKey="+initData.baseV.appkey+"&forSDK=true"},detailURL:function(){return"https://e.189.cn/sdk/agreement/detail.do?returnUrl="+appkeyForUrl.page+"&appKey="+initData.baseV.appkey+"&forSDK=true"},freeURL:function(){return"https://e.189.cn/sdk/agreement/free.do?returnUrl="+_mini_prefix+"auto_login.html&appKey="+initData.baseV.appkey+"&forSDK=true"},linkForLogin:function(e){appkeyForUrl.page=_mini_prefix+"login.html";var t=document.getElementById("j-help-login"),n=document.getElementById("j-agreement-login"),i=document.getElementById("j-client-back"),o=document.getElementById("j-adv-link"),a=document.getElementById("j-client-close");t.setAttribute("href",appkeyForUrl.helpURL()),n.setAttribute("href",appkeyForUrl.detailURL()),t.setAttribute("appkey",_uxtsdkid),n.setAttribute("appkey",_uxtsdkid),i.setAttribute("appkey",_uxtsdkid),null!==a&&a.setAttribute("appkey",_uxtsdkid),_isMiniSdk||o.setAttribute("appkey",_uxtsdkid)},linkForSmsLogin:function(){appkeyForUrl.page=_mini_prefix+"sms_login.html";var e=document.getElementById("j-help-smsLogin"),t=document.getElementById("j-agreement-smsLogin"),n=document.getElementById("j-client-back"),i=document.getElementById("j-adv-link"),o=document.getElementById("j-client-close");t.setAttribute("href",appkeyForUrl.detailURL()),e.setAttribute("href",appkeyForUrl.helpURL()),e.setAttribute("appkey",_uxtsdkid),t.setAttribute("appkey",_uxtsdkid),n.setAttribute("appkey",_uxtsdkid),null!==o&&o.setAttribute("appkey",_uxtsdkid),_isMiniSdk||i.setAttribute("appkey",_uxtsdkid)},linkForAutoLogin:function(){appkeyForUrl.page=_mini_prefix+"auto_login.html";var e=document.getElementById("j-help-autoLogin"),t=document.getElementById("j-agreement-autoLogin"),n=document.getElementById("j-client-back"),i=document.getElementById("j-client-close");e.setAttribute("href",appkeyForUrl.helpURL()),t.setAttribute("href",appkeyForUrl.detailURL()),e.setAttribute("appkey",_uxtsdkid),n.setAttribute("appkey",_uxtsdkid),null!==i&&i.setAttribute("appkey",_uxtsdkid),t.setAttribute("appkey",_uxtsdkid)}},getDeviceData=function(){var e={imsi:"ERWERDFDS",imei:"DerererWEWEW","mac地址":"10:16:14:55"};e=JSON.stringify(e);checkSDKFunction("getDeviceData");return e},checkAccessCode=function(){function e(e,t){for(var n=0;n<e.length;n++)if(t===e[n])return!0;return!1}var t={accessCode:"",accessCodeCreateTime:"",accessCodeVaildTime:"",encryptMobile:"",accessOperator:""},n=!1,i=function(){var e=checkSDKFunction("getCurrTimeStamp");return e?window.JSKitOnClient.getCurrTimeStamp():Date.parse(new Date)},o=function(t){var n=[],i=[];for(var o in t)"encryptMobile"===o?i.push(o):n.push(t[o]);return e(i,"encryptMobile")&&!e(n,"")&&!e(n,void 0)},a=function(){var e=o(t);return i()<parseInt(t.accessCodeCreateTime)+parseInt(1e3*t.accessCodeVaildTime)+1e4&&e},s=function(e){checkAccessCode.setOptions(e);var t=r();if(t.length<=0)preGetMobileUtil.changeOtherLoginWay();else{if("true"===window.JSKitOnClient.isNetworkAvailable("preGetMobileUtil.networkAuthLogin"))switch(preGetMobileUtil.networkAuthLogin(t),t.onlineType){case 0:case"0":_uxt.push(["_trackEvent",_uxtsdkid+"+SDK"+_uxt_version,autoLogin.page,"统计+取号成功+只开移动数据网络"]);break;case 1:case"1":_uxt.push(["_trackEvent",_uxtsdkid+"+SDK"+_uxt_version,autoLogin.page,"统计+取号成功+开启WiFi和移动数据网络"]);break;case 2:case"2":_uxt.push(["_trackEvent",_uxtsdkid+"+SDK"+_uxt_version,autoLogin.page,"统计+取号成功+只开WiFi"]);break;default:_uxt.push(["_trackEvent",_uxtsdkid+"+SDK"+_uxt_version,autoLogin.page,"统计+取号成功+未知网络问题"])}else popup.showErrorPopup(autoLogin.errorMsg.errorunnet,!0)}},r=function(){var e={accessCode:t.accessCode,networkAuthParams:preGetMobileUtil.appendParams(preGetMobileUtil.networkAuthParamsArray)},n=window.JSKitOnClient.encryptParams(JSON.stringify(e));return n.length>0?JSON.parse(n):n},l=function(){t={accessCode:"",accessCodeCreateTime:"",accessCodeVaildTime:"",encryptMobile:"",accessOperator:""}},c={};return c.setOptions=function(e){(n=o(e))&&extend(t,e)},c.checkExpiryDate=a,c.checkAvailable=o,c._timeoutCodeStamp=1e4,c.getTimeStamp=i,c.getEncryptParams=s,c.delAccessCode=l,c}(),preGetMobileUtil={preGetMobileURL:"http://id6.me/openapi/gateway/pe.do",preGetMobileParamArray:[],networkAuthParamsArray:[],networkAuthURL:"https://open.e.189.cn/openapi/gbcs/auth/nh.do",splitFalg:"|",fristParamFalg:"?",appendParams:function(e){for(var t=this,n="",i=0;i<e.length;i++)n+=e[i]+t.splitFalg;return n.substring(0,n.length-1)},preGetMobile:function(){var e=this;if(checkAccessCode.checkExpiryDate())checkAccessCode.getEncryptParams(checkAccessCode.accessCodeData);else{var t=checkSDKFunction("preGetMobile"),n={preGetMobileURL:e.preGetMobileURL,preGetMobileParams:e.appendParams(e.preGetMobileParamArray)};t?window.JSKitOnClient.preGetMobile(JSON.stringify(n)):preGetMobileUtil.changeOtherLoginWay()}},callBackGetMobile:function(e){e=JSON.parse(e),checkAccessCode.checkAvailable(e)?checkAccessCode.getEncryptParams(e):preGetMobileUtil.changeOtherLoginWay()},callBackGetMobileNum:function(e){e=JSON.parse(e),checkAccessCode.checkAvailable(e)?(checkAccessCode.setOptions(e),autoLogin.j_login_mobile.innerHTML=e.encryptMobile,autoLogin.j_login_title.classList.remove("hide2")):autoLogin.j_login_mobile.innerHTML=autoLogin.loginTitleText},networkAuthLogin:function(e){ajax({url:this.networkAuthURL,data:e,method:"POST",dataType:"json",timeout:timeouttimmer,header:guid,success:function(e){preGetMobileUtil.decryptResult(e),window.JSKitOnClient.delAccessCodeData()},error:function(e){"timeout"===e?popup.showErrorPopup(autoLogin.errorMsg.errorunnet,!0):popup.showErrorPopup(autoLogin.errorMsg.errorClientFn,!0),window.JSKitOnClient.delAccessCodeData()}})},decryptResult:function(e){var t=window.JSKitOnClient.decryptResult(JSON.stringify(e));autoLogin.gatewayLoginCallBack(t)},changeOtherLoginWay:function(){autoLogin.gatewayLoginCallBack(JSON.stringify({result:1,onlinetype:"2"}))}},timeoutToken=function(){var e={},t=0,n="",i="true",o=document.getElementById("j-client-back"),a=function(){var e="189mail"===initData.baseV.appkey;n=initData.baseV.tokenAccount?initData.baseV.tokenAccount:n,t=initData.baseV.loginMode?initData.baseV.loginMode:t,i=initData.baseV.modifyAccount?initData.baseV.modifyAccount:i;var o=n.length>0,a=t.length>0;return e&&o&&a},s=function(){"zm"!==t&&"dm"!==t&&"dv"!==t||o.setAttribute("href","javascript:closeWindow();")},r=function(e){var t=timeoutToken.checkTokenTimeout();initData.showAutoLogin(!0),"false"!==initDom.forTokenTimeout&&t&&(timeoutToken.settingModifyAccount(),timeoutToken.handelEntryLoginBox(),e.className="txt-group  hide2",initData.showAutoLogin(!1)),"true"===initDom.forTokenTimeout&&(timeoutToken.handelLinkOtherLogin(),initData.showAutoLogin(!1))},l=function(){"zm"===t||"dv"===t?u():"dm"===t&&d()},c=function(){if("true"!==(initData.baseV.basicapp||"false")){var e=initData.baseV.loginway?initData.baseV.loginway.split("|"):"1";e="1"!==e[0]&&"2"!==e[0]?["1"]:e,autoLogin.j_tab_login_link.href=autoLogin.loginLinkUrl[e[0]]+"?forTokenTimeout=true"}},u=function(){try{var e=commLogin.j_userName.parentNode.getElementsByTagName("span")[0];"false"===i?(commLogin.j_userName.setAttribute("readonly",!0),initClearInput.changeDeleteIcon(e,!1)):initClearInput.changeDeleteIcon(e,!0),commLogin.j_userName.value=n}catch(e){}},d=function(){try{var e=sms_login.j_mobile.parentNode.getElementsByTagName("span")[0];"false"===i?(sms_login.j_mobile.setAttribute("readonly",!0),initClearInput.changeDeleteIcon(e,!1)):initClearInput.changeDeleteIcon(e,!0),sms_login.j_mobile.value=n}catch(e){}},p=function(){"undefined"!=typeof sms_login&&d(),"undefined"!=typeof commLogin&&u()};return e.checkTokenTimeout=a,e.settingModifyAccount=l,e.handelMMTokenOut=c,e.handelEntryLoginBox=s,e.handelLinkOtherLogin=p,e.handleTokenTimeout=r,e}(),initDom={popupMsg:"",forTokenTimeout:"false",initTips:function(){var e=getQueryString("unautologin"),t=(getQueryString("onlinetype"),getQueryString("popupMsg"));initDom.forTokenTimeout=getQueryString("forTokenTimeout"),t=null===t?otherloginText:t;var n=window.location.hash;popup.setOptions(),void 0!==e&&e&&n.length>0&&(popup.showLoadingPopup(initDom.popupMsg+decodeURI(t)),setTimeout(function(){window.location.hash="",popup.closePopup()},1500))}},initClearInput=function(){var e=document.getElementsByClassName("ui-input"),t=document.getElementsByClassName("delete"),n={init:function(){var e=this;e.deleteInputVal(),e.isShowDeleteIcon()},changeDeleteIcon:function(e,t){var n=t?"block":"hide";e.className="delete "+n},deleteInputVal:function(){for(var e=0;e<t.length;e++)!function(e){t[e].addEventListener("touchend",function(e){this.className="delete hide";var t=this.parentNode.getElementsByTagName("input")[0];t.value=null,t.focus(),"undefined"!=typeof sms_login&&sms_login.canSubmit(),"undefined"!=typeof commLogin&&commLogin.canClickSubmitBtn(),_uxt.push(["_trackEvent","SDK"+_uxt_version+"登录框","清除","清除input的输入文字"]),e.stopPropagation()})}(e)},isShowDeleteIcon:function(){for(var t=this,n=0;n<e.length;n++)!function(n){var i=e[n].parentNode.getElementsByClassName("delete")[0];e[n].addEventListener("input",function(){var o=checkEmpty(e[n]);t.changeDeleteIcon(i,o)})}(n)},deleteIconStatus:function(e){var t=this,n=e.parentNode.getElementsByClassName("delete")[0],i=checkEmpty(e);t.changeDeleteIcon(n,i)}};return n.init(),n}(),debounce=function(e,t,n){var i,o,a,s,r,l=function(){var c=Date.now()-s;c<t&&c>=0?i=setTimeout(l,t-c):(i=null,n||(r=e.apply(a,o),i||(a=o=null)))};return function(){a=this,o=arguments,s=Date.now();var c=n&&!i;return i||(i=setTimeout(l,t)),c&&(r=e.apply(a,o),a=o=null),r}},islocalDev=!1,isios=!1,_uxtsdkid="test",initData={j_weixin:document.getElementById("j-weixin"),j_weibo:document.getElementById("j-weibo"),j_qq:document.getElementById("j-qq"),j_eHealthy:document.getElementById("j-eHealthy"),body_height:document.body.offsetHeight,j_loading_popup:document.getElementById("j-loading-popup"),j_popup:document.getElementById("j-popup"),j_bottom_login:document.getElementById("j-bottom-login"),j_tab_login_link:document.getElementById("j-tab-login-link"),j_normal_login:document.getElementById("j-normal-login"),j_vcode_bottom:document.getElementById("j-bottom-vcodeLogin"),j_safe_bottom:document.getElementById("j-bottom-safeLogin"),j_bottom_logo:document.getElementById("j-bottom-logo"),j_auto_login_bottom:document.getElementById("j-auto-login-bottom"),j_auto_login_box:document.getElementById("j-auto-login-box"),deviceHeight:document.body.offsetHeight,init:function(){var e=this,t=null;"undefined"!=typeof autoLogin&&(t=autoLogin),"undefined"!=typeof sms_login&&(t=sms_login),"undefined"!=typeof commLogin&&(t=commLogin),null!==t&&void 0!==initDom&&(initDom.popupMsg=t.tipsMsg.changeMsg,t.initTips=initDom.initTips,t.initTips());var n=window.JSKitOnClient.getClientInitData();n=JSON.parse(n),_uxtsdkid=n.appname?n.appname:"test",isios=!!n.sdktype,iosVersion=n.sdktype?n.sdktype:"ios1.0",null!==n?("flow"===n.appkey&&(n.loginway="2"),e.baseV=n,"function"==typeof t.initDOM&&t.initDOM(),uxt.initUxt(),t.init()):(popup.setOptions(),popup.showErrorPopup("服务器连接失败，请稍候再试",!0))},getAdvertSwitch:function(){var e=this,t="CT"===e.baseV.accessOperator.toUpperCase(),n=e.baseV.operator.toUpperCase().indexOf("CT")>-1,i="189mail"===e.baseV.appkey||"cloud"===e.baseV.appkey;if(t&&i||i&&n)try{ajax({url:"https://open.e.189.cn/api/oauth2/account/getAdvertSwitch.do",data:{clientId:e.baseV.appkey},method:"POST",dataType:"json",sync:!1,timeout:timeouttimmer,header:guid,success:function(t){0===t.result&&"on"===t.advertSwitch?e.showAdv():e.hideAdv()},error:function(t){e.hideAdv()}})}catch(t){e.hideAdv()}},showAdv:function(){var e=document.getElementById("j-adv");document.getElementById("j-adv-box").style.display="block",e.setAttribute("class","adv"),e.setAttribute("src","https://static.e.189.cn/e/2016/source/images/passport-wap/mine/adsl/adv.png"),e.setAttribute("alt","广告")},hideAdv:function(){var e=document.getElementById("j-adv"),t=document.getElementById("j-adv-box"),n=document.getElementById("j-bottom-login"),i=parseInt(n.style.marginTop.replace("px",""))+e.clientHeight;t.style.display="none",e.setAttribute("class",""),e.setAttribute("src",""),e.setAttribute("alt",""),n.style.marginTop=i+"px"},showAutoLogin:function(e){if(!_isMiniSdk){var t=document.getElementById("j-auto-login-box");t.style.display=e?"block":"none"}},bottomPositioin:function(){var e=this,t=e.deviceHeight;if(isios||_isMiniSdk)e.j_bottom_login.setAttribute("style","visibility:visible"),e.j_vcode_bottom&&(e.j_safe_bottom.setAttribute("style","visibility:visible"),e.j_vcode_bottom.setAttribute("style","visibility:visible"));else{!0===checkSDKFunction("getScreenHeight")&&(t=window.JSKitOnClient.getScreenHeight());var n=e.j_normal_login.offsetHeight,i=e.j_bottom_login.offsetHeight,o=t-n-i;if(o<-26&&(o=-26,document.body.style.overflow="auto"),e.j_bottom_login.setAttribute("style","position:static;visibility:visible;margin-top:"+o+"px"),e.j_vcode_bottom){var a=e.j_bottom_logo.offsetHeight,s=t-n-a;_isMiniSdk?s-=30:s=s+e.j_auto_login_box.offsetHeight-30,e.j_safe_bottom.setAttribute("style","visibility:visible;position:static;margin-top:0;padding-top:"+s+"px"),e.j_vcode_bottom.setAttribute("style","visibility:visible;position:static;margin-top:0;padding-top:"+s+"px")}}e.j_loading_popup.style.height=t+"px",e.j_popup.style.height=t+"px"},thirdLogin:function(){var e=this,t=e.baseV&&e.baseV.showthirdlogin?e.baseV.showthirdlogin.split("|"):[],n=!1;if(t.length>0&&e.baseV.showthirdlogin.length>0){for(var i=0;i<t.length;i++){var o=e["j_"+t[i]];o.setAttribute("appkey",_uxtsdkid),void 0!==o&&(n=!0),o&&displayblock(o)}n&&show(j_other_line),_isMiniSdk||show(j_other_logo)}}},_hasClientFucntion=checkSDKFunction("getClientInitData");_hasClientFucntion&&initData.init();