import React, { useState} from "react";
import dataset from "../datsets/dataset.json";
import { LiaSortSolid } from "react-icons/lia";
import "./sortTable.css"

export default function SortTable() {
const [data, setData] = useState(dataset);
const [search, setSearch]= useState('');
console.log(search);
const[order, setOrder] = useState("ASC");

const sorting =(col) =>{
    if(order ==="ASC"){
        const sorted=[...data].sort((a,b) => 
            a[col] > b[col] ? 1 : -1
        );
        setData(sorted);
        setOrder("DSC");
    }
    else if(order ==="DSC"){
        const sorted=[...data].sort((a,b) => 
        a[col] < b[col] ? 1:-1
        );
        setData(sorted);
        setOrder("ASC");
    }
}

  return (
    <div className="container">
      <div className="search">
      <input
   type="text"
   placeholder="Search here"
   onChange={(e)=> setSearch(e.target.value)}
  //  value={searchInput} 
  />
      </div>
      
        <table>
      <thead>
        <th onClick={()=> sorting("name")}><div className="heading-wrapper">Name<LiaSortSolid className="up-down"/></div></th>
        <th onClick={()=> sorting("number")}><div className="heading-wrapper">Number<LiaSortSolid className="up-down"/></div></th>
        <th onClick={()=> sorting("market_rate")}><div className="heading-wrapper">Market rate<LiaSortSolid className="up-down"/></div></th>
        <th onClick={()=> sorting("weight")}><div className="heading-wrapper">Weight<LiaSortSolid className="up-down"/></div></th>
        <th onClick={()=> sorting("value")}><div className="heading-wrapper">Value<LiaSortSolid className="up-down"/></div></th>
      </thead>
      <tbody>
      {data.filter((val)=>{
        return search.toLowerCase() === ''? val:val.name.toLowerCase().includes(search);
      }).map((val) => (
          <tr key={val.index}>
            <td className="nameRow"><img
                className="profilePic"
                src={`${val.img}`}
                alt={val.name}
              ></img>{val.name}</td>
            
            <td>{val.number}</td>
            <td>${val.market_rate}</td>
            <td>{val.weight}%</td>
            <td>${val.value}</td>
          </tr>
      ))}
      </tbody>
      
    </table>
    {/* <div className="bottom">
        <p>Total:</p>
        <p>${}</p>
      </div> */}
    </div>
  );
}
