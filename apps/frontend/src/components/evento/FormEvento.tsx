import useEvento from "@/data/hooks/useEvento";
import Passos from "../shared/Passos";

export default function FormEvento() {

    const { evento, salvarEvento } = useEvento();

  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais",
  ];
  return (
    <div>
      <Passos labels={labels} labelAcao="Salvar" acao={salvarEvento}>
        <div>Passo1</div>
        <div>Passo2</div>
        <div>Passo3</div>
      </Passos>
    </div>
  );
}
