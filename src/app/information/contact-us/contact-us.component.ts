import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    TooltipModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CommonModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  MailForm: FormGroup = new FormGroup({});
constructor(    private fb: FormBuilder){

  this.MailForm = this.fb.group({
    Name:['',[Validators.required]],
    PhoneNumber:['',[Validators.required]],
    Subject:['',[]],
    Message:['',[Validators.required]]



  })

}

get name()
{
  return this.MailForm.get('Name')
}
get phonenumber()
{
  return this.MailForm.get('PhoneNumber')
}
get subject()
{
  return this.MailForm.get('Subject')
}
get message()
{
  return this.MailForm.get('Message')
}


Sendmail()
{



  if(this.MailForm.valid )
  {
    const name = this.name?.value || '';
    const subject = this.subject?.value || '';
    const message = this.message?.value || '';
    const phonenumber=this.phonenumber?.value ||'';

    const mailtoLink = `mailto:Peter.estawro@laquinta-groupegy.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\n PhoneNumber: ${phonenumber}\n\n\n ${message}`)}`;
    window.location.href = mailtoLink;

  }
  else{
    this.MailForm.markAllAsTouched();
  }
}




}
