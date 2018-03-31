
                 // Initial Variables (SET the first set IN FIREBASE FIRST)
            // Note remember to create these same variables in Firebase!  
        //___________________________________________________________________//         

        var train = "";
        var destination = "";
        var firstTrainTime = "";
        var tFrequency = "5";
        var firstTime = "5:00";

             $(document).ready(function(){
        

        // Initialize Firebase and change the values of the config values with your own Firebase config values.
        var config = {
            apiKey: "AIzaSyAhYyGhgsucIOWBMFy7FZgyRmgRiy9b4qM",
            authDomain: "train-2b5a6.firebaseapp.com",
            databaseURL: "https://train-2b5a6.firebaseio.com",
            projectId: "train-2b5a6",
            storageBucket: "",
            messagingSenderId: "633878126471"
          };
          firebase.initializeApp(config);

        // Create a variable to reference the database
        var database = firebase.database();

        //______________________ Variables ________________________________//
        // Click Button changes what is stored in firebase
        $("#addTrainBtn").on("click", function() {
            // Prevent the page from refreshing
            event.preventDefault();

            // Get inputs
            train = $("#train-Input").val().trim();
            destination = $("#destination-Input").val().trim();
            firstTrainTime = $("#first-Train-Input").val().trim();
            tFrequency = $("frequency-Input").val().trim();

            // Change what is saved in firebase
            database.ref().set({
                train: train,
                destination: destination,
                firstTrainTime: firstTrainTime,
                tFrequency: tFrequency,

            });
        });

                // Firebase is always watching for changes to the data.
        // When changes occurs it will print them to console and html
        database.ref().on("value", function(snapshot) {

            // Print the initial data to the console.
            console.log(snapshot.val());

            // Log the value of the various properties
            console.log(snapshot.val().train);
            console.log(snapshot.val().destination);
            console.log(snapshot.val().firstTrainTime);
            console.log(snapshot.val().tFrequency);

            // Change the HTML
            $("<td>").append(snapshot.val().train + "  " + snapshot.val().destination + "  " + snapshot.val().firstTrainTime + " " + snapshot.val().tFrequency);

            // If any errors are experienced, log them to console.
               }, function(errorObject) {
                    console.log("The read failed: " + errorObject.code);
                 });

    //         function timeConvert() {
    //   // First Time (pushed back 1 year to make sure it comes before current time)
    //         var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    //         console.log(firstTimeConverted);

    // // Current Time
    //         var currentTime = moment();
    //         console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    //          var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    //          console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    //          var tRemainder = diffTime % tFrequency;
    //          console.log(tRemainder);

    // // Minute Until Train
    //          var tMinutesTillTrain = tFrequency - tRemainder;
    //          console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    //          var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    //          console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
                
    //         }


        });

