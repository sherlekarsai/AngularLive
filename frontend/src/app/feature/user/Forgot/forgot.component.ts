import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../../core/services/user.service";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "src/app/core/components";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.scss"]
})
export class ForgotComponent implements OnInit {
  loading = false;
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private validationService: ValidationService,
    private toastrService: ToastrService
  ) {} 

  register() {
    this.loading = true;
    this.userService.create(this.registerForm.value).subscribe(
      (data) => {
        this.toastrService.success("Registration successful");
        this.router.navigate(["/login"]);
        console.log(data);
      },
      (error) => {
        this.toastrService.error(error);
        this.loading = false;
      }
    );
  }

  createForm() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        username: ["", Validators.required],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: this.validationService.MustMatch("password", "confirmPassword")
      }
    );
  }
  ngOnInit(): void {
    this.createForm();
  }
}
