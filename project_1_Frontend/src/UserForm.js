import { Grid, Typography, Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UserForm = ({addUser, updateUser,submitted, data, isEdit}) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        if (!submitted){
            setId('');
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data && data.id && data.id !==0 ){
            setId(data.id);
            setName(data.name)
        }
    }, [data]);

  return (
    <Grid
        container
        spacing={2}
        sx={{
            backgroundColor: 'white',
            marginBottom: '30px',
            display: 'block'
        }}
    >
        <Grid item xs={12}>
            <Typography component={'h1'} sx={{color:'black'}}>User Form</Typography> 
        </Grid>

        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography
                component={'label'}
                htmlFor='id'
                sx={{
                    color:'black',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block'
                }}
            >ID</Typography>
            <Input
                type='number'
                id='id'
                name='id'
                sx={{with:'400px'}}
                value={id}
                onChange={e => setId(e.target.value)}/>
        </Grid>
        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography
                component={'label'}
                htmlFor='id'
                sx={{
                    color:'black',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block'
                }}
            >Name</Typography>
            <Input
                type='text'
                id='name'
                name='name'
                sx={{with:'400px'}}
                value={name}
                onChange={e => setName(e.target.value)}/>
        </Grid>

        <Button
            sx={{
                margin:'auto',
                marginBottom:'20px',
                backgroundColor: '#00c6e6',
                color: '#000000',
                marginLeft: '15px',
                marginTop:'20px',
                '&:hover':{
                    opacity:'0.7',
                    backgroundColor:'#00c6e6'
                }
            }}
            onClick={() => isEdit ? updateUser({id: id, name: name}) : addUser({id: id, name: name})}   /* if equal key identifier = value identifier only need key or value {id, name}*/

        > 
            {
                isEdit ? 'Update' :'Add'
            } 
        </Button>

    </Grid>
)}

export default UserForm
