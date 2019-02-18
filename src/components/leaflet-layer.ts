// import { inject } from '@aurelia/kernel';
import { customElement } from '@aurelia/runtime';
// import { bindable } from '@aurelia/runtime';
// import { LeafletMapCustomElement } from './leaflet-map';
import template from './leaflet-layer.html';
// import L from 'leaflet';

// @inject(LeafletMap)
@customElement({ name: 'leaflet-layer', template })
export class LeafletLayerCustomElement {
  // @bindable() data: IFeatureCollection;
  // constructor(private map: LeafletMap) { }
  // bound() {
  //   L.geoJSON(this.data).addTo(this.map);
  // }
}

// type GeometryType = 'Polygon' | 'MultiPolygon';
// type Coordinates = number[] | number[][] | number[][][] | number[][][][];

// interface IGeometry {
//   type: GeometryType;
//   coordinates: Coordinates;
// }

// interface IFeature {
//   type: 'Feature';
//   geometry: IGeometry;
//   properties: Record<string, any>[];
// }

// interface IFeatureCollection {
//   type: 'FeatureCollection';
//   features: IFeature[];
// }
