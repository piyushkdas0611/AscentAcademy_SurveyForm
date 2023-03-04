$( "#change" ).on("click", function() {
    if( $( "body" ).hasClass( "light" )) {
        $( "body" ).removeClass( "light" );
        $("footer").css("color", "white")
        $( "#change" ).text( "ON" );
    } else {
        $( "body" ).addClass( "light" );
        $("footer").css("color", "black")
        $( "#change" ).text( "OFF" );
    }
});