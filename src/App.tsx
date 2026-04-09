import {
  Section01TopBar,
  Section02Hero,
  Section03Diferenciais,
  Section04Especialista,
  Section05CtaAvaliacao,
  Section06Sintomas,
  Section06bQualidadeVida,
  Section07NaoPercas,
  Section08Produtos,
  Section09Conheca,
  Section10Depoimentos,
  Section10bGoogleReviews,
  Section11Faq,
  Section12Footer,
  Section13WhatsAppFloat,
} from "./components"
import { CheckCircle2, MessageCircle } from "lucide-react"
import { WHATSAPP_CHAT_URL } from "./constants/site"
import { container } from "./vita-tw"

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/"
  const isObrigadoPage = pathname === "/obrigado"

  if (isObrigadoPage) {
    return (
      <main className="flex min-h-screen items-center bg-vita-gray-bg py-10">
        <section className={container}>
          <div className="mx-auto max-w-xl rounded-2xl border border-vita-blue/12 bg-white p-7 text-center shadow-[0_10px_36px_rgba(0,109,196,0.12)] sm:p-10">
            <CheckCircle2 className="mx-auto mb-4 size-11 text-vita-blue" aria-hidden />
            <h1 className="text-3xl font-semibold text-vita-blue">
              Obrigado pelo seu contato!
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-vita-text-mid sm:text-base">
              Recebemos suas informações com sucesso. Em instantes, nossa equipe entrará
              em contato para continuar seu atendimento.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_CHAT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle className="size-4" aria-hidden />
                Falar no WhatsApp
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-vita-blue/25 px-5 py-3 text-sm font-semibold text-vita-blue transition hover:bg-vita-blue/5"
              >
                Voltar para o site
              </a>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <>
      <Section01TopBar />
      <Section02Hero />
      <Section03Diferenciais />
      <Section04Especialista />
      <Section05CtaAvaliacao />
      <Section06Sintomas />
      <Section06bQualidadeVida />
      <Section07NaoPercas />
      <Section08Produtos />
      <Section09Conheca />
      <Section10Depoimentos />
      <Section10bGoogleReviews />
      <Section11Faq />
      <Section12Footer />
      <Section13WhatsAppFloat />
    </>
  )
}
