import React from 'react'
import "./InvoiceCustomers.css"

function InvoiceCustomer() {
  const today = new Date()
  const FullDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

  return (
    <div className='invoice'>

      <div className='dateAndName'>
        <p>{FullDate}</p>  
        <p>*name</p>
      </div>

      <div className='shipingID'>
        <p>Invoice</p>
        <p>*no. generate id</p>
      </div>


      <div className='packageID'>
        <p>ID</p>
        <p>*package id</p>
      </div
      >
      <div className='weight'>
        <p>Weight</p>
        <p>*Weight</p>
        <p>*Total weight</p>
      </div>

      <div className='price'>
        <p>Price</p>
        <p>*price</p>
        <p>*Total price</p>
      </div>
      
      <p>You received *package-count packages <br/>
        Thank you for using our services</p>
    </div>
  )
}

export default InvoiceCustomer