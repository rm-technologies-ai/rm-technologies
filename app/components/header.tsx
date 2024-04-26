import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <h1 className="text-xl">RM Technologies</h1>
                {/* Navigation or other header content goes here */}
            </div>
        </header>
    );
};

export default Header;
