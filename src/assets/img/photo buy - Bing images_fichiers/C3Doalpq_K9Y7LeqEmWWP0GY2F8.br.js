var MySavesAPIUtils;(function(n){function t(t,i,r,u,f){var e={CustomData:"{}",ItemTagPath:r||u};return f&&(e.SourceCollectionId=f),n.itemFromSchema(t,i,n.GenericString,e)}function r(i,r,u,f,e,o,s,h){var c,l="/"+o+"/";n.postRequest(n.addUrl,i,(c={},c[n.TargetCollectionAttr]={CollectionTitle:e},c.Items=[t(u,r,f,l)],c[n.CollectionItemTypeAttr]=n.GenericString,c),s,h)}function u(n,t,r,u,f){i(n===null||n===void 0?void 0:n.ItemTagPath)&&MySavesEdgeApiService.addItemsToExistingCollection(n,t,f).then(function(n){n.isSuccess&&r(n)})["catch"](u)}function f(n,t,r,u,f){i(n===null||n===void 0?void 0:n.ItemTagPath)&&MySavesEdgeApiService.addItemsToNewCollection({CollectionTitle:t,Item:n},f).then(function(n){n.isSuccess&&r(n)})["catch"](u)}function e(i,r,u,f,e,o,s,h){var c;n.postRequest(n.delUrl,i,(c={items:[t(u,r,f,"/"+o+"/",e)],isGeneric:!0},c[n.CollectionItemTypeAttr]=n.GenericString,c),s,h)}function o(t,i,r,u,f){var e,o;i&&r&&(o={},o.Id=i,o.SourceCollectionId=r,n.postRequest(n.delUrl,t,(e={},e[n.CollectionItemTypeAttr]="all",e.items=[o],e.itemReferences=[],e),u,f))}function s(n,t){return MySavesEdgeApiService.isDataPointingToSameItem(n,t)}function i(n){return(n===null||n===void 0?void 0:n.indexOf("/prism/edge/"))===0||(n===null||n===void 0?void 0:n.indexOf("/prism/imagecreator/"))===0}n.ag=r;n.dg=e;n.agai=u;n.agnai=f;n.dgai=o;n.cg=s})(MySavesAPIUtils||(MySavesAPIUtils={}))