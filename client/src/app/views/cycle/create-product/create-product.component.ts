import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CycleService } from 'src/app/services/cycle.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  produto:Product = new Product();
 
  constructor(private router : Router, private service : CycleService) { }

  ngOnInit(): void {
  }

  create() : void{
    this.service.create(this.produto).subscribe((produto) =>{
        this.router.navigate(['/']);
    })
  }

}
