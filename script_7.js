const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

var alreadyrented = function(elmt) { return elmt.rented >= 0; }
if(books.some(alreadyrented)) {console.log("chaque livre a été emprunté au moins une fois");}
else {console.log("Au moins un livre n'a jamais été emprunté");}

console.log(books.sort(function(elmt1, elmt2) { if(elmt1.rented > elmt2.rented){return -1;} if(elmt1.rented < elmt2.rented) {return 1;} else {return 0;}})[0].title);

console.log(books.sort(function(elmt1, elmt2) { if(elmt1.rented > elmt2.rented){return 1;} if(elmt1.rented < elmt2.rented) {return -1;} else {return 0;}})[0].title);

//Id exos to do

console.log(books.sort(function (a,b) {if(a.title>b.title){return 1;} if(a.title<b.title) {return -1;} else {return 0;}}));
