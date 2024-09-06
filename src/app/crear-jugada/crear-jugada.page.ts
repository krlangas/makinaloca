import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, 
  IonGrid, IonRow, IonCol, IonLabel, IonItem, IonInput, IonChip, IonBadge 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-crear-jugada',
  templateUrl: './crear-jugada.page.html',
  styleUrls: ['./crear-jugada.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, 
    IonGrid, IonRow, IonCol, IonLabel, IonItem, IonInput, IonChip, IonBadge, 
    CommonModule, FormsModule
  ]
})
export class CrearJugadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}