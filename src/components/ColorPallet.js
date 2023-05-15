import './ColorPallet.css';

function ColorPallet(props){
    const backgroundColor = {
        backgroundColor: props.color
    }
    return(
        
        <div className='quadradosDeCor' style={backgroundColor}></div>
    )
}

export default ColorPallet