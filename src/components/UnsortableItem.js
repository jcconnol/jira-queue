import React from 'react';
import styles from '../styles/SortableItem.module.css';
 
const UnsortableItem = (props) => {

  var jiraLink = `https://${process.env.REACT_APP_JIRA_SERVER}.atlassian.net/browse/${props.value.key}`

  return (
    <div className={styles['item-container']}>
      <img src={props.value.iconUrl} className={styles['item-icon']}/>
      <span>
        <span className={styles['item-top-text']}>
        <a href={jiraLink}>{props.value.key}</a>
        </span>
        <div>
          {props.value.name}
        </div>
        <span className={styles['description']}>{props.value.description}</span>
      </span>
    </div>
  )
}
 
export default UnsortableItem;