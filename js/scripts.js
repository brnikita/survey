$(function(){
    $('.js-player').jPlayer({
        ready: function () {
//            $(this).jPlayer('setMedia', {
//                mp3: '/audio/uk.mp3'
//            }).jPlayer('play');
        },
        swfPath: '/js/vendors/jplayer',
        supplied: 'mp3',
        cssSelectorAncestor: '',
        cssSelector: {
            play: '.js-play',
            pause: '.js-pause',
            playBar: '.js-play-bar',
            noSolution: '.js-no-solution'
        }
    });
});