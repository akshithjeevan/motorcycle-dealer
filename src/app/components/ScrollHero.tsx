'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const totalFrames = 166;
const frameUrl = (index: number) =>
  `/images/hero-section/ezgif-frame-${String(index).padStart(3, '0')}.png`;

const scenes = [
  {
    id: 1,
    headline: 'Precision Engineering',
    subtext: 'Craftsmanship that keeps every ride performing at its best.',
    start: 0.0,
    end: 0.15,
  },
  {
    id: 2,
    headline: 'Certified Technicians',
    subtext: 'Experienced specialists for premium motorcycles.',
    start: 0.18,
    end: 0.33,
  },
  {
    id: 3,
    headline: 'Advanced Diagnostics',
    subtext: 'Dealer-grade tools for accurate troubleshooting.',
    start: 0.36,
    end: 0.51,
  },
  {
    id: 4,
    headline: 'Performance Tuning',
    subtext: 'Unlock smoother, stronger, and more responsive performance.',
    start: 0.54,
    end: 0.69,
  },
  {
    id: 5,
    headline: 'Premium Detailing',
    subtext: 'Restore showroom-quality finishes.',
    start: 0.72,
    end: 0.87,
  },
  {
    id: 6,
    headline: 'Ride With Confidence',
    subtext: 'Every motorcycle leaves after a comprehensive quality inspection.',
    start: 0.90,
    end: 1.0,
  },
];

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Track scroll progress of the entire sticky container height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth scroll progression using a spring
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.5,
  });

  // Image scaling transform
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  // Preload frames
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loadedCount++;
      setLoadingProgress(Math.floor((loadedCount / totalFrames) * 100));
      if (loadedCount === totalFrames) {
        setImages(loadedImages);
        setImagesLoaded(true);
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = frameUrl(i);
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Continue even if a frame fails
      loadedImages.push(img);
    }
  }, []);

  // Draw frame on canvas based on scroll position
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const renderFrame = (progress: number) => {
      // Calculate current frame index (0 to totalFrames - 1)
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(progress * (totalFrames - 1)))
      );

      const image = images[frameIndex];
      if (!image) return;

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Handle object-fit cover math for canvas
      const imgWidth = image.width;
      const imgHeight = image.height;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      } else {
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Subscribed rendering function bound to the smooth physics spring
    const unsubscribe = smoothProgress.on('change', (latest) => {
      renderFrame(latest);
    });

    // Handle initial sizing and draw first frame
    const handleResize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      renderFrame(smoothProgress.get());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesLoaded, images, smoothProgress]);

  // Transform for buttons fading out
  const buttonOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);
  const buttonPointerEvents = useTransform(smoothProgress, [0, 0.05], ['auto', 'none'] as any);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      {/* Sticky Screen Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black select-none">
        {/* Canvas Frame Renderer */}
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
          <canvas ref={canvasRef} className="w-full h-full object-cover block" />
        </motion.div>

        {/* Elegant Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6))] pointer-events-none" />

        {/* Cinematic Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imagesLoaded ? 1 : 0 }}
          style={{ opacity: useTransform(smoothProgress, [0, 0.95], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-sans font-semibold">
            Scroll to Explore
          </span>
          <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>

        {/* Preloading Loader Screen */}
        {!imagesLoaded && (
          <div className="absolute inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-6">
            <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center bg-white/5 animate-spin">
              <span className="text-white font-heading font-bold text-xs tracking-wider">A</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                AURA Motorsport
              </span>
              <span className="text-[10px] text-white/40 font-mono">
                Preloading Experience {loadingProgress}%
              </span>
            </div>
          </div>
        )}

        {/* Animated Storytelling Text Scenes */}
        <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-center text-center z-20">
          {scenes.map((scene) => {
            // Calculate opacity and translate-y transitions per scene based on spring progress
            const opacity = useTransform(
              smoothProgress,
              [scene.start - 0.03, scene.start, scene.end, scene.end + 0.03],
              [0, 1, 1, 0]
            );

            const y = useTransform(
              smoothProgress,
              [scene.start - 0.03, scene.start, scene.end, scene.end + 0.03],
              [25, 0, 0, -25]
            );

            const blurVal = useTransform(
              smoothProgress,
              [scene.start - 0.03, scene.start, scene.end, scene.end + 0.03],
              ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)']
            );

            return (
              <motion.div
                key={scene.id}
                style={{ opacity, y, filter: blurVal }}
                className="absolute max-w-3xl flex flex-col items-center space-y-6"
              >
                {scene.id === 1 && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest font-sans">
                      Elite Engineering Workshop
                    </span>
                  </div>
                )}
                <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight uppercase">
                  {scene.headline}
                </h2>
                <p className="font-sans text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                  {scene.subtext}
                </p>

                {/* CTA Buttons in the first scene */}
                {scene.id === 1 && (
                  <motion.div
                    style={{ opacity: buttonOpacity, pointerEvents: buttonPointerEvents as any }}
                    className="flex flex-col sm:flex-row gap-4 pt-6"
                  >
                    <a
                      href="#booking"
                      className="inline-flex items-center justify-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-accent/20"
                    >
                      Book Service
                    </a>
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:bg-white/5"
                    >
                      Explore Services <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
