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
     $('#divide').click(function() {
         $('#screen').text($('#screen').text() + '/')
         arr.push('/');
     });

     $('#multiply').click(function() {
         $('#screen').text($('#screen').text() + '*')
         arr.push('*');
     });

     $('#plus').click(function() {
         $('#screen').text($('#screen').text() + '+')
         arr.push('+');
     });

     $('#minus').click(function() {
         $('#screen').text($('#screen').text() + '-')
         arr.push('-');
     });

     $('#decimal').click(function() {
         $('#screen').text($('#screen').text() + '.')
         arr.push('.');
     });

     $('#9').click(function() {
         $('#screen').text($('#screen').text() + 9)
         arr.push('9');
     });

     $('#8').click(function() {
         $('#screen').text($('#screen').text() + 8)
         arr.push('8');
     });

     $('#7').click(function() {
         $('#screen').text($('#screen').text() + 7)
         arr.push('7');
     });

     $('#6').click(function() {
         $('#screen').text($('#screen').text() + 6)
         arr.push('6');
     });

     $('#5').click(function() {
         $('#screen').text($('#screen').text() + 5)
         arr.push('5');
     });

     $('#4').click(function() {
         $('#screen').text($('#screen').text() + 4)
         arr.push('4');
     });

     $('#3').click(function() {
         $('#screen').text($('#screen').text() + 3)
         arr.push('3');
     });

     $('#2').click(function() {
         $('#screen').text($('#screen').text() + 2)
         arr.push('2');
     });

     $('#1').click(function() {
         $('#screen').text($('#screen').text() + 1)
         arr.push('1');
     });

     $('#0').click(function() {
         $('#screen').text($('#screen').text() + 0)
         arr.push('0');
     });

 })
