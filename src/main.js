var val='';
$( document ).ready(function() {  
    debugger;
    val=window.location.search;
    // val=val.split('=');
    // val=val[1]
    $.ajax({  
        url: 'http://localhost:3000/get'+val,  
        type: 'GET',  
        dataType: 'json',  
        success: function (data, textStatus, xhr) { 
            debugger;
            if(data=="error"){
                $("#statetitle").val(" ").text("");
                $("#dateinfo").val("").text("");
                $("#statecontent").val("No Data Available").text("No Data Available");
                return false;
            }
            $("#statetitle").val(data.title).text(data.title);
            $("#dateinfo").val(data.Content).text(data.Content);
            $("#statecontent").val(data.Date).text(data.Date);
           
        },  
        error: function (xhr, textStatus, errorThrown) {  
            debugger;
            $("#statetitle").val(" ").text("");
                $("#dateinfo").val("").text("");
                $("#statecontent").val("No Data Available").text("No Data Available");
            console.log('Error in Operation');  
        }  
    });  
});