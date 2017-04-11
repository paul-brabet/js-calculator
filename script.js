$(document).ready(function() {

    //Arr array created for symbols to be entered into
    let arr = [];

    //All clear button empties arr and joined
    $('#AC').click(function() {
        $('#screen').text('');
        joined = '';
        arr = [];
    });

    //Equals button calculates entries in arr array
    $('#equals').click(function() {
        let joined = arr.join('')
        joined = eval(joined);
        $('#screen').html(joined);
    });

    //Remaining buttons push corresponding symbol to arr array
    $('.entry').click(function() {
        var entry = (this.value)
        $('#screen').text($('#screen').text() + entry)
        arr.push(entry);
    });

})
