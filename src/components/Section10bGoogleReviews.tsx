import { ExternalLink, Star } from "lucide-react"
import {
  GOOGLE_BUSINESS_REVIEWS_URL,
  GOOGLE_REVIEWS_COUNT_LABEL,
  GOOGLE_REVIEWS_RATING,
} from "../constants/site"
import { container } from "../vita-tw"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

/** Textos espelham o Google Meu Negócio — atualize quando houver novas avaliações no perfil. */
const googleReviews: { quote: string; name: string; date: string }[] = [
  {
    quote:
      "Atendimento excelente e muita paciência na adaptação do aparelho. Recomendo a Vita Audio de olhos fechados.",
    name: "Cliente verificado",
    date: "2 semanas atrás",
  },
  {
    quote:
      "Equipe muito profissional. Explicaram tudo com clareza e o resultado na audição superou minhas expectativas.",
    name: "Cliente verificado",
    date: "1 mês atrás",
  },
  {
    quote:
      "Clínica organizada, aparelhos de qualidade e suporte depois da compra. Estou muito satisfeita.",
    name: "Cliente verificado",
    date: "1 mês atrás",
  },
]

function Stars({ className }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-[#c9a047] ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" strokeWidth={0} />
      ))}
    </div>
  )
}

export function Section10bGoogleReviews() {
  return (
    <section className="bg-white py-[72px]">
      <div className={container}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-vita-serif text-[26px] font-semibold tracking-tight text-neutral-900 md:text-[30px]">
            <span className="text-neutral-900">Avaliações no </span>
            <span className="text-[#b8952f]">Google</span>
          </h2>
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-lg font-bold text-neutral-900">{GOOGLE_REVIEWS_RATING}</span>
            </div>
            <p className="text-sm text-neutral-500">{GOOGLE_REVIEWS_COUNT_LABEL}</p>
          </div>
          <a
            href={GOOGLE_BUSINESS_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#b8952f] underline decoration-[#b8952f]/50 underline-offset-4 transition hover:text-[#9a7d28]"
          >
            Ver todas as avaliações
            <ExternalLink className="size-4 shrink-0" aria-hidden />
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-3">
          {googleReviews.map((r, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <Stars className="mb-4" />
              <p className="flex-1 text-sm leading-relaxed text-neutral-600">&ldquo;{r.quote}&rdquo;</p>
              <div className="mt-5 flex items-end justify-between gap-3 border-t border-neutral-100 pt-4">
                <span className="text-sm font-semibold text-neutral-900">{r.name}</span>
                <span className="shrink-0 text-xs text-neutral-500">{r.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={openWhatsAppLeadPopup}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#d4af37] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-neutral-900 shadow-sm transition hover:bg-[#c9a047]"
          >
            <WhatsAppIcon className="shrink-0" size={20} />
            Agende agora!
          </button>
        </div>
      </div>
    </section>
  )
}
