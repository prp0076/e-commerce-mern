import React from 'react'
import Layout from '../../Components/Layout'
import AdminMenu from '../../Components/AdminMenu'

const CreateProduct = () => {
  return (
    <Layout>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
            <h1>CreateProduct</h1>
            </div>
        </div>
        
    </Layout>
  )
}

export default CreateProduct