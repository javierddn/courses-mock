import { Component, OnInit } from '@angular/core';
import { Teacher } from '../model/teacher';
import { TeacherService } from '../service/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: Teacher[];

  constructor(private teacherService: TeacherService) {

  }

  ngOnInit() {
    this.teachers = this.teacherService.findAll();
  }
}
