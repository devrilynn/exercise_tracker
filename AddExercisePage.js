import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * AddExercisePage creates a new exercise
 * sets the state to placeholder text
 * addExercise is called when add exercise is clicked on
 * sends a POST request to add new exercise
 * each value is updated using the onChange event
 * 
 */

const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        if (reps < 0) {
            alert(`Reps must be greater than 0`);
        }
        if (weight < 0) {
            alert(`Weight must be greater than 0`);
        }
        try {
            const response = await fetch('/exercises', {
                method: 'POST',
                body: JSON.stringify(newExercise),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 201){
                alert(`Successfully added the exercise`);
            } else{
                alert(`Failed to add exercise`);
            }
            navigate("/");
        } catch (error) {
            alert(`Failed to add exercise. Status ${error.status} ${error.statusText}`);
        }
    };
    return (
        <div>
            <h2>Add exercise to tracker</h2>
            <input
                type="text"
                placeholder="Exercise name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Reps"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select
                value={unit}
                onChange={e => setUnit(e.target.value)}>
                <option value="">Select Unit</option>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button className="add-exercise"
                onClick={addExercise}
            >Add exercise</button>
        </div>
    );
}

export default AddExercisePage;
