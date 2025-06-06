import {useState} from "react"
import {login} from "../api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async (e: any) => {
    e.preventDefault()
    try {
      const data = await login(email, password)
      if (data) {
        localStorage.setItem('accessToken', data.access)
        localStorage.setItem('refreshToken', data.refresh)
        navigate('/post')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>

      <form
        onSubmit={submit}
        style={{
          width: "300px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <input
          style={{
            height: '32px',
            marginTop: '10px',
          }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          // required
        />
        <input
          style={{
            height: '32px',
            marginTop: '10px',
            marginBottom: '10px',
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type='submit' className="login-button">Login</button>
      </form>
    </div>

  )
}