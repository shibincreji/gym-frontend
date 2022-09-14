import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../backend";

export default function Admin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [status, setstatus] = useState("");

  const [adminList, setadminList] = useState([]);

  // const [newusername,setnewusername]= useState('');
  //   const[newpassword,setnewpassword]= useState('');
  //   const[newstatus,setnewstatus]= useState('');

  const addtoList = () => {
    axios.post(`${API}/admin/insert`, {
      username: username,
      password: password,
      status: status,
    });

    alert("Admin Added Successfully");
  };

  // const updateAdmin=(id)=>{
  //   axios.put("http://localhost:5001/admin/update",{id: id,
  //       newusername: newusername,
  //       newpassword: newpassword,
  //       newstatus: newstatus,
  // })
  // }

  // const deleteAdmin=(id)=>{
  //   axios.delete(`http://localhost:5001/admin/delete/${id}`);
  // }

  useEffect(() => {
    axios.get(`${API}/admin/read`).then((response) => {
      setadminList(response.data);
    });
  }, []);

  return (
    <>
      <center>
        <div className="crud">
          <h1 class="text-light bg-dark">Add New Admin</h1>
          <p></p>
          <div className="admin-crud">
            <label>Username</label> &nbsp;
            <input
              type="text"
              onChange={(event) => {
                setusername(event.target.value);
              }}
            ></input>
            <p></p>
            <label>Password</label> &nbsp;
            <input
              type="text"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            ></input>
            <p></p>
            <label>Status</label> &nbsp; &nbsp; &nbsp;
            <input
              type="text"
              onChange={(event) => {
                setstatus(event.target.value);
              }}
            ></input>
            <p> </p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              type="button"
              className="btn btn-success"
              onClick={addtoList}
            >
              Add Admin
            </button>
          </div>
        </div>{" "}
      </center>

      <br />

      {/* <h2>Admin List</h2>
      <div className = "show-admins">
      {adminList.map((val, key)=>{
        return <div key = {key} className = "admin">
          <h3 className= "adminlist">Username {val.username}</h3><h3  className= "adminlist"> Password   {val.password}</h3><h3  className= "adminlist">Status{val.status}</h3>
          <input type = "text" placeholder = "New Username" onChange={(event)=>{setnewusername(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New Password" onChange={(event)=>{setnewpassword(event.target.value)}}></input><br/>
          <input type = "text" placeholder = "New Status" onChange={(event)=>{setnewstatus(event.target.value)}}></input><br/>
         
          <button onClick= {()=>updateAdmin(val._id)}className = "btn-admin">Update</button><br/>
          <button onClick={()=> deleteAdmin(val._id)} className = "btn-admin">Delete</button>
        
        </div>
      })}
      </div> */}
    </>
  );
}
