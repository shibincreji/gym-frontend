import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../backend";

export default function Admin() {
  // const [username,setusername]= useState('');
  // const[password,setpassword]= useState('');
  // const[status,setstatus]= useState('');

  const [adminList, setadminList] = useState([]);

  const [newusername, setnewusername] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [newstatus, setnewstatus] = useState("");

  // const addtoList=()=>{

  //   axios.post("http://localhost:5001/admin/insert",{
  //       username:username,
  //     password: password,
  //     status: status
  //   })}

  //   alert("item Added Successfully")
  // }

  const updateAdmin = (id) => {
    axios.put(`${API}/admin/update`, {
      id: id,
      newusername: newusername,
      newpassword: newpassword,
      newstatus: newstatus,
    });
  };

  const deleteAdmin = (id) => {
    axios.delete(`${API}/admin/delete/${id}`);
  };

  useEffect(() => {
    axios.get(`${API}/admin/read`).then((response) => {
      setadminList(response.data);
    });
  }, []);

  return (
    <>
      {/* <div className = "crud">
      <h2>Menu items CRUD APP</h2>
      <div className = "admin-crud">
      <label>Username</label>
      <input type = "text" onChange={(event)=>{setusername(event.target.value)}}></input>
      <label>Password</label>
      <input type = "text" onChange={(event)=>{setpassword(event.target.value)}}></input>
      <label>Status</label>
      <input type = "text" onChange={(event)=>{setstatus(event.target.value)}}></input>
      <button onClick={addtoList}>Add Admin</button></div>
      </div> */}

      <br />

      <h1 className="text-light bg-dark">Admin List</h1>
      <p> </p>
      <div className="show-admins">
        {adminList.map((val, key) => {
          return (
            <div key={key} className="admin">
              <h5 className="adminlist">Username: {val.username}</h5>
              <p></p>
              <h5 className="adminlist"> Password: ****** </h5>
              <p></p>
              <h5 className="adminlist">Status: {val.status}</h5>
              <p></p>
              <input
                type="text"
                placeholder="New Username"
                onChange={(event) => {
                  setnewusername(event.target.value);
                }}
              ></input>
              <br />
              <p></p>
              <input
                type="text"
                placeholder="New Password"
                onChange={(event) => {
                  setnewpassword(event.target.value);
                }}
              ></input>
              <br />
              <p></p>
              <input
                type="text"
                placeholder="New Status"
                onChange={(event) => {
                  setnewstatus(event.target.value);
                }}
              ></input>
              <br />
              <p></p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => updateAdmin(val._id)}
              >
                Update
              </button>
              <br /> <p></p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteAdmin(val._id)}
              >
                Delete
              </button>
              <p></p>
              <h2 className="text-primary"> Another User</h2>
              <p></p>
            </div>
          );
        })}
      </div>
    </>
  );
}
