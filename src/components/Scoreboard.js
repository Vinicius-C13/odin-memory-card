import React from 'react';

const Scoreboard = (props) => {

    let scoreContainer = {
        backgroundColor: 'blue',
        width: '70%',
        marginInline: 'auto',
        marginTop: '20px',
        marginBottom: '50px',
        display: 'flex',
        gap: '40px',
        justifyContent: 'center',
        padding: '20px',
        color: 'white'
    }

    return (
        <div style={scoreContainer}>
            <h3>
                Score: {props.score}
            </h3>
            <h3>
                Record: {props.record}
            </h3>
        </div>
    )
}

export default Scoreboard