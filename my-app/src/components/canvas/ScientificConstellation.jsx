'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ScientificConstellation() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let isVisible = true;
    let isScrolling = false;
    let scrollTimeout = null;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 230;

    // High performance renderer with clamped pixel ratio to prevent GPU fill-rate throttling
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Optimized particle count: 42 nodes (drastically reduces distance calculations while keeping density)
    const particleCount = 42;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    const spread = 200;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * (spread * 0.65);
      positions[i * 3 + 2] = (Math.random() - 0.5) * (spread * 0.4);

      velocities.push({
        x: (Math.random() - 0.5) * 0.16,
        y: (Math.random() - 0.5) * 0.16,
        z: (Math.random() - 0.5) * 0.1,
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 3.2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Connecting Lines Material
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });

    const maxConnections = particleCount * particleCount;
    const linePositions = new Float32Array(maxConnections * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse Tracking for Parallax (smoothed)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (event.clientX - windowHalfX) * 0.025;
      targetY = (event.clientY - windowHalfY) * 0.025;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause heavy buffer updates during active scroll burst to guarantee 60-120fps scroll smoothness
    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 90);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Pause rendering entirely when Hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    const maxDistance = 62;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip frame if Hero is not in viewport
      if (!isVisible) return;

      // Mouse follow
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      particles.rotation.y += 0.0006;
      lines.rotation.y += 0.0006;

      camera.position.x = mouseX;
      camera.position.y = -mouseY;
      camera.lookAt(scene.position);

      // During active scroll burst, skip the O(N^2) buffer recomputation to preserve 120Hz/60Hz compositor
      if (isScrolling) {
        renderer.render(scene, camera);
        return;
      }

      const pos = geometry.attributes.position.array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += velocities[i].x;
        pos[i3 + 1] += velocities[i].y;
        pos[i3 + 2] += velocities[i].z;

        if (Math.abs(pos[i3]) > spread / 2) velocities[i].x *= -1;
        if (Math.abs(pos[i3 + 1]) > (spread * 0.65) / 2) velocities[i].y *= -1;
        if (Math.abs(pos[i3 + 2]) > (spread * 0.4) / 2) velocities[i].z *= -1;

        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = pos[i3] - pos[j3];
          const dy = pos[i3 + 1] - pos[j3 + 1];
          const dz = pos[i3 + 2] - pos[j3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistance * maxDistance) {
            linePositions[lineIndex++] = pos[i3];
            linePositions[lineIndex++] = pos[i3 + 1];
            linePositions[lineIndex++] = pos[i3 + 2];

            linePositions[lineIndex++] = pos[j3];
            linePositions[lineIndex++] = pos[j3 + 1];
            linePositions[lineIndex++] = pos[j3 + 2];
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (scrollTimeout) clearTimeout(scrollTimeout);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/40 via-transparent to-[#050B14] pointer-events-none" />
    </div>
  );
}
