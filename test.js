var usersRef = db.ref('users')
usersRef.orderByChild("username").equalTo(public).once("value", function(snapshot) {
      if (snapshot.val()) {
        window.location = "https://isasftw.github.io/status-friend-finder/friends.html";
      } else {
        usersRef.set({
            user: public
        });
      }
    })