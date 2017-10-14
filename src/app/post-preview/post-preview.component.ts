import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post';
import { User } from './../user';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/
  @Output() autorPulsado = new EventEmitter<Post>();
  
  verArticulosAutorSeleccionado(post: Post): void {
      this.autorPulsado.emit(post);
  }

  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el post sobre el cuál se ha hecho clic. Y puesto que    |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  //Pintamnos con el decorador 'Output' y lanzamos el evento al exterior para comunicar el evento al padre.
  @Output() postPulsado = new EventEmitter<Post>();

  verDetallePost(author: User): void {
    this.postPulsado.emit(author);
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

}
