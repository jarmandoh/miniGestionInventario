export interface Pregunta{
    id: number,
    enunciado: string,
    opciones: OpcionRespuesta[],
    respondida: boolean
}

export interface OpcionRespuesta{
    id: number,
    respuesta: string,
    seleccionada: boolean,
    es_correcta: boolean
}