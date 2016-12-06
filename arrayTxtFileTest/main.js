var array;

$(function(){
    $.get('test.txt', function(data){
        array = data.split(',');
        console.log(array);
    });
});