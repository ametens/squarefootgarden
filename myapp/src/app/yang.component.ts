import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-yang',
  templateUrl: './yang.component.html',
  styleUrls: ['./yang.component.css']
})
export class YangComponent {
  
    titre = 'A large amount of cultivars, veggies and a lot more...';
    brand = 'Veggie World';
    aromatics: { nom: string; yang: number; yin: number; cat: string; page: number; }[];
  item: any;
  
    constructor(){
        this.titre = this.titre,
        this.aromatics = [ 
            {nom:'ANANAS', yang: 3, yin:0, cat:'fruit', page:1},
  
            {nom:'PAPAYE', yang: 3, yin:0, cat:'fruit', page:1},
  
            {nom:'MANGUE', yang: 3, yin:0, cat:'fruit', page:1},
  
            {nom:'PAMPLEMOUSSE', yang: 3, yin:0, cat:'fruit', page:1},

            {nom:'ORANGE', yang: 3, yin:0, cat:'fruit', page:1},

            {nom:'BANANE', yang: 3, yin:0, cat:'fruit', page:1},

            {nom:'FIGUE', yang: 3, yin:0, cat:'fruit', page:1},

            {nom:'CITRON', yang: 3, yin:0, cat:'fruit', page:1},

            {nom:'POIRE', yang: 2, yin:0, cat:'fruit', page:1},

            {nom:'RAISIN', yang: 2, yin:0, cat:'fruit', page:1},

            {nom:'MELON', yang: 2, yin:0, cat:'fruit', page:1},

            {nom:'PRUNEAU', yang: 2, yin:0, cat:'fruit', page:1},

            {nom:'AMANDE', yang: 2, yin:0, cat:'fruit', page:1},

            {nom:'NOISETTE', yang: 2, yin:0, cat:'fruit', page:1},

            {nom:'FRAISE', yang: 0, yin:1, cat:'fruit', page:1},

            {nom:'CHATAIGNE', yang: 0, yin:2, cat:'fruit', page:1},

            {nom:'POMME', yang: 0, yin:2, cat:'fruit', page:1},

            {nom:'COCA-COLA', yang: 0, yin:3, cat:'boisson', page:3},

            {nom:'CHOCOLAT', yang: 0, yin:3, cat:'boisson', page:3},

            {nom:'CHAMPAGNE', yang: 0, yin:3, cat:'boisson', page:3},

            {nom:'VIN', yang: 0, yin:3, cat:'boisson', page:3},

            {nom:'TILLEULS', yang: 0, yin:1, cat:'boisson', page:3},

            {nom:'MENTHE', yang: 0, yin:1, cat:'boisson', page:3},

            {nom:'CAMOMILLE', yang: 1, yin:0, cat:'boisson', page:3},

            {nom:'ROMARIN', yang: 1, yin:0, cat:'boisson', page:3},

            {nom:'ARMOISE', yang: 1, yin:0, cat:'boisson', page:3},

            {nom:'MALT', yang: 1, yin:0, cat:'boisson', page:3},

            {nom:'GINSENG', yang: 3, yin:0, cat:'boisson', page:3},

            {nom:'GINGEMBRE', yang: 0, yin:3, cat:'condiment', page:4},

            {nom:'PAPRIKA', yang: 0, yin:3, cat:'condiment', page:4},

            {nom:'CURRY', yang: 0, yin:3, cat:'condiment', page:4},

            {nom:'POIVRE', yang: 0, yin:3, cat:'condiment', page:4},

            {nom:'PIMENT', yang: 0, yin:3, cat:'condiment', page:4},

            {nom:'LAURIER', yang: 0, yin:1, cat:'condiment', page:4},

            {nom:'AIL', yang: 0, yin:1, cat:'condiment', page:4},

            {nom:'ANIS', yang: 0, yin:1, cat:'condiment', page:4},

            {nom:'CARVI', yang: 0, yin:1, cat:'condiment', page:4},

            {nom:'CUMIN', yang: 0, yin:1, cat:'condiment', page:4},

            {nom:'CIBOULETTE', yang: 0, yin:1, cat:'condiment', page:4},

            {nom:'ECHALOTTE', yang: 0, yin:1, cat:'condiment', page:4},

            {nom:'ESTRAGON', yang: 0, yin:1, cat:'condiment', page:4},

            {nom:'CANNELLE', yang: 1, yin:0, cat:'condiment', page:4},

            {nom:'FENOUIL', yang: 1, yin:0, cat:'condiment', page:4},

            {nom:'BASILIC', yang: 1, yin:0, cat:'condiment', page:4},

            {nom:'CITRON', yang: 0, yin:3, cat:'condiment', page:4},

            {nom:'VINAIGRE', yang: 0, yin:2, cat:'condiment', page:4},

            {nom:'MOUTARDE', yang: 0, yin:2, cat:'condiment', page:4},

            {nom:'GIROFLE', yang: 0, yin:2, cat:'condiment', page:4},

            {nom:'VANILLE', yang: 0, yin:2, cat:'condiment', page:4},

            {nom:'CERFEUIL', yang: 1, yin:0, cat:'herbes', page:5},

            {nom:'SARIETTE', yang: 1, yin:0, cat:'herbes', page:5},

            {nom:'THYM', yang: 1, yin:0, cat:'herbes', page:5},

            {nom:'ROMARIN', yang: 1, yin:0, cat:'herbes', page:5},

            {nom:'SERPOLET', yang: 1, yin:0, cat:'herbes', page:5},

            {nom:'OIGNONS', yang: 1, yin:0, cat:'herbes', page:5},

            {nom:'PERSIL', yang: 2, yin:0, cat:'herbes', page:5},

            {nom:'SAUGE', yang: 2, yin:0, cat:'herbes', page:5},

            {nom:'RAIFORT', yang: 2, yin:0, cat:'herbes', page:5},

            {nom:'SAFRAN', yang: 2, yin:0, cat:'herbes', page:5},

            {nom:'GENTIANE', yang: 3, yin:0, cat:'herbes', page:5}
      ];
    }
    displayItem(item) {
      this.item = item;
      console.log('message console: ' + item.nom);
    }
    triAromatics() {


      //Trier la liste des aromates suivants les critères
      //choisis par l'utilisateur
     
    } 

    ngOnInit() {
      
    }
  }
  