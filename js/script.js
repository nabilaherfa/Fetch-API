$.getJSON('references.json', function (data) {
    let ayahs = data.ayahs;
    $.each(ayahs, function(i, data) {
        $('#daftar-ayat').append('<div class="col-md-4"><div class="card mb-3"><div class="card-body"><h5 class="card-title">'+ data.numberInSurah +'"</h5><p class="card-text">'+ data.text +'</p></div></div></div>')
    });
});