import React from 'react';
import styles from '../styles/SortableItem.module.css';
import { SortableElement } from 'react-sortable-hoc';
 
const SortableItem = (props) => {
  return (
    <div className={styles['item-container']}>
      <img src={props.value.iconUrl} className={styles['item-icon']}/>
      <span>
        <span className={styles['item-top-text']}>{props.value.key}  |  {props.value.name}</span>
        <span className={styles['description']}>{props.value.description}</span>
        <span className={styles['item-link']}><a href=''>Go To</a></span>
      </span>
    </div>
  )
}
 
export default SortableElement(SortableItem);