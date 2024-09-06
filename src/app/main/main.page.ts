import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { CrearJugadaPage } from '../crear-jugada/crear-jugada.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton] 
})
export class MainPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  CrearJugadaPage() {
    console.log('crear-jugada');
    this.navCtrl.navigateForward('crear-jugada');
  }

  VerJugadaPage() {
    console.log('ver-jugada');
    this.navCtrl.navigateForward('ver-jugada');
  }
}

