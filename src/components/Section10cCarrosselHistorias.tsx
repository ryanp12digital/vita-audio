import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { container } from "../vita-tw"
import { publicUrl } from "../utils/publicUrl"

const GAP_PX = 16

const CARROSSEL_FILES = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0")
  return `images/CARROSSEL/img feed carrol ${n}.png`
})

function usePerView() {
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w >= 1024) setPerView(3)
      else if (w >= 640) setPerView(2)
      else setPerView(1)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return perView
}

export function Section10cCarrosselHistorias() {
  const slides = useMemo(
    () =>
      CARROSSEL_FILES.map((path, index) => ({
        src: publicUrl(path),
        alt: `Registro do dia a dia ${index + 1} — Vita Audio`,
      })),
    [],
  )

  const perView = usePerView()
  const viewportRef = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(0)
  const [start, setStart] = useState(0)

  const maxStart = Math.max(0, slides.length - perView)

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const compute = () => {
      const w = el.getBoundingClientRect().width
      const sw = (w - (perView - 1) * GAP_PX) / perView
      setSlideWidth(Math.max(0, sw))
    }

    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [perView])

  useEffect(() => {
    setStart((s) => Math.min(s, maxStart))
  }, [maxStart])

  const translateX = slideWidth > 0 ? -start * (slideWidth + GAP_PX) : 0

  const goPrev = useCallback(() => {
    setStart((s) => (s <= 0 ? maxStart : s - 1))
  }, [maxStart])

  const goNext = useCallback(() => {
    setStart((s) => (s >= maxStart ? 0 : s + 1))
  }, [maxStart])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const id = window.setInterval(() => {
      setStart((s) => (s >= maxStart ? 0 : s + 1))
    }, 4500)

    return () => window.clearInterval(id)
  }, [maxStart])

  return (
    <section
      className="bg-[#f7f6f3] py-14 md:py-[72px]"
      aria-roledescription="carousel"
      aria-label="Casos e bastidores — Vita Audio"
    >
      <div className={container}>
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="font-vita-serif text-[26px] font-semibold tracking-tight text-vita-blue md:text-[30px]">
            Casos e bastidores
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-vita-text-mid md:text-[15px]">
            Confira alguns registros do dia a dia na Vita Audio.
          </p>
        </header>

        <div className="relative mx-auto max-w-[1100px] px-1 sm:px-0">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-vita-blue shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition hover:bg-vita-gray-bg sm:left-1 md:size-11 md:-left-2 lg:-left-4"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="size-5 md:size-6" strokeWidth={2} aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-vita-blue shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition hover:bg-vita-gray-bg sm:right-1 md:size-11 md:-right-2 lg:-right-4"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="size-5 md:size-6" strokeWidth={2} aria-hidden />
          </button>

          <div
            ref={viewportRef}
            className="overflow-hidden rounded-2xl px-2 sm:px-10 md:px-12"
          >
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{
                gap: GAP_PX,
                transform: `translateX(${translateX}px)`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.src}
                  className="shrink-0"
                  style={{ width: slideWidth > 0 ? slideWidth : "100%" }}
                >
                  <div className="overflow-hidden rounded-2xl border border-vita-blue/10 bg-white shadow-[0_6px_28px_rgba(0,109,196,0.08)]">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-3/4 w-full object-cover sm:aspect-4/5 md:h-[min(420px,52vh)] md:aspect-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-1.5"
            role="tablist"
            aria-label="Posição no carrossel"
          >
            {Array.from({ length: maxStart + 1 }).map((_, page) => (
              <button
                key={page}
                type="button"
                role="tab"
                aria-selected={start === page}
                aria-label={`Grupo ${page + 1} de ${maxStart + 1}`}
                className={`size-2 rounded-full transition-all md:size-2.5 ${
                  start === page
                    ? "bg-vita-blue"
                    : "bg-vita-blue/20 hover:bg-vita-blue/40"
                }`}
                onClick={() => setStart(page)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
