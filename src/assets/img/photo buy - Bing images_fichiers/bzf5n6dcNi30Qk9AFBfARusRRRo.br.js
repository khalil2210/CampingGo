var VideoRichHoverUtils;(function(n){function o(n,t){var i,r;if(n&&n.length>1){if(typeof getMockImageSrc!="undefined"&&getMockImageSrc&&t&&(i=getMockImageSrc(n),i!=null))return i;if(typeof getMockMotionSrc!="undefined"&&getMockMotionSrc&&!t&&(r=getMockMotionSrc(),r!=null))return r}return n}function i(n,t){n&&(t&&u?u(n,"hide"):f&&f(n,"hide"))}function r(n,t){if(n&&n.childElementCount>0)for(var u in n.children)r(u,t);i(n,t)}function s(n,t){n.forEach(function(n){return i(n,t)})}function h(n,t){n.forEach(function(n){return r(n,t)})}function c(n,t,i){if(!n||!t)return[0,0];var u=e(n,!0,!1,t),f=u[0],o=u[1],r;if(i==VRHEnums.ScrollingDirection.Horizontal||i==VRHEnums.ScrollingDirection.Both)for(r=n;r=r.parentElement;)if(f-=r.scrollLeft,r==t)break;if(i==VRHEnums.ScrollingDirection.Vertical||i==VRHEnums.ScrollingDirection.Both)for(r=n;r=r.parentElement;)if(o-=r.scrollTop,r==t)break;return[f,o]}function l(n){if(!n||!n.thumbnails||n.thumbnails.length<=0)return 0;for(var t=0;t<n.thumbnails.length;t++)if(n.thumbnails[t]&&!isNaN(n.thumbnails[t].clipsCount))return n.thumbnails[t].clipsCount;return 0}function a(n){if(!n||!n.thumbnails||n.thumbnails.length<=0)return null;for(var t=0;t<n.thumbnails.length;t++)if(n.thumbnails[t]&&n.thumbnails[t].clipsTimeline)return n.thumbnails[t].clipsTimeline;return null}function v(n,t,i,r){var f,u;return!n||!n.thumbnails||n.thumbnails.length<=0?null:(u=(f=n.thumbnails.filter(function(n){return n.thumbnailType==t}))===null||f===void 0?void 0:f[0],!u||!u.thumbnailId)?null:ThUrlGenerator.NewThumbnailUrl(u.thumbnailId,i,null,null,r)}function y(n,t){var r,i;return!n||!n.thumbnails||n.thumbnails.length<=0?null:(i=(r=n.thumbnails.filter(function(n){return n.thumbnailType==t}))===null||r===void 0?void 0:r[0],i===null||i===void 0?void 0:i.thumbnailId)}function p(n,t,i){var u,r;if(i===void 0&&(i=!1),i){if(!(((u=t===null||t===void 0?void 0:t.children)===null||u===void 0?void 0:u.length)>0)||!n)return!1;while(n.lastChild)n.removeChild(n.lastChild);for(r=0;r<t.children.length;r++)n.appendChild(t.children[r].cloneNode(!0))}else n.innerHTML=t.innerHTML;return!0}var t=pMMUtils,u=t.rc,f=t.ac,e=t.go;n.getThumbUrlOrMockThumbUrl=o;n.showElement=i;n.showElementTree=r;n.showElementFromList=s;n.showElementTreeFromList=h;n.getOffsetWithScroll=c;n.getClipsCountFromVideoResult=l;n.getClipsTimelineFromVideoResult=a;n.getThumbnailUrlFromVideoResult=v;n.getThumbnailIdFromVideoResult=y;n.updateTargetBySource=p})(VideoRichHoverUtils||(VideoRichHoverUtils={}))