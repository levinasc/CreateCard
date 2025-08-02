import './CampoFormulario.css'

const CampoFormulario = (props) => {

    // let valor = 'Levi'

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-formulario">

                <label>{props.label}</label>
                <input  value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
            
        </div>
    )
}

export default CampoFormulario