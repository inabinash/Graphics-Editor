import React from 'react'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect } from 'react';
const Fetch = () => {

    const[users,setUsers]=React.useState([])   
    const fetchShows = async () => {
        await getDocs(collection(db, "users")).then((querySnapshot) => {
          const newShows = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            
          }));
          console.log(newShows);
          setUsers(newShows);
          console.log(users.length);
        });
      };
    
      useEffect(() => {
        fetchShows();
      }, []);
  return (
    <div>
      <button onClick={fetchShows}>Fetch Data</button>
      
      <ul>
        {users?.map((show, index) => (
          <li key={index}>
            <div className="flex">
              <div>UserName :{show.username}</div>
              <div className="flex ">
                <div>Password:{show.password}</div>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Fetch
