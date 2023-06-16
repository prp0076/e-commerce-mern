import React from 'react'
import Layout from '../Components/Layout'
import { useAuth } from '../auth/Context'
const  HomePage=()=> {
  const [auth,setAuth] = useAuth();
  return (
    <Layout title={'Best offers'}>
        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default HomePage