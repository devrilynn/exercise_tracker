import React from 'react';
import { MdOutlineDelete,MdOutlineEdit } from 'react-icons/md';
import '../App.css';

/**
 * Exercises component renders a row of an exercise in a table
 * it takes 3 props (exercise, onDelete, onEdit)
 * exercise contains the object of details
 * If the user clicks the edit icon then onEdit is called
 * with the exercise object
 * If the user clicks the delete icon then onDelete is called
 * with the id of the exercise to be deleted
 * 
 * 
 * Resources: https://www.w3schools.com/cssref/css3_pr_word-wrap.php
 */

function Exercises({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>< MdOutlineEdit className="icon" onClick={() => onEdit(exercise)}/></td>
            <td>< MdOutlineDelete className="icon"onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercises;
