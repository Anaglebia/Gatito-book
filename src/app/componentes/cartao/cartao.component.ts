import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent {
  @Input()titulo ='';

}
