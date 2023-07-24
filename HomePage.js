import React from 'react';
import ExercisesList from '../components/ExercisesList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


/**
 * HomePage displays list of exercises
 * setExerciseToEdit sets the exercise to be edited
 * onDelete async function to delete an exercise by id
 * onEdit function sets the exercise to be edited in EditExercise 
 * loadExercises uses the fetch method to send a 
 * request to the GET /movies endpoint in the REST API 
 * loadExercises() is called during the mounting using the useEffect hook. 
 * */

function HomePage({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);

    const navigate = useNavigate();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if(response.status === 204){
            setExercises(exercises.filter(e => e._id !== _id));
        }else{
            console.log(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    }

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        navigate("/edit-exercise");
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>Home Page</h2>
            <ExercisesList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExercisesList>
        </>
    );
}

export default HomePage;
