function postParking()
{
    Parse.initialize("jMzYJcQbYgvPx7T7hXWZnfYlCu07YaErv3vVf8qu", "fstxxWXFbRDXoEm0KY46aGsMBqI1wH2NBsMPbJYn");
    
    var parkingSpot = Parse.Object.extend("parkingSpot");
    var parkingPost = new parkingSpot();  
    
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("user-email").value;
    var details = document.getElementById("parking-details").value;
    var fileUploadControl = $("#parking-image")[0];
		var file = fileUploadControl.files[0];
		var name = file.name; //This does *NOT* need to be a unique name
		var parseFile = new Parse.File(name, file);
            
    parkingPost.set("firstName", firstName);
    parkingPost.set("lastName", lastName);
    parkingPost.set("userEmail", email);
    parkingPost.set("parkingDetails", details);
    parkingPost.set("parkingImage", parseFile);
    
    parkingPost.save(null, {
        success: function(testObject) {
            console.log("Details saved!");
            alert('Thank you for posting on our site. Your form has been saved.');
            $('#myModal').hide();
            $('.reveal-modal-bg').hide();
        },
        error: function(testObject, error) {
            console.log("Something went wrong");
            alert('Well, this is embarrasing. Something went wrong. Try again or contact us. Thanks!');
        }
            });
}


function parkingWanted()
{
    Parse.initialize("jMzYJcQbYgvPx7T7hXWZnfYlCu07YaErv3vVf8qu", "fstxxWXFbRDXoEm0KY46aGsMBqI1wH2NBsMPbJYn");
    
    var wantedParking = Parse.Object.extend("wantedParking");
    var wantedPost = new wantedParking();  
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("userEmail").value;
    var details = document.getElementById("parkingDetails").value;
    var location = document.getElementById("parking-location").value;
        
    wantedPost.set("firstName", firstName);
    wantedPost.set("lastName", lastName);
    wantedPost.set("userEmail", email);
    wantedPost.set("wantedDetails", details);
    wantedPost.set("parkingLocation", location);
    
    wantedPost.save(null, {
        success: function(testObject) {
            console.log("Details saved!");
            alert('Thank you for posting on our site. Your form has been saved.');
            $('#searchModal').hide();
            $('.reveal-modal-bg').hide();
        },
        error: function(testObject, error) {
            console.log("Something went wrong");
            alert('Well, this is embarrasing. Something went wrong. Try again or contact us. Thanks!');
        }
            });
 }
 
 function getAvailablePosts()
 {
 
 
 }
 
 
 function getWantedPosts()
 {
 
 
 }