import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  @Input()nombre;
  @Input()pais;

  ngOnInit() {
  }

  salirConArg() {
    this.modalCtrl.dismiss(
      {
        nombre:'Jorge',
        pais: 'Chile'
      }
    );
  }

  salirSinArg() {
    this.modalCtrl.dismiss();
  }
}
