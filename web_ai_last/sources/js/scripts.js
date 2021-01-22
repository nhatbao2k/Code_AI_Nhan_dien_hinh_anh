$(document).ready(
    function(){
       $('.about-section').waypoint(
           function(direction){
               if (direction=="down"){
                   $('nav').addClass('sticky');

               }
               else{
                   $('nav').removeClass('sticky');
               }
           },{
               offset:'600px'
           }
       )
       $('a').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        event.preventDefault();
    });
    $('.small-icon-1').click(
        function(){
             $('.main-nav').slideToggle(200);
            if ($('.small-icon-1').hasClass('fa-bars')){
                $('.small-icon-1').addClass('fa-times');
                $('.small-icon-1').removeClass('fa-bars')
            }
            else{
                $('.small-icon-1').addClass('fa-bars');
                $('.small-icon-1').removeClass('fa-times')
            }
           
            
        }
    )
}
    
  
       
)