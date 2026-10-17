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
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 240;

    // Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      // Fallback silently if WebGL is disabled or unsupported
      return;
    }

    // Particle nodes representing research network
    const particleCount = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    const spread = 220;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * (spread * 0.7);
      positions[i * 3 + 2] = (Math.random() - 0.5) * (spread * 0.5);

      velocities.push({
        x: (Math.random() - 0.5) * 0.22,
        y: (Math.random() - 0.5) * 0.22,
        z: (Math.random() - 0.5) * 0.15,
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material for nodes
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 3.5,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Connecting lines
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

    // Mouse tracking for parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (event.clientX - windowHalfX) * 0.04;
      targetY = (event.clientY - windowHalfY) * 0.04;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

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
    const maxDistance = 60;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      particles.rotation.y += 0.0008;
      lines.rotation.y += 0.0008;

      camera.position.x = mouseX;
      camera.position.y = -mouseY;
      camera.lookAt(scene.position);

      const pos = geometry.attributes.position.array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += velocities[i].x;
        pos[i3 + 1] += velocities[i].y;
        pos[i3 + 2] += velocities[i].z;

        // Bounce inside boundary
        if (Math.abs(pos[i3]) > spread / 2) velocities[i].x *= -1;
        if (Math.abs(pos[i3 + 1]) > (spread * 0.7) / 2) velocities[i].y *= -1;
        if (Math.abs(pos[i3 + 2]) > (spread * 0.5) / 2) velocities[i].z *= -1;

        // Connect nearby nodes
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = pos[i3] - pos[j3];
          const dy = pos[i3 + 1] - pos[j3 + 1];
          const dz = pos[i3 + 2] - pos[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
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
      window.removeEventListener('resize', handleResize);

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
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/40 via-transparent to-[#050B14] pointer-events-none" />
    </div>
  );
}
