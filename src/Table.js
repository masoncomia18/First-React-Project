import React from 'react';

const TableHeader = () => {
  return(
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = props => { // function compnonent with a parameter of props
  const rows = props.characterData.map((row, index) => { // the map method(inside: a function that takes 2 parameters row and index) of the characterData props is stored in a variable named rows
    return( // the function will return a table row with the index of each item in the array that is stored in the characterData props. The table data will need to access the objects in the array
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    ) // a "key" helps React identify which items have changed(added / removed / re - ordered).To give a unique identity to every element inside the array, a key is required.
  })

  return <tbody>{rows}</tbody> // This is the final product that will display the newly mapped out array because {rows} is a variable that contains what we did above
}

const Table = props => {
  const {characterData, removeCharacter} = props
  return(
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}

export default Table
