window.addEventListener('load', solution);

function solution() {
  const fields = {
    employee: document.querySelector('#employee'),
    category: document.getElementById('category'),
    urgency: document.getElementById('urgency'),
    team: document.getElementById('team'),
    description: document.getElementById('description')
  }

  const sections = {
    preview: document.getElementsByClassName('preview-list'),
    // preview: document.querySelector('.preview-list'),
    pending: document.getElementsByClassName('pending-list'),
    resolved: document.getElementsByClassName('resolved-list'),
  }

  const resetFields = () => {
    Object.values(fields).forEach(element => {
      element.value = '';
    });
  }

  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', onClickHandler);
  
  const removeLi = (event) => {
    const li = event.target.parentElement;
    li.remove();
    return li;
  }

  function onClickHandler(event) {
    const handlers = {
      // име на бутона / функция
      add: add,
      edit: edit,
      continue: continueFunc,
      resolved: resolved,
      clear: (event) => {
        event.target.parentElement.remove();
      } 
    }
    const buttonName = event.target.textContent.toLowerCase();
    handlers[buttonName](event);
  }

  function createElement(
    type,
    textContent = "",
    klass = [],
    id = "",
    value = "",
    listener = "") {
    const element = document.createElement(type);
    if (textContent) {
      element.textContent = textContent;
    }

    if (klass.length) {
      element.classList.add(...klass);
    }

    if (id) {
      element.id = id;
    }

    if (value) {
      element.value = value;
    }

    if (listener) {
      element.addEventListener('click', listener);
    }

    return element;
  }

  function add(event) { // add - value
    event.preventDefault();
    for (const el of Object.values(fields)) {
      if (el.value === '') {
        return;
      }
    }

    addBtn.disabled = true;
    const li = createElement('li', '', ['problem-content']);

    const article = createElement('article');
    article.appendChild(createElement('p', `From: ${fields.employee.value}`));
    article.appendChild(createElement('p', `Category: ${fields.category.value}`));
    article.appendChild(createElement('p', `Urgency: ${fields.urgency.value}`));
    article.appendChild(createElement('p', `Assigned to: ${fields.team.value}`));
    article.appendChild(createElement('p', `Description: ${fields.description.value}`));

    li.appendChild(article);
    li.appendChild(createElement('button', 'Edit', ['edit-btn'], "", "", onClickHandler));
    li.appendChild(createElement('button', 'Continue', ['continue-btn'], "", "", onClickHandler));
    
    sections.preview[0].appendChild(li);

    resetFields();
  }

  function edit(event) {
    const li = removeLi(event);

    addBtn.disabled = false;

    // const article = li.children[0];
    // const [employee, category, urgency, team, description] = article.children;

    // fields.employee.value = employee.textContent.split(': ')[1];
    // fields.category.value = category.textContent.split(': ')[1];
    // fields.urgency.value = urgency.textContent.split(': ')[1];
    // fields.team.value = team.textContent.split(': ')[1];
    // fields.description.value = description.textContent.split(': ')[1];

    const [...data] = Array.from(li.querySelectorAll('article p'));

    Object.values(fields).forEach(element => {
      element.value = data.shift().textContent.split(': ')[1];
    })
  }

  function continueFunc(event) {
    const li = removeLi(event);

    const [...buttons] = Array.from(li.querySelectorAll('button'));
    buttons.forEach(element => {
      element.remove();
    })

    li.appendChild(createElement('button', 'Resolved', ['resolve-btn'], "", "", onClickHandler));
    sections.pending[0].appendChild(li);
  }

  function resolved(event) {
    const li = removeLi(event);

    const resolveButton = li.querySelector('button');
    resolveButton.classList.remove('resolve-btn');
    resolveButton.classList.add('clear-btn');
    resolveButton.textContent = 'Clear';

    sections.resolved[0].appendChild(li);
  }

}

