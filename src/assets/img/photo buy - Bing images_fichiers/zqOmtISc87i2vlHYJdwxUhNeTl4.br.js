var ThumbnailPlayer;(function(n){function pt(){b||(b=!0,rt(_w,ct,wt,!0))}function wt(){f=[];b=!1}function ut(n,t,i,r,u,f,e,o){var s=null,h=!0;switch(n){case VRHEnums.ThumbnailType.ST:s=ThUrlGenerator.NewThumbnailUrl(t,i,u,f,e,ThUrlGenerator.CroppingType.SmartRatio,ThUrlGenerator.ResizeMode.Ratio);r==VRHEnums.HoveredElementType.Adult&&(s+="&m=3");break;case VRHEnums.ThumbnailType.MT:case VRHEnums.ThumbnailType.MMMT:h=!1;s=o;break;default:return null}return g(s,h)}function bt(n){if(f[n])return f[n].clientHeight}var et="vrhi",ot="vt_vp",st="vrhtpc",ht="player_ol",ct="unload",k="thumbnailplayer",h="undefined",i=typeof pMMUtils!=h?pMMUtils:null,v=typeof SmartEvent!=h?SmartEvent:null,r=typeof VideoRichHoverUtils!=h?VideoRichHoverUtils:null,t=typeof VRHConsts!=h?VRHConsts:null,c=!1,e=null,d=null,lt=null,g=null,at=null,y=null,o=null,s=null,nt=null,vt=null,p=null,tt=null,it=null,w=null,l=null,rt=null,u=!1,f=[],b=!1,a,ft;if(!c&&i&&i.gebc&&i.sc&&i.sw&&i.sh&&i.ga&&i.gfbc&&i.st&&i.ac&&i.ss&&t&&r&&r.showElementFromList&&r.showElementTree&&v&&v.bind&&(e=i.gfbc,d=i.sepd,lt=i.ga,at=i.sc,y=i.rc,o=i.sw,s=i.sh,nt=i.ss,vt=i.st,p=i.ac,it=i.gsh,u=typeof i.isTest=="function"?i.isTest():!1,tt=r.showElementFromList,w=r.showElement,l=r.showElementTree,g=r.getThumbUrlOrMockThumbUrl,rt=v.bind,c=!0),c&&_w&&!_w[k]){_w[k]=n;function yt(n,t,i,r,u,e,o,s){if(c&&n&&n.length>1){if(!u||!o||!o.thid||!e||e.length<1||!r)return;f[n]&&(f[n]=null);f[n]=new ft(n,t,i,r,u,e,o,s)}return}pt();n.init=yt}n.clientHeight=bt;ft=function(){function n(n,i,r,f,h,c,v,b){var k=this,rt,g;(this.imageThumbnailId=null,this.smtThumbnailLink=null,this.hoverContainer=null,this.videoPlayer=null,this.imageContainer=null,this.smtContainer=null,this.thumbnailContainer=null,this.playerOverlay=null,this.thumbnailPlayerMeta=null,this.instMeta=null,this.thumbnailClientWidth=0,this.thumbnailClientHeight=0,this.pidStr=null,this.isAdultThumb=!1,this.eventBinded=!1,this.richHoverConfig=null,this.isCanceled=!1,this.playerNameStr=null,this.clientHeight=0,this.elementIntialize=function(n,t,i){return(k.isAdultThumb=k.thumbnailPlayerMeta.isAdultThumb,!k.thumbnailPlayerMeta.thid||k.thumbnailPlayerMeta.thid.length<1)?!1:(k.richHoverConfig=n,k.smtThumbnailLink=k.thumbnailPlayerMeta.smtThumbUrl,k.playerNameStr=i,k.thumbnailClientWidth=k.thumbnailPlayerMeta.thumbnailWidth,k.thumbnailClientHeight=k.thumbnailPlayerMeta.thumbnailHeight,k.thumbnailContainer=e(st,t),k.thumbnailContainer==null)?!1:(sj_be(k.thumbnailContainer,"click",k.onClick),sj_be(k.thumbnailContainer,"mousemove",k.onMouseMove),o(k.thumbnailContainer,k.thumbnailClientWidth),s(k.thumbnailContainer,k.thumbnailClientHeight),k.pidStr=k.richHoverConfig.pid,k.imageThumbnailId=k.thumbnailPlayerMeta.thid,!0)},this.prepareSMTPlayer=function(){if(k.updatePlayerStatus(VRHEnums.PlayerStatus.None),k.richHoverConfig.fdmtp)return!1;if(k.smtThumbnailLink){if(k.smtContainer=e(ot,k.thumbnailContainer),!k.smtContainer)return!1;if(k.playerOverlay=e(ht,k.thumbnailContainer),o(k.smtContainer,k.thumbnailClientWidth),s(k.smtContainer,k.thumbnailClientHeight),o(k.playerOverlay,k.thumbnailClientWidth),s(k.playerOverlay,k.thumbnailClientHeight),typeof Html5VideoSMTPlayer!="undefined"&&(k.videoPlayer=Html5VideoSMTPlayer),k.videoPlayer&&k.videoPlayer.init&&k.videoPlayer.init(k.smtContainer,k.playerNameStr,k.thumbnailPlayerMeta,k.instMeta,k.richHoverConfig.enmuteinst))return k.updatePlayerStatus(VRHEnums.PlayerStatus.Loading),a=0,k.eventBind(),!0}return!1},this.eventBind=function(){sj_evt.bind(t.PlayerLoadEvt,k.onVideoLoadding);sj_evt.bind(t.PlayerEndEvt,k.onVideoStop);sj_evt.bind(t.PlayerStartEvt,k.onVideoStart);sj_evt.bind(t.PlayerDownloadEndEvt,k.onVideoDownloadFinish);sj_evt.bind(t.MMSTSeekEvt,k.onVideoSeek);sj_evt.bind(t.FallbackToNonSMTEvt,k.onFallbackToNonSMT);sj_evt.bind(t.PlayerErrEvt,k.onVideoPlayErr);sj_evt.bind(t.HoverCancelEvt,k.onHoverCancel);sj_evt.bind(t.TogglePlayerStatusEvt,k.togglePlayerStatusBetweenPauseAndPlay);u&&sj_evt.bind(t.HoverDisplay,k.onHoverDisplay);k.eventBinded=!0},this.eventUnbind=function(){k.eventBinded&&(sj_evt.unbind(t.PlayerLoadEvt,k.onVideoLoadding),sj_evt.unbind(t.PlayerEndEvt,k.onVideoStop),sj_evt.unbind(t.PlayerStartEvt,k.onVideoStart),sj_evt.unbind(t.PlayerDownloadEndEvt,k.onVideoDownloadFinish),sj_evt.unbind(t.MMSTSeekEvt,k.onVideoSeek),sj_evt.unbind(t.PlayerErrEvt,k.onVideoPlayErr),sj_evt.unbind(t.TogglePlayerStatusEvt,k.togglePlayerStatusBetweenPauseAndPlay),u&&sj_evt.unbind(t.HoverDisplay,k.onHoverDisplay),k.eventBinded=!1)},this.isCallMe=function(n){return k.videoPlayer&&n&&n.length>2&&n[2]===k.playerNameStr},this.onVideoPlayErr=function(n){k.isCallMe(n)&&(k.updatePlayerStatus(VRHEnums.PlayerStatus.Stopped),k.isCanceled=!1,l(k.smtContainer,!1));sj_evt.fire(t.FallbackToNonSMTEvt)},this.onHoverCancel=function(){k.eventUnbind()},this.onHoverDisplay=function(){u&&console.log("hit hover player")},this.onVideoStart=function(n){if(k.videoPlayerStatus!==VRHEnums.PlayerStatus.Playing&&k.isCallMe(n))if(k.isCanceled)k.onVideoStop(n);else a===0&&(a=sb_st(function(){if((sb_ct(a),k.videoPlayerStatus!==VRHEnums.PlayerStatus.Playing)&&k.videoPlayer&&k.isCanceled){k.onVideoStop(n);return}},20))},this.onVideoSeek=function(n){if(k.videoPlayerStatus===VRHEnums.PlayerStatus.Playing&&n&&!(n.length<3)&&k.videoPlayer&&k.videoPlayer.seekVideo){var t=parseInt(n[2]);isNaN(t)||k.videoPlayer.seekVideo(t)}},this.onVideoLoadding=function(n){k.isCallMe(n)&&k.updatePlayerStatus(VRHEnums.PlayerStatus.Loading)},this.onVideoStop=function(n){k.isCallMe(n)&&(k.updatePlayerStatus(VRHEnums.PlayerStatus.Stopped),k.isCanceled=!1,l(k.smtContainer,!1))},this.onVideoDownloadFinish=function(){k.smtContainer&&(k.updatePlayerStatus(VRHEnums.PlayerStatus.Playing),l(k.smtContainer,!0),u&&sj_evt.fire(t.HoverDisplay))},this.onFallbackToNonSMT=function(){k.imageContainer&&(w(k.imageContainer,!0),u&&sj_evt.fire(t.HoverDisplay))},this.onThumbnailLoaded=function(){w(k.imageContainer,!0);sj_evt.fire(t.HoverThumbLoadEvt,k.instMeta,k.playerNameStr)},this.onMouseMove=function(n){var t,i,r=(i=(t=k.thumbnailPlayerMeta)===null||t===void 0?void 0:t.eventHandlerMap)===null||i===void 0?void 0:i[VRHEnums.TriggerEvent.PlayerMouseMove];k.invokeEventHandlers(n,r)},this.onClick=function(n){var t,i,r=(i=(t=k.thumbnailPlayerMeta)===null||t===void 0?void 0:t.eventHandlerMap)===null||i===void 0?void 0:i[VRHEnums.TriggerEvent.PlayerClick];k.invokeEventHandlers(n,r)},this.invokeEventHandlers=function(n,i){for(var r=0;r<(i===null||i===void 0?void 0:i.length);r++)switch(i[r]){case VRHEnums.EventHandler.ReplayPlayer:sj_evt.fire(t.PlayerReplayEvt,k.instMeta,k.playerNameStr);k.updatePlayerStatus(VRHEnums.PlayerStatus.Playing);break;case VRHEnums.EventHandler.TogglePlayerPlayAndPause:k.togglePlayerStatusBetweenPauseAndPlay()&&d(n)}},this.togglePlayerStatusBetweenPauseAndPlay=function(){return k.videoPlayerStatus===VRHEnums.PlayerStatus.Paused?(sj_evt.fire(t.PlayerReplayEvt,k.instMeta,k.playerNameStr),k.updatePlayerStatus(VRHEnums.PlayerStatus.Playing),!0):k.videoPlayerStatus===VRHEnums.PlayerStatus.Playing?(sj_evt.fire(t.PlayerPauseEvt,k.instMeta,k.playerNameStr),k.updatePlayerStatus(VRHEnums.PlayerStatus.Paused),!0):!1},this.initializeThumbnailContainer=function(n,t){if(k.imageContainer=e(et,t),!k.imageContainer)return!1;var i=ut(VRHEnums.ThumbnailType.ST,k.imageThumbnailId,k.isAdultThumb,k.hoverType,k.thumbnailClientWidth,k.thumbnailClientHeight,k.pidStr,k.smtThumbnailLink);return i==null?!1:(k.thumbnailPlayerMeta.smtThumbUrl&&(k.thumbnailPlayerMeta.smtThumbUrl=ut(VRHEnums.ThumbnailType.MT,k.imageThumbnailId,k.isAdultThumb,k.hoverType,k.thumbnailClientWidth,k.thumbnailClientHeight,k.pidStr,k.smtThumbnailLink)),k.thumbnailPlayerMeta.imageThumbUrl=i,k.imageContainer.onload=k.onThumbnailLoaded,k.imageContainer.src=i,k.imageContainer.alt=k.thumbnailPlayerMeta.videoTitle,k.thumbnailPlayerMeta.beginClipIndex>1?nt(k.imageContainer,"margin-left",(1-k.thumbnailPlayerMeta.beginClipIndex)*k.thumbnailClientWidth+"px"):(o(k.imageContainer,k.thumbnailClientWidth),s(k.imageContainer,k.thumbnailClientHeight)),!0)},this.updatePlayerStatus=function(n){var u,i,r;for(u in t.PlayerStatusClassName)i=t.PlayerStatusClassName[u],i&&(y(k.thumbnailContainer,i),y(k.hoverContainer,i));return r=t.PlayerStatusClassName[n],r&&(p(k.thumbnailContainer,r),p(k.hoverContainer,r)),k.videoPlayerStatus=n,!0},!n||n.length<1||!v)||(this.thumbnailPlayerMeta=v,this.hoverType=r,this.hoverContainer=h,b&&(this.instMeta=b),rt=new Array(0),this.elementIntialize(f,h,c))&&this.initializeThumbnailContainer(rt,this.thumbnailContainer)&&(rt.push(this.thumbnailContainer),g=this.prepareSMTPlayer(rt),g||sj_evt.fire(VRHConsts.FallbackToNonSMTEvt),ThumbnailPlayerOverlay&&ThumbnailPlayerOverlay.init&&ThumbnailPlayerOverlay.init(n,h,this.playerNameStr,i,r,this.richHoverConfig,this.thumbnailPlayerMeta,b,g,g?this.videoPlayer.setVolume:null,g?this.videoPlayer.setLastStableVolume:null,g?this.videoPlayer.setMute:null,g?this.videoPlayer.getVolume:null,g?this.videoPlayer.isMute:null),tt(rt,!0),this.clientHeight=it(this.thumbnailContainer))}return n}()})(ThumbnailPlayer||(ThumbnailPlayer={}))