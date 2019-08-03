// Variables
var characters = [
   {'name': 'Rey',
    'img': 'assets/images/rey3.jpeg',
    'background': 'assets/images/reyBG.jpg',
    'btn': '',
    'healthPoints' : 84,
    'attackPower' : 24,
    'counterPower' : 12,
    'player': false
   },

   {'name': 'Captain Phasma',
    'img': 'assets/images/phas1.jpg',
    'background': 'assets/images/phasmaBG.jpg',
    'btn': '',
    'healthPoints' : 84,
    'attackPower' : 24,
    'counterPower' : 12,
    'player': false
   },

   {'name': 'Luke Skywalker',
    'img': 'assets/images/sw3.jpg',
    'background': 'assets/images/lukeBG.jpg',
    'btn': '',
    'healthPoints' : 84,
    'attackPower' : 24,
    'counterPower' : 12,
    'player': false
   },

   {'name': 'Kylo Ren',
    'img': 'assets/images/kylo3.jpg',
    'background': 'assets/images/kyloBG.jpg',
    'btn': '',
    'healthPoints' : 84,
    'attackPower' : 24,
    'counterPower' : 12,
    'player': false
   }];

// Functions

// Populate initial header and background image
function createHeader() {
    var initialBackground = 'assets/images/choosePlayer.jpg';

    var newHeader = $('<h1>');
        newHeader.addClass('display-4');
        newHeader.text('STAR WARS RPG');
    
    var instructions = $('<p>');
        instructions.addClass('lead');
        instructions.attr('id', 'instructions');
        instructions.text('Choose your character to begin the game. May the force be with you...');
         
      $('#header').append(newHeader, instructions);
      $('body').css('background-image', "url(" + initialBackground + ")");
};


function createCard([i]) {
    // Create <div> to hold character choices
    var newDiv = $('<div>');
        newDiv.addClass('col-md-3');
        newDiv.attr('id', 'characterDiv' + [i]);

    $('#gamePlay').append(newDiv);

    var newCard = $('<div>');
        newCard.addClass('card');
        newCard.attr('id', 'charCard' + [i]);

    $('#characterDiv' + [i]).append(newCard);

    var cardImg = $('<img>');
        cardImg.addClass('card-img-top rounded img-fluid');
        cardImg.attr({'src': characters[i].img, 'alt': 'Responsive image'});
        //<img id="charImg" src="assets/images/rey3.jpeg" class="rounded img-fluid" alt="Responsive image"></img>

    var cardBody = $('<div>');
        cardBody.addClass('card-body');

    var cardBtn = $('<button>');
        cardBtn.addClass('btn btn-warning');
        cardBtn.attr({'id': characters[i].name, 'alt': characters[i].background, 'val': [i]});
        cardBtn.text('Choose ' + characters[i].name);

    $('#charCard' + [i]).append(cardImg, cardBtn);
};


// Load game after document is ready
$(document).ready(function() {

    // Set home page header
    createHeader();

    // Populate character choices
    for (var i = 0; i < characters.length; i++) {
        createCard([i]);
    };

    // On-Click event to capture character choice and reset the window
    $('.btn').on('click', function() {

        var playerIndex = $(this).attr('val');
        characters[playerIndex].player = true;

        $('body').css('background-image', "url(" + ($(this).attr('alt')) + ")");
        $('#instructions').empty();
        $('#instructions').text('Click on an opponent to face them!');
        $('#gamePlay').empty();

        var playerDiv = $('<div>');
            playerDiv.addClass('col-md-6');
            playerDiv.attr('id', 'playerDiv');

        $('#gamePlay').append(playerDiv);

        var opponentDiv = $('<div>');
            opponentDiv.addClass('col-md-6');
            opponentDiv.attr('id', 'opponentDiv');

        $('#gamePlay').append(opponentDiv);

        for (var i = 0; i < characters.length; i++) {

            if (characters[i].player !== true) {

                
                var newCard = $('<div>');
                    newCard.addClass('card');
                    newCard.attr('id', 'charCard' + [i]);
            
                $('#opponentDiv' /*+ [i]*/).append(newCard);
        
                var cardImg = $('<img>');
                    cardImg.addClass('card-img-top rounded img-fluid');
                    cardImg.attr({'src': characters[i].img, 'alt': 'Responsive image'});
                    //<img id="charImg" src="assets/images/rey3.jpeg" class="rounded img-fluid" alt="Responsive image"></img>
        
                var cardBody = $('<div>');
                    cardBody.addClass('card-body');
            
                var cardBtn = $('<button>');
                    cardBtn.addClass('btn btn-warning');
                    cardBtn.attr({'id': characters[i].name, 'alt': characters[i].background, 'val': [i]});
                    cardBtn.text('Fight ' + characters[i].name);
            
                $('#charCard' + [i]).append(cardImg, cardBtn);

            } else {

                var newCard = $('<div>');
                    newCard.addClass('card');
                    newCard.attr('id', 'charCard' + [i]);
            
                $('#playerDiv' /*+ [i]*/).append(newCard);
        
                var cardImg = $('<img>');
                    cardImg.addClass('card-img-top rounded img-fluid');
                    cardImg.attr({'src': characters[i].img, 'alt': 'Responsive image'});
                    //<img id="charImg" src="assets/images/rey3.jpeg" class="rounded img-fluid" alt="Responsive image"></img>
        
                var cardBody = $('<div>');
                    cardBody.addClass('card-body');
            
                var cardBtn = $('<button>');
                    cardBtn.addClass('btn btn-warning');
                    cardBtn.attr({'id': characters[i].name zx, 'alt': characters[i].background, 'val': [i]});
                    cardBtn.text('Choose ' + characters[i].name);
            
                $('#charCard' + [i]).append(cardImg, cardBtn);

            }
        };
    }); // End of button click event



    // On-Click events to handle attacks

});