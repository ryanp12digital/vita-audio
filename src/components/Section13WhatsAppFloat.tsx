import { FormEvent, useEffect, useState } from "react"
import { WHATSAPP_CHAT_URL } from "../constants/site"
import {
  WHATSAPP_LEAD_FORM_ID,
  WHATSAPP_LEAD_POPUP_EVENT,
  openWhatsAppLeadPopup,
} from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)

  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function Section13WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [nome, setNome] = useState("")
  const [whats, setWhats] = useState("")
  const [consent, setConsent] = useState(true)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener(WHATSAPP_LEAD_POPUP_EVENT, handleOpen)
    return () => window.removeEventListener(WHATSAPP_LEAD_POPUP_EVENT, handleOpen)
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!consent) return

    const digits = whats.replace(/\D/g, "")
    const mensagem = [
      "Olá! Vim do site e quero atendimento.",
      `Nome: ${nome}`,
      `DDD + WhatsApp: ${digits || whats}`,
    ].join("\n")

    const url = `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={openWhatsAppLeadPopup}
        className="animate-vita-wa-pulse fixed bottom-7 right-7 z-999 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        title="Fale pelo WhatsApp"
        aria-label="Abrir formulário de contato no WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-1001 flex items-center justify-center bg-[#001f3d]/45 p-4 backdrop-blur-[1px]">
          <div className="w-full max-w-md rounded-2xl border border-[#d9e4f2] bg-white p-6 shadow-[0_18px_60px_rgba(0,40,80,0.2)]">
            <h3 className="text-[22px] font-semibold text-vita-blue">
              Fale com a Vita Audio
            </h3>
            <p className="mt-1 mb-6 text-sm leading-relaxed text-vita-text-mid">
              Preencha os dados para continuar no WhatsApp.
            </p>
            <form
              id={WHATSAPP_LEAD_FORM_ID}
              data-form-id={WHATSAPP_LEAD_FORM_ID}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <label className="block space-y-1.5">
                <span className="text-xs font-semibold tracking-wide text-vita-blue/80">
                  Nome
                </span>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full rounded-xl border border-[#d3dfec] bg-[#fbfdff] px-3.5 py-2.5 text-sm text-vita-text outline-none transition placeholder:text-neutral-400 focus:border-vita-blue focus:bg-white"
                />
              </label>

              <label className="block space-y-1.5">
                <span className="text-xs font-semibold tracking-wide text-vita-blue/80">
                  DDD + WhatsApp
                </span>
                <input
                  type="tel"
                  required
                  value={whats}
                  onChange={(e) => setWhats(formatPhone(e.target.value))}
                  placeholder="(19) 99880-6076"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={15}
                  className="w-full rounded-xl border border-[#d3dfec] bg-[#fbfdff] px-3.5 py-2.5 text-sm text-vita-text outline-none transition placeholder:text-neutral-400 focus:border-vita-blue focus:bg-white"
                />
              </label>

              <label className="flex items-start gap-2.5 rounded-lg bg-[#f4f8fc] p-3 text-xs leading-relaxed text-vita-text-mid">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 size-4 accent-vita-blue"
                  required
                />
                <span>
                  Autorizo o uso dos meus dados para contato, conforme os termos de
                  privacidade.
                </span>
              </label>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-1/2 rounded-xl border border-[#cfdbea] px-3 py-2.5 text-sm font-medium text-vita-text-mid transition hover:bg-[#f6f9fc]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-xl bg-vita-blue px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-vita-blue-dark disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={!consent}
                >
                  Ir para WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}
