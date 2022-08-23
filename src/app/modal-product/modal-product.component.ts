import { Component, OnInit, Input, Injectable, ViewChild, TemplateRef  } from '@angular/core';
import {NgbModal, NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
  
  
@Component({
  selector: 'modal_product',
  templateUrl: './modal-product.component.html'
})

@Injectable()
export class ModalProductComponent {
  @Input() product_name: String = "";
  @Input() product_price: String = "";
  @Input() product_path_to_image: String = "";
  @Input() product_description: String = "";
  
  @ViewChild('modal_product') private modalContent: TemplateRef<ModalProductComponent>
  private modalRef: NgbModalRef

  public content:string = "";
  constructor(private modalService: NgbModal) { }

  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent)
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
      this.modalRef.close();
  }

  async dismiss(): Promise<void> {
    this.modalRef.dismiss();
  }

  ngOnInit(): void {}
}
