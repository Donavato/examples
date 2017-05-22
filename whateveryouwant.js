/**
 * Created by dhaki on 5/22/2017.
 */

function instuff1(x){
return x+1;
}
function instuff2(x){
return x*x*x;
}
function stuff(instuff1,instuff2)
{
    return function(x)
    {
        return instuff1(instuff2(x))
    };
}
drawExpression(stuff(instuff1,instuff2),-10,10,1,-10,10,1);