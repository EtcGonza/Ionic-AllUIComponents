import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  superHeroes: Observable<any>;

  filtroHeroe = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(event: any) {
    this.filtroHeroe = event.detail.value;
    console.log(this.filtroHeroe);
  }

}
