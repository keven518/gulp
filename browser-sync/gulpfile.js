var gulp = require("gulp");
var browserSync = require('browser-sync');  //

gulp.task("sync1", function() {
  console.log("我是一个同步任务");
});

gulp.task("async", function(done) {
  setTimeout(function(){
    console.log("我是一个异步任务");
    done();
  }, 2000);  
});

gulp.task("src-dist", function(){
  gulp.src("./*.html")
      .pipe(gulp.dest("./dist"));
})

gulp.task('html:watch', function () {
  gulp.watch('./*.html', ['src-dist']);
});

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./",
            index: 'dist/kv.html' 
        }
    });
});

gulp.task("syncs", ["sync1", "async", "html:watch", "browser-sync"], 
  function(){
    console.log("砖搬完了！");
  });