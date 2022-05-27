$(document).ready(function() {
    $("a").click(function() {
        var url = "json_files/" + $(this).attr("title") + ".json";
        $.getJSON(url, function(data){
            var html = "";
            $.each(data.speakers, function(i, item){
                html += "<h1>" + item.title + "</h1>";
                html += "<img src=" + item.image + ">";
                html += "<h2>" + item.month + "<br>" + item.speaker + "</h2>";
                html += "<p>" + item.text + "</p>";
            });
            $("main").html(html);
        });
    });
}); // end ready