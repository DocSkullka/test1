import { Component } from '@angular/core';
import { IconDefinition, IconPack, IconPrefix, IconProp } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  img: IconDefinition | IconPrefix | IconPack | any = icons.faYoutube
  flag = false

  clickHandler(){
    setTimeout(() => {
        this.flag = true
        this.img = Object.values(icons)[Math.floor(Math.random() * Object.keys(icons).length)] 
    }, 3000)
  }
}