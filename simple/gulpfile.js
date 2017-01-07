var gulp = require('gulp');

gulp.task('a',function(){
  console.log('a');
})

gulp.task('b',function(){
  console.log('b')
})

gulp.task('kv',['b','a'],function(){
  console.log(22);
})