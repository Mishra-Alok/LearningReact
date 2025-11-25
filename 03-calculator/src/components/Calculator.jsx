const Calculator = ()=> {

    function operation(a, b, op){
        if(op === '+') return a+b;
        else if(op === '-') return a-b;
        else if(op === '*') return a*b;
        else if(op === '/') return a/b;
    }
    return (
        <>
            <h1>Result: {operation(5, 10, "+")}</h1>
        </>
    )
}

export default Calculator;