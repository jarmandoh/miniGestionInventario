import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';

@Component({
  selector: 'app-cuestionario',
  imports: [
    NgClass
  ],
  templateUrl: './cuestionario.component.html',
  styleUrl: './cuestionario.component.css'
})
export class CuestionarioComponent {
  preguntas: Pregunta[] = [
    {
      id: 1,
      enunciado: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ut beatae neque voluptas accusantium, natus quia ad quos quas commodi facilis quam necessitatibus qui libero dolor reprehenderit autem cumque eos?",
      opciones: [
        {
          id: 1,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 2,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 3,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 4,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
      ],
      respondida: false
    },
    {
      id: 2,
      enunciado: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ut beatae neque voluptas accusantium, natus quia ad quos quas commodi facilis quam necessitatibus qui libero dolor reprehenderit autem cumque eos?",
      opciones: [
        {
          id: 1,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 2,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 3,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 4,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
      ],
      respondida: false
    },
    {
      id: 3,
      enunciado: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ut beatae neque voluptas accusantium, natus quia ad quos quas commodi facilis quam necessitatibus qui libero dolor reprehenderit autem cumque eos?",
      opciones: [
        {
          id: 1,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 2,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 3,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 4,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
      ],
      respondida: false
    },
    {
      id: 4,
      enunciado: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ut beatae neque voluptas accusantium, natus quia ad quos quas commodi facilis quam necessitatibus qui libero dolor reprehenderit autem cumque eos?",
      opciones: [
        {
          id: 1,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 2,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 3,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
        {
          id: 4,
          respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam iure eaque dicta odio assumenda modi et ab culpa natus quod pariatur id doloribus alias, blanditiis distinctio officiis fuga dolores!",
          seleccionada: false,
          es_correcta: false
        },
      ],
      respondida: false
    }
  ]

  pregunta_actual: number = 0; 

  selectOption(pregunta: Pregunta, opcion: any){
    pregunta.opciones.forEach( opcion => {
      opcion.seleccionada = false
    });
    opcion.seleccionada = true
    pregunta.respondida = true
  }
  siguientePregunta(){
    if(this.pregunta_actual < this.preguntas.length - 1){
      this.pregunta_actual++;
    }
  }
  anteriorPregunta(){
    if(this.pregunta_actual > 0){
      this.pregunta_actual --;
    }
  }

  finalizarCuestionario(){
    console.log("enviar respuestas...")
  }

}
