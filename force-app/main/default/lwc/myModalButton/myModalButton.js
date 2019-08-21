import { LightningElement, track } from "lwc";

export default class MyModalButton extends LightningElement {
  @track openModal = false;
  @track lastName = "林";
  @track firstName = "恵美";
  @track email = "ehayashi@example.com";

  modal;
  renderedCallback() {
    this.modal = this.template.querySelector("c-my-modal-container");
  }

  onOpenModalClicked() {
    this.modal.open();
  }
  onCancelClicked() {
    this.modal.close();
  }
  onSaveClicked() {}
}
