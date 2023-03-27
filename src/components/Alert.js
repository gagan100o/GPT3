import React from 'react'

export default function Alert(props) {
  return (
    props.alert&&<>
    <div className='py-3' style={{position:'relative', zIndex:'2 !important'}}>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-5`} role="alert">
        {props.alert.message}
</div>
    </div>
    </>
  )
}
