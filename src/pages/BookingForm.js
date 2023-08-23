
import * as React from "react";
import {useState} from "react"; 
import {validateEmail} from "../utils";
import "./BookingForm.css";
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function BookingForm() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "",
     isTouched: false,
   });
   setRole("role");
 };

 const handleSubmit = (e) => {
   e.preventDefault(); 
   alert("Thanks for making a reservation!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="Booking"> 
     <form onSubmit={handleSubmit}> 
       <fieldset>
        <div className="booking-title">
          <h2>Reservation</h2> </div>
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         <div className="Field">
         <label for="res-date">Choose date</label>
        <input type="date" id="res-date"></input>
         </div>
         <div className="Field">
         <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
        </div>
         <div className="Field"> 
           <label> 
             Occassion <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="bday">Birthday</option> 
             <option value="anni">Anniversary</option> 
           </select> 
         </div> 
         <div className="Field"> 
           <label> 
             Time <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="four_pm">16:00</option> 
             <option value="five_pm">17:00</option> 
             <option value="six_pm">18:00</option> 
           </select> 
         </div> 
         <div className="button-div">
         <button type="submit" disabled={!getIsFormValid()}> 
           Reservation 
         </button> 
         </div>
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default BookingForm; 

