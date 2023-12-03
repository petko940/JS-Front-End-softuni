window.addEventListener("load", solve);

function solve() {
    const title = document.getElementById("task-title");
    const category = document.getElementById("task-category");
    const content = document.getElementById("task-content");

    const publishButton = document.getElementById("publish-btn");
    publishButton.addEventListener("click", taskToReview);

    const reviewList = document.getElementById("review-list");

    const uploadedList = document.getElementById("published-list");

    function taskToReview(e) {
        e.preventDefault();

        if (title.value === '' || category.value === '' || content.value === '') {
            return;
        }

        const li = document.createElement("li");
        li.className = "rpost";

        const article = document.createElement("article");
        const h4 = document.createElement("h4");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const editBtn = document.createElement("button");
        editBtn.className = "action-btn edit";
        editBtn.addEventListener('click', editTask);

        const postBtn = document.createElement("button");
        postBtn.className = "action-btn post";
        postBtn.addEventListener('click', postTask);

        h4.textContent = title.value;
        p1.textContent = `Category: ${category.value}`;
        p2.textContent = `Content: ${content.value}`;
        editBtn.textContent = "Edit";
        postBtn.textContent = "Post";

        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(postBtn);

        reviewList.appendChild(li);

        const clearInputs = [title, category, content];

        for (const input of clearInputs) {
            input.value = '';
        }

    }

    function editTask(e) {
        e.preventDefault();

        const li = e.target.parentElement;
        li.remove();

        let [t, cat, con] = Array.from(li.children[0].children);

        cat.textContent = cat.textContent.split(': ')[1];
        con.textContent = con.textContent.split(': ')[1];

        title.value = t.textContent;
        category.value = cat.textContent;
        content.value = con.textContent;
    }

    function postTask(e) {
        e.preventDefault();

        const li = e.target.parentElement;
        li.remove();

        const editBtn = li.querySelector(".edit");
        const postBtn = li.querySelector(".post");

        li.removeChild(editBtn);
        li.removeChild(postBtn);

        uploadedList.appendChild(li);
    }

    
}