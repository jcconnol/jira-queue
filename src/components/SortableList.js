import React from 'react';
import SortableItem from './SortableItem';
import { TiDelete } from 'react-icons/ti';
import { SortableContainer } from 'react-sortable-hoc';
import styles from '../styles/SortableList.module.css'
 
const SortableList = (props) => {
  console.log(props.items);

  async function deleteTicket(event) {
    var index = event.target.getAttribute("index");
    var newArray = props.items.splice(index, index+1);
  }

  return (
    <ul className={styles['sortable-item-ul']}>
      <div className={styles['sortable-list-container']}>
        {props.items.map((value, index) => (
          <div className={styles['sortable-item']}>
            <SortableItem lockAxis="x" key={`item-${index}`} items={props.items} index={index} value={value} />
            <button onClick={deleteTicket} class={styles['sortable-item-delete']} index={index}>
              <TiDelete className={styles['item-delete-icon']} />
            </button>
          </div>
        ))}
      </div>
    </ul>
  );
}
 
export default SortableContainer(SortableList);