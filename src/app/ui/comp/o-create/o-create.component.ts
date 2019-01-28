import { Component, OnInit } from '@angular/core';
import { OService } from './../../../svc/ui/o.service'
import IProduct from './../../../svc/model/IProduct'

@Component({
  selector: 'app-o-create',
  templateUrl: './o-create.component.html',
  styleUrls: ['./o-create.component.css']
})
export class OCreateComponent implements OnInit {

  data: IProduct;
  constructor(private oSvc: OService) {
    this.data = { id: 0, name: "", cost: 0, description: "" }
  }

  ngOnInit() {
  }

  saveData() {
    this.oSvc.save(this.data)
  }

}
