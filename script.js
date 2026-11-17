$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.      /*Shorthand for $(document_.ready(function... which waits for DOM?*/
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);

    $('.cute-button').click(clickedCuteButton); // My new action button - for something cute to happen!
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name: "Pumpkin", weight: 12, happiness: 5, cuteness: 50}; // I added cuteness points

    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness++;

      // Increase pet weight
      pet_info.weight++;

      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness++;

      // Decrease pet weight
      pet_info.weight--;

      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness--;

      // Decrease pet weight
      pet_info.weight--;

      checkAndUpdatePetInfoInHtml();
    }

    function clickedCuteButton() {
      // change image to tail wag
      $(".pet-image").attr("src", "images/tail-wag.gif"); // Changing src attribute. It changes the main image to the gif I made

      // add cuteness points
      pet_info.cuteness++; // The cuter he gets, the happier he is, hence the tail wags. Cuteness points don't decrease, they can only increase

      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.weight < 0 || pet_info.happiness < 0) { // I added happiness cause I assume it can't be negative.
        pet_info.weight = 0; // Set it equal to 0 because I assume it can't be neagtive. Even if it died, it would still never be negative. But for arguments sake, I put that it can go down to 0 because this is digital.
        pet_info.happiness = 0; // If it could go below 0, then the player would have to dig themself out of that hole and I don't think they would enjoy that.
      } else {
        updatePetInfoInHtml();
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.cute').text(pet_info['cuteness']); // Updates the cuteness points (the above do the same for their categories)
    }
  
    $(".survey").change(function(){ // The .change() detects a change in input tag in html and so this function occurs
      alert("Thank you for your input!");
      
      $("html").css("background-color", "yellow"); // Background color now becomes a happy yellow upon completion of the survey, .css() is taking a css element and changing its value here

      $(".pet-image").attr("src", "images/cute.gif"); // New gif unlocked
    });


    //Add a visual notification after each button press with a comment from your pet. For this requirement you can not use console.log() or alert().!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!???????????????
