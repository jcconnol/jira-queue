import React, {useEffect, useState} from "react";
import { arrayMoveImmutable } from 'array-move';
import SortableList from '../components/SortableList';
import { Modal } from "../components/Modal";
import ClipLoader from "react-spinners/ClipLoader";
import styles from '../styles/EditQueue.module.css'

function EditQueue() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let [loading, setLoading] = useState(true);

  const openSaveModal = () => {
    setShowModal(true);
  };

  const fetchTickets = async () => {
    await fetch(`https://6gdbc2gqda.execute-api.us-east-2.amazonaws.com/dev/api/get`)
      .then(response => {
        return response.json()
      })
      .then(data => {
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

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
  };

  async function updateTicketList() {
    setLoading(true);
    var ticketList = [];
    for(var i = 0; i < items.length; i++){
      var itemObj = {
        key: items[i].key,
        name: items[i].name,
        iconUrl: items[i].iconUrl,
        description: items[i].description
      }

      ticketList.push(itemObj);
    }

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
        setLoading(false);
        alert("Queue Saved!")
        return response
      })
      .catch(err =>{
        console.log(err);
        setLoading(false);
        alert(err)
        setItems(['Error Saving tickets!'])
      });
  }

  const onModalChange = (data) => {
    items.push(data);
    updateTicketList();
  }
 
  return (
    <div className="App">
      <div className={styles['main-container']}>
        <h1>Editing John Connolly&apos;s Queue</h1>
        <div className={styles['list-container']}>
          {loading ? <ClipLoader /> : <SortableList items={items} onSortEnd={onSortEnd} />}
        </div>
        {showModal ? <Modal setShowModal={setShowModal} onModalChange={(e) => {onModalChange(e)}} /> : null}
        <button onClick={openSaveModal} className={styles['add-tickets-button']}>Add</button>
        <button onClick={updateTicketList} className={styles['save-tickets-button']}>Save</button>
      </div>
    </div>
  );
}

export default EditQueue;
