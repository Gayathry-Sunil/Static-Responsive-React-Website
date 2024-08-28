import React, { useState } from 'react';
import './App.css'; 

const App = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="app">
            <header className="header">
                <h1>Personal Information Form</h1>
            </header>
            <main className="main-content">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter your age"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div className="info-display">
                    <h2>Information Display</h2>
                    <p><strong>Name:</strong> {name || "N/A"}</p>
                    <p><strong>Email:</strong> {email || "N/A"}</p>
                    <p><strong>Age:</strong> {age || "N/A"}</p>
                </div>
            </main>
        </div>
    );
};

export default App;
