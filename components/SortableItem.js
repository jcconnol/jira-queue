import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
 
const SortableItem = (props) => {
  return <div>{props.value}</div>
}
 
export default SortableElement(SortableItem);