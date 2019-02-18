import { DebugConfiguration } from '@aurelia/debug';
import { BasicConfiguration } from '@aurelia/jit-html-browser';
import { Aurelia } from '@aurelia/runtime';
import { ShellComponent } from './shell';
import { LeafletMapCustomElement } from './components/leaflet-map';
import { LeafletLayerCustomElement } from './components/leaflet-layer';

new Aurelia()
  .register(BasicConfiguration, DebugConfiguration, <any>LeafletMapCustomElement, <any>LeafletLayerCustomElement)
  .app({ host: document.querySelector('body'), component: new ShellComponent() })
  .start();
