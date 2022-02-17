import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Model } from '../registerlist/registerlist.component';

@Component({
  selector: 'app-updatelist',
  templateUrl: './updatelist.component.html',
  styleUrls: ['./updatelist.component.css']
})
export class UpdatelistComponent implements OnInit {
  
  model:Model = new Model();
  updateId:any;
  finalMessage?: string;
  constructor( private service :ApiService ,private activatedRoute :ActivatedRoute ,private route :Router) {
    
     this.activatedRoute.queryParams.subscribe(id=>{
       this.updateId = id;
     })
    
   }

  ngOnInit(): void {
     this.getValues();
  }

  //get Values
  getValues(){
    // console.log("update subscription id",this.updateId.id);
    this.service.getData(this.updateId.id).toPromise().then(resp=>{
      this.model = resp;
    }).catch(error=>{
      console.log("to promise get values shows error",error)
    }).finally(()=>{
      this.finalMessage = "Details loaded";
    })
  }
   
  //update
  updateList(){
    this.service.updatedata(this.updateId.id,this.model).subscribe(data =>{
      // console.log("final",this.model);
      this.route.navigate(['/list']);
    },
    (err)=>{
      console.log("Values GET failed to UPDATE values",err)
    }
    )
  }

}
