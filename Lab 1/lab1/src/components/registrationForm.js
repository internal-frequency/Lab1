import React from "react";

function RegistrationForm(){
return( <div class="form">

 <form class="form-body">

  <label class="form_label">First Name</label>
  <input class="form_input"  type="text" placeholder="First Name"></input>

  <label class="form_label">Last Name</label>
  <input class="form_input" type="text" placeholder="Last Name"></input>

  <label class="form_label">Email</label>
  <input class="form_input"type="email" placeholder="Email"></input>

  <label class="form_label">Password</label>
  <input class="form_input" type ="password" placeholder="Password"></input>

  <label class="form_label">Confirm Password</label>
  <input class="form_input" type ="password" placeholder="Confirm Password"></input>

  


 </form>
<div class="footer">
 <input  type="submit" name="Register" value="Register"></input>
 </div>

</div>
)
}

export default RegistrationForm;