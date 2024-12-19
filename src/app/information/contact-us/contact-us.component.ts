import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    TooltipModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CommonModule,
    ToastModule,

  ],
  providers:[MessageService],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  MailForm: FormGroup = new FormGroup({});
  SpinerFlag:boolean=false;
constructor(    private fb: FormBuilder,private messageService:MessageService){

  this.MailForm = this.fb.group({
    Name:['',[Validators.required]],
    PhoneNumber:['',[Validators.required]],
    Subject:['',[Validators.required]],
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

  this.SpinerFlag=true;
  const serviceID = 'service_hevtpr7';
  const templateID = 'template_u1doisr';
  const userID = 'CRG2c4dkAVGPC8xGA';
  if(this.MailForm.valid )
  {

    const formElement = document.getElementById('MailForm') as HTMLFormElement;
   emailjs.sendForm(serviceID,templateID,formElement,userID) .then(
    (result: EmailJSResponseStatus) => {
      this.SpinerFlag=false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your mail send Success', key: 'Su', life: 3000 });

    },
    (error) => {
      this.messageService.add({ severity: 'warn', summary: 'Attention please', detail: 'Please try again later', key: 'Wr', life: 3000 });

    }
  );

  }
  else{
    this.MailForm.markAllAsTouched();
  }
}




}
