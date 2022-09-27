import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

declare var window: any;

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css',  '../../../assets/css/forms.css']
})
export class CompraComponent implements AfterViewInit, OnInit {

  formModal: any;

  constructor(private restService:RestServiceService) { 
    
  }
  //seting date
  date = Date();
  @ViewChild("Mydate") fecha: ElementRef;
  productos = null;
  id_producto = null;

  ngOnInit(): void {
    console.log(this.date);
    this.getProductos();

    //modal
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }
  ngAfterViewInit() {
    this.fecha.nativeElement.innerHTML = "" + this.date +"";
  }

  getProductos(){
    this.restService.getProductos().subscribe(data=>{
      this.productos = data['data'];
      console.log(data);
    });
  }


  //modal
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
