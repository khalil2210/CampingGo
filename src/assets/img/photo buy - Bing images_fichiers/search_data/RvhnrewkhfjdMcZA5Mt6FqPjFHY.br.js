var WfPlanner;(function(n){var i=function(){function t(t,i,r){this.containerWidth=0;this.prefColCount=0;this.prefColWidth=0;this.maxHeight=0;this.isInited=!1;var u=this;t&&i&&!u.isInited&&(u.containerWidth=t.width,u.container=t,u.layoutOptions=i,u.isInited=!0,u.layoutOptions.hMinGap&&u.layoutOptions.hMaxGap&&(typeof n.refineDynamicPaddingInputOptions=="undefined"||n.refineDynamicPaddingInputOptions(u))||u.refineInputOptions(r),u.initVirtualColumns())}return t.prototype.calcAvgItemWidth=function(n){var i,r,t;if(n!=null&&n.length>0){for(i=n.length,r=0,t=0;t<i;t++)r+=n[t].width;return Math.floor(r/i)}return 0},t.prototype.normalizeColumnCount=function(n){var t=this;return Math.floor(Math.min(t.layoutOptions.maxColCount,Math.max(t.layoutOptions.minColCount,n)))},t.prototype.normalizeColumnWidth=function(n){var t=this;return Math.floor(Math.min(t.layoutOptions.maxColWidth,Math.max(t.layoutOptions.minColWidth,n)))},t.prototype.calColumnWidth=function(n){var t=this,i=(t.containerWidth+t.layoutOptions.hGap)/n;return Math.floor(i>t.layoutOptions.hGap?i-t.layoutOptions.hGap:0)},t.prototype.calColumnCount=function(n){var t=this;return Math.floor((t.containerWidth+t.layoutOptions.hGap)/(n+t.layoutOptions.hGap))},t.prototype.refineInputOptions=function(n){var t=this,o=Math.min(t.layoutOptions.maxColWidth,t.calColumnWidth(t.layoutOptions.minColCount)),u,f,e,i,r;for(t.layoutOptions.maxColWidth=Math.max(t.layoutOptions.minColWidth,o),u=Math.max(t.layoutOptions.minColWidth,t.calColumnWidth(t.layoutOptions.maxColCount)),t.layoutOptions.minColWidth=Math.min(t.layoutOptions.maxColWidth,u),f=Math.min(t.layoutOptions.maxColCount,t.calColumnCount(t.layoutOptions.minColWidth)),t.layoutOptions.maxColCount=Math.max(t.layoutOptions.minColCount,f),e=Math.max(t.layoutOptions.minColCount,t.calColumnCount(t.layoutOptions.maxColWidth)),t.layoutOptions.minColCount=Math.min(t.layoutOptions.maxColCount,e),i=t.layoutOptions.minColCount,r=t.calcAvgItemWidth(n),r>0&&(r=t.normalizeColumnWidth(r),i=t.normalizeColumnCount(t.calColumnCount(r)));i<=t.layoutOptions.maxColCount;i++)if(t.layoutOptions.maxColWidth>=t.calColumnWidth(i))break;t.prefColCount=Math.min(i,t.layoutOptions.maxColCount);t.prefColWidth=t.normalizeColumnWidth(t.calColumnWidth(i))},t.prototype.initVirtualColumns=function(){var n=this,i=n.prefColCount,t;for(n.virtualColumns={},t=0;t<i;t++)n.virtualColumns[t]={},n.virtualColumns[t].top=0,n.virtualColumns[t].left=t*(n.layoutOptions.hGap+n.prefColWidth),n.virtualColumns[t].idx=t,n.virtualColumns[t].outputs=[];n.container.setWidth&&n.container.setWidth(i*(n.layoutOptions.hGap+n.prefColWidth)-n.layoutOptions.hGap)},t.prototype.findVirtualColumn=function(){for(var n=this,u=n.prefColCount,i=n.virtualColumns[0].top,r=0,t=1;t<u;t++)n.virtualColumns[t].top<i&&(i=n.virtualColumns[t].top,r=t);return n.virtualColumns[r]},t.prototype.setMaxHeight=function(n){var t=this;n>t.maxHeight&&(t.maxHeight=n,t.container.setHeight&&t.container.setHeight(t.maxHeight))},t.prototype.add=function(n){var i=this,u;if(n!=null&&n.width>0&&n.height>0&&n.render){var e=n.height/n.width,f=Math.floor(Math.min(i.prefColWidth*e,n.height)),o=Math.max(f,i.layoutOptions.minItemHeight),r=i.findVirtualColumn(),t={};t.conWidth=i.prefColWidth;t.conHeight=o;t.itemWidth=Math.min(i.prefColWidth,n.width);t.itemHeight=f;t.left=r.left;t.top=r.top;t.dimIndex=r.idx;t.inputItem=n;u=n.render(t);t.finalSize=u;r.top+=u.height+i.layoutOptions.vGap;r.outputs.push(t);this.setMaxHeight(r.top)}},t.prototype.plan=function(n){var i=this,r,t;if(i.isInited&&n!=null&&n.length>0)for(r=n.length,t=0;t<r;t++)i.add(n[t])},t.prototype.reset=function(){var n=this;n.isInited=!1},t.prototype.adjustOutputFinalSize=function(n,t){var s=this,i,f,e,u,r,o;if(s.isInited&&n&&t&&n.finalSize&&t.height!=n.finalSize.height&&(i=s.virtualColumns[n.dimIndex],i))for(f=t.height-n.finalSize.height,i.top=i.top+f,this.setMaxHeight(i.top),e=!1,u=0;u<i.outputs.length;u++)r=i.outputs[u],o=r.inputItem,r==n?(r.finalSize.height=t.height,e=!0):e&&o.move&&(r.top=r.top+f,o.move(r))},t.prototype.adjustColumnHeight=function(n,t){var i=this.virtualColumns[n];i&&(i.top+=t)},t}(),t;n.isInit||(n.isInit=!0,t={},n.planItems=function(n,r,u){if(n&&n.id&&r&&t){var f=t[n.id];f&&f.isInited||(f=new i(n,r,u),t[n.id]=f);u&&f.isInited&&f.plan(u)}},n.reset=function(n){if(n&&n.id&&t){var i=t[n.id];i&&i.isInited&&i.reset()}},n.adjustOutputFinalSize=function(n,i,r){if(n&&n.id&&i&&r){var u=t[n.id];u&&u.isInited&&u.adjustOutputFinalSize(i,r)}},n.adjustColumnHeight=function(n,i,r){if(n&&n.id&&r){var u=t[n.id];u&&u.isInited&&u.adjustColumnHeight(i,r)}},n.unload=function(){n.isInit=!1;t=null})})(WfPlanner||(WfPlanner={}))