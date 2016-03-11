
// $(document).ready(function() {

// 	setInterval(nightmare, 200);

// });


// function nightmare(){
// 	$.getJSON("color.php", { }, function(data){
// 		$("body").css("background-color","rgb("+data.r+","+data.g+","+data.b);
// 	});
// }

// function popUp(){
// 	$.getJSON("color.php", { }, function(data){
// 		$("body").append("<div class = popup></div>")
// 		$(".popup").css({
// 			"width" : "200px",
// 			"heigth" : "200px",
// 			"position"  : "absolute",
// 			"left" : (Math.random()*1000)+1,
// 			"top" : (Math.random()*1000)+1,
// 			"background-color":"rgb("+data.r+","+data.g+","+data.b+")"
// 		});
// 	});
// }


$(document).ready(function() {
 
        setInterval(nightmare,200);
        $(document).on("click", "#cancer", function(){
                $(this).addClass('animated hinge');            
 
        });
       
 
 
 
 
});
function nightmare(){
                $.getJSON("color.php",{ },function(data){
                var divsize = ((Math.random()*100) + 50).toFixed();
            var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
            $newdiv = $('<div/>').css({
                'border-radius':'10px',
                'width':divsize+'px',
                'height':divsize+'px',
                        'background-color': "rgb("+data.r+","+ data.g +","+ data.b +",0.8)"    });
 
            // make position sensitive to size and document's width
            var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
            var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
                $newdiv.attr('id', 'cancer');
                $newdiv.addClass('animated tada');
 
            $newdiv.css({
                'position':'absolute',
                'left':posx+'px',
                'top':posy+'px',
                'display':'none'
            }).appendTo( 'body' ).fadeIn(200)
       
        });
};