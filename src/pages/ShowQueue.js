import React, {useEffect, useState} from "react";
import UnsortableList from '../components/UnsortableList';
import ClipLoader from "react-spinners/ClipLoader";
import styles from '../styles/ShowQueue.module.css'

function ShowQueue() {
  let [loading, setLoading] = useState(true);
  let [items, setItems] = useState([]);

  const fetchTickets = async () => {
    //REST API endpoint: https://fb02yk0pp1.execute-api.us-east-2.amazonaws.com/dev
    //Or use aws library 
    await fetch(`https://6gdbc2gqda.execute-api.us-east-2.amazonaws.com/dev/api/get`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        //TODO if no data then set items to "error"
        setItems(data.ticketList)
        setLoading(false);
      })
      .catch(err =>{
        console.log(err);
        setItems(['Error fetching tickets!'])
        setLoading(false);
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
          {loading ? <ClipLoader /> : <UnsortableList items={items} /> }
        </div>
      </div>
    </div>
  );
}

export default ShowQueue;
