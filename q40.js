//making album
function makr_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(makr_album("Jani", "Feels Like Home"));
console.log(makr_album("AUR", "Sometimes"));
console.log(makr_album("Aleem RK", "Mid Night"));
console.log(makr_album("Young Stunners", "Gumaan"));
