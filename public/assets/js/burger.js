$(document).ready(function() {
    $("#burgerBtn").on("click", function(event) {
        event.preventDefault();
        var burgName = $("#burger").val().trim();

        var newBurger = {
            burger_name: burgName,
            devoured: 0
        };

        console.log(newBurger);

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("Added new burger!");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });

    $(".change-devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var eat = $(this).data("devour");

        var newEat = {
            devoured: eat
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEat
          }).then(
            function() {
              console.log("changed devour to", eat);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })
});