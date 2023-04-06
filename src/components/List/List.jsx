import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import styles from "./List.module.scss";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Link} from "react-router-dom";

const List = () => {
    const filteredSectorCollection = useSelector(state => state.iexCloudReducer?.filteredSectorCollection)
    const [characters, setCharacters] = useState(filteredSectorCollection)
    const [range, setRange] = useState(0)
    const [page, setPage] = useState(1)
    const currentSector = useSelector(state => state.iexCloudReducer?.currentSector)
    useEffect(() => {
            setRange(0)
            setPage(1)
          setCharacters(filteredSectorCollection)
    }, [filteredSectorCollection])
    const setNext = () => {
        if (filteredSectorCollection?.length / 10 > page) {
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
            <div className={styles.upperTable}>
                <h1>Current sector: {currentSector ? currentSector?.name : 'Please select sector'}</h1>
                <Link data-testid='mui-link' to='/muitable' >MUI table</Link>
            </div>

            <li className={styles.itemHeader} >
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
                            {characters?.slice(range, range + 10).map((props, index) =>
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
                <div>{range+1}-{range+10}/{filteredSectorCollection?.length}</div>
                <div className={page === 1 ? styles.notActive : styles.active} onClick={setPrev}>Prev</div>
                <div>{page}</div>
                <div className={page >= filteredSectorCollection?.length/10 ? styles.notActive : styles.active} onClick={setNext}>Next</div>
            </div>
        </div>
    );
};

export default List;