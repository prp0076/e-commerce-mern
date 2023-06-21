import React from 'react'
import Layout from '../../Components/Layout'
import AdminMenu from '../../Components/AdminMenu'

const Users = () => {
  return (
    <Layout title="Dashboard- All Users">
        <div className='container-fluid mt-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
            <h1>All Users</h1>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default Users