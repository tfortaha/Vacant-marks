import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }
  
  get(serviceName: string,params:HttpParams) {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Content-Type', 'application/json');
    //headers.append("Accept", 'application/json');
    //headers.append("Content-Type", "application/x-www-form-urlencoded");
    // headers = headers.append("Authorization", "bearer " + token);
    const url = environment.apiUrl + serviceName;
    const options = { headers: headers, withCredintials: false };
    return this.http.get(url,{headers:headers,params:params});
  }

  getData<data>(serviceName: string,params:HttpParams,token:any) {
    let headers = new HttpHeaders();
    //headers.append("Content-Type", "application/x-www-form-urlencoded");

    headers = headers.append("Authorization", "bearer " + token);
    const url = environment.apiUrl + serviceName;
    const options = { headers: headers, withCredintials: false };
    
    return this.http.get<data>(url,{headers:headers,params:params});

  }

  post(serviceName: string, data: any) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, JSON.stringify(data), options);
  }
  // post(serviceName: string ,params:HttpParams,token:any, data: any) {
  //   let headers = new HttpHeaders();
  //   headers = headers.append("Content-Type", "application/json");
  //   headers = headers.append("Authorization", "bearer " + token);
  //   const url = environment.apiUrl + serviceName;
  //   const options = { headers: headers, withCredintials: false };
  //   return this.http.post(url,JSON.stringify(data),{headers:headers,params:params});
  // }
  getUserDetail(serviceName: string, data: any) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    let json = "username=" + data.username + "&password=" + data.password;
    return this.http.post(url, JSON.stringify(data), options);
  }
}
