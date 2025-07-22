import { Component } from '@angular/core';
import { ContactBlock } from '../shared/contact-block/contact-block';

@Component({
  selector: 'app-services-page',
  imports: [ContactBlock],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
  host: {ngSkipHydration: 'true'}
})
export class ServicesPage {
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
              'description': '<p class="italic mb-4">Jullie liefde vastgelegd in beelden</p><p>Of jullie nu net samen zijn, al jaren een stel vormen of gewoon iets moois willen vieren – een koppelshoot is een liefdevol moment voor jullie samen. Geen stijve poses of ongemakkelijke situaties, maar echte connectie, spontaniteit en plezier. Ik leg jullie vast zoals jullie écht zijn: in een intieme blik, een oprechte lach of dat ene kleine gebaar dat alleen jullie begrijpen.</p>',
              'price': '€180',
              'included': ['60 minuten fotografie', 'min. 40 afgewerkte beelden'], 
              'src1': '/assets/couple-example-1.jpg',
              'src2': '/assets/couple-example-2.jpg'
            },
            {
              'id':1,
              'name': 'Zwangerschap',
              'description': '<p class="italic mb-4">Een tijdloze herinnering aan nieuw leven</p><p>Er is niets zo bijzonder als de periode waarin je nieuw leven draagt. Met een zwangerschapsfotoshoot leg ik dit unieke moment op een liefdevolle en stijlvolle manier vast. Of je nu alleen op de foto wilt of samen met je partner – we creëren beelden die je voor altijd zult koesteren.</p><p>We nemen de tijd om samen iets moois neer te zetten. De shoot vindt plaats op een locatie naar keuze – dat kan in de natuur zijn of bij jullie thuis, in een ontspannen sfeer waarin jij je op je gemak voelt.</p>',
              'price': '€180',
              'included': ['60 minuten fotografie', 'min. 40 afgewerkte beelden'], 
              'src1': '/assets/pregnancy-example-1.jpg',
              'src2': '/assets/pregnancy-example-2.jpg'
            },
            {
              'id':2,
              'name': 'Familie',
              'description': '<p class="italic mb-4">Samen zoals jullie zijn</p><p>Jullie gezin verandert en groeit, en elk hoofdstuk is het waard om vast te leggen. Een gezinsshoot is een ontspannen moment waarin jullie als familie centraal staan – met al jullie unieke banden, gekke grapjes en liefdevolle blikken.</p><p>Het resultaat? Een serie warme, levendige beelden waarin jullie jezelf herkennen. Geen perfect plaatje, maar echte momenten. Want dát is wat telt.</p>',
              'price': '€220',
              'included': ['90 minuten fotografie', 'min. 60 afgewerkte beelden'], 
              'src1': '/assets/family-example-1.jpg',
              'src2': '/assets/family-example-2.jpg'
            },
            {
              'id':3,
              'name': 'Newborn',
              'description': '<p class="italic mb-4">De eerste momenten voor altijd vastgelegd</p><p>Die eerste dagen met jullie pasgeboren kindje zijn zó bijzonder – intens, kwetsbaar en vol liefde. Een tijd die vaak in een roes voorbijgaat, maar die je je voor altijd wilt herinneren. Met een newbornshoot leg ik deze kostbare momenten op een zachte en pure manier vast.</p>',
              'price': '€150',
              'included': ['60 minuten fotografie', 'min. 40 afgewerkte beelden'], 
              'src1': '/assets/newborn-example-1.jpg',
              'src2': '/assets/newborn-example-2.jpg'
            },
          ]
}
