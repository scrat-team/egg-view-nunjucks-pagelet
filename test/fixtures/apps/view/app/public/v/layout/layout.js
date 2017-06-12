require('framework/zepto');

{
  pagelet.autoload('layout');
  pagelet.cache();
  pagelet.on(pagelet.EVENT_LOAD_ERROR, function(e){
    if(e.error === 'hash inconsistency'){
      location.reload();
    }
  });
}
