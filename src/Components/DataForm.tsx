import React, { useState, useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';

function DataForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch data from the API based on the ID if it's an update operation
    if (id) {
      // Perform data retrieval logic based on the ID
      console.log('Fetching data with ID:', id);
      // Set the retrieved data in the form fields
      setTitle('Retrieved title');
      setDescription('Retrieved description');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform data submission logic here
    console.log('Data submitted:', title, description);
    // Reset the form
    setTitle('');
    setDescription('');
    // Redirect to the data list page
    history('/datalist');
  };

  return (
    <div className='main-wrapper'>
             <div className='main-container'>
      <h2>{id ? 'Update Data' : 'Create Data'}</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
      </div>
    </div>
  );
}

export default DataForm;
