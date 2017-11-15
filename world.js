
$(document).ready(function(){
    $('#lookup').click(function(){ 
        $.ajax ({
            type: 'GET',
            url: 'world.php',
            data: {country: $("#country").val()},
            success: function(data){
                $("#result").html(data);
            }
        });
    
    });
    
    $('#Abutton').click(function(){ 
        $.ajax ({
            type: 'GET',
            url: 'world.php',
            data: {country: 'all=true'},
            success: function(data){
                $('#result').html(data);
            }
        });
    
    });
});