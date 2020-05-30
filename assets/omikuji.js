var omikujiResult = [
  "大吉",
  "中吉",
  "小吉",
  "凶"
];

// $(function(){
//   $("#omikujiBtn").click(function(){
//     var result = omikujiResult[Math.floor( Math.random() * omikujiResult.length)];
//     $("#omikujiResult").html("<div class='omikujiResultInner'>" + result + "</div>");
//     // setTimeout("location.reload()",1000);
//   });
// });

$(function() {
  $("#omikujiBtn").click(function() { 
    var btn = $(this);
    btn.prop("disabled", true);
    $("#omikujiImg").addClass("buruburu");
    setTimeout(function() {
    $("#omikujiImg").removeClass("buruburu");
    }, 1500);
    setTimeout(function() {
    $("#omikujiImg").addClass("rotate");
    }, 3000);
    setTimeout(function() {
    var result = omikujiResult[Math.floor( Math.random() * omikujiResult.length)];
    $("#omikujiResult").html("<div class='omikujiResultInner'>" + result + "</div>");
    }, 5000);
    setTimeout(function() {
    $("#omikujiResult").html("<img id='omikujiImg' src='assets/omikuji.png'>");
    btn.prop("disabled", false);
    }, 8000);
  });
});