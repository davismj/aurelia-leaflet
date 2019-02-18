import { inject } from '@aurelia/kernel';
import { customElement } from '@aurelia/runtime';
import template from './shell.html';
import * as countyData from './data/ontario.-500.json';

@customElement({ name: 'body', template })
export class ShellComponent {
  countyLayer = countyData;
}
