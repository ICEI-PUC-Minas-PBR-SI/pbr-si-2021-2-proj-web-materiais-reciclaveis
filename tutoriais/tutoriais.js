$(document).ready(function() {
    var url = $("#compostagem").attr('src');
    $("#compostagem").on('hide.bs.modal', function() {
        $("#videoCompostagem").attr('src', '');
    });
    $("#compostagem").on('show.bs.modal', function() {
        $("#videoCompostagem").attr('src', url);
    });
});

$(document).ready(function() {
    var url = $("#papel").attr('src');
    $("#papel").on('hide.bs.modal', function() {
        $("#videoPapel").attr('src', '');
    });
    $("#papel").on('show.bs.modal', function() {
        $("#papel").attr('src', url);
    });
});

$(document).ready(function() {
    var url = $("#coleta").attr('src');
    $("#coleta").on('hide.bs.modal', function() {
        $("#videoColeta").attr('src', '');
    });
    $("#coleta").on('show.bs.modal', function() {
        $("#videoColeta").attr('src', url);
    });
});

$(document).ready(function() {
    var url = $("#plastico").attr('src');
    $("#plastico").on('hide.bs.modal', function() {
        $("#videoPlastico").attr('src', '');
    });
    $("#plastico").on('show.bs.modal', function() {
        $("#videoPlastico").attr('src', url);
    });
});
