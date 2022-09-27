import { Component, OnInit } from '@angular/core';

declare var window: any;


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  formModal: any;

  constructor() { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  ngOnDestroy(): void {

}

  openFormModal() {
    this.formModal.show();
    var kk = document.getElementById("myModal");
    kk.classList.remove("modal-backdrop");
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }

}
