import React, { useState } from 'react';
import SortableItem from './SortableItem';
import { SortableContainer } from 'react-sortable-hoc';
import styles from '../styles/SortableList.module.css'
 
const SortableList = (props) => {
  const [any, forceUpdate] = useState(0);
  var jiraLink = `https://${process.env.REACT_APP_JIRA_SERVER}.atlassian.net/browse/`

  async function deleteTicket(e) {
    var index = e.target.getAttribute("index");
    console.log(index)
    if(index != null){
      props.items.splice(index, 1);
      forceUpdate(any+1);
    }
  }

  return (
    <ul className={styles['sortable-item-ul']}>
      <div className={styles['sortable-list-container']}>
        {props.items.map((value, index) => (
          <div className={styles['sortable-item']}>
            <SortableItem lockAxis="x" key={`item-${index}`} items={props.items} index={index} value={value} />
            <button onClick={deleteTicket} className={styles['sortable-item-delete']} index={index}>
              X
            </button>
            <a className={styles['item-go-to']} index={index} href={jiraLink+value.key}>Go To</a>
          </div>
        ))}
      </div>
    </ul>
  );
}
 
export default SortableContainer(SortableList);