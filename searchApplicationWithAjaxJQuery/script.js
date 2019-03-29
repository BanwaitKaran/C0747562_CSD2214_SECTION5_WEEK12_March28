$("#search").keyup(function(){
    var searchField=$(this).val();
    //console.log(searchField);
    var myExp=new RegExp(searchField, "i");

    $.getJSON('data.json',function(data){
        // console.log(data);
        var output="<ul class='searchresults'>";
         $.each(data,function(key, val) {
             if(val.name.search(myExp)!=-1  || val.bio.search(myExp)!=-1){
                output+='<li>';
                output+='<h2>'+val.name+'</h2>';
                output+='<img src="images/'+val.shortname+'_tn.jpg" alt="'+val.shortname+'"/>'
                output+='<p>'+val.bio+'</p>'; 
                output+='</li>';
             }
         });
        output+="</ul>";
        $('#update').html(output);
     });
});

