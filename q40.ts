//making album
function makr_album(artist: string, title: string,tracks?: Number) {
    let album = {artist,title};
    if (tracks) {
    album ["tracks"] = tracks
}
return album;

}
console.log(makr_album ("Jani","Feels Like Home"));
console.log(makr_album ("AUR","Sometimes"));
console.log(makr_album ("Aleem RK","Mid Night"));
console.log(makr_album ("Young Stunners","Gumaan"));
