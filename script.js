const home = document.getElementById("home");
const guest = document.getElementById("guest")
home.value = 0;
guest.value = 0;
let valhome = 0;
let valguest = 0;
function plusone_home() {
    valhome++;
    home.value = valhome;
}
function plusone_guest() {
    valguest++;
    guest.value = valguest;
}
function plustwo_home() {
    valhome += 2;
    home.value = valhome;
}
function plustwo_guest() {
    valguest += 2;
    guest.value = valguest;
}
function plusthree_home() {
    valhome += 3;
    home.value = valhome;
}
function plusthree_guest() {
    valguest += 3;
    guest.value = valguest;
}