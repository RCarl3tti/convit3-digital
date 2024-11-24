import Pagina from "@/components/template/Pagina";

export default function Layout(props: any) {
    return <Pagina>{props.children}</Pagina>;  //pros.children é o conteúdo que será renderizado

}