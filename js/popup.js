$(function() {
  $.ajax({
    url: "https://api.data.gov/nasa/planetary/apod?concept_tags=True&date=2015-04-05&api_key=c7mAASHv2mvn8U7RIlt1qcQVTUX3YuXyNHGSQP6e",
    type: "GET"
  }).done(function(pictureInfo) {
    console.log(pictureInfo);
    var imgUrl = pictureInfo.url;
    var imgTitle = pictureInfo.title;
    var imgExplanation = pictureInfo.explanation;

    $(".nasa-image").attr("src", imgUrl);
  });
});
