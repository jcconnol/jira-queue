import React from 'react';
import UnsortableItem from './UnsortableItem';
import styles from '../styles/SortableList.module.css'
 
const UnsortableList = (props) => {
  console.log(props.items)
  return (
    <ul className={styles['sortable-item-ul']}>
      <div className={styles['sortable-list-container']}>
        {props.items.map((value, index) => (
          <UnsortableItem key={`item-${index}`} items={props.items} index={index} value={value} />
        ))}
      </div>
    </ul>
  );
}
 
export default UnsortableList;