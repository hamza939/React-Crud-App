import React from 'react';
import { Link } from 'react-router-dom';

function DataList() {
  // Assuming you have an array of data
  const data = [
    { id: 1, title: 'Data 1' },
    { id: 2, title: 'Data 2' },
    { id: 3, title: 'Data 3' },
  ];

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/datadetails/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/dataform">Create New Data</Link>
    </div>
  );
}

export default DataList;
