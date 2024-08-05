$(document).ready(function(){
$(".tb-reg").hide();
var id=0;
//================== اضافه خاصيه من css ============
$("table tr:even").css("background-color","#f0f0f0")
//==============سنة التخرج=============
for(var i=2023;i>=1995;i--)
$("#std_year").append("<option value='"+i+"'>"+i+"</Option>")
//==============الوقت=============
$("[name=std_am]").click(function(){

var morning=["8-10","10-12"],
evening=["12-2","2-4","4-6"];
$("std_time").empty();
if($(this).val()==="صباحا")
{

for(var time in morning)
$("#std_time").append("<option value='"+morning[time]+"'>"+morning[time]+"</option>)")

}
else{

    for(var time in evening)
    $("#std_time").append("<option value='"+evening[time]+"'>"+evening[time]+"</option>)")
    
}

});
//======
//الصوره الشخصيه

$("#std_image").change(function(){
var img =$("#std_imge").val();
var exts = ['jpg','jpeg','png','gif','bmp'];
var get_ext = img.split('.');
get_ext=get_ext.reverse();
if(img.length>0){
if(exts.indexOf(get_ext[0].toLowerCase())>-1)
return true;

}
else{

    alert("يجب تحميل  صوره بالامتدادات التاليه (jpg, jpeg ,png ,gif ,bmp  )");
    $("#std_image").val("");

    return false;}
}); 

$("#register").on("click",function(e){

e.preventDefault();
$(".tb-reg").show();
$("#show").text("اخفاء");
var name=$("#sd_name").val(),
age=$("#std_age").val(),
gender=$("[name=gender]:checked").val(),

email=$("#std_email").val(),
tel=$("#std_phone").val(),
edu=$("#std_edu").val(),
year=$("#std_year").val(),
time=("#std_time").val()+" "+$("[name_std_am]:checked").val();
$(".tb-body").append("<tr id=>'"+(++id)+"'>"+

"<td >"+(id)+"</td>"+
"<td >"+name+"</td>"+
"<td >"+age+"</td>"+
"<td >"+gender+"</td>"+
"<td >"+email+"</td>"+
"<td >"+tel+"</td>"+
"<td >"+edu+"</td>"+
"<td >"+year+"</td>"+
"<td >"+time+"</td>"+
"<td><a herf='#' id=;del"+(id)+"' onclick=;del("+(id)+")'>x</a></td>"+
"</tr>").slideDown(5000);
$("table tr:even").css("background-color","#f0f0f0");

});
$("#show").on("click",function(e)
{

e.preventDefault();
var name=$(this).text();
if(name=="عرض");
else
$(this).text("اخفاء");

$(this).text("عرض");
$(".tb-reg").fadeToggle("slow");



});



});




