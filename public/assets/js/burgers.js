$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("burgerdevoured");

        var burgerDevourState = {
            devoured: newBurger
        };

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerDevourState
        }).then(
            function() {
                console.log("Changed devoured to ", burgerDevourState);
                location.reload();
            }
        );
    });

    $("#submitBtn").on("click", function(event) {
        event.preventDefault();

        var burgerData = {
            burger_name: $("#burger").val().trim(),
        };

        // Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerData
        }).then(
            function() {
                console.log("Created new burger");
                location.reload();
            }
        );
    });
});