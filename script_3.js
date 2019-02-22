console.log("4 ~> Pyramid");
function pyramid(x) { for(k=x-1;k>=0;k--) { console.log(" ".repeat(k) + "@".repeat(x-k)); }}
let l = Number(prompt());
pyramid(l);
