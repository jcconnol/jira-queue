import React, {useEffect, useState} from "react";
import UnsortableList from '../components/UnsortableList';
import styles from '../styles/ShowQueue.module.css'

function ShowQueue() {
  const [items, setItems] = useState([]);

  const fetchTickets = async () => {
    //REST API endpoint: https://fb02yk0pp1.execute-api.us-east-2.amazonaws.com/dev
    //Or use aws library 
    await fetch(`https://6gdbc2gqda.execute-api.us-east-2.amazonaws.com/dev/api/get`)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        //TODO if no data then set items to "error"
        console.log(data);
        setItems(data.ticketList)
      })
      .catch(err =>{
        console.log(err);
        setItems(['Error fetching tickets!'])
      })
  };

  useEffect(() => {
    fetchTickets()
  }, [])
 
  return (
    <div className="App">
      <div className={styles['main-container']}>
        <h1>John Connolly&apos;s Jira Queue</h1>
        <div className={styles['list-container']}>
          <UnsortableList items={items} />
        </div>
      </div>
    </div>
  );
}

export default ShowQueue;
