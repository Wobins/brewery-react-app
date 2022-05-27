const Brewery = ({ brewery }) => {
  return (
    <>
      <tr onDoubleClick={() => console.log(brewery.id)}>
        <td scope="row">{brewery.name}</td>
        <td>{brewery.city}</td>
        <td>{brewery.state}</td>
        <td>{brewery.brewery_type}</td>
      </tr>
    </>
  )
}

export default Brewery