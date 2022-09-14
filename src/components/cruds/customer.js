import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../backend";

export default function Customer() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [cusername, setcusername] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [city, setcity] = useState("");
  const [password, setpassword] = useState("");
  const [customerList, setcustomerList] = useState([]);

  // const [newfirstname,setnewfirstname]= useState('');
  //   const[newlastname,setnewlastname]= useState('');
  //   const[newcusername,setnewcusername]= useState('');
  //   const [newcontact,setnewcontact]= useState('');
  //   const[newaddress,setnewaddress]= useState('');
  //   const[newgender,setnewgender]= useState('');
  //   const [newcity,setnewcity]= useState('');
  //   const[newpassword,setnewpassword]= useState('');

  const addtoList = () => {
    axios.post(`${API}/customer/insert`, {
      firstname: firstname,
      lastname: lastname,
      cusername: cusername,
      contact: contact,
      address: address,
      gender: gender,
      city: city,
      password: password,
    });

    alert("Customer Added Successfully");
  };

  // const updateCustomer=(id)=>{
  //   axios.put("http://localhost:5001/customer/update",{id: id,
  //       newfirstname: newfirstname,
  //       newlastname: newlastname,
  //       newcusername: newcusername,
  //       newcontact: newcontact,
  //       newaddress: newaddress,
  //       newgender: newgender,
  //       newcity: newcity,
  //       newpassword: newpassword,

  // })
  // }

  // const deleteCustomer=(id)=>{
  //   axios.delete(`http://localhost:5000/customer/delete/${id}`);
  // }

  useEffect(() => {
    axios.get(`${API}/customer/read`).then((response) => {
      setcustomerList(response.data);
    });
  }, []);

  return (
    <>
      <div className="crud">
        <h1 className="text-white bg-dark">Add New Customer</h1>
        <p> </p>
        <div className="book-crud">
          <label>First Name</label> &nbsp; &nbsp;
          <input
            type="text"
            onChange={(event) => {
              setfirstname(event.target.value);
            }}
          ></input>
          <p></p>
          <label>Last Name</label> &nbsp; &nbsp;
          <input
            type="text"
            onChange={(event) => {
              setlastname(event.target.value);
            }}
          ></input>
          <p></p>
          <label>User Name</label> &nbsp;
          <input
            type="text"
            onChange={(event) => {
              setcusername(event.target.value);
            }}
          ></input>
          <p></p>
          <label>Contact</label> &nbsp; &nbsp; &nbsp;
          <input
            type="number"
            onChange={(event) => {
              setcontact(event.target.value);
            }}
          ></input>
          <p></p>
          <label>Address</label> &nbsp; &nbsp; &nbsp;
          <input
            type="text"
            onChange={(event) => {
              setaddress(event.target.value);
            }}
          ></input>
          <p></p>
          <label>Gender</label> &nbsp; &nbsp; &nbsp;
          <input
            type="text"
            onChange={(event) => {
              setgender(event.target.value);
            }}
          ></input>
          <p></p>
          <label>City</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="text"
            onChange={(event) => {
              setcity(event.target.value);
            }}
          ></input>
          <p></p>
          <label>Password</label> &nbsp; &nbsp;
          <input
            type="text"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          ></input>
          <p></p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button type="button" className="btn btn-success" onClick={addtoList}>
            Add Customer
          </button>
        </div>
      </div>

      <br />

      {/* <h2>Customer List</h2>
      <div className = "show-books">
      {customerList.map((val, key)=>{
        return <div key = {key} className = "book">
          <h3 className= "customerlist">First Name {val.firstname}</h3><h3  className= "customerlist"> Last Name   {val.lastname}</h3><h3  className= "customerlist">Username{val.username}</h3><h3  className= "customerlist">Contact{val.contact}</h3><h3  className= "customerlist">Address{val.address}</h3><h3  className= "customerlist">Gender{val.gender}</h3><h3  className= "customerlist">City{val.city}</h3><h3  className= "customerlist">Password{val.password}</h3>
          <input type = "text" placeholder = "New First Name" onChange={(event)=>{setnewfirstname(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New Last Name" onChange={(event)=>{setnewlastname(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New Username" onChange={(event)=>{setnewcusername(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New Contact" onChange={(event)=>{setnewcontact(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New Address" onChange={(event)=>{setnewaddress(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New Gender" onChange={(event)=>{setnewgender(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New City" onChange={(event)=>{setnewcity(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New Password" onChange={(event)=>{setnewpassword(event.target.value)}}></input>
          <button onClick= {()=>updateCustomer(val._id)}className = "btn-book">Update</button><br/>
          <button onClick={()=> deleteCustomer(val._id)} className = "btn-book">Delete</button>
        
        </div>
      })}
      </div> */}
    </>
  );
}
