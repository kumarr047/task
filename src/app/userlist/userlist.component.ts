import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Model } from '../registerlist/registerlist.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  getValue?: any;
  model:Model | undefined
  constructor( private service : ApiService,private route :Router) { 
   
  }

  ngOnInit(): void {
    this.service.getApi().subscribe((data) => {
      this.getValue = data;
    },
    (error:string)=>
      console.log("unable to get the values",error)
      );
   
  
  }
  
  //delete data
  deleteData(id:any){
    
    this.service.deleteData(id).subscribe(data => {
    console.log("User deleted successfully"+id);
    },(err) => {
      console.log("Unable to delete the user"+err);
    })
      }

  //update data

  updateData(id:any){
    
     this.route.navigateByUrl(`/edit?id=${id}`);

  }

}
