//$('.update:even').load('data.txt');

$.getJSON('data.json',function(data){
    //console.log(data);
    var output="<ul>";
    $.each(data,function(key, val){
        output += '<li>'+val.name+'</li>'
    });
    output+="</ul>"
   // $('#update').html(output); //overwrittting prevoius content
   $('#update').append(output);
});