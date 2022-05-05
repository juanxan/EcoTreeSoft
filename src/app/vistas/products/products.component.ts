import { Component, OnInit } from '@angular/core';
import { ProductosService} from '../../services/api/productos.service';
import { Products } from '../../models/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api:ProductosService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((producto) =>{
      console.log(producto)
    })
  }
  
  

}
