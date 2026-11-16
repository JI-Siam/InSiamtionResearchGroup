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

    // Optimized particle count: 42 nodes
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

    const isCurrentDark = typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true;

    // Particle Material
    const particleMaterial = new THREE.PointsMaterial({
      color: isCurrentDark ? 0x00e5ff : 0x0284c7,
      size: 3.2,
      transparent: true,
      opacity: isCurrentDark ? 0.8 : 0.6,
      blending: isCurrentDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Connecting Lines Material
    const lineMaterial = new THREE.LineBasicMaterial({
      color: isCurrentDark ? 0x2563eb : 0x64748b,
      transparent: true,
      opacity: isCurrentDark ? 0.22 : 0.25,
      blending: isCurrentDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const maxConnections = particleCount * particleCount;
    const linePositions = new Float32Array(maxConnections * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Update material colors if theme changes
    const themeObserver = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      particleMaterial.color.setHex(isDark ? 0x00e5ff : 0x0284c7);
      particleMaterial.opacity = isDark ? 0.8 : 0.6;
      particleMaterial.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
      lineMaterial.color.setHex(isDark ? 0x2563eb : 0x64748b);
      lineMaterial.opacity = isDark ? 0.22 : 0.25;
      lineMaterial.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
      particleMaterial.needsUpdate = true;
      lineMaterial.needsUpdate = true;
    });

    if (typeof document !== 'undefined') {
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    }

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

      if (!isVisible) return;

      // Mouse follow
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      particles.rotation.y += 0.0006;
      lines.rotation.y += 0.0006;

      camera.position.x = mouseX;
      camera.position.y = -mouseY;
      camera.lookAt(scene.position);

      if (isScrolling) {
        renderer.render(scene, camera);
        return;
      }

      // Update particle positions
      const pArr = geometry.attributes.position.array;
      const boundX = spread * 0.55;
      const boundY = spread * 0.35;
      const boundZ = spread * 0.25;

      for (let i = 0; i < particleCount; i++) {
        pArr[i * 3] += velocities[i].x;
        pArr[i * 3 + 1] += velocities[i].y;
        pArr[i * 3 + 2] += velocities[i].z;

        if (Math.abs(pArr[i * 3]) > boundX) velocities[i].x *= -1;
        if (Math.abs(pArr[i * 3 + 1]) > boundY) velocities[i].y *= -1;
        if (Math.abs(pArr[i * 3 + 2]) > boundZ) velocities[i].z *= -1;
      }
      geometry.attributes.position.needsUpdate = true;

      // Update lines between nearby particles
      let lineIndex = 0;
      const lArr = lineGeometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const x1 = pArr[i * 3];
        const y1 = pArr[i * 3 + 1];
        const z1 = pArr[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const dx = x1 - pArr[j * 3];
          const dy = y1 - pArr[j * 3 + 1];
          const dz = z1 - pArr[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistance * maxDistance) {
            lArr[lineIndex++] = x1;
            lArr[lineIndex++] = y1;
            lArr[lineIndex++] = z1;

            lArr[lineIndex++] = pArr[j * 3];
            lArr[lineIndex++] = pArr[j * 3 + 1];
            lArr[lineIndex++] = pArr[j * 3 + 2];
          }
        }
      }

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
      themeObserver.disconnect();
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
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-deep)]/40 via-transparent to-[var(--bg-deep)] pointer-events-none transition-colors duration-200" />
    </div>
  );
}
