import React, { useState } from "react";
import "./Tmp.css";

interface ID {
    id: number;
    name: string;
}

const Tmp: React.FC = () => {
    const [formData, setFormData] = useState<ID>({ id: 0, name: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "id" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="id"
                    >
                        ID
                    </label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
            <div className="mt-4">
                <h1 className="text-xl font-bold mb-2">hello</h1>
                <h2 className="text-gray-700 text-base">ID: {formData.id}</h2>
                <h3 className="text-gray-700 text-base">
                    Name: {formData.name}
                </h3>
            </div>
        </div>
    );
};

export default Tmp;
