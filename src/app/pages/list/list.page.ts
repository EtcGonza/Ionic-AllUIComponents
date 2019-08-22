import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuario: any;
  @ViewChild('lista', {static: false}) lista: IonList;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getUsers()
        .subscribe( (data) => {
          console.log(data);
          this.usuario = data;
        });
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  favorito() {
    // console.log('favorito', user);
    this.presentToast('Se guardo en favoritos!');
    this.lista.closeSlidingItems();
  }

  compartir() {
    this.presentToast('Compartido!');
    this.lista.closeSlidingItems();
  }

  borrar() {
    this.presentToast('Borrado!');
    this.lista.closeSlidingItems();
  }

}
