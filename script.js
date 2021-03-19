// Create section.container
document.write('<section class="container">');
    for(let i=1; i<=30; i++){
        var id = String(i);
        document.write('<div class="box unlocked" id="_' + id + '"><i class="fa fa-unlock-alt" onclick=lock("_' + id + '");></i><p onclick=copy(' + id + ');></p></div>');
    }
document.write('</section>');

// Onclick "REFRESH" button make section.container visible
$(".btn").click(function(){
    $(".container").css("display", "flex");
});

// Display Functionality
$(document).ready(function(){
    $(".list").click(function(){
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".box").show("1000");
        }
        else{
            $(".box").not("." + value).hide("1000");
            $(".box").filter("." + value).show("1000");
        }

        $(this).addClass("active").siblings().removeClass("active");
    })
    
})