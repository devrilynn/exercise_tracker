import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


/**
 * EditExercisePage displays the form to edit an exercise
 * exerciseToEdit is the prop with the exercise object to edit
 * sets the state to the existing data for that exercise
 * navigates to HomePage once exercise is edited or fails
 * sends a PUT request with edited exercise
 * 
 * Resources: https://reactjs.org/docs/forms.html#the-select-tag
 */

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const editExercise = async () => {
        try {
            const editedExercise = { name, reps, weight, unit, date };
            const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
                method: 'PUT',
                body: JSON.stringify(editedExercise),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 200){
                alert(`Successfully updated the exercise!`);
            } else {
                alert(`Failed to update exercise.`);
            }
            navigate("/");
        } catch (error) {
            alert(`Failed to update exercise. Status${error.status} ${error.statusText}`);
            navigate("/");
        }
    };

    return (
        <div>
            <h2>Edit exercise and save</h2>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select
                value={unit}
                onChange={e => setUnit(e.target.value)}>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button className="add-exercise"
                onClick={editExercise}
            >Save exercise</button>
        </div>
    );
}   

export default EditExercisePage;
