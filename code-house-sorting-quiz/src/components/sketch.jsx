import Sketch from "react-p5"

export const Bg = () => {
        let DESSIN= "264";

        let cols, rows; 
        let size = 30;
        let maxR = size/4;
        let zoom = 0;
        let speed = 0.0011;
        var canvas;

        const setup = (p5) => {
            canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
            canvas.parent("root");
            canvas.style('z-index', '-10');
            canvas.position(0, 0);
            p5.colorMode(p5.HSB, 360, 100, 100);
            cols = p5.windowWidth / size;
            rows = p5.windowHeight / size;
            p5.noFill();
        }

        const draw = (p5) =>  {
            p5.background(220, 50, 30);
            //Draw circles
            for (let i=0; i<cols;i++){
                for (let j=0; j<rows; j++){
                p5.x = i*size + size/2; //+size/2 to offset start of circles
                p5.y = j*size + size/2;
                
                let xx = p5.map(i, 0, cols-1, -1, 1);
                let yy = p5.map(j, 0, rows-1, -1, 1);
                
                let F = computeF(xx, yy, DESSIN, zoom);
                
                //Only want Q1 and Q4,
                if ( F > 0){
                    let r = F * maxR;
                
                    let h = p5.map(F, 0, 1, 0, 180);
                    let s = 100;
                    let b =100;
                    p5.stroke(h, s ,b, -50)
                    p5.fill(h, s, b);
                    
                    p5.ellipse(p5.x, p5.y, r*2, r*2);
                }else if (F < 0){//Q2 Q3
                    let r = F * maxR;
                
                    let h = p5.map(F, 0, 1, 180, 360);
                    let s = 100;
                    let b =100;
                    p5.stroke(h, s ,b, -50)
                    p5.fill(h, s, b);
                    
                    p5.ellipse(p5.x, p5.y, r*2, r*2);
                }
                
                
                }
            }

            zoom += speed
        }

        function computeF(xx, yy, DESSIN, zoom){
            let F;
            if (DESSIN === '251'){
                //xx and yy are values between -1 and 1
                F = xx*yy * zoom; //zoom
            }else if (DESSIN === '264'){
                let tileNum = 5;
                let Z = tileNum * xx * yy * zoom;
                //F = Z - floor(Z);
                F = Z % 1;
            }
            return F;
        }

        window.addEventListener('resize', windowResized);
        windowResized()
        window.removeEventListener('resize', windowResized)

        function windowResized(p5) {
            // p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
            console.log("hi")
        }

        return (
            <canvas className="display position-fixed h-0 w-0">
                <Sketch setup={setup} draw={draw} className="position-fixed"/>
            </canvas>
        )
}
