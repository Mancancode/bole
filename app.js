let planets = function(a){
    return function (b){
        return "favorite planet " + a + " and " + b;
    } ;
};
let favoriteplanets =  planets("jupiter");

favoriteplanets("earth");
favoriteplanets("jupiter");
favoriteplanets("saturn");
