import { inject } from '@aurelia/kernel';
import { customElement } from '@aurelia/runtime';
import template from './leaflet-map.html';
import L from 'leaflet';
import 'leaflet-draw';

@inject(Element)
@customElement({ name: 'leaflet-map', template })
export class LeafletMapCustomElement {
  constructor(private element: Element) { }
  attached() {
    const el = this.element.querySelector('.leaflet-map');
    const map = L.map(el, {
      center: [43.0685, 141.3509],
      zoom: 14
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const drawnItems = L.featureGroup().addTo(map);
    map.addControl(new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
        poly: {
          allowIntersection: false
        }
      },
      draw: {
        polygon: {
          allowIntersection: false,
          showArea: true
        }
      }
    }));
    map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        drawnItems.addLayer(layer);
    });
  }
}
