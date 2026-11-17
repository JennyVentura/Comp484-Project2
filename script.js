$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.      /*Shorthand for $(document_.ready(function... which waits for DOM??????????????????????????*/
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);

    $('.something-button').click(clickedSomethingButton); // my new action button
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name: "Pumpkin", weight: 12, happiness: 5};

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

    function clickedSomethingButton() {
      // Do something???!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      //checkAndUpdatePetInfoInHtml(); -- needed?????????????????
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(weight < 0 || happiness < 0) {
        //???????? write out text or add?
      } else {
        updatePetInfoInHtml(); //needed???????????
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  



    //Add a visual notification after each button press with a comment from your pet. For this requirement you can not use console.log() or alert().!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!???????????????
// do we use pet image class????????????
    // two unique methods = .css() and .change()
