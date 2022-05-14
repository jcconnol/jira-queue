import React, { useRef, useState } from "react";
import styles from "../styles/Modal.module.css"

export const Modal = ({ setShowModal, onModalChange  }) => {
  // close the modal when clicking outside the modal.
  const [ticketData, updateTicketData] = useState({});

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const setSaveTicket = (e) => {
    onModalChange(ticketData);
    setShowModal(false);
  }

  const changeTicketInfo = (e) => {
    var ticketId = e.target.id;
    switch (ticketId) {
      case 'ticket-key':
        ticketData.key = e.target.value
        break;
      case 'ticket-name':
        ticketData.name = e.target.value
        break;
      case 'ticket-description':
        ticketData.description = e.target.value
        break;
      case 'ticket-icon':
        ticketData.iconUrl = e.target.value
        break;
      default:
        break;
    }
  }

  //render the modal JSX in the portal div.
  return (
    <div className={styles["container"]} ref={modalRef} onClick={closeModal}>
      <div className={styles["modal"]}>
        <h2>Add Ticket</h2>
        <div>
          Ticket Id: <input onChange={changeTicketInfo} id="ticket-key"></input>
        </div><div>
          Ticket Name: <input onChange={changeTicketInfo} id="ticket-name"></input>
        </div><div>
          Ticket description: <input onChange={changeTicketInfo} id="ticket-description"></input>
        </div><div>
          Ticket icon link: <input onChange={changeTicketInfo} id="ticket-icon"></input>
        </div>
        <button onClick={setSaveTicket} className={styles['save-button']}>Save</button>
        <button onClick={() => setShowModal(false)} className={styles['close-button']}>X</button>
      </div>
    </div>
  );
};
