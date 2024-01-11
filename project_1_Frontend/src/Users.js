import React from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable'
import { Box } from '@mui/material';


const users = [
  {
    id:1,
    name:'Chamara'
  },
  {
    id:2,
    name:'Dilshan'
  },
];

const Users = () => {
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
          <UsersTable rows={users}/>
        </Box>
    </div>
  )
}

export default Users

