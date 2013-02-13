$(window).load(function () {

    function timer() {
        var dd = new Date();
        var hr = dd.getHours();
        if (hr >= 12 && hr <= 24) {
            //$('sup').html('PM');
            dura = 'PM';
        }

        else{
            
            //$('sup').html('AM');
            dura = 'AM'
        }

        $('.time').html(dd.getHours() + ':' + dd.getMinutes() + ':' + dd.getSeconds() + '<sup>' + dura + '</sup>');
    }
    window.setInterval(timer, 1000);
});

$(document).ready(function () {

    $('.one ul').load('Text.txt');

    var toppos = parseInt($('.one ul').css('margin-top'), 10);

    //username();

    var d = new Date();
    //alert(d.getFullYear());
    var day = d.getDay();
    var date = d.getDate();
    var year = d.getFullYear();
    var mnth = d.getMonth();
    var hr = d.getHours();
    var mins = d.getMinutes();



    //setInterval(timer(), 1000);

    //alert(d.getHours() + ':' + d.getMinutes());

    var dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //alert('Day :'+ day + ', Date :' + date + ', Year :' + year + ', Month :' + mnth);




    $('.ipsubmit').click(function () {



        var len = $('.ipuser').val().replace(/ /g, '').length;
        var name = $('.ipuser').val();
        if (len == 0) {
            username();
        }

        else {
            //alert($('.ipuser').val());


            $('.date').prepend(date);
            $('.day').html(dayArray[day - 1]);
            $('.year').html(monthArray[mnth] + ' ' + year);

            //var dura;




            //setInterval(timer(), 1000);

            $('.username').html(name);

            $('.login').stop().animate({
                marginTop: '-' + (height + 200) + 'px'
            }, 2000, 'easeOutBack');

            $('.container').stop().delay(500).animate({
                marginTop: '0px'
            }, 2000, 'easeOutElastic');

            var time = 300;
            //count = $('.tile').length;
            //alert(count);
            $('.tile').css('visibility', 'visible');
            $('.tile').each(function () {
                $(this).delay(2000).animate({
                    right: '0px',
                    opacity: '0.5'
                }, time, 'easeInOutBack');
                time = time + 90;
            });

            //alert(time);
            $('.fullbg').delay(time + 2000).fadeOut();

            var count1 = 0;
            var count2 = 0;

            //alert($('ul li').length);
            $.fn.Animation = function (mt) {
                
                var lin = $(this).children('li').length;
                
                if (count < lin) {
                    //$('ul').css('opacity', '1');
                    count = count + 1;
                    var post = parseInt($(this).css('margin-top'), 10);
                    $(this).animate({
                        marginTop: (post - mt) + 'px'
                    }, 1000, 'easeOutQuad');
                    console.log(count);
                }

                else {

                    $(this).fadeOut('fast', function () {
                        $(this).css('margin-top', '0px').delay(500).fadeIn();
                    });

                    count = 0;

                }

                
            }

            /*function animatation2() {
                count2 = count2 + 1;
                var lin = $('.five ul li').length;
                if (count2 < lin) {
                    //$('ul').css('opacity', '1');
                    var post = parseInt($('.five ul').css('margin-top'), 10);
                    $('.five ul').animate({
                        marginTop: (post - 145) + 'px'
                    }, 1000, 'easeOutQuad');
                }

                else {

                    $('.five ul').fadeOut('fast', function () {
                        $(this).css('margin-top', '0px').delay(500).fadeIn();
                    });

                    count2 = 0;
                }
            }*/
            //var elem1 = $('.one ul');

            //setInterval(animatation1, 4000);
            //setInterval(animatation2, 3000);
            var count = 0;
            
            function callAnimation() {

                $('.one ul').Animation(130);
                $('.five ul').delay(1000).Animation(145);
            }

            setInterval(callAnimation, 5000);
        }
    });





    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    $('.fullbg').css('height', height + 'px');
    $('.login').css('height', height + 'px');

    $('body').css('background-size', width + "px " + height + "px");
    $('.login').css('background-size', width + "px " + height + "px");

    $('.container').css('margin-top', (height + 100) + 'px');

    $('.ico').mouseover(function () {
        $(this).stop().animate({
            opacity: '1'
        }, 500);
    });

    $('.ico').mouseout(function () {
        $(this).stop().animate({
            opacity: '0.5'
        }, 500);
    });


    $('.tile').mouseover(function () {
        $(this).stop().animate({
            opacity: '1'
        }, 500);
    });

    $('.tile').mouseout(function () {
        $(this).stop().animate({
            opacity: '0.5'
        }, 500);
    });

    function username() {
        var inputanimation = setInterval(function () {
            $('.pen').animate({
                opacity: '0.1'
            }, 500, function () {
                $('.pen').animate({
                    opacity: '1'
                }, 500);
            });
        }, 1000);
    }
});
