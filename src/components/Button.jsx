function Button(props){

const styleaButtonPrimary = {
backgroundColor: '#0c3126',
borderRadius: '10px',
color: '#1d1d1d',
border: 'none',
padding: '2px 10px',
};

const styleaButtonSecondary = {
backgroundColor: '#a1a1a1',
borderRadius: '10px',
color: '#1d1d1d',
border: 'none',
padding: '2px 10px',
};


    return(
        <button 
        /*className={props.type === "primary" ?
            "button-primary" : "button-secondary"
        }*/

       style={props.type === "primary" ?
        styleaButtonPrimary : {
            styleaButtonSecondary,
            backgroundColor : '#363636',
            color: '#fff'
        }
       }



         onClick={props.action
            ? props.action : () => alert('Wihoo')
        }
        >
        <p>{props.text}</p>
        </ button>
    )
}

export default Button;