import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../backend";

export default function Customer() {
  // const [firstname,setfirstname]= useState('');
  // const[lastname,setlastname]= useState('');
  // const[cusername,setcusername]= useState('');
  // const [contact,setcontact]= useState('');
  // const[address,setaddress]= useState('');
  // const[gender,setgender]= useState('');
  // const [city,setcity]= useState('');
  // const[password,setpassword]= useState('');
  const [customerList, setcustomerList] = useState([]);
  const [newfirstname, setnewfirstname] = useState("");
  const [newlastname, setnewlastname] = useState("");
  const [newcusername, setnewcusername] = useState("");
  const [newcontact, setnewcontact] = useState("");
  const [newaddress, setnewaddress] = useState("");
  const [newgender, setnewgender] = useState("");
  const [newcity, setnewcity] = useState("");
  const [newpassword, setnewpassword] = useState("");

  // const addtoList=()=>{

  //   axios.post("http://localhost:5001/customer/insert",{
  //       firstname:firstname,
  //       lastname: lastname,
  //       cusername:cusername,
  //       contact: contact,
  //       address:address,
  //       gender: gender,
  //       city:city,
  //       password: password
  //   })

  //   alert("item Added Successfully")
  // }

  const updateCustomer = (id) => {
    axios.put(`${API}/customer/update`, {
      id: id,
      newfirstname: newfirstname,
      newlastname: newlastname,
      newcusername: newcusername,
      newcontact: newcontact,
      newaddress: newaddress,
      newgender: newgender,
      newcity: newcity,
      newpassword: newpassword,
    });
  };

  const deleteCustomer = (id) => {
    axios.delete(`${API}/customer/delete/${id}`);
  };

  useEffect(() => {
    axios.get(`${API}/customer/read`).then((response) => {
      setcustomerList(response.data);
    });
  }, []);

  return (
    <>
      {/* <div className = "crud">
      <h2>Customer items CRUD APP</h2>
      <div className = "book-crud">
      <label>First Name</label>
      <input type = "text" onChange={(event)=>{setfirstname(event.target.value)}}></input>
      <label>Last Name</label>
      <input type = "text" onChange={(event)=>{setlastname(event.target.value)}}></input>
      <label>User Name</label>
      <input type = "text" onChange={(event)=>{setcusername(event.target.value)}}></input>
      <label>Contact</label>
      <input type = "number" onChange={(event)=>{setcontact(event.target.value)}}></input>
      <label>Address</label>
      <input type = "text" onChange={(event)=>{setaddress(event.target.value)}}></input>
      <label>Gender</label>
      <input type = "text" onChange={(event)=>{setgender(event.target.value)}}></input>
      <label>City</label>
      <input type = "text" onChange={(event)=>{setcity(event.target.value)}}></input>
      <label>Password</label>
      <input type = "text" onChange={(event)=>{setpassword(event.target.value)}}></input>
      <button onClick={addtoList}>Add Customer</button></div>
      </div> */}

      <br />

      <h1 className="text-light bg-dark">Customer List</h1>
      <p> </p>
      <div className="show-books">
        {customerList.map((val, key) => {
          return (
            <div key={key} className="book">
              <h5 className="customerlist">First Name: {val.firstname}</h5>
              <p> </p>
              <h5 className="customerlist"> Last Name: {val.lastname}</h5>
              <p> </p>
              <h5 className="customerlist">Username: {val.cusername}</h5>
              <p> </p>
              <h5 className="customerlist">Contact: {val.contact}</h5>
              <p> </p>
              <h5 className="customerlist">Address: {val.address}</h5>
              <p> </p>
              <h5 className="customerlist">Gender: {val.gender}</h5>
              <p> </p>
              <h5 className="customerlist">City: {val.city}</h5>
              <p> </p>
              <h5 className="customerlist">Password: ******* </h5>
              <p> </p>

              <input
                type="text"
                placeholder="New First Name"
                onChange={(event) => {
                  setnewfirstname(event.target.value);
                }}
              ></input>
              <br />
              <p> </p>
              <input
                type="text"
                placeholder="New Last Name"
                onChange={(event) => {
                  setnewlastname(event.target.value);
                }}
              ></input>
              <br />
              <p> </p>
              <input
                type="text"
                placeholder="New Username"
                onChange={(event) => {
                  setnewcusername(event.target.value);
                }}
              ></input>
              <br />
              <p> </p>
              <input
                type="text"
                placeholder="New Contact"
                onChange={(event) => {
                  setnewcontact(event.target.value);
                }}
              ></input>
              <br />
              <p> </p>
              <input
                type="text"
                placeholder="New Address"
                onChange={(event) => {
                  setnewaddress(event.target.value);
                }}
              ></input>
              <br />
              <p> </p>
              <input
                type="text"
                placeholder="New Gender"
                onChange={(event) => {
                  setnewgender(event.target.value);
                }}
              ></input>
              <br />
              <p> </p>
              <input
                type="text"
                placeholder="New City"
                onChange={(event) => {
                  setnewcity(event.target.value);
                }}
              ></input>
              <br />
              <p> </p>
              <input
                type="text"
                placeholder="New Password"
                onChange={(event) => {
                  setnewpassword(event.target.value);
                }}
              ></input>
              <p> </p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => updateCustomer(val._id)}
              >
                Update
              </button>
              <br />
              <p> </p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteCustomer(val._id)}
              >
                Delete
              </button>
              <p> </p>
              <h2 className="text-primary"> Another User</h2>
              <p></p>
            </div>
          );
        })}
      </div>
    </>
  );
}
