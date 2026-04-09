/** Links e contactos centralizados */
export const WHATSAPP_URL = "https://wa.me/message/5V24WTVNCMCXE1"
export const WHATSAPP_CHAT_URL = "https://wa.me/5519998806076"
export const WHATSAPP_FOOTER_URL = `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de atendimento.",
)}`
export const PHONE_HREF = "tel:+551999880-6076"
export const PHONE_DISPLAY = "(19) 99017-7608 (19) 3894-6349"
export const CALL_PHONE_DISPLAY = "(19) 3894-6349"
export const CALL_PHONE_HREF = "tel:+551938946349"
export const WHATSAPP_DISPLAY = "(19) 99017-7608"
export const CONTACT_EMAIL = "contato@vitaaudio.com.br"
export const ADDRESS_LINE =
  "R. Tuiuti, 460 - Cidade Nova I, Indaiatuba - SP, 13339-010"

/** Linhas do endereço para exibição no rodapé (evita quebras feias no meio). */
export const ADDRESS_LINES = [
  "R. Tuiuti, 460 - Cidade Nova I",
  "Indaiatuba - SP, 13339-010",
] as const

/** Iframe do Google Maps (embed por endereço). Se o mapa não carregar, substitua pelo código “Incorporar mapa” da ficha do Google Meu Negócio. */
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  "R. Tuiuti, 460 - Cidade Nova I, Indaiatuba - SP, 13339-010",
)}&output=embed&z=16&hl=pt`
export const BUSINESS_HOURS = [
  { day: "segunda-feira", hours: "08:30–18:00" },
  { day: "terça-feira", hours: "08:30–18:00" },
  { day: "quarta-feira", hours: "08:30–18:00" },
  { day: "quinta-feira", hours: "08:30–18:00" },
  { day: "sexta-feira", hours: "08:30–18:00" },
  { day: "sábado", hours: "08:00–12:00" },
  { day: "domingo", hours: "Fechado" },
] as const

export const INSTAGRAM_URL = "https://www.instagram.com/vitaaudiobrasil/"
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61558805426979"

/** Crédito no rodapé — agência / desenvolvimento. */
export const P12_DIGITAL_SITE_URL = "https://sites.p12digital.com.br/"

/** Página de busca / ficha Google — use para “Ver todas as avaliações”. Atualize com o link direto do Maps se preferir. */
export const GOOGLE_BUSINESS_REVIEWS_URL =
  "https://www.google.com/search?q=vita+audio&oq=vita+au&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAuGK8BGMcBGIAEMgYIAhBFGDkyCAgDEEUYJxg7MgkIBBBFGDsYgAQyBwgFEAAYgAQyBggGEEUYPDIGCAcQRRg90gEIMTE3NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"

/** Resumo exibido no bloco — ajuste conforme o Google Meu Negócio. */
export const GOOGLE_REVIEWS_RATING = "5.0"
export const GOOGLE_REVIEWS_COUNT_LABEL = "72 avaliações"
