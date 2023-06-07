import React from 'react';
import { useNavigate , useParams } from 'react-router-dom';


function DataDetails() {
  const history = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    // Perform data deletion logic here
    console.log('Deleting data with ID:', id);
    // Redirect to the data list page
    history('/datalist');
  };

  return (
    <div>
      <h2>Data Details</h2>
      <p>Displaying details for ID: {id}</p>
      <button onClick={handleDelete}>Delete Data</button>
    </div>
  );
}

export default DataDetails;
