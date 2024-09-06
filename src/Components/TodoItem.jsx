import React, { useState } from 'react';
import useStore from '../../store/Todo-store';

const TodoItem = ({ item }) => {
    const { delArr, editArr } = useStore((state) => ({
        delArr: state.delArr,
        editArr: state.editArr,
    }));

    const [isEditing, setIsEditing] = useState(false);
    const [editTxt, setEditTxt] = useState("");

    const startEdit = () => setIsEditing(true);

    const cancelEdit = () => {
        setIsEditing(false);
        setEditTxt(item.title);
    };

    const saveEdit = () => {
        if (editTxt.trim()) {
            editArr(item.id, editTxt);
            setIsEditing(false);
        }
    };

    return (
        <li style={styles.listItem}>
            {isEditing ? (
                <>
                    <input
                        value={editTxt}
                        onChange={(e) => setEditTxt(e.target.value)}
                        style={styles.input}
                    />
                    <button
                        onClick={saveEdit}
                        style={styles.button}>
                        Save
                    </button>
                    <button
                        onClick={cancelEdit}
                        style={{ ...styles.button, marginLeft: '8px' }}>
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <span style={styles.text}>{item.title}</span>
                    <div>
                        <button
                            onClick={startEdit}
                            style={styles.button}>
                            Edit
                        </button>
                        <button
                            onClick={() => delArr(item.id)}
                            style={{ ...styles.button, marginLeft: '8px' }}>
                            Del
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

const styles = {
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        border: '1px solid #e5e7eb',
        borderRadius: '4px',
        marginBottom: '8px',
    },
    input: {
        flex: 1,
        padding: '8px',
        border: '1px solid #e5e7eb',
        borderRadius: '4px',
    },
    text: {
        color: '#374151',
    },
    button: {
        background: 'none',
        border: 'none',
        color: '#6b7280',
        cursor: 'pointer',
        padding: '8px',
    },
};

export default TodoItem;
