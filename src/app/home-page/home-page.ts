import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  public selectedService = 0;

  /**
   * Hier staan de verschillende pakketten opgelijst. 
   * 'name' en 'description' mag je vrij aanpassen. 
   * 'id' NIET AANPASSEN. 
   * Indien je een bepaalde foto wilt aanpassen, vervang deze dan is de /public/assets folder door een foto met de dezelfde naam en extensie (zie 'src' hieronder, vb. 'wedding-example-home.jpg'). Indien de extensie anders is pas deze dan hieronder aan bij 'src' of vraag aan mij om dit te veranderen.
   * 
   * Als je een extra pakket wilt toevoegen vraag je dit best aan ons. Om het zelf te doen kopieer je de onderstaande blok code en plak je hem op lijn 53 onder de },
   * 
  *       {
            'id':4,
            'name': 'NAAM PAKKET',
            'description': 'BESCHRIJVING PAKKET',
            'price': '€180',
            'src': '/assets/naam-foto.jpg'
          },
   */
  public services = [
    {
      'id':0,
      'name': 'Koppel',
      'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      'price': '€180',
      'src': '/assets/couple-example-home.jpg'
    },
    {
      'id':1,
      'name': 'Zwangerschap',
      'description': 'koppelLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      'price': '€180',
      'src': '/assets/pregnancy-example-home.jpg'
    },
    {
      'id':2,
      'name': 'Familie',
      'description': 'familieLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      'price': '€220',
      'src': '/assets/family-example-home.jpg'
    },
    {
      'id':3,
      'name': 'Newborn',
      'description': 'familieLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      'price': '€150',
      'src': '/assets/newborn-example-home.jpg'
    },
  ]
  constructor(){}

  changeSelection(id:number) {
    this.selectedService = id;
  }

}
