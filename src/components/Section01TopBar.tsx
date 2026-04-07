import { container } from "../vita-tw"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"

function getTomorrowDateInSaoPaulo() {
  const now = new Date()
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  const parts = formatter.formatToParts(now)
  const year = Number(parts.find((part) => part.type === "year")?.value)
  const month = Number(parts.find((part) => part.type === "month")?.value)
  const day = Number(parts.find((part) => part.type === "day")?.value)

  const saoPauloDateUtc = new Date(Date.UTC(year, month - 1, day))
  saoPauloDateUtc.setUTCDate(saoPauloDateUtc.getUTCDate() + 1)

  const tomorrowDay = String(saoPauloDateUtc.getUTCDate()).padStart(2, "0")
  const tomorrowMonth = String(saoPauloDateUtc.getUTCMonth() + 1).padStart(2, "0")
  return `${tomorrowDay}/${tomorrowMonth}`
}

export function Section01TopBar() {
  const tomorrowDate = getTomorrowDateInSaoPaulo()

  return (
    <div className="sticky top-0 z-[1000] bg-vita-blue py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
      <div className={`${container} text-center`}>
        <p className="text-sm font-semibold leading-snug text-white md:text-base">
          {`⏰ SÓ ATÉ AMANHÃ (${tomorrowDate}): Ganhe consulta gratuita e até 45% de desconto nos aparelhos auditivos. `}
          <button
            type="button"
            onClick={openWhatsAppLeadPopup}
            className="underline decoration-white/75 underline-offset-2 transition hover:text-vita-orange"
          >
            Agende agora!
          </button>
        </p>
      </div>
    </div>
  )
}
