import { useState } from "react"


const ControlledComponent = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const UsernameHandler = (event) => {
        const UserName = event.target.value
        setUserName(UserName)
        if (UserName.length >5) {
            setError("userName must be in 5 characters")
        }
        else {
            setError("")
        }

    }
    const PasswordHandler = (event) => {
        const Password = event.target.value
        setPassword(Password)
        if (Password.length >5) {
            setError("password must be in 5 characters")
        }
        else {
            setError("")
        }

    }
    const onSubmit = (event) => {
        event.preventDefault()
        if (username.length ==5 && password.length ==5) {
            setError("form submitted")
            alert("form submitted")
        }
        else {
            setError("form must Be in 5cHaracters")
            alert("enter correct details")
        }
    }
    return (
        <>
            

            <form onSubmit={onSubmit}>
                <label for="user" >user:</label>
                <input type="text" placeholder="enter username" value={username} onChange={UsernameHandler} id="user" />
                <label for="pass" >password:</label>
                <input type="password" placeholder="enter username" value={password} onChange={PasswordHandler} id="pass" />
                <button type="onSubmit">submit</button>
            </form>
            <> {error && <p style={{ color: "red" }}>{error}</p>}</>
        </>
    )

}
export default ControlledComponent;