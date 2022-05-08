import React from 'react';
import SortableItem from './SortableItem';
import { SortableContainer } from 'react-sortable-hoc';
import styles from '../styles/SortableList.module.css'
 
const SortableList = (props) => {
  console.log(props.items)
  return (
    <ul className={styles['sortable-item-ul']}>
      <div className={styles['sortable-list-container']}>
        {props.items.map((value, index) => (
          <SortableItem key={`item-${index}`} items={props.items} index={index} value={value} />
        ))}
      </div>
    </ul>
  );
}
 
export default SortableContainer(SortableList);