import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { RxAvatar } from "react-icons/rx";
import styled from 'styled-components'

const Avatar  = styled(RxAvatar)`
  color: purple;
  transform: scale(8);
  margin:7%;
  padding-top: 10px;
`;

const Teamdirectory = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
       const fetchData = async () =>{
        try{
        const response = await axios.get('https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098')
        setData(response.data);
        } catch(error){
         console.error('Error fetching data:', error);
        }};
        fetchData();
    }, []);
  return (
    <div className='container'>
    <div className="api-data">
        <div className="header">
            <h1>Team</h1>
            <input type="text" placeholder='search'  />
        </div>    
    <div className='admin'>
    <h1>Administrators</h1>
    
    <div className="team-list">
{data.map((item) => (
        <div key={item.id} className="data-item"> 
        <Avatar  />
          <p>{item.first_name}</p>
          <p>{item.email}</p>
          
        </div>
      ))}
</div>
</div>
    </div>
     </div>
  )
}

export default Teamdirectory
