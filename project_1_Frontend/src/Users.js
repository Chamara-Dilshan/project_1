import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box } from '@mui/material';
import  Axios  from "axios";



const Users = () => {
  const [users, setUsers] = useState([]);
  const[submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);


  useEffect (() => {
      getUsers();
  }, []);

  const getUsers = () => {
      Axios.get('http://localhost:3001/api/users')
        .then(response => {
          console.log('API Response:', response.data);  
          setUsers(response.data || []);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
  }
  
  const addUser = (data) =>{
      setSubmitted(true);
      
      const payload = {
        id: data.id,
        name: data.name,
      }
      
      Axios.post('http://localhost:3001/api/createuser', payload)
        .then(() => {
          getUsers();
          setSubmitted(false);
          isEdit(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });

  }
  
  const updateUser = (data) => {
      setSubmitted(true);

      const payload = {
        id: data.id,
        name: data.name,
      }

      Axios.post('http://localhost:3001/api/updateuser', payload)
        .then(() => {
          getUsers();
          setSubmitted(false);
          isEdit(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });

  }
          
  return (
    <div>
        <Box
          sx={{
            width:'calc(100% - 200px)',
            margin: 'auto',
            marginTop:'100px',
           
          }}
        >
          <UserForm
              addUser = {addUser}
              updateUser = {updateUser}
              submitted = {submitted}
              data = {selectedUser}
              isEdit={isEdit}
          />

          <UsersTable 
              rows = {users}
              selectedUser = {data => {
                setSelectedUser(data);
                setIsEdit(true);

              }}
          />
         
        </Box>
    </div>
  );
}

export default Users;
