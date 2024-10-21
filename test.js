/**
 * @param {string} expression
 * @return {boolean}
 */



function evaluateExpression(expression,index){
    if (expression[index] == 'f'){
        return 0;
    }
    else if(expression[index] == 't'){
        return 1;
    }
    else if(expression[index] == '|'){
        
    }
}
var parseBoolExpr = function(expression) {
    const result = evaluateExpression(expression,0)

};