$( document ).ready(function() {
    var numberToGuess = 53;
    var counter = 0;
    var number1 = [10];
    var number2 = [5];
    var number3 = [3];
    var number4 = [7];
    $('number1 number2 number3 number4').text(numberToGuess);
    for (var i=0; i< number1.length; i++){
      var BigMouthImage1 = $('<img>');
      
      BigMouthImage1.attr('data-num', number1[i]);
      BigMouthImage1.attr('src', 'https://vignette.wikia.nocookie.net/characters/images/5/59/Maurice_the_Hormone_Monster.png/revision/latest?cb=20181007024339');
      BigMouthImage1.attr('alt', 'Maurice Hormone Monster');
      BigMouthImage1.addClass('BigMouth');
      $('#BigMouth').append(BigMouthImage1);
    }

    for (var i=0; i< number2.length; i++){
      var BigMouthImage2 = $('<img>');
      
      BigMouthImage2.attr('data-num', number2[i]);
      BigMouthImage2.attr('src', 'http://vignette3.wikia.nocookie.net/starcraftfanfiction/images/b/b8/Alliram.PNG/revision/latest?cb=20110114234131');
      BigMouthImage2.attr('alt', 'Diane Hormone Monster');
      BigMouthImage2.addClass('BigMouth');
      $('#BigMouth').append(BigMouthImage2);
    }

    for (var i=0; i< number3.length; i++){
      var BigMouthImage3 = $('<img>');
      
      BigMouthImage3.attr('data-num', number3[i]);
      BigMouthImage3.attr('src', 'http://vignette1.wikia.nocookie.net/starcraftfanfiction/images/5/59/Temril_Crystal.PNG/revision/latest?cb=20110114234517');
      BigMouthImage3.attr('alt', 'Missy');
      BigMouthImage3.addClass('BigMouth');
      $('#BigMouth').append(BigMouthImage3);
    }

    for (var i=0; i< number4.length; i++){
      var BigMouthImage4 = $('<img>');
      
      BigMouthImage4.attr('data-num', number4[i]);
      BigMouthImage4.attr('src', 'http://vignette3.wikia.nocookie.net/starcraftfanfiction/images/5/5b/Savraj_Crystal.PNG/revision/latest?cb=20110114234233');
      BigMouthImage4.attr('alt', 'Nick');
      BigMouthImage4.addClass('BigMouth');
      $('#BigMouth').append(BigMouthImage4);
    }
    
    $('#reset').on('click', function(){
        reset();
    });

    function reset(){
      console.log("made it");
      counter = 0;      
      $('#yourNumber').text(counter);

      number1 = [5];
      number2 = [3];
      number3 = [7];
      number4 = [10];
      $('number1 number2 number3 number4').text(numberToGuess);
      console.log('Is it working');
    };

    $('.BigMouth').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert('You won!');
        reset();
        console.log("try it");
      }else if( counter > numberToGuess){
        alert('You lost!');
        reset();
      }
    });
  
  });
