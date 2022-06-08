import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {




  constructor(public servicioContacto: ContactoService) { 

   
    
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  
    

  

 

  

}
