import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CycleService } from 'src/app/services/cycle.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
   
  produtos : Product[] = [];

  xColumns: string[] = ['nome', 'codigoBarras', 'preco', 'criadoEm'];

  constructor(private router:Router, private produtoService: CycleService) { }

  ngOnInit(): void {
    this.produtoService.list().subscribe(a =>{
      this.produtos = a;
    })
  }

  navigateToCreateProduct() : void{
    this.router.navigate(['cycle/create'])
  }

}
