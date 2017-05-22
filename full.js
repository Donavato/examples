/**
 * Created by jkarp on 5/19/2017.
 */
console.log("here");

let canvas = document.getElementById('main');
let g = canvas.getContext('2d');


function drawExpression(expression,xMin,xMax,xSteps,yMin,yMax,ySteps)
{
    let width = parseInt(canvas.width);
    let height = parseInt(canvas.height);
    drawLine(0,height/2,width,height/2);
    drawLine(width/2,0,width/2,height);
    for(let i = yMin; i< yMax;i  = i + ySteps)
    {
        drawLine(width/2-5,-1 * (height/(yMax-yMin)/ySteps)*i+yMin*(width/(yMax-yMin))+height,width/2+5,-1 * (height/(yMax-yMin)/ySteps)*i+yMin*(width/(yMax-yMin))+height)
    }
    for(let i = xMin; i< xMax;i  = i + xSteps)
    {
        drawLine((width*xSteps/(xMax-xMin))* i-xMin*(width/(xMax-xMin)),height/2 -5,(width*xSteps/(xMax-xMin))* i-xMin*(width/(xMax-xMin)),height/2+5)
    }
    drawFunction(expression,xMin,xMax,xSteps,yMin,yMax,ySteps,width,height);


}

function drawFunction(expression,xMin,xMax,xSteps,yMin,yMax,ySteps,width,height)
{
    //g.strokeStyle = "#ff0000";
    g.beginPath();
    g.moveTo(xMin,expression(xMin));
    let rawX,rawY,scaledX,scaledY;

    for(let i = xMin;i <=xMax ; i = i +xSteps)
    {
        rawX = i;
        rawY = expression(rawX);
        scaledY = -1 * (height/(yMax-yMin)/ySteps)*rawY+yMin*(width/(yMax-yMin))+height;
        scaledX = (width*xSteps/(xMax-xMin))* rawX-xMin*(width/(xMax-xMin));
        console.log(rawX+":"+rawY+ "adjusted="+scaledX+":"+scaledY);


        g.lineTo(scaledX,scaledY);
    }
    g.stroke();
}

