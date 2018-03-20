$("form").on("submit",function(event){
  event.preventDefault();
  var item="<li>"+$("#enter").val();+"</li>"
  $("ul").append(item);
  $("ul li").on("click",function(){
    $(this).css("text-decoration", "line-through");
  })
  $("#enter").val("");
})
