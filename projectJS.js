document.write("<h1 style='color:red;font-family:tahoma;text-align:center;'>Anish Koirala</h1>");
document.write("<h2 style='color:red;font-family:garamond;font-weight:italic;text-align:center;'>WEB 115 - Section 2101</h2>");
document.write("<h1><center>Build Your Resume</h1>");

document.write("Enter your Full Name<br><input type='text'  id='fullname'>");

document.write("<p>Enter your address:<br><input type='text'   id='address'></p>");


document.write("<p>Enter your phone number:<br><input type='number'  id='phone'></p>");


document.write("<p>Enter your e-mail address:<br><input type='email' id='email'></p>");


document.write("<p>Enter your Personal Information:<br><textarea id='pi'></textarea></p>");


document.write("<p>Enter your Career Objective:<br><textarea  id='co'></textarea></p>");


document.write("<p>Enter your Educational Background:<br><textarea  id='eb'></textarea></p>");


document.write("<p>Enter your most recent employment experience:<br><textarea  id='ee'></textarea></p>");

document.write("<p>Entry: <input type='date'  value='' id='myDate1'><br>  Exit: <input type='date' value='' id='myDate2'></p>");

document.write("<p>Enter details of your experience:<br><textarea  id='details1'></textarea></p>");
document.write("<p>Entry: <input type='date'  value='' id='myDate3'><br> Exit: <input type='date'  value='' id='myDate4'></p>");

document.write("<p>Enter details of your experience:<br><textarea  ' id='details2'></textarea></p>");
document.write("<p>Entry: <input type='date'  value='' id='myDate5'><br>  Exit: <input type='date'  value='' id='myDate6'></p>");
document.write("<p>Enter details of your experience:<br><textarea  id='details3'></textarea></p>");

document.write("<p>Entry: <input type='date'  value='' id='myDate7'><br>  Exit: <input type='date'  value='' id='myDate8'></p>");

document.write("<p>Enter your character references:<br><textarea  ' id='cr'></textarea></p>");
document.write("<p>Enter your business references:<br><textarea  ' id='br'></textarea></p>");


document.write("<center><input type='button' value='Create Resume' onclick='validateemail()'/>");

function validateemail()
{
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
     if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
          alert("Not a valid e-mail address");
             return false;
    }else{
var fullname=document.getElementById("fullname").value;
var address=document.getElementById("address").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
var pi=document.getElementById("pi").value;
var co=document.getElementById("co").value;
var eb=document.getElementById("eb").value;
var myDate1=document.getElementById("myDate1").value;
var myDate2=document.getElementById("myDate2").value;
var ee=document.getElementById("ee").value;
var details1=document.getElementById("details1").value;
var myDate3=document.getElementById("myDate3").value;
var myDate4=document.getElementById("myDate4").value;
var details2=document.getElementById("details2").value;
var myDate5=document.getElementById("myDate5").value;
var myDate6=document.getElementById("myDate6").value;
var details3=document.getElementById("details3").value;
var myDate7=document.getElementById("myDate7").value;
var myDate8=document.getElementById("myDate8").value;
var cr=document.getElementById("cr").value;
var br=document.getElementById("br").value;
}


function output(title, result) {
    myText += ("<div class = 'clearfix'>\n<div class=theLeft>"+title+"</div>");
    myText +=("<div class=theRight>"+ result +"</div>\n</div>");

}
function textBreak(text){
    var breaks = text.split('\n');
    var newLine = breaks.join('<br>');
    return newLine;
}

myText = ("<html>\n<head>\n<title>Resume</title>\n<style>\nbody{width:1200px;margin:40px auto;font-size:12pt;font-family:verdana;}\n.theLeft {float:left;width:24%;text-transform:uppercase;} \n.theRight {float:right;width:70%;padding-bottom:20px;padding-right:30px;}\n.clearfix{width:inherit;content:'';clear:both;}\n</style>\n<body>")
myText += ("<p style = 'text-transform:uppercase'>" + fullname+"</p>");
myText += ("<p>"+address +"/"+phone+"/"+email+"</p><hr>");
output('Career Objective',co);
output('personal Data',pi);
output('educational background',eb);
myText += ("<p>Employement Experience</p>")

myText += ("<div class = 'clearfix'><div class=theLeft>" + myDate1+" - "+myDate2 + "</div>");
myText +=("<div class =theRight>"+ee+"</div>\n</div>");
myText += ("<div class = 'clearfix'><div class=theLeft>" +myDate3+" - "+myDate4+"</div>");
myText +=("<div class =theRight>"+details1+"</div>\n</div>");
myText += ("<div class = 'clearfix'><div class=theLeft>"+myDate5+" - "+myDate6+"</div>");
myText +=("<div class =theRight>"+details2+"</div>\n</div>");
myText += ("<div class = 'clearfix'><div class=theLeft>"+myDate7+" - "+myDate8+"</div>");
myText +=("<div class =theRight>"+details3+"</div>\n</div>");


output('Character Reference',cr);
output('Business Reference',br);
myText+= ("</body>\n</html>");


flyWindow = window.open('about:blank','myPop','width=1200,height=800,left=200,top=200');
flyWindow.document.write(myText);

}
