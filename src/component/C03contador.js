import React,{useState,Fragment}from 'react';

const C03compConCss= ()=> {
    const[valor, setValor]= useState(0);
    const[numero, setNumero]= useState(0);
}

return (
    <Fragment>
        <button onClick={()=>setValor(valor+1)}>Contador 1</button>
        <span>Incremento de contador 1:{valor}</span>
        <hr/>
        <button onClick={IncrementoDos}>Contador 2</button>
        <span>Incremento de contador 2:{numero}</span>
    </Fragment>
);

export default Contador2;