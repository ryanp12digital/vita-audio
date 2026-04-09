import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import {
  ADDRESS_LINES,
  BUSINESS_HOURS,
  CALL_PHONE_DISPLAY,
  CALL_PHONE_HREF,
  CONTACT_EMAIL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_REVIEWS_URL,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  P12_DIGITAL_SITE_URL,
  WHATSAPP_FOOTER_URL,
  WHATSAPP_DISPLAY,
} from "../constants/site"
import { container } from "../vita-tw"
import { WhatsAppIcon } from "./WhatsAppIcon"

const quickLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sintomas", href: "#sintomas" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre nós", href: "#sobre-nos" },
]

export function Section12Footer() {
  return (
    <footer className="bg-vita-blue py-10 text-white">
      <div className={`${container}`}>
        <div className="grid grid-cols-1 gap-5 border-b border-white/20 pb-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/logo.png"
              alt="Vita Audio"
              className="mb-4 h-11 w-auto brightness-0 invert"
            />
            <p className="max-w-[280px] text-sm leading-relaxed text-white/90">
              Soluções completas em reabilitação auditiva para você ouvir melhor em
              todos os momentos do seu dia.
            </p>
          </div>

          <div className="border-t border-white/20 pt-4 md:border-t-0 md:pt-0 md:pl-5 lg:border-l lg:pl-6">
            <h3 className="mb-4 text-base font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-white/90">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-vita-orange">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/20 pt-4 md:pl-5 md:pt-0 lg:min-w-0 lg:border-l lg:border-t-0 lg:pl-6">
            <h3 className="mb-5 text-base font-semibold text-white">Contato</h3>
            <ul className="flex flex-col gap-4 text-sm leading-snug text-white/90">
              <li className="flex gap-3">
                <span className="flex w-5 shrink-0 justify-center pt-0.5">
                  <MapPin className="size-[18px] text-vita-orange" aria-hidden />
                </span>
                <a
                  href={GOOGLE_BUSINESS_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-0 flex-1 transition-colors hover:text-vita-orange"
                >
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="flex w-5 shrink-0 justify-center pt-0.5">
                  <Phone className="size-[18px] text-vita-orange" aria-hidden />
                </span>
                <a
                  href={CALL_PHONE_HREF}
                  className="min-w-0 flex-1 whitespace-nowrap transition-colors hover:text-vita-orange"
                >
                  {CALL_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="flex w-5 shrink-0 justify-center pt-0.5">
                  <MessageCircle className="size-[18px] text-vita-orange" aria-hidden />
                </span>
                <a
                  href={WHATSAPP_FOOTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-0 flex-1 text-left transition-colors hover:text-vita-orange"
                >
                  <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>
                  <span className="text-white/80"> (WhatsApp)</span>
                </a>
              </li>
              <li className="flex gap-3">
                <span className="flex w-5 shrink-0 justify-center pt-0.5">
                  <Mail className="size-[18px] text-vita-orange" aria-hidden />
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="min-w-0 flex-1 wrap-break-word transition-colors hover:text-vita-orange"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-white/20 pt-4 md:border-t-0 md:pl-5 md:pt-0 lg:border-l lg:pl-6">
            <h3 className="mb-3 text-base font-semibold text-white">Horário de funcionamento:</h3>
            <div className="flex items-start gap-2.5">
              <Clock3 className="mt-0.5 size-4 shrink-0 text-vita-orange" aria-hidden />
              <ul className="w-full space-y-1 text-sm text-white/90">
                {BUSINESS_HOURS.map((item) => (
                  <li key={item.day} className="flex items-center justify-between gap-3">
                    <span className="capitalize">{item.day}</span>
                    <span className="shrink-0 whitespace-nowrap">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
          <iframe
            title="Localização Vita Audio — Indaiatuba"
            src={MAP_EMBED_URL}
            className="h-[220px] w-full border-0 md:h-[280px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-6 text-center md:flex-row md:text-left">
          <div className="flex gap-3">
            <a
              href={WHATSAPP_FOOTER_URL}
              target="_blank"
              rel="noreferrer"
              className="flex size-10 items-center justify-center rounded-lg bg-[#25D366] text-white transition-opacity hover:opacity-[0.85]"
              title="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              className="flex size-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#bc1888)] text-white transition-opacity hover:opacity-[0.85]"
              title="Instagram"
              rel="noreferrer"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              className="flex size-10 items-center justify-center rounded-lg bg-[#1877F2] text-white transition-opacity hover:opacity-[0.85]"
              title="Facebook"
              rel="noreferrer"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
          <div>
            <img
              src="/images/pagamentos.png"
              alt="Formas de pagamento aceitas"
              className="h-[42px] w-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-5 border-t border-white/20 pt-4 text-center text-xs text-white/80">
          <p>© 2026 Vita Audio. Todos os direitos reservados.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-white/75">Site desenvolvido por:</span>
            <a
              href={P12_DIGITAL_SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex transition-opacity hover:opacity-90"
              aria-label="P12 Digital — abrir site"
            >
              <img
                src="/images/logotipo_p12.png"
                alt="P12 Digital"
                className="h-7 w-auto object-contain sm:h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
