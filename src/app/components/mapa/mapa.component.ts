import { Component, OnInit, Input, ViewChild } from '@angular/core';


declare var mapboxgl:any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa') mapa

  constructor() { }

  ngOnInit() {

    console.log(this.coords)

    const latLng = this.coords.split(',')
    const lat = Number(latLng[0])
    const long = Number(latLng[1])

    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFucXVpZGV2IiwiYSI6ImNrYnB2dmxzdTEzZngydnB0cHNwNGQ5Y2gifQ.74RO5mJUCAyrh8FL7T8dsA';
    const map = new mapboxgl.Map({
    container: this.mapa.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [long, lat],
    zoom: 15, 

    });

    const marker = new mapboxgl.Marker()
                        .setLngLat( [long, lat] )
                        .addTo( map )
  }

}
