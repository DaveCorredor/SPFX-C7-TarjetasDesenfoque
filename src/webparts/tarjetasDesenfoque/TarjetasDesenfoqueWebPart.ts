import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TarjetasDesenfoqueWebPartStrings';
import TarjetasDesenfoque from './components/TarjetasDesenfoque';
import { ITarjetasDesenfoqueProps } from './components/ITarjetasDesenfoqueProps';

export interface ITarjetasDesenfoqueWebPartProps {
  etiqueta1: string;
  titulo1: string;
  fondo1: string;
  etiqueta2: string;
  titulo2: string;
  fondo2: string;
  etiqueta3: string;
  titulo3: string;
  fondo3: string;
  etiqueta4: string;
  titulo4: string;
  fondo4: string;
}

export default class TarjetasDesenfoqueWebPart extends BaseClientSideWebPart<ITarjetasDesenfoqueWebPartProps> {


  public render(): void {
    const element: React.ReactElement<ITarjetasDesenfoqueProps> = React.createElement(
      TarjetasDesenfoque,
      {
        etiqueta1: this.properties.etiqueta1,
        titulo1: this.properties.titulo1,
        fondo1: this.properties.fondo1,
        etiqueta2: this.properties.etiqueta2,
        titulo2: this.properties.titulo2,
        fondo2: this.properties.fondo2,
        etiqueta3: this.properties.etiqueta3,
        titulo3: this.properties.titulo3,
        fondo3: this.properties.fondo3,
        etiqueta4: this.properties.etiqueta4,
        titulo4: this.properties.titulo4,
        fondo4: this.properties.fondo4,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('titulo1', {
                  label: strings.DescriptionFieldLabelTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('etiqueta1', {
                  label: strings.DescriptionFieldLabelEtiqueta,
                  maxLength: 10,
                  placeholder: strings.DescripcionPlaceholderEtiqueta
                }),
                PropertyPaneDropdown('fondo1', {
                  label: strings.DescriptionFieldLabelFondo,
                  options: [
                    {key: 'https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', text: 'Puerta'},
                    {key: 'https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', text: 'Desierto'},
                    {key: 'https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', text: 'Calle'},
                  ],
                  selectedKey: 'https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                }),
                PropertyPaneTextField('titulo2', {
                  label: strings.DescriptionFieldLabelTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('etiqueta2', {
                  label: strings.DescriptionFieldLabelEtiqueta,
                  maxLength: 10,
                  placeholder: strings.DescripcionPlaceholderEtiqueta
                }),
                PropertyPaneDropdown('fondo2', {
                  label: strings.DescriptionFieldLabelFondo,
                  options: [
                    {key: 'https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', text: 'Templo'},
                    {key: 'https://images.unsplash.com/photo-1721073700829-67def768b21f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Metro'},
                    {key: 'https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', text: 'Calle'},
                  ],
                  selectedKey: 'https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                }),
                PropertyPaneTextField('titulo3', {
                  label: strings.DescriptionFieldLabelTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('etiqueta3', {
                  label: strings.DescriptionFieldLabelEtiqueta,
                  maxLength: 10,
                  placeholder: strings.DescripcionPlaceholderEtiqueta
                }),
                PropertyPaneDropdown('fondo3', {
                  label: strings.DescriptionFieldLabelFondo,
                  options: [
                    {key: 'https://images.unsplash.com/photo-1721073700829-67def768b21f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Metro'},
                    {key: 'https://images.unsplash.com/photo-1720999919145-246ed74ae59c?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Bosque'},
                    {key: 'https://images.unsplash.com/photo-1721116858340-d955652c2fc8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Coffe'},
                  ],
                  selectedKey: 'https://images.unsplash.com/photo-1721073700829-67def768b21f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }),
                PropertyPaneTextField('titulo4', {
                  label: strings.DescriptionFieldLabelTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('etiqueta4', {
                  label: strings.DescriptionFieldLabelEtiqueta,
                  maxLength: 10,
                  placeholder: strings.DescripcionPlaceholderEtiqueta
                }),
                PropertyPaneDropdown('fondo4', {
                  label: strings.DescriptionFieldLabelFondo,
                  options: [
                    {key: 'https://images.unsplash.com/photo-1721116858340-d955652c2fc8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Coffe'},
                    {key: 'https://images.unsplash.com/photo-1720999919145-246ed74ae59c?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Bosque'},
                    {key: 'https://images.unsplash.com/photo-1720532634554-133b65008cf8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Atardecer'},
                  ],
                  selectedKey: 'https://images.unsplash.com/photo-1721116858340-d955652c2fc8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
