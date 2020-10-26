let sliderNumPlants;
let sliderMaintenanceReg;
let sliderTeamSize;
let sliderWage;

let valNP;
let valMR;
let valTS;
let valW;


let totalEffort;

let imgA;
let imgB;
let sliderX;
let sliderYgap;
let sliderSize;


function setup() {
    sliderX = 100;
    sliderYgap = 30;
    sliderSize = 200;
    
    imgA = loadImage('assets/amende.jpg');
    imgB = loadImage('assets/ammendes2.jpg');
    
    createCanvas(innerWidth, innerHeight-200);
    
    
    sliderNumPlants = createSlider(0, 255, 100);
    sliderNumPlants.position(sliderX, innerHeight - sliderYgap * 3);
    sliderNumPlants.style('width', sliderSize);


    sliderWage = createSlider(0, 255, 100);
    sliderWage.position(sliderX, innerHeight - sliderYgap * 4);
    sliderWage.style('width', sliderSize);
    
    
    sliderMaintenanceReg = createSlider(0, 255, 100);
    sliderMaintenanceReg.position(sliderX, innerHeight - sliderYgap * 5);
    sliderMaintenanceReg.style('width', sliderSize);
    
    
    sliderTeamSize = createSlider(0, 255, 100);
    sliderTeamSize.position(sliderX, innerHeight - sliderYgap * 6);
    sliderTeamSize.style('width', sliderSize);



}

function draw() {

valNP = sliderNumPlants.value();
valMR = sliderMaintenanceReg.value();
valTS = sliderTeamSize.value();
valW = sliderWage.value();
    
totalEffort=valMR+valNP+valTS+valW;
    
        if(totalEffort<300){
            
            background(imgA);
        }
       if(totalEffort>300){
            
            background(imgB);
        }
    
    
textSize(32);
text(totalEffort, 10, 30);
    
    //image(img, 600, 0);
}
