import React, {useEffect, useState} from "react";
import { arrayMoveImmutable } from 'array-move';
import Amplify, { API } from "aws-amplify";
import SortableList from '../components/SortableList';
import styles from '../styles/Home.module.css'

function Home() {
  const [items, setItems] = useState([]);

  const fetchTickets = () => {
    //REST API endpoint: https://fb02yk0pp1.execute-api.us-east-2.amazonaws.com/dev
    //Or use aws library
    API.get("jiraQueueApi", `/api/ticket-info`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setItems(data)
      })
      .catch(err =>{
        console.log(err);
        setItems(['Error fetching tickets!'])
      })
  };

  useEffect(() => {
    fetchTickets()
  }, [])

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
    console.log("list changed")
      //TODO send items to api to save on change
  };
 
  return (
    <div className="App">
      <div className={styles['main-container']}>
        <h1>John Connolly&apos;s Jira Queue</h1>
        <SortableList items={items} onSortEnd={onSortEnd} />
      </div>
    </div>
  );
}

export default Home;
