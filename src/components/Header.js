import React from 'react';


function Header({ currentPage, handlePageChange }) {

    const styles = {
        header: {
            backgroundColor: '#151722',
            padding: '10px',
            objectFit: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            justifyContent: 'flex-end',
            margin: '0',
            marginBottom: '0px',
        },
        text: {
            fontFamily: 'Orbitron',
            fontSize: '50px',
            color: '#f8fbf8',
            textAlign: 'center',
        },

    }

    return (
        <ul className="nav" style={styles.header} >
                <div className="card-header">
                    <h2 className='app' style={styles.text}>Password Generator</h2>
                </div>
        </ul>

    );
}

export default Header;