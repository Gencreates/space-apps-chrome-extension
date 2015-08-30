$(function() {
  $.ajax({
    url: "https://api.data.gov/nasa/planetary/apod?concept_tags=True&date=2015-04-05&api_key=c7mAASHv2mvn8U7RIlt1qcQVTUX3YuXyNHGSQP6e",
    type: "GET"
  }).done(function(pictureInfo) {
    // open up the chrome inspector console to see what info you're getting
    console.log(pictureInfo);
    // we're only using the imgURL, use the title and explanation too! add texts and links to the html using jquery (look at the jquery docs!)
    var imgUrl = pictureInfo.url;
    var imgTitle = pictureInfo.title;
    var imgExplanation = pictureInfo.explanation;

    // in english this says jquery get the html elements with the class nasa-image and add the attribute src="http://exampleurl.com"
    $(".nasa-image").attr("src", imgUrl);
  });
});
