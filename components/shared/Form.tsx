"use client"
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    keyword: '',
    numOfPages: '',
    country: '',
    language: '',
  });

  const [results, setResults] = useState([]);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST', // or 'GET' depending on your API
        headers: {
          'Content-Type': 'application/json',
          // Add any required headers here
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="keyword" className="block font-medium">
            Keyword
          </label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            className="mt-1 p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="numOfPages" className="block font-medium">
            Number of Pages
          </label>
          <select
            id="numOfPages"
            name="numOfPages"
            value={formData.numOfPages}
            onChange={handleChange}
            className="mt-1 p-2 border rounded"
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Similar structure for country and language select inputs */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      {/* Display results */}
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <p>Serial No: {index + 1}</p>
            {/* Add checkboxes, domain, and URL here using result data */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
