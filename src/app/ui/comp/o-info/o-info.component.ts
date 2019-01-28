import { Component, OnInit } from '@angular/core';
import IProduct from '../../../svc/model/IProduct';
import { OService } from '../../../svc/ui/o.service'

@Component({
  selector: 'app-o-info',
  templateUrl: './o-info.component.html',
  styleUrls: ['./o-info.component.css']
})
export class OInfoComponent implements OnInit {
  data: IProduct;
  constructor() {
    this.data = {id: 1, name: "Test Product", cost: 10, description: "Description"};
  }

  ngOnInit() {
  }

}
