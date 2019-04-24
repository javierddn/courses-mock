import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../model/teacher';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {

  teacher: Teacher;

  constructor(private route: ActivatedRoute, private router: Router, private teacherService: TeacherService) {
    this.teacher = new Teacher();
  }

  onSubmit() {
    //this.teacherService.save(this.teacher).subscribe(result => this.gotoTeacherList());
  }

  gotoTeacherList() {
    this.router.navigate(['/teachers']);
  }
}
