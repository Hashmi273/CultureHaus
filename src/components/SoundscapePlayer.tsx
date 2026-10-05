"use client";

import React, { useEffect, useRef } from "react";

interface SoundscapePlayerProps {
  isPlaying: boolean;
}

export default function SoundscapePlayer({ isPlaying }: SoundscapePlayerProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContextClass =
          window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        
        if (!AudioContextClass) return;

        if (!audioCtxRef.current) {
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;

          // Master Gain
          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
          masterGain.connect(ctx.destination);
          gainNodeRef.current = masterGain;

          // Oscillator 1: Deep warm warm tonic drone (A1 = 55Hz)
          const osc1 = ctx.createOscillator();
          osc1.type = "sine";
          osc1.frequency.setValueAtTime(55, ctx.currentTime);

          // Oscillator 2: Fifth harmonic gentle overtone (E2 = 82.4Hz)
          const osc2 = ctx.createOscillator();
          osc2.type = "sine";
          osc2.frequency.setValueAtTime(82.4, ctx.currentTime);

          // Soft lowpass filter to create tape warmth
          const filter = ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(140, ctx.currentTime);

          osc1.connect(filter);
          osc2.connect(filter);
          filter.connect(masterGain);

          osc1.start();
          osc2.start();

          osc1Ref.current = osc1;
          osc2Ref.current = osc2;
        }

        if (audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume();
        }

        if (gainNodeRef.current && audioCtxRef.current) {
          gainNodeRef.current.gain.setTargetAtTime(0.07, audioCtxRef.current.currentTime, 1.2);
        }
      } catch (e) {
        console.warn("Web Audio ambient not allowed or unsupported:", e);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0.00001, audioCtxRef.current.currentTime, 0.5);
      }
    }
  }, [isPlaying]);

  return null;
}
