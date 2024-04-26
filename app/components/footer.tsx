import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-700 text-white p-4">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} RM Technologies</p>
                {/* Additional footer content goes here */}
            </div>
        </footer>
    );
};

export default Footer;
