    


$("#profile").on("click", function(){
    console.log("Profile button clicked!");
    var newWindow = window.open("profile.html", "_blank");
    if(newWindow){
        newWindow.focus();


    }

    else{
        alert("Opening new window failed");
    }


});


$("#portfolio").on("click", function(){
    var newWindow = window.open("portfolio.html", "_blank");
    if(newWindow){
        newWindow.focus();
    }
    else{
        alert("Opening new window failed.");
    }
});