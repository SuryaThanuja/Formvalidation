import React, { useState, useEffect } from "react";
import { getAll } from "@divyanshu013/inspirational-quotes";
import "./App.css";

export default function App() {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const quotesData = getAll();
        setQuotes(quotesData);
    }, []);

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    const handlePreviousClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
        );
    };

    const currentQuote = quotes.length > 0 ? quotes[currentIndex] : null;

    const backgroundColors = ["#8cc084", "#b7ebc3", "#ffb37e", "#7fa8d7"];
    const currentBackgroundColor =
        backgroundColors[currentIndex % backgroundColors.length];

    return (
        <div className="content" style={{ background: currentBackgroundColor }}>
            <h1 id="top">GeeksforGeeks</h1>
            <h1>Inspirational Quote Generator</h1>

            {currentQuote && (
                <div className="quote-card">
                    <blockquote>
                        <p>"{currentQuote.quote}"</p>
                    </blockquote>
                    <h2>{currentQuote.author}</h2>
                    <h3>{currentQuote.source}</h3>
                </div>
            )}

            <div className="button-container">
                <button onClick={handlePreviousClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
                <button
                    onClick={() =>
                        window.open(
                            `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
                        )
                    }
                >
                    Share on Facebook
                </button>
            </div>
        </div>
    );
}
