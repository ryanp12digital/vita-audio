import { ExternalLink, Star } from "lucide-react"
import {
  GOOGLE_BUSINESS_REVIEWS_URL,
  GOOGLE_REVIEWS_COUNT_LABEL,
  GOOGLE_REVIEWS_RATING,
} from "../constants/site"
import { btnCta, btnIco, container } from "../vita-tw"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

/** Comentários reais do Google Meu Negócio — atualize quando quiser destacar outras avaliações. */
const googleReviews: { quote: string; initial: string; avatarClass: string }[] = [
  {
    quote:
      "Tem várias opções de produtos e o lugar é bem confortável.",
    initial: "V",
    avatarClass: "bg-vita-blue text-white",
  },
  {
    quote:
      "Atendimento excelente desde a recepção até a Dra Tayla, profissional incrível.",
    initial: "L",
    avatarClass: "bg-vita-blue-dark text-white",
  },
  {
    quote:
      "Queria agradecer o atendimento, ótimo atendimento, ótimo produto recomendo.",
    initial: "N",
    avatarClass: "bg-vita-orange text-vita-text",
  },
]

function Stars({ className }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-vita-orange ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" strokeWidth={0} />
      ))}
    </div>
  )
}

export function Section10bGoogleReviews() {
  return (
    <section className="bg-vita-gray-bg py-[70px]">
      <div className={container}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-vita-serif text-[26px] font-semibold tracking-tight text-vita-text md:text-[30px]">
            <span>Avaliações no </span>
            <span className="text-vita-blue">Google</span>
          </h2>
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-lg font-bold text-vita-text">{GOOGLE_REVIEWS_RATING}</span>
            </div>
            <p className="text-sm text-vita-text-mid">{GOOGLE_REVIEWS_COUNT_LABEL}</p>
          </div>
          <a
            href={GOOGLE_BUSINESS_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-vita-blue underline decoration-vita-blue/35 underline-offset-4 transition hover:text-vita-blue-dark hover:decoration-vita-blue-dark/50"
          >
            Ver todos os comentários do Google
            <ExternalLink className="size-4 shrink-0" aria-hidden />
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-3">
          {googleReviews.map((r, i) => (
            <article
              key={i}
              className="flex flex-col rounded-lg border-l-[3px] border-vita-orange bg-white p-5 shadow-[0_2px_16px_rgba(0,109,196,0.08)]"
            >
              <Stars className="mb-4" />
              <p className="flex-1 text-[13px] leading-relaxed text-vita-text-mid">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-vita-blue/12 pt-4">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${r.avatarClass}`}
                    aria-hidden
                  >
                    {r.initial}
                  </span>
                  <span className="text-[13px] font-semibold text-vita-text">
                    Cliente verificado
                  </span>
                </div>
                <span className="shrink-0 text-xs text-vita-text-mid">Google</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button type="button" onClick={openWhatsAppLeadPopup} className={btnCta}>
            <WhatsAppIcon className={btnIco} size={18} />
            <span>AGENDE AGORA!</span>
          </button>
        </div>
      </div>
    </section>
  )
}
