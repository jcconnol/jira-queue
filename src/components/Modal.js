import React, { useRef, useState } from "react";
import styles from "../styles/Modal.module.css"

export const Modal = ({ setShowModal, onModalChange  }) => {

  const [radioButton, updateRadioButton] = useState("option1");
  const [ticketData, updateTicketData] = useState({
    iconUrl: "https://ramseysolutions.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/23698?size=medium"
  });


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
      case 'software-eng-ticket-icon':
        ticketData.iconUrl = "https://ramseysolutions.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/23698?size=medium"
        updateRadioButton("option1")
        break;
      case 'bug-ticket-icon':
        ticketData.iconUrl = "https://ramseysolutions.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/23717?size=medium"
        updateRadioButton("option2")
        break;
      case 'cms-ticket-icon':
        ticketData.iconUrl = "https://ramseysolutions.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/23767?size=medium"
        updateRadioButton("option3")
        break;
      case 'split-test-ticket-icon':
        ticketData.iconUrl = "https://ramseysolutions.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/23666?size=medium"
        updateRadioButton("option4")
        break;
      case 'other-ticket-icon':
        ticketData.iconUrl = "https://ramseysolutions.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10300?size=medium"
        updateRadioButton("option5")
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
          Ticket Icon Type: 
          <label className={styles["radio-button-label"]} for="male">
            <input type="radio" value="male" id="software-eng-ticket-icon" 
              className={styles["radio-button"]} 
              checked={radioButton === 'option1'}
              onChange={changeTicketInfo}/>
            Software Engineering
          </label>

          <label className={styles["radio-button-label"]} for="female">
            <input type="radio" value="female" id="bug-ticket-icon" 
              className={styles["radio-button"]} 
              checked={radioButton === 'option2'}
              onChange={changeTicketInfo}/>
            Bug</label>

          <label className={styles["radio-button-label"]} for="female">
            <input type="radio" value="female" id="cms-ticket-icon"
              className={styles["radio-button"]} 
              checked={radioButton === 'option3'}
              onChange={changeTicketInfo} />
            CMS</label>

          <label className={styles["radio-button-label"]}>
            <input type="radio" value="female" id="split-test-ticket-icon" 
              className={styles["radio-button"]} 
              checked={radioButton === 'option4'}
              onChange={changeTicketInfo}/>
            Split Test
          </label>

          <label className={styles["radio-button-label"]}>
            <input type="radio" value="other" id="other-ticket-icon" 
              className={styles["radio-button"]} 
              checked={radioButton === 'option5'}
              onChange={changeTicketInfo}/>
            Other
          </label>          
        </div>
        <button onClick={setSaveTicket} className={styles['save-button']}>Save</button>
        <button onClick={() => setShowModal(false)} className={styles['close-button']}>X</button>
      </div>
    </div>
  );
};
