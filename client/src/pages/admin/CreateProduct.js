import React from 'react'
import Layout from '../../Components/Layout'
import AdminMenu from '../../Components/AdminMenu'

const CreateProduct = () => {
  return (
    <Layout title="Create Products">
        <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
            <h1>CreateProduct</h1>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default CreateProduct