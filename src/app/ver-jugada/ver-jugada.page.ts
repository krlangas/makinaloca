import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons  } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-ver-jugada',
  templateUrl: './ver-jugada.page.html',
  styleUrls: ['./ver-jugada.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, CommonModule, FormsModule]
})
export class VerJugadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
