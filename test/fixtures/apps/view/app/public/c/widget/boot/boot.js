define('component/widget/boot/boot.js', function(require, exports, module){(function(global, undefined){
  pagelet.router('*', function(ctx, options, e, next){
    console.info('pagelet.router', ctx, options);
    next();
  });
})(window);
});