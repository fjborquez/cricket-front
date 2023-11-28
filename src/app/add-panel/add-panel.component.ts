import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.scss']
})
export class AddPanelComponent  implements OnInit {

  constructor(private panelService: PanelService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(addPanelForm: NgForm) {
    this.panelService.addPanel({
      nombre: addPanelForm.value.nombre,
      descripcion: addPanelForm.value.descripcion,
    }).subscribe(response => {
      this.router.navigate(['/paneles']);
    });
  }

}
