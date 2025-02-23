import React from "react";
import "./Tmp02.css";

interface Info {
    id: number;
    name: string;
}

const Tmp02: React.FC<Info> = ({ id, name }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <h1 className="text-xl font-bold mb-2">Hello</h1>
            <h2 className="text-gray-700 text-base">ID: {id}</h2>
            <h3 className="text-gray-700 text-base">Name: {name}</h3>
        </div>
    );
};

export default Tmp02;
