import React from 'react';
import '../App.css';
import Exercises from './Exercises';

/**
 * ExerciseList component takes 3 props (exercises, onDelete, onEdit)
 * returns a table that contains the exercises 
 * uses map method to create a list of exercises 
 * uses the index as the unique key id for each exercise
 * 
 * Resources: https://www.w3schools.com/cssref/css3_pr_word-wrap.php
 */

function ExercisesList({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercises exercise={exercise}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExercisesList;
