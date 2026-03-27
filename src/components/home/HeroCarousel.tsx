'use client';

import {
  useState,
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
} from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/create.png',
    liveCount: '1.8k',
    title: 'New Fashion Collect',
    brand: 'Sarah Styl',
    cta: 'WATCH NOW',
  },
  {
    image: '/images/signin.png',
    liveCount: '2.4k',
    title: 'New Fashion Collection Launch',
    brand: 'UrbanTech',
    cta: 'WATCH NOW',
  },
  {
    image: '/images/logo.png',
    liveCount: '3.1k',
    title: 'Tech Gadgets Showcase',
    brand: 'TechFlow',
    cta: 'WATCH NOW',
  },
];

const DESKTOP_HEIGHT = 388;
const MOBILE_SLIDE_RATIO = 0.88;
const DESKTOP_SLIDE_RATIO = 0.7;
const SLIDE_GAP_PX = 16;
const INITIAL_SLIDE_INDEX = slides.length > 1 ? 1 : 0;

function SlideFrame({
  slide,
  index,
  current,
  priority,
}: {
  slide: (typeof slides)[0];
  index: number;
  current: number;
  priority?: boolean;
}) {
  return (
    <div
      className="relative h-full w-full min-h-0 overflow-hidden rounded-xl"
      aria-hidden={index !== current}
    >
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1000px"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4 pl-6 sm:p-6 sm:pl-10 md:pl-14 lg:p-10 lg:pl-20">
        <div className="inline-flex w-max items-center gap-3 text-white">
          <span className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-3 py-1.5 text-xs font-semibold sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
            LIVE
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold sm:text-base">
            <Image
              src="/images/eye.png"
              alt="Watching"
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
            <span>{slide.liveCount} Watching</span>
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="max-w-xl text-[20px] font-semibold leading-tight text-white sm:text-[26px] lg:text-[34px]">
            <span className="block">
              {slide.title.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="block">
              {slide.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2.5">
              <Image
                src="/images/urban.png"
                alt={slide.brand}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="text-lg font-semibold text-white">{slide.brand}</span>
            </span>
            <button
              type="button"
              className="rounded-lg bg-red-600 px-4 py-2.5 text-xs font-medium text-white transition hover:opacity-95 sm:text-sm"
            >
              {slide.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(INITIAL_SLIDE_INDEX);
  const [mobileWidth, setMobileWidth] = useState(0);
  const [desktopWidth, setDesktopWidth] = useState(0);
  const n = slides.length;
  const isFirstSlide = current === 0;
  const isLastSlide = current === n - 1;
  const mobileViewportRef = useRef<HTMLDivElement>(null);
  const desktopViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(INITIAL_SLIDE_INDEX);
  }, []);

  useEffect(() => {
    const mobileElement = mobileViewportRef.current;
    const desktopElement = desktopViewportRef.current;
    if (!mobileElement || !desktopElement) return;

    const observer = new ResizeObserver(() => {
      setMobileWidth(mobileElement.clientWidth);
      setDesktopWidth(desktopElement.clientWidth);
    });

    observer.observe(mobileElement);
    observer.observe(desktopElement);

    setMobileWidth(mobileElement.clientWidth);
    setDesktopWidth(desktopElement.clientWidth);

    return () => observer.disconnect();
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev === n - 1 ? n - 1 : prev + 1));
  }, [n]);

  const heightStyle = {
    height: `clamp(220px, 38vw, ${DESKTOP_HEIGHT}px)`,
  };

  const createTrackStyle = (containerWidth: number, slideRatio: number) => {
    if (!containerWidth) {
      return {
        trackStyle: {
          gap: `${SLIDE_GAP_PX}px`,
          transform: 'translateX(0px)',
        } as CSSProperties,
        slideStyle: { width: '100%' } as CSSProperties,
        arrowInset: '12px',
      };
    }

    const slideWidth = containerWidth * slideRatio;
    const step = slideWidth + SLIDE_GAP_PX;
    const centerOffset = (containerWidth - slideWidth) / 2;
    const rawTranslate = current * step - centerOffset;
    const maxTranslate = Math.max(0, step * (n - 1));
    const translate = Math.min(maxTranslate, Math.max(0, rawTranslate));

    return {
      trackStyle: {
        gap: `${SLIDE_GAP_PX}px`,
        transform: `translateX(-${translate}px)`,
      } as CSSProperties,
      slideStyle: { width: `${slideWidth}px` } as CSSProperties,
      arrowInset: `${Math.max(8, centerOffset + 10)}px`,
    };
  };

  const mobileLayout = createTrackStyle(mobileWidth, MOBILE_SLIDE_RATIO);
  const desktopLayout = createTrackStyle(desktopWidth, DESKTOP_SLIDE_RATIO);

  return (
    <section aria-label="Hero carousel" className="w-full shrink-0">
      {/* Mobile: centered active slide with side peeks */}
      <div className="relative md:hidden">
        <div
          ref={mobileViewportRef}
          className="relative overflow-hidden "
          style={heightStyle}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={mobileLayout.trackStyle}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-full shrink-0"
                style={mobileLayout.slideStyle}
              >
                <SlideFrame
                  slide={slide}
                  index={index}
                  current={current}
                  priority={index === INITIAL_SLIDE_INDEX}
                />
              </div>
            ))}
          </div>
          <NavArrows
            onPrev={goPrev}
            onNext={goNext}
            disablePrev={isFirstSlide}
            disableNext={isLastSlide}
            leftInset={mobileLayout.arrowInset}
            rightInset={mobileLayout.arrowInset}
          />
        </div>
        <Dots count={n} current={current} setCurrent={setCurrent} />
      </div>

      {/* Desktop: centered active slide with side peeks */}
      <div className="relative hidden w-full md:block">
        <div
          ref={desktopViewportRef}
          className="relative overflow-hidden"
          style={heightStyle}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={desktopLayout.trackStyle}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-full shrink-0"
                style={desktopLayout.slideStyle}
                aria-hidden={index !== current}
              >
                <SlideFrame
                  slide={slide}
                  index={index}
                  current={current}
                  priority={index === INITIAL_SLIDE_INDEX}
                />
              </div>
            ))}
          </div>
          <NavArrows
            onPrev={goPrev}
            onNext={goNext}
            disablePrev={isFirstSlide}
            disableNext={isLastSlide}
            leftInset={desktopLayout.arrowInset}
            rightInset={desktopLayout.arrowInset}
          />
        </div>
        <Dots count={n} current={current} setCurrent={setCurrent} />
      </div>
    </section>
  );
}

function NavArrows({
  onPrev,
  onNext,
  disablePrev = false,
  disableNext = false,
  leftInset = '12px',
  rightInset = '12px',
}: {
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
  leftInset?: string;
  rightInset?: string;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        disabled={disablePrev}
        className=" absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30 sm:h-7 sm:w-7"
        style={{ left: '190px !important' }}
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-4 text-gray-500" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        disabled={disableNext}
        className="absolute top-1/2  z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30 sm:h-7 sm:w-7"
        style={{ right: '190px !important' }}
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-4 text-gray-500" />
      </button>
    </>
  );
}

function Dots({
  count,
  current,
  setCurrent,
}: {
  count: number;
  current: number;
  setCurrent: (i: number) => void;
}) {
  return (
    <div className="mt-4 flex justify-center gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setCurrent(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === current}
          className={`h-2 w-2 rounded-full transition ${i === current ? 'bg-black' : 'bg-black/40 hover:bg-black/60'
            }`}
        />
      ))}
    </div>
  );
}
