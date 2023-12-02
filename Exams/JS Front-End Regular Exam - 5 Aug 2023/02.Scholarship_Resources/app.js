window.addEventListener("load", solve);

function solve() {

    let dataSchool = {
        student: "",
        university: "",
        score: "",
    }

    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", nextBtnHandler);

    const previewList = document.getElementById("preview-list");

    function nextBtnHandler(e) {
        e.preventDefault();

        const inputs = Array.from(document.querySelectorAll("input"));

        for (const input of inputs) {
            if (input.value === "") {
                return;
            }
            dataSchool[input.id] = input.value;
        }

        nextBtn.disabled = true;

        inputs.forEach(element => {
            element.value = "";
        });

        preview(e);
    }

    function preview(e) {
        e.preventDefault();

        const li = document.createElement("li");
        const article = document.createElement("article");
        const h4 = document.createElement("h4");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const buttonEdit = document.createElement("button");
        const buttonApply = document.createElement("button");

        li.className = 'application';

        li.appendChild(article);
        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        li.appendChild(buttonEdit);
        li.appendChild(buttonApply);

        h4.textContent = dataSchool.student;
        p1.textContent = `University: ${dataSchool.university}`;
        p2.textContent = `Score: ${dataSchool.score}`;

        buttonEdit.textContent = "Edit";
        buttonEdit.className = 'action-btn edit';
        buttonEdit.addEventListener("click", editBtnHandler);

        buttonApply.textContent = "Apply";
        buttonApply.className = 'action-btn apply';

        buttonApply.addEventListener("click", applyBtnHandler);
        
        previewList.appendChild(li);

    }

    function editBtnHandler(e) {
        e.preventDefault();

        nextBtn.disabled = false;
        
        const li = e.target.parentElement;
        li.remove();

        const inputs = Array.from(document.querySelectorAll("input"));

        for (const input of inputs) {
            input.value = dataSchool[input.id];
        }
    }

    function applyBtnHandler(e) {
        e.preventDefault();
        
        nextBtn.disabled = false;

        const li = e.target.parentElement;
        li.remove();

        const buttons = Array.from(li.querySelectorAll("button"));
        console.log(buttons);
        buttons.forEach(element => {
            element.remove();
        })

        const candidate = document.getElementById("candidates-list");

        candidate.appendChild(li);
    
    }

}
