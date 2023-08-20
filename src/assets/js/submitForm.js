import closeModal from './closeModal';

/**
 * Submits the form data after validation, emitting an event with the provided data.
 *
 * @param {function} emit - The event emitter function to emit the form data.
 * @param {HTMLElement} form - The HTML form element containing the todo data.
 */
export default function submitForm(emit, form) {
  const title = form.querySelector('[name="todo-title"]');
  const task = form.querySelector('[name="todo-task"]');

  form.classList.add('was-validated');

  if (!form.checkValidity()) return;

  emit({
    title: title.value,
    task: task.value,
  });

  form.reset();
  closeModal(form);
}
