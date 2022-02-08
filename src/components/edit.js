import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
    name: "",
    mfr: "",
    type: "",
    calories: "",
    protein: "",
    fat: "",
    sodium: "",
    fiber: "",
    carbo: "",
    sugars: "",
    potass: "",
    vitamins: "",
    shelf: "",
    weight: "",
    cups: "",
    rating: "",
   cereals: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://0.0.0.0:8082/api/cereals/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const cereal = await response.json();
     if (!cereal) {
       window.alert(`Cereal with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(cereal);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedCereal = {
     name: form.name,
     mfr: form.mfr,
     type: form.type,
     calories: form.calories,
     protein: form.protein,
     fat: form.fat,
     sodium: form.sodium,
     fiber: form.fiber,
     carbo: form.carbo,
     sugars: form.sugars,
     potass: form.potass,
     vitamins: form.vitamins,
     shelf: form.shelf,
     weight: form.weight,
     cups: form.cups,
     rating: form.rating,
     
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:8082/api/cereals/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedCereal),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Cereal</h3>
     <form onSubmit={onSubmit}>
     <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="mfr">Mfr</label>
         <input
           type="text"
           className="form-control"
           id="mfr"
           value={form.mfr}
           onChange={(e) => updateForm({ mfr: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="type">Type</label>
         <input
           type="text"
           className="form-control"
           id="type"
           value={form.type}
           onChange={(e) => updateForm({ type: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="calories">Calories</label>
         <input
           type="text"
           className="form-control"
           id="calories"
           value={form.calories}
           onChange={(e) => updateForm({ calories: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="protein">Protein</label>
         <input
           type="text"
           className="form-control"
           id="protein"
           value={form.protein}
           onChange={(e) => updateForm({ protein: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="fat">Fat</label>
         <input
           type="text"
           className="form-control"
           id="fat"
           value={form.fat}
           onChange={(e) => updateForm({ fat: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="sodium">Sodium</label>
         <input
           type="text"
           className="form-control"
           id="sodium"
           value={form.sodium}
           onChange={(e) => updateForm({ sodium: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="fiber">Fiber</label>
         <input
           type="text"
           className="form-control"
           id="fiber"
           value={form.fiber}
           onChange={(e) => updateForm({ fiber: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="carbo">Carbo</label>
         <input
           type="text"
           className="form-control"
           id="carbo"
           value={form.carbo}
           onChange={(e) => updateForm({ carbo: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="sugars">Sugars</label>
         <input
           type="text"
           className="form-control"
           id="sugars"
           value={form.sugars}
           onChange={(e) => updateForm({ sugars: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="potass">Potass</label>
         <input
           type="text"
           className="form-control"
           id="potass"
           value={form.potass}
           onChange={(e) => updateForm({ potass: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="vitamins">Vitamins</label>
         <input
           type="text"
           className="form-control"
           id="vitamins"
           value={form.vitamins}
           onChange={(e) => updateForm({ vitamins: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="shelf">Shelf</label>
         <input
           type="text"
           className="form-control"
           id="shelf"
           value={form.shelf}
           onChange={(e) => updateForm({ shelf: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="weight">Weight</label>
         <input
           type="text"
           className="form-control"
           id="weight"
           value={form.weight}
           onChange={(e) => updateForm({ weight: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="cups">Cups</label>
         <input
           type="text"
           className="form-control"
           id="cups"
           value={form.cups}
           onChange={(e) => updateForm({ cups: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="rating">Rating</label>
         <input
           type="text"
           className="form-control"
           id="rating"
           value={form.rating}
           onChange={(e) => updateForm({ rating: e.target.value })}
         />
         </div>
    
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Cereal"
           className="btn btn-primary"
         />
       </div>
    
     </form>
   </div>
 );
}