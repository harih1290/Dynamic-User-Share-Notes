var level=0,greeting="";
$( document ).ready(function() {  
    debugger;
    $("#timevar").val(Dateload());
    
    $("#boxtitlediv").slideUp(300).delay(800).fadeIn(400);
    processleve(level);
    $("#boxreferiddiv").hide();
    $( "#logid" ).click(function() {
      debugger;
     if($("#msguser").val()==""){
        $('#msgpass').text("Invalid Text");       
        $("#msguser").focus()
     }else{
         debugger;
        $('#msgpass').text(greeting);
        level+=1;
        processleve(level);
     }
    });   
    
});
// $("#sendid").click(function(){
//     console.log("The paragraph was clicked.");
//   });
function processleve(level){
    if(level==0){
        $('#usertitlediv').hide();
        $("#boxcondiv").hide();
        $("#usercondiv").hide();
    }
    if(level==1){
        $("#usertitletxt").val($("#msguser").val()).text($("#msguser").val());
        $("#msguser").val('').text('');
        $('#usertitlediv').slideUp(300).delay(800).fadeIn(400);   
        $("#boxcondiv").slideUp(300).delay(800).fadeIn(400);            
    }
    if(level==2){
        $("#userconttxt").val($("#msguser").val()).text($("#msguser").val());
        $("#msguser").val('').text('');
        $('#usercondiv').slideUp(300).delay(800).fadeIn(400);  
        lockupdata($("#usertitletxt").val(),$("#userconttxt").val());   
     }
}
function Dateload(){
    debugger;
    var d = new Date();
    var n = d.getDay()
	var y = d.getFullYear();
	var m = d.getMonth();
	
	/* Days */
	var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
	var day = weekday[d.getDay()];
	
	/* Months */
	var month = new Array(); 
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
	var n = month[d.getMonth()];
	
	var dated = n +" , "+day+" , "+m+" , "+y;
		
    /* 12 hours format */
	var TwentyFourHour = d.getHours();
    var hour = d.getHours();
   	if(hour > 12) { hour = hour - 12;}    
    if(hour==0){ hour=12; }
    
	/* AM and PM */
	var min = d.getMinutes();
	var mid = ' PM';
    if (min < 10) { min = "0" + min; }
	if(TwentyFourHour < 12) { mid = 'am'; }  
	
   /* Good Day , Good Morning , Good evening */
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Great attitude is like a perfect cup of coffee – do not start you day without it. Good morning.";
    } else if (time < 20) {
        greeting = "The power of imagination makes us infinite. Good day";
    } else {
        greeting = "Believe in yourself! Have faith in your abilities!. Good evening";
    }
    $('#msgpass').text(greeting);    
   return dated +","+hour+':'+min + mid
  
}
function lockupdata(val1,val2){
    debugger;
    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
    var sendInfo = {
        uqid:'',
        title: val1,
        Content: val2,
        Date:strDate
    };
    $.ajax({  
        url: 'http://localhost:3000',  
        type: 'POST',  
        dataType: 'json',  
        data: sendInfo,
        success: function (data, textStatus, xhr) { 
            debugger;
            var urltxt= "file:///C:/Users/harih/NodesApp/index.html?uqid="+data; 
            $('#referid').append("<a id='urltxt' href="+urltxt+">Go to the Page</a>");    //val(urltxt).text(urltxt);
            $("#boxreferiddiv").show();    
            $('#urltxt').slideUp(300).delay(800).fadeIn(400);  
               
           
        },  
        error: function (xhr, textStatus, errorThrown) { 
            debugger; 
            console.log('Error in Operation');  
        }  
    });  
}