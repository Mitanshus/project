import React, { useEffect, useLayoutEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {
  
  const[employees,setEmployees]= useState([])


    useEffect(()=>{
        EmployeeService.getAllEmployees().then((Response)=>{
            setEmployees(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    return (
        <div className="container">
            <h2 ClassName="text-center">List employees</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First name</th>
                    <th>Employee Last name </th>
                    <th>Employee Email id</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    )


}

export default ListEmployeeComponent
