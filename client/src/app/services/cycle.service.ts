import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CycleService {

  baseUrl = 'http://localhost:1234/'

  constructor(private http: HttpClient){}
  
  list(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'produto/listar');
  }
  create(produto : Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl+'produto/cadastrar',produto);
  }
  getProduto(produtoId : String):Observable<Product> {
    return this.http.get<Product>(this.baseUrl + "produto/buscar/${produtoId");
  }
  updateProduto(produto:Product): Observable<any> {
    return this.http.put(this.baseUrl + "produto/alterar/:productIdUp", produto);
  }

  deleteProduto(produtoId: String): Observable<any> {
    return this.http.delete(this.baseUrl + "produto/remover/:codigoBarrasDelete'");
  }
}
