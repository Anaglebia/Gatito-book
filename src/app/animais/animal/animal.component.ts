
import { Component, Input } from '@angular/core';
import { environment } from 'src/environment/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

  private urlOriginal ='';
  @Input()descricao='';
  @Input() set url(url:string){
    if(url.startsWith('data')){
      this.urlOriginal = url;
    }else{
      this.urlOriginal= `${API}/imgs/${url}`;
    }
  }

  get url():string{
    return this.urlOriginal;
  }
}
