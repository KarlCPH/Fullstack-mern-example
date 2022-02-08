import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Cereal = (props) => (
 <tr>
   <td>{props.cereal.name}</td>
   <td>{props.cereal.mfr}</td>
   <td>{props.cereal.type}</td>
   <td>{props.cereal.calories}</td>
   <td>{props.cereal.protein}</td>
   <td>{props.cereal.fat}</td>
   <td>{props.cereal.sodium}</td>
   <td>{props.cereal.fiber}</td>
   <td>{props.cereal.carbo}</td>
   <td>{props.cereal.sugars}</td>
   <td>{props.cereal.potass}</td>
   <td>{props.cereal.vitamins}</td>
   <td>{props.cereal.shelf}</td>
   <td>{props.cereal.weight}</td>
   <td>{props.cereal.cups}</td>
   <td>{props.cereal.rating}</td>


   <td>
     <Link className="btn btn-link" to={`/edit/${props.cereal._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteCereal(props.cereal._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function CerealList() {
 const [cereals, setCereals] = useState([]);
 
 // This method fetches the cereals from the database.
 useEffect(() => {
   async function getCereals() {
     const response = await fetch(`http://localhost:8082/api/cereals/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const cereals = await response.json();
     setCereals(cereals);
   }
 
   getCereals();
 
   return;
 }, [cereals.length]);
 
 // This method will delete a cereal
 async function deleteCereals(id) {
   await fetch(`http://localhost:8082/api/cereals/${id}`, {
     method: "DELETE"
   });
 
   const newCereals = cereals.filter((el) => el._id !== id);
   setCereals(newCereals);
 }
 
 // This method will map out the cereals on the table
 function cerealList() {
   return cereals.map((cereal) => {
     return (
       <Cereal
         cereal={cereal}
         deleteCereal={() => deleteCereals(cereal._id)}
         key={cereal._id}
       />
     );
   });
 }
 
 // This following section will display the table with the cereals of individuals.
 return (
   <div>
     <h3>Cereal List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Manufacturer</th>
           <th>Type</th>
           <th>Calories</th>
           <th>Protein</th>
           <th>Fat</th>
           <th>Sodium</th>
           <th>Fiber</th>
           <th>Carbo</th>
           <th>Sugars</th>
           <th>Potass</th>
           <th>Vitamins</th>
           <th>Shelf</th>
           <th>Weight</th>
           <th>Cups</th>
           <th>Rating</th>
         </tr>
       </thead>
       <tbody>{cerealList()}</tbody>
     </table>
   </div>
 );
}