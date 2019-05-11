import { Component, OnInit } from '@angular/core';
import { OService } from './../../../svc/ui/o.service'
import IProduct from './../../../svc/model/IProduct'
import {Router} from "@angular/router"

@Component({
  selector: 'app-o-create',
  templateUrl: './o-create.component.html',
  styleUrls: ['./o-create.component.css']
})
export class OCreateComponent implements OnInit {

  data: IProduct;
  constructor(private oSvc: OService, private router: Router) {
    this.data = { id: 0, name: "", cost: 0, description: "" }
  }

  ngOnInit() {
  }

  saveData() {
    this.oSvc.save(this.data).subscribe(
      data => {
        console.log("SAVED" + data);
        this.router.navigate(['/products']);
      },
      error => {
        console.log("ERROR" + error);
        this.router.navigate(['/products']);
      }
    )
  }

}
