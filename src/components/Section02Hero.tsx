import { btnCta, btnIco, container } from "../vita-tw"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

const heroGradient = `linear-gradient(
  to right,
  rgba(255, 255, 255, 0.97) 0%,
  rgba(255, 255, 255, 0.94) 22%,
  rgba(248, 250, 252, 0.88) 40%,
  rgba(239, 244, 249, 0.65) 58%,
  rgba(239, 244, 249, 0.32) 76%,
  rgba(239, 244, 249, 0.1) 92%,
  rgba(239, 244, 249, 0.03) 100%
)`

const heroBackgroundMobile = `${heroGradient}, url("/images/hero-section-audi-mobile-v1.webp")`
const heroBackgroundDesktop = `${heroGradient}, url("/images/hero-section-audi-v1.webp")`

export function Section02Hero() {
  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#eff4f9] py-12 pb-16">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-no-repeat bg-position-[58%_center] md:hidden"
        style={{ backgroundImage: heroBackgroundMobile }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden bg-cover bg-no-repeat md:block md:bg-position-[right_center] lg:bg-center"
        style={{ backgroundImage: heroBackgroundDesktop }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-white/90 via-white/72 to-white/45 md:hidden"
        aria-hidden
      />
      <div className={`relative z-10 ${container} grid w-full grid-cols-1 items-center`}>
        <div className="max-w-[560px] max-md:rounded-2xl max-md:bg-white/55 max-md:p-5 max-md:backdrop-blur-[2px]">
          <h1 className="mb-4 text-[28px] font-semibold leading-snug text-[#003060] max-[600px]:text-[28px] md:text-[32px] md:text-[#004080] ">
            Está com Dificuldade para Ouvir ou Zumbido no Ouvido?
          </h1>
          <p className="mb-7 text-[18px] font-medium leading-relaxed text-neutral-900 max-md:text-neutral-950 md:text-neutral-800">
            Agende um teste auditivo e descubra a melhor solução para sua audição.
          </p>
          <button type="button" onClick={openWhatsAppLeadPopup} className={btnCta}>
            <WhatsAppIcon className={btnIco} size={18} />
            <span>AGENDE UM TESTE GRÁTIS</span>
          </button>
        </div>
      </div>
    </section>
  )
}
