import Tema from "./Tema";
import Ususario from "./Usuario";

export default interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema | null;
    usuario?: Ususario | null;
}