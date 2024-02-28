import Postagem from "./Postagem";

export default interface Ususario {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem | null;
}