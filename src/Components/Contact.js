import React from "react";
import { AiFillDelete } from 'react-icons/ai'

export const Contact = (props) => {


    return (
        <>
            <tr>
                <td align="left">{(props.firstName ?? 'FirstName') + ' ' + (props.lastName ?? 'LastName')}</td>
                
                <td align="right"><AiFillDelete color="red"></AiFillDelete></td>
            </tr>
            <tr>
                <td>{(props.phoneNumber ?? 'PhoneNumber')}</td>
            </tr>
        </>
    )
}