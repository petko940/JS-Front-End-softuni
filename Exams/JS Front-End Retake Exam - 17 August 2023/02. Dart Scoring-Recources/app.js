window.addEventListener("load", solve);

function solve() {
    const data = {
        'player': '',
        'score': '',
        'round': '',
    }

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    const makeSureUL = document.getElementById('sure-list');

    const scoreboardList = document.getElementById('scoreboard-list');

    const clearBtn = document.getElementsByClassName('clear')[0];
    clearBtn.addEventListener('click', () => {
        window.location.reload();
    });

    function add(e) {
        e.preventDefault();

        const inputs = Array.from(document.querySelectorAll('input'));

        // if (inputs.some (input => input.value === '')) {
        //     return;
        // }

        for (const input of inputs) {
            if (input.value === '') {
                return;
            }
            data[input.id] = input.value;
        }

        const li = document.createElement('li')
        const article = document.createElement('article');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const butEdit = document.createElement('button');
        const butOk = document.createElement('button');

        li.className = 'dart-item';

        p1.textContent = data['player'];
        p2.textContent = `Score: ${data.score}`;
        p3.textContent = `Round: ${data.round}`;

        butEdit.className = 'btn edit';
        butEdit.textContent = 'edit';
        butOk.className = 'btn ok';
        butOk.textContent = 'ok';

        butEdit.addEventListener('click', edit);
        butOk.addEventListener('click', scoreboard);

        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);
        li.appendChild(butEdit);
        li.appendChild(butOk);

        makeSureUL.appendChild(li);

        inputs.forEach(input => {
            input.value = '';
        })

        addBtn.disabled = true;


    }

    function edit(e) {
        addBtn.disabled = false;

        const li = e.target.parentElement;
        li.remove();

        const inputs = Array.from(document.querySelectorAll("input"));

        for (const input of inputs) {
            input.value = data[input.id];
        }

    }

    function scoreboard(e) {
        addBtn.disabled = false;

        const li = e.target.parentElement;
        li.remove();

        Array.from(li.querySelectorAll('button')).forEach(element => {
            element.remove();
        })

        scoreboardList.appendChild(li);

    }


}

