import Image from "next/image";

export default function Header() {
  return (
    <div
      className="
        w-full h-[700px] relative px-36 py-10
        bg-hero-pattern bg-no-repeat bg-cover bg-center
      "
    >

      <header
        className="
          flex items-center justify-between
        "
      >
        <section>
          <Image
            alt="HM Projetos Logo"
            src='/images/logo.png'
            width={224}
            height={76}
          />
        </section>

        <nav>
          <div
            className="
              flex flex-col gap-2 cursor-pointer
            "
          >
            <div className="w-12 bg-white h-1 rounded-sm"></div>
            <div className="w-12 bg-white h-1 rounded-sm"></div>
            <div className="w-12 bg-white h-1 rounded-sm"></div>
          </div>
        </nav>
      </header>

      <section
        className="
         text-white 
         relative h-full max-w-2xl flex flex-col justify-center
        "
      >
        <h1
          className="
            font-black text-3xl
          "
        >PROJETANDO SONHOS E GARANTINDO SEGURANÇA.</h1>
        <p
          className="text-sm mt-5"
        >
          Bem-vindo ao HM Projetos, onde projetamos sonhos arquitetônicos e garantimos segurança em cada detalhe. Nossa paixão é criar espaços funcionais e inspiradores, enquanto priorizamos a proteção das vidas que neles habitam. Descubra como podemos transformar sua visão em realidade, com criatividade e expertise em projetos arquitetônicos e consultoria de segurança.
        </p>
      </section>
      

      <div
        className="
          absolute h-1/3 -bottom-2 left-0 right-0
          bg-gradient-to-b from-white rotate-180
        "
        />
    </div>
  )
}