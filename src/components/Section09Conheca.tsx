import { container } from "../vita-tw"

export function Section09Conheca() {
  return (
    <section id="sobre-nos" className="bg-vita-gray-bg py-[60px]">
      <div
        className={`${container} grid grid-cols-1 items-center gap-[60px] md:grid-cols-2`}
      >
        <div>
          <h2 className="mb-[18px] text-2xl font-semibold text-vita-blue md:text-[28px]">
            Conheça a Vita Audio
          </h2>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            Somos especialistas em reabilitação auditiva: aparelhos e acessórios de última
            geração, avaliação e adaptação personalizadas e suporte no tratamento do
            zumbido — sempre com foco na sua qualidade de vida.
          </p>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            Nossa equipe de fonoaudiólogos acompanha você em cada etapa, com orientação
            clara e soluções adequadas ao seu perfil e ao seu dia a dia.
          </p>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            Quer ouvir melhor e recuperar o prazer dos sons do dia a dia? Visite nossa
            clínica e inicie sua jornada com quem leva a sua audição a sério.
          </p>
        </div>
        <div className="order-first md:order-0">
          <img
            src="/images/F.png"
            alt="Fachada da Vita Audio — aparelhos auditivos"
            className="block w-full rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          />
        </div>
      </div>
    </section>
  )
}
