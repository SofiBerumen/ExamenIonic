import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datos:any;

  text: string;

  constructor(private http: HttpClient, public modalController: ModalController){

  }

  consulta(){//webservice

    this.http.get("https://api.github.com/search/repositories?q="+this.text).subscribe((data:any)=>{
      console.log("trae: ", data);
      this.datos=data.items;
    });//obtener los usuarios de la pagina de jsnholder
  }

  //async abrir_modal( jaja : any){
  //  const modal = await this.modalController.create({
      //component: ModalPage,
    //  componentProps: { dat: jaja }
  //  });
    //await modal.present();
//  }

}

interface tetris{
  Archivo?: string;
  Avatar?: string;
  Id?: string;
}
