import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from "react";
import { arrayMoveImmutable } from 'array-move';
import SortableList from '../components/SortableList';
import ReactDragListView from 'react-drag-listview'
import styles from '../styles/Home.module.css'

function Home() {
  
  var fakeData = [
    'TRUSTED-1830',
    'TRUSTED-99929',
    'TRUSTED-99929',
    'TRUSTED-99929',
    'TRUSTED-99929'
  ];

  const [items, setItems] = useState(fakeData);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
  };
 
  return (
    <div className="App">
      <h1>John Connolly's Jira Queue</h1>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </div>
  );
}

export default Home;
