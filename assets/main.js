$(function() {
  var codeschool_report_card_url = "https://www.codeschool.com/users/998004.json";
  var courses_completed = "";

  $.ajax({
    url: codeschool_report_card_url,
    dataType: 'jsonp',
    success: function(response) {
      courses_completed = response.courses.completed;
      $.each(response.courses.completed, function(index, value){
        var link = "<a href='" + value.url + "' target='_blank' class='btn btn-primary'>See Course</a>";
        var course_title = "<h3>" + value.title + "<h3>";
        var course_image = "<img src='" + value.badge + "' alt='" + value.title + " course logo.'/>";
        var badge_html = "<div class='course'>" +
        course_title +
        course_image +
        link +
        "</div>";
        $(badge_html).appendTo($('#badges'));
      })
    }
  });


});
