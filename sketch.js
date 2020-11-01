let sliderLeaves;
let sliderWeeds;
let sliderPruning;
let sliderHedges;
let sliderWage;

let valL;
let valWa;
let valP;
let valWe;
let valH;


let totalCost;
let totalEffort;
let plantLife;
let workerMood;
let kalitat;


let sliderX;
let sliderYgap;
let sliderSize;
let sliderY;

let leftMargin;
let UIgap;
let UIstartY;
let scoreMargin;
let captionAdjust;

let imgH;
let tempH;

let imgBASE;
let imgW1, imgW2, imgW3;
let imgP1, imgP2, imgP3;
let imgL1, imgL2, imgL3;
let imgH1, imgH2, imgH3;



let mapL, mapH, mapW, mapP;


let sliderH1, sliderH2, sliderH3, sliderH4, sliderH5;



function setup() {
    
    
   var canvas = createCanvas(800, 600);
    canvas.parent('calc');

    leftMargin = 100;
    scoreMargin = 580;
    sliderX = 1070;
    sliderYgap = 30;
    sliderSize = 200;
    textSize(15);
    tempH = innerHeight - 300;
    imgH = 300;
    sliderY = -65;
captionAdjust=585;
    
    UIgap = 350;
    UIstartY = innerHeight*4+340;

    sliderH1 = UIgap;
    sliderH2 = UIgap + sliderYgap;
    sliderH3 = UIgap + sliderYgap * 2;
    sliderH4 = UIgap + sliderYgap * 3;
    sliderH5 = UIgap + sliderYgap * 4;

    

    imgBASE = loadImage('assets/exports1/baseImg.png');

    imgW1 = loadImage('assets/exports1/W1.png');
    imgW2 = loadImage('assets/exports1/W2.png');
    imgW3 = loadImage('assets/exports1/W3.png');

    imgL1 = loadImage('assets/exports1/L1.png');
    imgL2 = loadImage('assets/exports1/L2.png');
    imgL3 = loadImage('assets/exports1/L3.png');

    imgP1 = loadImage('assets/exports1/P1.png');
    imgP2 = loadImage('assets/exports1/P2.png');
    imgP3 = loadImage('assets/exports1/P3.png');

    imgH1 = loadImage('assets/exports1/H1.png');
    imgH2 = loadImage('assets/exports1/H2.png');
    imgH3 = loadImage('assets/exports1/H3.png');






    sliderLeaves = createSlider(1, 8, 1);
    sliderLeaves.position(sliderX, UIstartY+sliderYgap * 2 + sliderY);
    sliderLeaves.style('width', sliderSize);

    sliderWeeds = createSlider(1, 8, 1);
    sliderWeeds.position(sliderX, UIstartY+ sliderYgap * 3 + sliderY);
    sliderWeeds.style('width', sliderSize);

    sliderPruning = createSlider(1, 8, 1);
    sliderPruning.position(sliderX, UIstartY+sliderYgap * 4 + sliderY);
    sliderPruning.style('width', sliderSize);

    sliderHedges = createSlider(1, 8, 1);
    sliderHedges.position(sliderX, UIstartY+ sliderYgap * 5 + sliderY);
    sliderHedges.style('width', sliderSize);


    sliderWage = createSlider(10, 20, 10);
    sliderWage.position(sliderX, UIstartY+ sliderYgap * 6 + sliderY);
    sliderWage.style('width', sliderSize);


}




function draw() {

    background(255, 255, 255);

    valL = sliderLeaves.value();
    valWe = sliderWeeds.value();
    valP = sliderPruning.value();
    valH = sliderHedges.value();
    valWa = sliderWage.value();

    totalEffort = valL + valH + valWe + valP;
    totalCost = (totalEffort) * valWa;

    image(imgBASE, leftMargin, 0, 600, imgH);



    mapH = map(valH, 1, 8, 3, 1);
    mapL = map(valL, 1, 8, 3, 1);
    mapP = map(valP, 1, 8, 3, 1);
    mapW = map(valWe, 1, 8, 3, 1);


       if (mapP === 1) {
        image(imgP1, leftMargin, 0, 600, imgH);
    }

    if ((mapP > 1) && (mapP < 3)) {
        image(imgP2, leftMargin, 0, 600, imgH);
    }

    if (mapP === 3) {
        image(imgP3, leftMargin, 0, 600, imgH);
    }
    

    

    if (mapW === 1) {
        image(imgW1, leftMargin, 0, 600, imgH);
    }

    if ((mapW > 1) && (mapW < 3)) {
        image(imgW2, leftMargin, 0, 600, imgH);
    }

    if (mapW === 3) {
        image(imgW3, leftMargin, 0, 600, imgH);
    }

    
    
    
    if (mapH === 1) {
        image(imgH1, leftMargin, 0, 600, imgH);
    }

    if ((mapH > 1) && (mapH < 3)) {
        image(imgH2, leftMargin, 0, 600, imgH);
    }

    if (mapH === 3) {
        image(imgH3, leftMargin, 0, 600, imgH);
    }


    

    if (mapL === 1) {
        image(imgL1, leftMargin, 0, 600, imgH);
    }

    if ((mapL > 1) && (mapL < 3)) {
        image(imgL2, leftMargin, 0, 600, imgH);
    }

    if (mapL === 3) {
        image(imgL3, leftMargin, 0, 600, imgH);
    }


 






    /////////scores


    //PLANTLIFE
    if ((valWe > 3) && (valWe < 6) && (valP > 3)) {
        plantLife = "🌿🌿🌿";
    } else {
        if ((valWe > 6)) {
            plantLife = "🌿🌿";
        }
        if ((valWe < 3)) {
            plantLife = "🌿";
        }
    }


    //WORKMOOD
    if ((totalEffort > 20) && (totalCost < 240)) {
        workerMood = "😩";
    } else {
        workerMood = "😀";
    }
    if ((totalEffort < 9)) {
        workerMood = "🤔";
    }



    //KALITAT

    if ((totalEffort > 25)) {
        kalitat = "A";
    }
    if ((totalEffort > 20) && (totalEffort <= 25)) {
        kalitat = "B";
    }
    if ((totalEffort > 16) && (totalEffort <= 20)) {
        kalitat = "C";
    }
    if ((totalEffort > 12) && (totalEffort <= 16)) {
        kalitat = "D";
    }
    if ((totalEffort <= 12)) {
        kalitat = "E";
    }


    textSize(32);
    text(kalitat, scoreMargin, 70);
    text(workerMood, scoreMargin, 120);
    text(plantLife, scoreMargin, 170);
    text(totalCost + "€", scoreMargin, 220);



    //slider labels
    textSize(12);
    text("How often should leaves be picked up? (times per month)", leftMargin, sliderH1);
    text("How often should weeds be gathered?", leftMargin, sliderH2);
    text("How often should low branches be pruned?", leftMargin, sliderH3);
    text("How often should hedges be trimmed?", leftMargin, sliderH4);
    text("How much should the gardeners be remunerated? (per hour)", leftMargin, sliderH5);


    //MINS
    text("1", sliderX-captionAdjust - 25, sliderH1);
    text("1", sliderX-captionAdjust - 25, sliderH2);
    text("1", sliderX-captionAdjust - 25, sliderH3);
    text("1", sliderX-captionAdjust - 25, sliderH4);
    text("10eu", sliderX-captionAdjust - 35, sliderH5);



    //MAXS
    text("8", sliderX-captionAdjust + sliderSize * 0.8, sliderH1);
    text("8", sliderX-captionAdjust + sliderSize * 0.8, sliderH2);
    text("8", sliderX-captionAdjust + sliderSize * 0.8, sliderH3);
    text("8", sliderX-captionAdjust + sliderSize * 0.8, sliderH4);
    text("20eu", sliderX-captionAdjust + sliderSize * 0.8, sliderH5);

    //VALS
    text(valL, sliderX-captionAdjust + sliderSize, sliderH1);
    text(valWe, sliderX-captionAdjust + sliderSize, sliderH2);
    text(valP, sliderX-captionAdjust + sliderSize, sliderH3);
    text(valH, sliderX-captionAdjust + sliderSize, sliderH4);
    text(valWa, sliderX-captionAdjust + sliderSize, sliderH5);
}
