

  

      $(document).ready(function(){
    
        var owl = $(".owl-carousel")
        
            owl.owlCarousel({
              items:5,
              loop:true,
              margin:10,  
              autoplay:false,
              autoplayHoverPause:true,
              slideTransition:'linear',
              
              responsive:{
                0: {
                  items: 1
                },
                360:{
                  items:3
                },
                1000: {
                  items: 5
                }
               }
              });
        
              $("#botao_anterior").on('click', function(){
                owl.trigger('prev.owl.carousel');      
          });
        
          $("#botao_proximo").on('click', function(){
                owl.trigger('next.owl.carousel');  
              });
        });