let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1; /* Random no. between 1 and 6 */
    y = Math.floor(Math.random() * 8) + 1; /* Random no. between 1 and 8 */
    z = Math.floor(Math.random() * 10) + 1; /* Random no. between 1 and 10 */

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}