import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import styles from "./List.module.scss";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const List = () => {
    const filteredSectorCollection = useSelector(state => state.iexCloudReducer.filteredSectorCollection)
    const [characters, setCharacters] = useState(filteredSectorCollection)
    const [range, setRange] = useState(0)
    const [page, setPage] = useState(1)
    const currentSector = useSelector(state => state.iexCloudReducer.currentSector)
    useEffect(() => {
        if (filteredSectorCollection.length < 10) {
            setRange(0)
            setPage(1)
        }
    }, [filteredSectorCollection])
    const setNext = () => {
        if (filteredSectorCollection.length / 10 > page) {
            setRange(range + 10)
            setPage(prev => prev + 1)
        }
    }
    const setPrev = () => {
        if (page > 1) {
            setRange(prev => prev - 10)
            setPage(prev => prev - 1)
        }
    }
    function handleOnDragEnd(result) {
        if (!result.destination) return
        const items = Array.from(characters)
        const [reorderItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderItem)
        setCharacters(items)
    }
    return (
        <div className={styles.wrapper}>
            <h1>Current sector:
                {currentSector ? currentSector?.name : 'Please select sector'}</h1>
            <li className={styles.item} style={{backgroundColor: 'aliceblue'}}>
                <h3>Symbol</h3>
                <h3>Company name</h3>
                <h3>Latest price</h3>
                <h3>Previous close</h3>
                <h3>Change</h3>
                <h3>Latest update</h3>
            </li>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                            {characters.slice(range, range + 10).map((props, index) =>
                                <Draggable key={props.symbol} draggableId={props.symbol} index={index}>
                                    {(provided) => (
                                        <li  {...provided.draggableProps} {...provided.dragHandleProps}
                                             ref={provided.innerRef} className={styles.item}>
                                            <div>{props.symbol}</div>
                                            <div>{props.companyName}</div>
                                            <div>{props.latestPrice}</div>
                                            <div>{props.previousClose}</div>
                                            <div
                                                className={props.change < 0 ? styles.red : styles.green}>{props.change}</div>
                                            <div>{new Date(props.latestUpdate).toLocaleDateString()}</div>
                                        </li>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </ul>)}
                </Droppable>
            </DragDropContext>
            <div className={styles.navigation}>
                <div onClick={setPrev}>Prev</div>
                <div>{page}</div>
                <div onClick={setNext}>Next</div>
            </div>
        </div>
    );
};

export default List;