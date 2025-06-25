import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Add authentication logic here
  };

  return (
    <div className='inner_body'>
    <Container maxWidth="xs">
      <Box display="flex" className='bg_white' flexDirection="column" alignItems="center" mt={15} p={3} boxShadow={3} borderRadius={2}>
        <img src="https://dev.channelier.com/img/new/logo.png" alt="Logo" style={{ height: 64, marginBottom: 16 }} />
        <Typography variant="h5" gutterBottom>Login</Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required={true}
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          className="btn"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
    </div>
  );
};

export default Login;