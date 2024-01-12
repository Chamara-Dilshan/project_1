import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box } from '@mui/material';
import  Axios  from "axios";
import axios from 'axios';


const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect (() => {
      getUsers();
  }, []);

  const getUsers = () => {
    Axios.get('http://localhost:3001/api/users')
      .then(response => {
        console.log('API Response:', response.data);  
        setUsers(response.data?.response || []);
    })
    .catch(error => {
        console.error("Axios Error : ", error);
    });
  }
  console.log('Users state:', users);
         
  return (
    <div>
        <Box
          sx={{
            width:'calc(100% - 200px)',
            margin: 'auto',
            marginTop:'100px',
           
          }}
        >
          <UserForm/>
          <UsersTable rows = {users}/>
         
        </Box>
    </div>
  );
}

export default Users;
