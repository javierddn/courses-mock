import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from '../model/teacher';
import { Observable } from 'rxjs/Observable';
//import $ from 'jquery';

@Injectable()
export class TeacherService {

  private teachersUrl: string;

teachers: Teacher[] = [
    {
        "id": 1,
        "firstName": "teacher1",
        "lastName": "García"
    },
    {
        "id": 2,
        "firstName": "teacher2",
        "lastName": "De Diego"
    }
];

  constructor(private http: HttpClient) {
    this.teachersUrl = 'http://localhost:8001/rest/teachers';
  }

  public findAll(): Teacher[] {
    return this.teachers;
    //this.http.get<Teacher[]>(this.teachersUrl);
  }

  public save(teacher: Teacher) {
    return this.http.post<Teacher>(this.teachersUrl, teacher);
  }
}
