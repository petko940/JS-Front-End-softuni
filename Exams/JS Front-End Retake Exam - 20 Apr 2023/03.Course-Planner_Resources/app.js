function solve() {

    const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

    const addCourseBtn = document.getElementById('add-course');
    addCourseBtn.addEventListener('click', addCourse);

    const editCourseBtn = document.getElementById('edit-course');
    editCourseBtn.addEventListener('click', editedCourse);

    const loadCoursesBtn = document.getElementById('load-course');
    loadCoursesBtn.addEventListener('click', loadCourses);

    const divCourses = document.getElementById('list');

    const inputCourseName = document.getElementById('course-name');
    const inputCourseType = document.getElementById('course-type');
    const inputDescription = document.getElementById('description');
    const inputTeacherName = document.getElementById('teacher-name');

    let courseID;


    async function loadCourses() {
        divCourses.innerHTML = '';

        addCourseBtn.disabled = false;
        editCourseBtn.disabled = true;

        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach(element => {

            const div = document.createElement('div');
            div.classList.add('container');
            div.id = element._id;

            const h2 = document.createElement('h2');
            h2.textContent = element.title;

            const h3teacher = document.createElement('h3');
            h3teacher.textContent = element.teacher;

            const h3type = document.createElement('h3');
            h3type.textContent = element.type;

            const h4 = document.createElement('h4');
            h4.textContent = element.description;

            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit Course';
            editBtn.addEventListener('click', editCourse);

            const finishBtn = document.createElement('button');
            finishBtn.classList.add('finish-btn');
            finishBtn.textContent = 'Finish Course';
            finishBtn.addEventListener('click', finishCourse);

            div.appendChild(h2);
            div.appendChild(h3teacher);
            div.appendChild(h3type);
            div.appendChild(h4);
            div.appendChild(editBtn);
            div.appendChild(finishBtn);


            divCourses.appendChild(div);

        });


    }

    async function addCourse(event) {
        event.preventDefault();

        const title = inputCourseName.value;
        const type = inputCourseType.value;
        const description = inputDescription.value;
        const teacher = inputTeacherName.value;

        if (title === '' || type === '' || description === '' || teacher === '') {
            return;
        }

        inputCourseName.value = '';
        inputCourseType.value = '';
        inputDescription.value = '';
        inputTeacherName.value = '';
        
        const options = {
            method: 'POST',
            body: JSON.stringify({
                title,
                type,
                description,
                teacher
            })
        }

        await fetch(baseUrl, options);
        await loadCourses();
       
    }

    function editCourse(e) {

        const div = e.target.parentElement;
        courseID = div.id;
        div.remove();

        addCourseBtn.disabled = true;
        editCourseBtn.disabled = false;

        inputCourseName.value = div.children[0].textContent;
        inputCourseType.value = div.children[2].textContent;
        inputDescription.value = div.children[3].textContent;
        inputTeacherName.value = div.children[1].textContent;

    }

    async function editedCourse(e) {
        e.preventDefault();

        const title = inputCourseName.value;
        const type = inputCourseType.value;
        const description = inputDescription.value;
        const teacher = inputTeacherName.value;

        inputCourseName.value = '';
        inputCourseType.value = '';
        inputDescription.value = '';
        inputTeacherName.value = '';

        const options = {
            method: 'PUT',
            body: JSON.stringify({
                title,
                type,
                description,
                teacher,
                _id: courseID,
            })
        }

        await fetch(baseUrl + courseID, options);
        await loadCourses();

    }

    async function finishCourse(e) {

        const options = {
            method: 'DELETE',
        }

        await fetch(baseUrl + e.target.parentElement.id, options);
        await loadCourses();

    }

}


solve()

