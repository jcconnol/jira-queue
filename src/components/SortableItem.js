import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
 
const SortableItem = (props) => {
  return (
    <div>
      <img src={props.value.iconUrl} />
      <div>{props.value.key}</div>
      <div>{props.value.name}</div>
      <div>{props.value.description}</div>
    </div>
  )
}
 
export default SortableElement(SortableItem);