console.log('Welcome to my portfolio site!')

$(document).ready(function() {
  $('.project-preview').mouseenter(function() {
    $(this).children('.project-details').css('opacity', '1')
    $(this).children('.fade').children('.project-image').css('opacity', '0.3')
  })
  $('.project-preview').mouseleave(function() {
    $(this).children('.project-details').css('opacity', '0')
    $(this).children('.fade').children('.project-image').css('opacity', '1')
  })
})
