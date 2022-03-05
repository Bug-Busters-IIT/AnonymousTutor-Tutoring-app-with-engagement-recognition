
import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {

    const Parentdiv = {
        height: 20,
        width: 1000,
        backgroundColor: '#5F5F5F',
        borderRadius: 40,
        padding: 5,

    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
    }

    const progresstext = {
        paddingBottom:10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                {/*<span style={progresstext}>{`${progress}%`}</span>*/}
            </div>
        </div>
    )
}

export default Progress_bar;