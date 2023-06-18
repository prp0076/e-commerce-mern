import React from 'react'
import Layout from '../../Components/Layout'
import UserMenu from '../../Components/UserMenu'

const Profile = () => {
  return (
    <Layout title="Your Profile">
       <div className='container-fluid m-3 p-3'>
        <div className='row'>
        <div className='col-md-3'>
            <UserMenu></UserMenu>
        </div>
        <div className='col-md-9'>
            Your Profile
        </div>
        </div>
       </div>
    </Layout>
  )
}

export default Profile