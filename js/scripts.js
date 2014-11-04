$(function () {
    var currentStep = 0,
        $loaderScreen = $('.js-loading-screen'),
        $finalPage = $('.js-final-page'),
        steps = [
            $('.js-start-page'),
            $('.question-page-1'),
            $('.question-page-2'),
            $('.question-page-3'),
            $('.question-page-4')
        ];

    /**
     * Function shows loader page and start timer
     *
     * @function
     * @name showLoaderScreen
     * @param {number} loadTime
     * @returns {undefined}
     */
    function showLoaderScreen(loadTime) {
        $loaderScreen.removeClass('hide');
        setTimeout(function () {
            $loaderScreen.addClass('hide');
            $finalPage.removeClass('hide');
        }, loadTime);
    }

    $('.js-player').jPlayer({
        ready: function () {
            $(this).jPlayer('setMedia', {
                mp3: '/audio/uk.mp3'
            }).jPlayer('play');
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

    $('.js-next').on('click', function (event) {
        event.preventDefault();
        steps[currentStep].addClass('hide');
        currentStep++;
        if (currentStep !== steps.length) {
            steps[currentStep].removeClass('hide');
            return;
        }

        showLoaderScreen(3000);
    });

    $('.js-previous').on('click', function (event) {
        event.preventDefault();
        steps[currentStep].addClass('hide');
        currentStep--;
        steps[currentStep].removeClass('hide');
    });
});