(function () {
    $('#engineMenuBtn').click(function (event) {
        event.stopPropagation();
        if ($('.m-search .menu').css('display') === 'none') {
            $('.m-search .menu').css('display', 'block')
        } else {
            $('.m-search .menu').css('display', 'none')
        }
    })
    $(document).click(() => {
        $('.m-search .menu').css('display', 'none')
    })
    $('.m-search .menu a').click(function () {
        var t = this.cloneNode(false)
        $('.search_icon').html(t)
        $('.search_icon a').attr('href', $(this).attr('pburl'))
    })
    $('#engineBtn').click(function () {
        var p = $('.search_icon a').attr('su')
        var val = $('#engineKeyWord').val()
        window.open('http://' + p + val)
    })
    $("#engineKeyWord").keydown(function (event) {
        if (event.which == '13') {
            var p = $('.search_icon a').attr('su')
            var val = $('#engineKeyWord').val()
            window.open('http://' + p + val)
        }
    });
})()