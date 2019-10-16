import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
declare const validate: any;
declare const validatedate: any;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
valid: boolean = false;
validDate: boolean = true;
result: Observable<any>;
information = null;


constructor(private activatedRoute: ActivatedRoute, private userService :UserService) { }

ngOnInit(){

  let id = this.activatedRoute.snapshot.paramMap.get('id');

  this.userService.getDetails(id).subscribe(result =>{
    this.information = result;
    this.valid = validate(this.information.rut);
    this.validDate =  validatedate(this.information.fechaNacimiento);
    if ( this.validDate === undefined){
      this.validDate = true;
    }
  });


  }
    
}

  




