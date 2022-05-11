import React, {useEffect, useState} from "react";
import { arrayMoveImmutable } from 'array-move';
import SortableList from '../components/SortableList';
import styles from '../styles/EditQueue.module.css'

function EditQueue() {
  const [items, setItems] = useState([]);

  const fetchTickets = async () => {
    await fetch(`https://6gdbc2gqda.execute-api.us-east-2.amazonaws.com/dev/api/get`)
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
  };

  async function updateTicketList() {
    var ticketList = [];
    for(var i = 0; i < items.length; i++){
      ticketList.push(items[i].key);
    }

    console.log(ticketList);

    var params = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "ticketList": ticketList
      })
    }

    await fetch(`https://6gdbc2gqda.execute-api.us-east-2.amazonaws.com/dev/api/update`, params)
      .then(response => {
        console.log(response);
        alert("Queue Saved!")
        return response
      })
      .catch(err =>{
        console.log(err);
        alert(err)
        setItems(['Error Saving tickets!'])
      });
  }
 
  return (
    <div className="App">
      <div className={styles['main-container']}>
        <h1>Editing John Connolly&apos;s Queue</h1>
        <div className={styles['list-container']}>
          <SortableList items={items} onSortEnd={onSortEnd} />
        </div>
      <button onClick={updateTicketList}>Save</button>
      </div>
    </div>
  );
}

export default EditQueue;
