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
let valMo;

let totalCost;
let totalEffort;
let plantLife;
let plantLife2;
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

let imgB;



let mapL, mapH, mapW, mapP;


let sliderH1, sliderH2, sliderH3, sliderH4, sliderH5;



function setup() {


    var canvas = createCanvas(800, 600);
    canvas.parent('calc');



    leftMargin = 100;
    scoreMargin = 540;
    sliderX = 1070;
    sliderYgap = 30;
    sliderSize = 100;
    textSize(15);
    tempH = innerHeight - 300;
    imgH = 300;
    sliderY = -65;
    captionAdjust = 545;

    UIgap = 350;
    UIstartY = innerHeight * 4 + 340;




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
    
        imgB = loadImage('assets/exports1/birds.png');

    


    sliderLeaves = new HScrollbar(captionAdjust-40, sliderH1, sliderSize, 16, 2);
    sliderWeeds = new HScrollbar(captionAdjust-40, sliderH2, sliderSize, 16, 2);
    sliderPruning = new HScrollbar(captionAdjust-40, sliderH3, sliderSize, 16, 2);
    sliderHedges = new HScrollbar(captionAdjust-40, sliderH4, sliderSize, 16, 2);
    sliderWage = new HScrollbar(captionAdjust-40, sliderH5, sliderSize, 16, 2);





}




function draw() {

    background(255, 255, 255);




    sliderLeaves.update();
    sliderLeaves.display();
      sliderWeeds.update();
    sliderWeeds.display();
      sliderHedges.update();
    sliderHedges.display();
      sliderWage.update();
    sliderWage.display();
  sliderPruning.update();
    sliderPruning.display();

    valL = int(map(sliderLeaves.getPos().toFixed(2), 560, 715, -1, 9));
    valWe = int(map(sliderWeeds.getPos().toFixed(2), 560, 715, -1, 9));
    valP = int(map(sliderPruning.getPos().toFixed(2), 560, 715, -1, 9));
    valH = int(map(sliderHedges.getPos().toFixed(2), 560, 715, -1, 9));
    valWa = int(map(sliderWage.getPos().toFixed(2), 560, 715, 6, 22));

    totalEffort = valL + valH + valWe + valP;
    totalCost = truncateDecimals(valMo,2);

    image(imgBASE, leftMargin, 0, 600, imgH);



    mapH = valH;
    mapL = valL;
    mapP = valP;
    mapW = valWe;


    if (mapP < 4) {
        image(imgP3, leftMargin, 0, 600, imgH);
    }

    if ((mapP >= 4) && (mapP < 7)) {
        image(imgP2, leftMargin, 0, 600, imgH);
    }

    if (mapP >=7) {
        image(imgP1, leftMargin, 0, 600, imgH);
    }




    if (mapW < 4) {
        image(imgW3, leftMargin, 0, 600, imgH);
    }

    if ((mapW >= 4) && (mapW < 7)) {
        image(imgW2, leftMargin, 0, 600, imgH);
    }

    if (mapW >=7) {
        image(imgW1, leftMargin, 0, 600, imgH);
    }

    let tempWage=valWa*totalEffort;
valMo = map(tempWage, 20, 740, 0.20, 3);


    if (mapH < 4) {
        image(imgH3, leftMargin, 0, 600, imgH);
    }

    if ((mapH >= 4) && (mapH < 7)) {
        image(imgH2, leftMargin, 0, 600, imgH);
    }

    if (mapH >=7) {
        image(imgH1, leftMargin, 0, 600, imgH);
    }




    if (mapL < 4) {
        image(imgL3, leftMargin, 0, 600, imgH);
    }

    if ((mapL >= 4) && (mapL < 7)) {
        image(imgL2, leftMargin, 0, 600, imgH);
    }

    if (mapL >=7) {
        image(imgL1, leftMargin, 0, 600, imgH);
    }









    /////////scores


    //PLANTLIFE
    if ((valWe >3) && (valWe <7) && (valP < 6)) {
        plantLife = "🌿🌿🌿";
        plantLife2 = "thriving";
          image(imgB, leftMargin, 0, 600, imgH);
    } else {
        if ((valWe < 4)) {
            plantLife = "🌿🌿";
            plantLife2 = "healthy";
        }
        else  {
            plantLife = "🌿";
            plantLife2 = "contained";
        }
    }
    


    //WORKMOOD
    if ((totalEffort > 28) && (valWa < 15)) {
        workerMood = "😩";
    } else {
        workerMood = "😀";
    }
    if ((totalEffort < 9)) {
        workerMood = "🤔";
    }



    //KALITAT

    if ((totalEffort > 34)) {
        kalitat = "A+";
    }
    if ((totalEffort > 30) && (totalEffort <= 34)) {
        kalitat = "A";
    }
    if ((totalEffort > 26) && (totalEffort <= 30)) {
        kalitat = "B";
    }
    if ((totalEffort > 22) && (totalEffort <= 26)) {
        kalitat = "C";
    }
    if ((totalEffort <= 22)) {
        kalitat = "D";
    }

fill(255);
    textSize(32);
    text(kalitat, scoreMargin, 90);
    text(workerMood, scoreMargin, 140);
    text(plantLife, scoreMargin, 190);
    text(totalCost + "€/mo.", scoreMargin, 240);

fill(128,128,255);

    //slider labels
    textSize(16);
    text("Having Ergon gardeners pick leaves up " + valL + " times a month, weed " + valWe + " times a month, prune trees " + valP + " times a month, and trim hedges " + valH + " times a month for an hourly wage of " + valWa + "€/hr (which on average would add " + totalCost + "€ to your city taxes) would result in a "+ plantLife2+" plant life. The Kwaliteitscatalogus grade equivalent for this situation would be a "+ kalitat+".", leftMargin, sliderH1-10, 350, 2000);

fill(128,128,255);
    //MINS
    text("RAKING", sliderX - captionAdjust + 90, sliderH1+5);
    text("WEEDING", sliderX - captionAdjust + 90, sliderH2+5);
    text("PRUNING", sliderX - captionAdjust + 90, sliderH3+5);
    text("TRIMMING", sliderX - captionAdjust + 90, sliderH4+5);
    text("EARNING", sliderX - captionAdjust + 90, sliderH5+5);




}


class HScrollbar {
    constructor(xp, yp, sw, sh, l) {
        this.swidth = sw;
        this.sheight = sh;
        let widthtoheight = sw - sh;
        this.ratio = sw / widthtoheight;
        this.xpos = xp;
        this.ypos = yp - this.sheight / 2;
        this.spos = this.xpos + this.swidth / 2 - this.sheight / 2;
        this.newspos = this.spos;
        this.sposMin = this.xpos;
        this.sposMax = this.xpos + this.swidth - this.sheight;
        this.loose = l;
        this.over = false;
        this.locked = false;
    }

    update() {
        if (this.overEvent()) {
            this.over = true;
        } else {
            this.over = false;
        }
        if (mouseIsPressed && this.over) {
            this.locked = true;
        }
        if (!mouseIsPressed) {
            this.locked = false;
        }
        if (this.locked) {
            this.newspos = constrain(mouseX - this.sheight / 2, this.sposMin, this.sposMax);
        }
        if (abs(this.newspos - this.spos) > 1) {
            this.spos = this.spos + (this.newspos - this.spos) / this.loose;
        }
    }

    overEvent() {
        if (mouseX > this.xpos && mouseX < this.xpos + this.swidth &&
            mouseY > this.ypos && mouseY < this.ypos + this.sheight) {
            return true;
        } else {
            return false;
        }
    }

    display() {
        noStroke();
        fill(228,228,255);
        rect(this.xpos, this.ypos, this.swidth, this.sheight);
       
          fill(128,128,255);
        
        rect(this.spos, this.ypos, this.sheight, this.sheight);
    }

    getPos() {
        // Convert spos to be values between
        // 0 and the total width of the scrollbar
        return this.spos * this.ratio;
    }
}

truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};