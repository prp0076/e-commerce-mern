import React from 'react'
import Layout from "../../Components/Layout";
import AdminMenu from '../../Components/AdminMenu';
import { useAuth } from '../../auth/Context';
const AdminDashboard = () => {
  const [auth]=useAuth();
  return (
    <Layout>
     <div className='container-fluid m-6 p-3 dashboard'>
      <div className='row'>
        <div className='col-md-3'>
        <AdminMenu></AdminMenu>
        </div>
        <div className='col-md-9'>
          <div className='card w-75 p-3'>
            <h3> Admin Name: {auth?.user?.name}</h3>
            <h3> Admin Email: {auth?.user?.email}</h3>
            <h3> Admin Contact: {auth?.user?.phone}</h3>
          </div>
        </div>
      </div>
     </div>
    </Layout>
  )
}

export default AdminDashboard