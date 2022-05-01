import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useState} from "react";
import { arrayMoveImmutable } from 'array-move';
import SortableList from '../components/SortableList';
import styles from '../styles/Home.module.css'

function Home() {
  const [items, setItems] = useState([]);

  const fetchTickets = () => {
    fetch(`/api/ticket-info`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setItems(data.tickets)
      })
      .catch(err =>{
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
        <h1>John Connolly's Jira Queue</h1>
        <SortableList items={items} onSortEnd={onSortEnd} />
      </div>
    </div>
  );
}

export default Home;
