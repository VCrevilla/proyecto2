import React from 'react'

const C03compConCss = () => {
  return (
    <div className="marcoComponente">
        <h4>Componente 3. Con forma de definir estilos</h4>
        <button style={{backgroundColor:'green',padding:'3px'}}>
            Boton 1 con estilos en la linea de atributos (Definidos como objeto)

        </button>
        <hr/>
        <button>
            Boton 2 con estilos en archivo css(normal)

        </button>
        <br/>
        <button style={style.estilo1}>
            Boton 3 con estilos en archivo js (Definido como objeto)

        </button>
    </div>
  )
}

export default C03compConCss

