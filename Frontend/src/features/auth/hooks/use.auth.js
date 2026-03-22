import { useContext } from 'react'
import { AuthContext } from '../auth.context.jsx'
import { login, register, logout } from '../services/auth.api.js'

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext)

  const handleLogin = async ({ email, password }) => {
    setLoading(true)

    try {
      const data = await login({ email, password })
      if (!data || !data.user) {
        throw new Error('Login failed: invalid response data')
      }
      setUser(data.user)
      return data
    } catch (error) {
      console.error('handleLogin error', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    
    try {
      const data = await register({ username, email, password });
      setUser(data.user);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
    finally{
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try{
     await logout();
    setUser(null);
    }
    catch(error){
      throw error;
    }
    finally{
      setLoading(false);
    }
  };


    //   useEffect(() => {
    //     const getAndSetUser = async () => {
    //         try {
    //             const data = await getMe();
    //             if (data && data.user) {
    //                 setUser(data.user);
    //             } else {
    //                 setUser(null);
    //             }
    //         } catch (error) {
    //             console.error('getMe error', error)
    //             setUser(null)
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     getAndSetUser();
    // }, [])

  return {
    user,
    setUser,
    loading,
    setLoading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};
