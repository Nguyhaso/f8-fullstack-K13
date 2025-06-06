import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkToken, logOut } from '../api';

export default function PostPage() {
  const navigate = useNavigate();

  useEffect(() => {
    checkToken(navigate).then(data => {
      if (data) {
        console.log("Posts:", data);
      }
    });
  }, []);

  const logout = () => {
    logOut(navigate);

  }
  return(
    <>
   <div>Login success</div>
  <button onClick={logout}>Log out</button>
    </>
  )

}