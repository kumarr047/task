import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url = "http://localhost:3000/posts/";

  constructor( private http : HttpClient) { }
  
 
  
  //get Api
  getApi():Observable<any>{

    const getHeaders =  new HttpHeaders({
      'authenticationToken':'User1234',
      'expiryToken':'15'
      });
  
      const getParams = new HttpParams()
      .set('userRole','admin');
    
    return this.http.get("posts",{headers: getHeaders,params:getParams});
    
  }
  //create Api
  createData(data:any):Observable<any>{

    const createHeaders =  new HttpHeaders({
      'authenticationToken':'User1234',
      'expiryToken':'15'
      });
  
      const createParams = new HttpParams()
      .set('userRole','admin');
    // console.log("post data",data);
    return this.http.post("posts",data,{headers: createHeaders,params:createParams});
   
  }

  

  //delete data
  deleteData(id:any){

    const deleteHeaders =  new HttpHeaders({
    'authenticationToken':'User1234',
    'expiryToken':'15'
    });

    const deleteParams = new HttpParams()
    .set('userRole','admin');
    console.log("deletedata",id);

    return this.http.delete(`posts/${id}`,{headers: deleteHeaders,params:deleteParams});
   
  }

  //updateData

  updatedata(id:any,data:any):Observable<any>{
    const updateHeaders =  new HttpHeaders({
      'authenticationToken':'User1234',
      'expiryToken':'15'
      });
  
      const updateParams = new HttpParams()
      .set('userRole','admin');
      console.log("updatedata",id);
    console.log("patch dataservice",id);
    return this.http.put(`posts/${id}`,data,{headers: updateHeaders,params:updateParams});
  }

  getData(id:any):Observable<any>{
    const getHeaders =  new HttpHeaders({
      'authenticationToken':'User1234',
      'expiryToken':'15'
      });
  
      const getParams = new HttpParams()
      .set('userRole','admin');
      console.log("getdata",id);
    return this.http.get(`posts/${id}`,{headers: getHeaders,params:getParams});
  }
}
