export function loadPage1Plugins() {
  import('./pages/page1/components/*/*.component.js').then(function(componentMetadata) {
    console.log(componentMetadata);
  }, function(error) {
    console.error(error);
  });
  
}
