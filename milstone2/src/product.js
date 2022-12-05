import 'bootstrap/dist/css/bootstrap.min.css';
import {json} from 'express';
import {useEffect} from 'react';
import {useState} from 'react/cjs/react.production.min';


export function product() {
  return (
     <>
     <div className='row-mt-5'>
      <div className='col-lg-1'>&nbsp;</div>
<div className='col-lg-10'>
    <form>
  <table className='table' border='1' width="100%">
    <thead>
  <tr>
  <th>product </th>
  <th>product name</th>
  <th>product description</th>
  <th>product rating</th>
  <th>product category</th>
  <th>product count</th>
  
  </tr>
  </table>
  </form>
  </div>
  <div className="col-lg-1">&nbsp;</div>
  <tbody>
    {
        details.map((value,index)=>(

        
        <tr>
            <td><img src={value.image}className=''</td>
            <td>{value.title}</td>
            <td>{value.description}</td>
            <td>{value.rating.rate}</td>
            <td>{value.category}</td>
            <td>{value.rating.count}</td>
    
    </tr>
        ))

        }
        </tbody>
        </table>
        </div>

    }
  


