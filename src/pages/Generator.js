import React from 'react';



const styles = {
    section: {
        backgroundColor: '#151722',
        height: '100vh',
        padding: '1px',
    },
    center: {
        backgroundColor: '#28282B',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid',
        borderRadius: '10px',
        height: '400px',
        width: '800px',
        paddingTop: '20px',
        margin: 'auto',
    },
    text: {
        fontFamily: 'Orbitron',
        fontWeight: 'bold',
        color: 'dark gray',
    },
    button: {
        fontFamily: 'Orbitron',
        color: '#F9F6EE',
        backgroundColor: '#36454F',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
    },
    textbox: {
        backgroundColor: '#f8fbf8',
        fontFamily: 'Orbitron',
        color: 'black',
        height: '50px',
        width: '550px',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        resize: 'none',
    },
    form: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        fontFamily: 'Orbitron',
        color: '#f8fbf8',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
    },
    cardTitle: {
        fontFamily: 'Orbitron',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        justifyContent: 'flex-end',
        color: '#f8fbf8',
    }
}

function Generator() {
    return (
        <section className='section' style={styles.section}>
            <div className="wrapper" style={styles.center}>
                <div className="card-header">
                    <h2 className='app' style={styles.cardTitle}>Generate Your Password</h2>
                </div>
                <div className="card">
                    <div className="card-body" >
                        <textarea
                            style={styles.textbox}
                            id="password"
                            placeholder="Your Secure Password"
                            aria-label="Generated Password"
                        ></textarea>
                    </div>

                    <form className='form' style={styles.form}>
                        <label>
                            <input type="checkbox" value="" />item1
                        </label>
                        <label>
                            <input type="checkbox" value="" />item2
                        </label>
                        <label>
                            <input type="checkbox" value="" />item3
                        </label>
                        <label>
                            <input type="checkbox" value="" />item4
                        </label>
                        <label>
                            <input type="checkbox" value="" />item5
                        </label>
                        <label>
                            <input type="checkbox" value="" />item6
                        </label>
                        <label>
                            <input type="checkbox" value="" />item7
                        </label>
                        <label>
                            <input type="checkbox" value="" />item8
                        </label>
                        <label>
                            <input type="checkbox" value="" />item9
                        </label>
                    </form>
                    <div className="card-footer">
                        <button className="generatebtn" style={styles.button}>Generate Password</button>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Generator;
