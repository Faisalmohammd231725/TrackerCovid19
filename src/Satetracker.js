import React,{useState,useEffect} from "react";
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Statetracker=()=>{
    const [data,setData]=useState([])
    const getData=async ()=>{
      const res=await fetch("https://api.covid19india.org/data.json")
      const actualresult=await res.json();
       console.log(actualresult.Statetracker)
       setData(actualresult.statewise)
    }
    useEffect(() => {
        getData()
       },[])
     return (
        <div className="container-fluid mt-5">
            <div className="main-heading">
              <h1 className="mb-5 text-center"> <span className="font-weight-bold">INDIA  </span>COVID - 19 Statewise
               Tracker </h1>
            </div>
            <div className="table-responsive">
              <table className='table table-hover'>
                <thead className="thead-dark">
                  <tr>
                  <th>State</th>
                  <th>Conformed</th>
                  <th>Recorved</th>
                  <th>deaths</th>
                  <th>active</th>
                  <th>update</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((curelement,ind)=>{
                    return(
                      <tr>
                      <th>{curelement.state}</th>
                      <td>{curelement.confirmed}</td>
                      <td>{curelement.recovered}</td>
                      <td>{curelement.deaths}</td>
                      <td>{curelement.active}</td>
                      <td>{curelement.lastupdatedtime}</td>
                      </tr>
                    )
                  })}
               
                </tbody>
              </table>
              </div> 
        </div>
     )
}
export default Statetracker
