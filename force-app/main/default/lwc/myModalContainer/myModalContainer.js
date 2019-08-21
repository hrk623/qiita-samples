import { LightningElement, api, track } from "lwc";

export default class MyModalContainer extends LightningElement {
  @api show = false;

  @api open() {
    this.show = true;
  }
  @api close() {
    this.show = false;
  }

  @track hasHeader = false;
  @track hasFooter = false;

  renderedCallback() {

    const header = this.template.querySelector('slot[name="header"]');
    console.log("header", header);
    const header = this.querySelector('slot[name="header"]');
    console.log("header", header);
    const footer = this.template.querySelector('slot[name="footer"]');
    console.log("footer", footer);
  }

  onHeaderSlotChanged() {
    console.log("onHeaderSlotChanged");
  }
  onFooterSlotChanged() {
    console.log("onFooterSlotChanged");
  }
}
