import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Object3D[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(1, 1, 1, 0);
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      1000,
    );
    camera.position.z = 100;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      precision: "lowp",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const light = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(light);

    const directionLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionLight.position.set(100, 100, 100);
    scene.add(directionLight);

    const particles: THREE.Object3D[] = [];
    const particleCount = width < 640 ? 10 : width < 1024 ? 16 : 25;
    const colors = [0xf97316, 0x22c55e, 0x3b82f6, 0xfbbf24, 0xef4444, 0x06b6d4];

    for (let i = 0; i < particleCount; i++) {
      const sizeScale = width < 640 ? 0.55 : width < 1024 ? 0.75 : 1;
      const size = (Math.random() * 60 + 30) * sizeScale;
      const color = colors[Math.floor(Math.random() * colors.length)];
      let geometry: THREE.BufferGeometry;

      const shapeType = Math.floor(Math.random() * 3);
      if (shapeType === 0) {
        geometry = new THREE.BoxGeometry(size, size, size);
      } else if (shapeType === 1) {
        geometry = new THREE.IcosahedronGeometry(size / 2, 3);
      } else {
        geometry = new THREE.OctahedronGeometry(size / 2, 2);
      }

      const material = new THREE.MeshPhongMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.2,
        wireframe: false,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * width * 1.2;
      mesh.position.y = (Math.random() - 0.5) * height * 1.2;
      mesh.position.z = Math.random() * 200 - 100;

      mesh.rotation.x = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;

      (mesh as any).velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.3,
      };
      (mesh as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      };
      (mesh as any).baseOpacity = Math.random() * 0.3 + 0.2;

      scene.add(mesh);
      particles.push(mesh);
    }

    particlesRef.current = particles;

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      if (cameraRef.current) {
        cameraRef.current.left = newWidth / -2;
        cameraRef.current.right = newWidth / 2;
        cameraRef.current.top = newHeight / 2;
        cameraRef.current.bottom = newHeight / -2;
        cameraRef.current.updateProjectionMatrix();
      }

      if (rendererRef.current) {
        rendererRef.current.setSize(newWidth, newHeight);
      }
    };

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      particles.forEach((particle) => {
        const mesh = particle as any;
        mesh.position.x += mesh.velocity.x;
        mesh.position.y += mesh.velocity.y;
        mesh.position.z += mesh.velocity.z;

        mesh.rotation.x += mesh.rotationSpeed.x;
        mesh.rotation.y += mesh.rotationSpeed.y;
        mesh.rotation.z += mesh.rotationSpeed.z;

        const boundaryX = width * 0.7;
        const boundaryY = height * 0.7;
        const boundaryZ = 200;

        if (mesh.position.x > boundaryX)
          mesh.velocity.x = -Math.abs(mesh.velocity.x);
        if (mesh.position.x < -boundaryX)
          mesh.velocity.x = Math.abs(mesh.velocity.x);
        if (mesh.position.y > boundaryY)
          mesh.velocity.y = -Math.abs(mesh.velocity.y);
        if (mesh.position.y < -boundaryY)
          mesh.velocity.y = Math.abs(mesh.velocity.y);
        if (mesh.position.z > boundaryZ)
          mesh.velocity.z = -Math.abs(mesh.velocity.z);
        if (mesh.position.z < -boundaryZ)
          mesh.velocity.z = Math.abs(mesh.velocity.z);

        if (mesh.material && mesh.material.opacity !== undefined) {
          const distance = Math.sqrt(
            mesh.position.x ** 2 + mesh.position.y ** 2,
          );
          const distanceRatio = Math.min(
            distance / (Math.max(width, height) * 0.5),
            1,
          );
          mesh.material.opacity = mesh.baseOpacity * (1 - distanceRatio * 0.5);
        }
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      particles.forEach((particle) => {
        if (particle instanceof THREE.Mesh) {
          particle.geometry.dispose();
          if (Array.isArray(particle.material)) {
            particle.material.forEach((mat) => mat.dispose());
          } else if (particle.material) {
            particle.material.dispose();
          }
        }
      });
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
