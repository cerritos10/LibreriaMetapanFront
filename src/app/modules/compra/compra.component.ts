import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css',  '../../../assets/css/forms.css']
})
export class CompraComponent implements AfterViewInit, OnInit {

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

}
