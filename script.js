$(document).ready(function() {

    //Global arr that we push our equation too.
    let isCleared = true;
    let str = '0'; //default number on screen is set to 0
    let arr = [];


    //boolean is used to change what is displayed on the screen as the default will be '0'
    if (isCleared) {
        $('#screen').text(str);
    }

    if (!isCleared) {
        $('#screen').text('');
    }


    //once the AC button is pressed clears the screen by making variables empty.
    $('#AC').click(function() {
        $('#screen').text(str);
        joined = '';
        arr = [];
        isCleared = true;
    });


    //Once equals is pressed we change the array to a string and run the eval function on it to get desired result.
    $('#equals').click(function() {
        let joined = arr.join('');
        joined = eval(joined);
        $('#screen').html(joined);
    });


    //Pushes calculator button values to  array
    $('.entry').click(function() {
        if (isCleared) {
            isCleared = false;
            $('#screen').text('');
        }
        let entry = (this.value);
        $('#screen').text($('#screen').text() + entry);
        arr.push(entry);
    });


});
