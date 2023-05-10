import { Component, OnInit } from '@angular/core';
import {User} from '../../Equipment/Model/User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId !== null) {
      this.userService.getUserById(parseInt(userId)).subscribe(
        user => {
          this.user = user;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}

