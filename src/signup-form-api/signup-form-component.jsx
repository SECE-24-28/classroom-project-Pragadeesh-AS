import React from "react";
import axios from "axios";
const SignupFormComponent = () => {
    const [users, setUsers] = React.useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:21000/api/v1/User/getUsers"
      );
      if (response.status === 200) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching users:", error.response?.data || error.message);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("=>(The value:)>=", e.target.email.value);
    // console.log("The first name:", e.target.firstname.value);
    try {
      console.log("CHECK ENTRY 2381");

      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userSignup",
        {
          firstName: e.target.firstName.value,
          email: e.target.email.value,
        }
      );
      if (pushDetails.status === 200) {
        console.log("The process is successful");
      } else {
        console.log("Error occured");
      }
    } catch (e) {
      console.log("Error:", e.response?.data || e.message);
      console.log("Status:", e.response?.status);
      console.log("Full error:", e);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" name="firstName" />
        <button type="submit">Submit</button>
      </form>
      
      <hr />
      <button onClick={getUsers}>Get All Users</button>
      
      <div>
        <h3>Users ({users.length}):</h3>
        {users.map(user => (
          <div key={user._id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <p><strong>Name:</strong> {user.firstName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>ID:</strong> {user._id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SignupFormComponent;