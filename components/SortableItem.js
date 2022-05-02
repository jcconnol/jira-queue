import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
 
const SortableItem = (props) => {
  console.log(props)
  return (
    <div>
      <div>{props.value.key}</div>
      <div>{props.value.avatarImage}</div>
      <div>{props.value.summary}</div>
    </div>
  )
}
 
export default SortableElement(SortableItem);