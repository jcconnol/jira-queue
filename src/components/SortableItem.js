import React from 'react';
import styles from '../styles/SortableItem.module.css';
import { SortableElement } from 'react-sortable-hoc';
 
const SortableItem = (props) => {

  return (
    <div className={styles['item-container']}>
      <img src={props.value.iconUrl} className={styles['item-icon']} alt=""/>
      <span>
        <span className={styles['item-top-text']}>
          {props.value.key} 
        </span>
        <div>
          {props.value.name}
        </div>
        <span className={styles['description']}>{props.value.description}</span>
      </span>
    </div>
  )
}
 
export default SortableElement(SortableItem);