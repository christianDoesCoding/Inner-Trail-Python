import './Authenticate.css'
//import { Box, TextField } from '@mui/material';


export default function AuthenticationBox() {
    return(
        <div className="AuthPage">
            <div className="PasswordContainer">
            <div className="AuthBox">
                <p> Inner Trail </p>
                <div className="Username">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="Password">
                    <input type="text" placeholder="Password" />
                </div>
            </div>
            </div>
        </div>
    );
}



/*
<Box
component="form"
sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"
>
<div>
    <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
    />
</div>
</Box>
*/