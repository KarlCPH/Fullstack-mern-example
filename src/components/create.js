import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
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
   rating: ""
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://0.0.0.0:8082/api/Cereal/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "",
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
   ratings: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Cereal</h3>
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
       <div className="form-group">
         <input
           type="submit"
           value="Create cereal"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}