import React from 'react'
import Layout from '../../Components/Layout'
import UserMenu from '../../Components/UserMenu'

const Orders = () => {
  return (
    <Layout title="Your Orders">
       <div className='container-fluid m-3 p-3'>
        <div className='row'>
        <div className='col-md-3'>
            <UserMenu></UserMenu>
        </div>
        <div className='col-md-9'>
            All Orders
        </div>
        </div>
       </div>
    </Layout>
    
  )
}

export default Orders