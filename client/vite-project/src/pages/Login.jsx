import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box, Button, TextField, Typography } from '@mui/material';
function Login() {
    const [isLogin , setIsLogin] = useState(true)
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        {console.log("hgfhgf",isLogin)}
    {isLogin ? (
      <Paper elevation={3} 
      sx={{width:"30%",alignItems:"center"}}
      >
        <Box>
        <Typography sx={{mt:"5%",fontSize:"18px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>Login</Typography>
        </Box>
        <Box sx={{mt:"10%",mb:"10%"}}>
        <TextField id="outlined-basic" label="User Name" variant="outlined" sx={{ml:"10%",width:"80%"}}/><br />
        <TextField id="outlined-basic" label="Password" variant="outlined"  sx={{mt:"5%",ml:"10%",width:"80%"}}/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",mb:"2%"}}>
        <Button variant="contained">Submit</Button>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",mb:"2%"}}>
        <Typography sx={{fontSize:"10px"}}>OR</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",mb:"5%"}}>
        <Button variant="text" onClick={()=>setIsLogin(false)}><Typography sx={{fontSize:"12px"}}>Register</Typography></Button>
        </Box>

        
      </Paper>):(
        <Paper elevation={3} 
        sx={{width:"30%",alignItems:"center"}}
        >
          <Box>
          <Typography sx={{mt:"5%",fontSize:"18px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>Register</Typography>
          </Box>
          <Box sx={{mt:"10%",mb:"10%"}}>
          <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ml:"10%",width:"80%"}}/><br />
          <TextField id="outlined-basic" label="Bio" variant="outlined"  sx={{mt:"5%",ml:"10%",width:"80%"}}/>
          <TextField id="outlined-basic" label="UserName" variant="outlined" sx={{mt:"5%",ml:"10%",width:"80%"}}/><br />
          <TextField id="outlined-basic" label="Password" variant="outlined" sx={{mt:"5%",ml:"10%",width:"80%"}} /><br />


          </Box>
          <Box sx={{display:"flex",justifyContent:"center",mb:"2%"}}>
          <Button variant="contained">Submit</Button>
          </Box>
        </Paper>
      )}
    </div>
  )
}

export default Login
