import React, { useContext, useEffect, useState, } from 'react'
import UserContext from '../../../userContext'
import { PriceSum, WeightSum } from "../utils"
import "./InvoiceCustomers.css"

function InvoiceCustomer(props) {
  const { packages, customers } = useContext(UserContext)
  const ID = 1;
  
  
  // const [ID, setID] = useState(props.match.params.id)
  
  // useEffect(() => {
    //   setCurrentPackage(packages.filter((packages) => packages.customerid === ID))
    
    //   console.log(currentPackage);
    // }, [ID, packages,])
    
    const today = new Date()
    const FullDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
    
    const currentPackage = packages.filter((packages) => packages.customerid === ID)


  if (currentPackage.length) {
    return (
      <div className='invoice'>

        <div className='dateAndName'>
          <p>{FullDate}</p>
          <p>{customers.find((customer) => customer?.id === ID)?.name}</p>
        </div>

        <div className='shipingID'>
          <p>Invoice</p>
          <p>No.{ID}</p>
        </div>

        <div className='packageID'>
          <p>ID</p>
          {currentPackage.map((packages) => <p>{packages.id}</p>)}
        </div>

        <div className='weight'>
          <p>Weight</p>
          {currentPackage.map((packages) => <p>{packages.weight}</p>)}
          <p>{WeightSum(ID, packages)}</p>
        </div>

        <div className='price'>
          <p>Price</p>
          {currentPackage.map((packages) => <p>{packages.price}</p>)}
          <p>{PriceSum(ID, packages)}</p>
        </div>

        <p>You received {currentPackage.length} packages <br />
          Thank you for using our services</p>
      </div>
    )
  }
  else return (
    <p>We couldn't find the id you loocking for :/</p>
  )
}

export default InvoiceCustomer