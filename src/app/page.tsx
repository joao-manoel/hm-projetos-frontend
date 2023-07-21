import Header from "./components/Header";
import { Section } from "./components/Section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white relative">
      <Header />
      <Section.Root>
        <Section.Item
          srcImage="/images/icon_1.png"
          title="Inovação"
          description="Inovamos constantemente, moldando novas possibilidades." />
        <Section.Item
          srcImage="/images/icon_2.png"
          title="Segurança"
          description="Segurança é nossa prioridade: projetos confiáveis e protegidos." />
        <Section.Item
          srcImage="/images/icon_3.png"
          title="Personalização"
          description="Projetos personalizados que refletem sua visão única." />
        <Section.Item
          srcImage="/images/icon_4.png"
          title="Excelência"
          description="Compromisso com a qualidade e satisfação do cliente."/>
      </Section.Root>
    </main>
  )
}
