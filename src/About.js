import React from "react";
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container mx-auto mt-20 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to the About Page</h1>
            
            <p className="italic text-gray-5">
                "Organize your tasks with ease and boost your productivity. The Todo App is here to make your life simpler."
            </p>
            <p className="mt-6">
                <Link to="/" className="text-blue-500">Back to Home</Link>
            </p>
        </div>
    );
}

export default About;
