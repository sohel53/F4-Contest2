import React, {useState} from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import {useDispatch} from "react-redux"

const Login = () => {

    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState([]);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    function handleChange (e) {
        e.preventDefault();
        const newError = [];


        // axios.post("https://dummyjson.com/auth/login", {
        //     username: name,
        //     password: password,

        // })
        // .then((response) => {
        //     if(response.status === 200){
        //         const {token, id} = response.data;

        //         dispatch({
        //             type: "LOGIN_SUCCESS",
        //             payload: { token, id }
        //         })

        //         navigate("/Profile")
        //     }
        // })
        // .catch(error => {
        //     console.error('Login Failed', error.response.data.error);
        // })
    



        if (!name) {
            newError.push("Please enter a name");
        } else if (!password) {
            newError.push("Please enter a password");
        } else {
            newError.push("Login Successfully");
        }
        setError(newError);
    }

    return (
        <div className="App">
            <form onSubmit={handleChange}>
                <h1>Dummy Authentication</h1>
                <h1>Login Page</h1>
                <div>
                    <label>UserName:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
                {error.length > 0 && (
                    <ul>
                        {error.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}

                    </ul>
                )}
            </form>

        </div>
    )
}

export default Login;