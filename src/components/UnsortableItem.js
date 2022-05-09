import React from 'react';
import styles from '../styles/SortableItem.module.css';
 
const UnsortableItem = (props) => {

  var jiraLink = `https://${process.env.REACT_APP_JIRA_SERVER}.atlassian.net/browse/${props.value.key}`
  console.log(jiraLink);
  return (
    <div className={styles['item-container']}>
      <img src={props.value.iconUrl} className={styles['item-icon']}/>
      <span>
        <span className={styles['item-top-text']}>
          {props.value.key} 
          <span className={styles['space']} /> 
          {props.value.name}
        </span>
        <span className={styles['description']}>{props.value.description}</span>
        <span className={styles['item-link']}><a href={jiraLink}>Go To</a></span>
      </span>
    </div>
  )
}
 
export default UnsortableItem;