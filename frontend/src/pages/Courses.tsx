import React, { useEffect, useState } from 'react';
import { Course } from '../types';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(response => response.json())
      .then((data: Course[]) => setCourses(data))
      .catch(error => console.error('Erro ao buscar dados dos cursos:', error));
  }, []);

  return (
    <div className="page courses">
      <h1>Cursos</h1>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <h3>{course.Title}</h3>
              <p>{course.Institution} - {course.Year}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Courses;
