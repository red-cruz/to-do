import closeModal from './closeModal';

export default function submitForm(emit, form) {
  const title = form.querySelector('[name="todo-title"]');
  const task = form.querySelector('[name="todo-task"]');
  form.classList.add('was-validated');

  if (!form.checkValidity()) return;

  emit({
    title: title.value,
    task: task.value,
  });
  console.log('eto');
  form.reset();
  closeModal(form);
}
