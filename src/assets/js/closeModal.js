/**
 * Closes a Bootstrap modal.
 * This function is used to close a Bootstrap modal because there is a bug when using the Modal.hide() method.
 * The Modal.hide() method only hides the modal itself, but it does not remove the modal backdrop.
 *
 * @param {Element} parentElem The parent element where the dismiss button for modal is located
 */
export default function closeModal(parentElem) {
  parentElem
    .querySelector('[data-bs-dismiss="modal"]')
    .dispatchEvent(new Event('click'));
}
