import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Servicios } from 'src/app/models/servicios';
import { Turns } from 'src/app/models/turns';
import { ServicesService } from 'src/app/services/services.service';
import { TurnsService } from 'src/app/services/turns.service';

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.css']
})
export class TurnsComponent {
  turns: Turns[];
  servicios: Servicios[];
  fecha_inicio: Date;
  fecha_fin: Date;
  servicio : string;
  loading: any;

  constructor(private turnsService: TurnsService, 
    private servicesService: ServicesService, 
    public loadingController: LoadingController,
    public toastController: ToastController,){}


  ngOnInit(){

    //listar todos los turnos 
    this.getTurns();
    //lista todos los servicios
    this.servicesService.getServices().subscribe(data=>{
      this.servicios=data;
    })
    
  }

  //metodo para genarra los turnos
  saveTurns(){
    if(this.fecha_inicio != null &&  this.fecha_fin != null  &&  this.servicio != ""){
      this.presentLoading();
      //lista todos los turnos
      this.turnsService.getInsertTurns(this.fecha_inicio,this.fecha_fin, this.servicio).subscribe(data=>{
        this.turns=data;
        this.presentToast("Turnos Generados");
        console.log("this.turns", data)
        //listar todos los turnos 
        this.getTurns();
      })
    }else{
      console.log("datos requeridos")
      this.presentToast("Ingrese Los Datos Obligatorios.");
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'normal',
      message: 'Generando Turnos...',
    });
    await this.loading.present();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  getTurns(){
     //lista todos los turnos
    this.turnsService.getTurns().subscribe(data=>{
      this.turns=data;
      
    })
  }

  
}
