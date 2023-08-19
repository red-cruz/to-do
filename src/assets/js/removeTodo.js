import Noty from 'noty';

// Noty.setMaxVisible(1);
export default function removeTodo(e, todoId) {
  console.log(todoId);

  const noty = new Noty({
    text: `Todo has been deleted. 
      <a 
        id='${todoId}'
        class="icon-link icon-link-hover float-end" 
        style="--bs-link-hover-color-rgb: 25, 135, 84;" 
        href="#"
        >
        undo
      </a>`,
    theme: 'nest',
    layout: 'bottomRight',
    type: 'alert',
    timeout: 5000,
  });
  noty.show();
  noty.on('afterClose', () => {
    console.log('listener removed');
    notyLink.removeEventListener('click', undoTodoRemove);
  });
  const notyLink = document.getElementById(todoId);
  notyLink.addEventListener('click', undoTodoRemove);

  function undoTodoRemove() {
    console.log('naundo na');
  }
}
