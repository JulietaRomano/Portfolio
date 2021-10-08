(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 2000,
        };
        $.extend(true, setting, options);


        let leftResponsive=243
       let  widthResponsive=480


        const mediumBp= matchMedia("(min-width:600px)");
        const tamaño = mql => {
           if(mql.matches){
               leftResponsive=243
                widthResponsive=480
           } 
            else{
                leftResponsive=0
                widthResponsive=320
            }

        };
        tamaño(mediumBp)
        mediumBp.addListener(tamaño);
        

 
/*
        let leftResponsive=0;
        let widthResponsive=320;
        
        function responsive(){
            if($(screen.width)[0] > 400){
                leftResponsive=243;
                widthResponsive=480;
            }
        }
        responsive();
*/
        var states = [
            { $zIndex: 6, width: 270, height: 218, top: 35, left: 30, $opacity: 0.7 },
            { $zIndex: 7, width: widthResponsive, height: 300, top: 0, left: leftResponsive, $opacity: 1 },
            { $zIndex: 6, width: 270, height: 218, top: 35, left: 700, $opacity: 0.7 },
        ];
        
        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('.trabajo-box').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
