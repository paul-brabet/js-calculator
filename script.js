 $(document).ready(function() {

     let arr = [];




     $('#AC').click(function() {
         $('#screen').text('');

     });


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
     $('#equals').click(function() {


         let joined = arr.join('')
         joined = eval(joined);
         $('#screen').html(joined);

     });

     $('#minus').click(function() {
         $('#screen').text($('#screen').text() + '-')
arr.push('-');
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
     });

     $('#5').click(function() {
         $('#screen').text($('#screen').text() + 5)

     });
     $('#4').click(function() {
         $('#screen').text($('#screen').text() + 4)
     });

     $('#3').click(function() {
         $('#screen').text($('#screen').text() + 3)

     });

     $('#2').click(function() {
         $('#screen').text($('#screen').text() + 2)

     });

     $('#1').click(function() {
         $('#screen').text($('#screen').text() + 1)

     });
     $('#0').click(function() {
         $('#screen').text($('#screen').text() + 0)

     });




 })
