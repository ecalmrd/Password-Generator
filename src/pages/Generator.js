import React, { useState } from 'react';

import '../App.css'

export default function Generator() {
    // Variables for password criteria
    const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const specialChar = ["!", "@", "#", "$", "%", "^", "&", ",", "*", "(", ")", ",", "-", "_", "=", "+", "-", ".", "/", "<", ">", "?", "~"];

    // Password prompts
    const [length, setLength] = useState(8);
    const [lowercase, setLowercase] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [special, setSpecial] = useState(false);
    const [password, setPassword] = useState('');

    function handleChange(event) {
        setLength(event.target.value);
    }

    function generatePassword() {
        const length = parseInt(document.getElementById('password').value);
        const lowercase = document.getElementById('lowerC').checked;
        const uppercase = document.getElementById('upperC').checked;
        const numbers = document.getElementById('numbers').checked;
        const special = document.getElementById('special').checked;

        let passCriteria = "";
        if (lowercase) passCriteria += alphaLower;
        if (uppercase) passCriteria += alphaUpper;
        if (numbers) passCriteria += numerics;
        if (special) passCriteria += specialChar;

        let password = "";
        for (let i = 0; i < length; i++) {
            password = password + passCriteria[Math.floor(Math.random() * passCriteria.length)];
            console.log(password);
        }
        setPassword(password);
    }


    return (
        <section className='section'>
            <div className='container'>
                <div className='card-header'>
                    <h2 className='cardTitle'>Generate Your Password</h2>
                </div>
                <div className="card">
                    <div className="card-body" >
                        <textarea
                            className='textBox'
                            id="password"
                            placeholder="Your Secure Password"
                            aria-label="Generated Password"
                        ></textarea>
                    </div>

                    <form className='form formGrid'>
                        <label>
                            <input type="number" id="length" min='8' max='24' value={length} onChange={handleChange} />length
                        </label>
                        <label>
                            <input type="checkbox" id="lowercase" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} /> lowercase
                        </label>
                        <label>
                            <input type="checkbox" id="uppercase" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} /> uppercase
                        </label>
                        <label>
                            <input type="checkbox" id="numbers" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} /> numbers
                        </label>
                        <label>
                            <input type="checkbox" id="special" checked={special} onChange={(e) => setSpecial(e.target.checked)} /> special characters
                        </label>
                    </form>
                    <div className="card-footer">
                        <button className="generateButton" id="generateBtn" onClick={() => {
                            const passwordText = document.querySelector("#password");
                            passwordText.value = generatePassword();
                        }}>Generate Password</button>
                    </div>
                </div>
            </div>
        </section>

    );
}


