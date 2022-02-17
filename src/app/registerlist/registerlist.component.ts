import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';



export class Model {

  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  number?: number;


}

@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.css']
})
export class RegisterlistComponent implements OnInit {

  model: Model = new Model();



  constructor(private service: ApiService, private route: Router) { }

  ngOnInit(): void {

  }

  Register() {
    console.log("save model", this.model);
    this.service.createData(this.model).subscribe((model) => {
      console.log("create model", this.model);

      this.route.navigate(['/list']

        
      )

    },
    
        (error) => {
          console.log("Create Failed",error)
        }
    )
  }


}
