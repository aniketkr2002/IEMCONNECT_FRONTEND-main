import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
   const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

   // localStorage.setItem('isLoggedIn', false);
    const response = await fetch('student/login', {
                                         method: "post",
                                         headers: {
                                              "Content-Type": "application/json",
                                          
                                         },
                                         body: JSON.stringify({
                                         "userName" : username,
                                         "password" : password
                                         })
                              });
            if (response.status === 200) {
              const data = await response.json();
              console.log(data);
             localStorage.setItem('isLoggedIn', true);
             localStorage.setItem('username', data.username);
             navigate('/home');
            } else {
                setError('Invalid username or password');
            }       
        };
      useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            navigate('/home');
        }
       }, [navigate]);
      
    

  return (
    <div className="container-fluid">
      {/* Top bar with "Student Connect" text */}
      <div className="row bg-dark text-light py-2">
        <div className="col">
          <h3 className="ml-3">IEM Connect</h3>
        </div>
      </div>

      <div className="row">
        {/* Side image */}
        <div className="col-md-6 d-none d-md-block">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="student" className="img-fluid" />
        </div>

        {/* Login form */}
        <div className="col-md-6">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col">
                <h2 className="mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                  {error && <p className="mt-3 text-danger">{error}</p>}
                  <div className="mt-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="mt-3">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
