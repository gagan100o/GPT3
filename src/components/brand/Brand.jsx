import React from 'react'
import {google,slack,atlassian,dropbox,shopify} from './import'
import './brand.css'

const Brand = () => {
  return (
    <div className='gpt3__brand saction__padding'>
       <div>
         <img src={google} alt='1' />
       </div>
       <div>
         <img src={slack} alt='1' />
       </div>
       <div>
         <img src={atlassian}  alt='1'/>
       </div>
       <div>
         <img src={dropbox}  alt='1'/>
       </div>
       <div>
         <img src={shopify} alt='1' />
       </div>
    </div>
  )
}

export default Brand