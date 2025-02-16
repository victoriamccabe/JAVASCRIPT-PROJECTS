function my_Dictionary(){
    var Animal = {
        Species:"Cat",
        Color:"Orange",
        Breed:"Domestic Short Hair",
        Age:3,
        Sound:"Meow!",
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}

document.write(typeof "Word");