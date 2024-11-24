//Fill in the ??? to complete the function object.
function Singer(name, specialty, power, hitpoints, level, gender ){
    this.name = name;
    this.specialty = specialty;
    this.power = power;
    this.hitpoints = hitpoints;
    this.level = level;
    this.gender = gender;

    this.calculatePower = function(){
        return (this.power*this.level)-this.hitpoints;
    };

    this.hpLevel = function(){
        if (this.hitpoints <= 50){
            return "Weak";
        }
        else if (this.hitpoints <=70){
            return "Strong";
        }
        else{
            return "Amazing";
        };
    };

    this.singerProfile = function(){
        return `${this.name} Level ${this.level}, gender ${this.gender}, specialty '${this.specialty}'
    Power ${this.calculatePower()}!
    Hitpoints: ${this.hpLevel()}`;
    }
    
};
    


//Create the function objects momobae and minabae.
let momobae = new Singer("Momobae", "K-Pop", 49, 28, 7, "Female");
let minabae = new Singer("Minabae", "J-Rock/Fusion", 77, 11, 4, "Female");

let Singers = [momobae, minabae];
for (let i = 0; i < Singers.length; i++)
{
    console.log(Singers[i].singerProfile())
};

//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle")
// and give it some content
newDiv1.innerHTML = "Momobae's Singer Profile: <br>" +momobae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle")
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" +minabae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv2);