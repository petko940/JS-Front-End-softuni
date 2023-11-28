function sprintReview(arr) {
    let data = {};

    let n = Number(arr.shift());

    for (let i = 0; i < n; i++) {
        let [name, taskId, title, status, estimatedPoints] = arr.shift().split(":");
        estimatedPoints = Number(estimatedPoints);
        if (!data.hasOwnProperty(name)) {
            data[name] = {
                tasks: [],
                title: [],
                status: [],
                estimatedPoints: [],
            };
        }
        data[name].tasks.push(taskId);
        data[name].title.push(title);
        data[name].status.push(status);
        data[name].estimatedPoints.push(estimatedPoints);
    }

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let [cmd, ...args] = command.split(":");

        if (cmd === 'Add New') {
            let [name, taskId, title, status, estimatedPoints] = args;
            estimatedPoints = Number(estimatedPoints);
            if (!data.hasOwnProperty(name)) {
                console.log(`Assignee ${name} does not exist on the board!`);
            } else {
                data[name].tasks.push(taskId);
                data[name].title.push(title);
                data[name].status.push(status);
                data[name].estimatedPoints.push(estimatedPoints);
            }
        } else if (cmd === 'Change Status') {
            let [name, taskId, status] = args;
            if (!data.hasOwnProperty(name)) {
                console.log(`Assignee ${name} does not exist on the board!`);
            } else if (!data[name].tasks.includes(taskId)) {
                console.log(`Task with ID ${taskId} does not exist for ${name}!`);
            } else {
                let taskIndex = data[name].tasks.indexOf(taskId);
                data[name].status[taskIndex] = status;
            }
        } else if (cmd === 'Remove Task') {
            let [name, index] = args;
            index = Number(index);
            if (!data.hasOwnProperty(name)) {
                console.log(`Assignee ${name} does not exist on the board!`);
            } else if (index < 0 || index >= data[name].tasks.length) {
                console.log(`Index is out of range!`);
            } else {
                data[name].tasks.splice(index, 1);
                data[name].status.splice(index, 1);
                data[name].title.splice(index, 1);
                data[name].estimatedPoints.splice(index, 1);
            }
        }
    }

    let toDoTasksTotalPoints = 0;
    let inProgressTasksTotalPoints = 0;
    let codeReviewTasksTotalPoints = 0;
    let doneTasksTotalPoints = 0;

    Object.values(data).forEach(element => {

        for (let i = 0; i < element.tasks.length; i++) {
            if (element.status[i] === 'ToDo') {
                toDoTasksTotalPoints += element.estimatedPoints[i];
            } else if (element.status[i] === 'In Progress') {
                inProgressTasksTotalPoints += element.estimatedPoints[i];
            } else if (element.status[i] === 'Code Review') {
                codeReviewTasksTotalPoints += element.estimatedPoints[i];
            } else if (element.status[i] === 'Done') {
                doneTasksTotalPoints += element.estimatedPoints[i];
            }
        }
    });

    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    console.log(`Done Points: ${doneTasksTotalPoints}pts`);

    let sum = toDoTasksTotalPoints + inProgressTasksTotalPoints + codeReviewTasksTotalPoints;

    if (sum <= doneTasksTotalPoints) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
    }
}
