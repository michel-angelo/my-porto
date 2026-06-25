"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SwissGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Scene, Camera, Renderer, and Lighting
    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Light sources for 3D depth shading (Premium studio lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Key Light (main bright white light)
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.95);
    keyLight.position.set(8, 12, 8);
    scene.add(keyLight);

    // Fill Light (soft cool blue light from opposite side)
    const fillLight = new THREE.DirectionalLight(0xe2eeff, 0.45);
    fillLight.position.set(-8, -12, 4);
    scene.add(fillLight);

    // Rim/Back Light (soft warm glow from behind the shapes)
    const rimLight = new THREE.DirectionalLight(0xffebdb, 0.6);
    rimLight.position.set(0, 10, -8);
    scene.add(rimLight);

    // 2. Define colors from the Swiss/Brutalist palette
    const colors = [
      0xF0EAD6, // Cream
      0x111111, // Black
      0xC8392B, // Red
      0xF5C800, // Yellow
    ];

    // 3. Define minimalist geometries
    const geometries = [
      new THREE.BoxGeometry(1.2, 1.2, 1.2), // 0: Cube
      new THREE.CylinderGeometry(0.6, 0.6, 1.4, 16), // 1: Cylinder
      new THREE.ConeGeometry(0.7, 1.4, 4), // 2: Pyramid / Cone
      new THREE.TorusGeometry(0.6, 0.22, 12, 32), // 3: Ring / Torus
      new THREE.TetrahedronGeometry(0.8), // 4: Tetrahedron
      new THREE.OctahedronGeometry(0.8), // 5: Octahedron
    ];

    // 4. Predefined Curated Composition of Shapes (Fixed coordinates, scales, colors, and types)
    // Large corner shapes that bleed out of frame, plus scattered small accents.
    // Center area (x: -5 to 5) is kept clear to frame the title text.
    const predefinedShapes = [
      // --- HUGE CORNER SHAPES (Bleeding off-screen) ---
      {
        geomIndex: 3, // Torus
        colorIndex: 2, // Red
        x: -9.5, y: 4.8, z: -0.5,
        baseScale: 5.5,
        rotSpeed: new THREE.Vector3(0.001, 0.002, 0.0005),
        metalness: 0.1,
        roughness: 0.1,
        flatShading: false
      },
      {
        geomIndex: 0, // Cube
        colorIndex: 1, // Black
        x: 9.8, y: -4.8, z: -0.5,
        baseScale: 5.8,
        rotSpeed: new THREE.Vector3(0.0015, -0.001, 0.0008),
        metalness: 0.8, // Metallic black lacquer
        roughness: 0.15,
        flatShading: true
      },

      // --- MEDIUM SHAPES IN OPPOSITE CORNERS ---
      {
        geomIndex: 1, // Cylinder
        colorIndex: 3, // Yellow
        x: 9.0, y: 4.2, z: -1.5,
        baseScale: 3.8,
        rotSpeed: new THREE.Vector3(-0.001, 0.0015, 0.002),
        metalness: 0.05,
        roughness: 0.2,
        flatShading: false
      },
      {
        geomIndex: 2, // Cone (Pyramid)
        colorIndex: 0, // Cream
        x: -8.8, y: -4.2, z: -1.5,
        baseScale: 4.2,
        rotSpeed: new THREE.Vector3(0.002, -0.001, 0.001),
        metalness: 0.0,
        roughness: 0.25,
        flatShading: true
      },

      // --- SMALL ACCENTS (Floating near edges) ---
      {
        geomIndex: 5, // Octahedron
        colorIndex: 2, // Red
        x: -7.0, y: 0.8, z: -2.5,
        baseScale: 1.2,
        rotSpeed: new THREE.Vector3(-0.003, 0.003, -0.002),
        metalness: 0.3,
        roughness: 0.1,
        flatShading: true
      },
      {
        geomIndex: 3, // Torus
        colorIndex: 0, // Cream
        x: 7.2, y: -0.8, z: -2.5,
        baseScale: 1.4,
        rotSpeed: new THREE.Vector3(0.002, -0.003, 0.003),
        metalness: 0.1,
        roughness: 0.15,
        flatShading: false
      },
      {
        geomIndex: 4, // Tetrahedron
        colorIndex: 1, // Black
        x: -6.5, y: -1.8, z: -3.0,
        baseScale: 1.3,
        rotSpeed: new THREE.Vector3(0.002, 0.002, -0.003),
        metalness: 0.6,
        roughness: 0.1,
        flatShading: true
      },
      {
        geomIndex: 0, // Cube
        colorIndex: 3, // Yellow
        x: 7.5, y: 1.8, z: -3.0,
        baseScale: 1.1,
        rotSpeed: new THREE.Vector3(-0.002, 0.002, 0.002),
        metalness: 0.1,
        roughness: 0.2,
        flatShading: true
      }
    ];

    interface ShapeItem {
      mesh: THREE.Mesh;
      initialPos: THREE.Vector3;
      baseScale: number;
      floatOffset: number;
      floatSpeed: number;
      rotationSpeed: THREE.Vector3;
      scaleVal: number;
      scaleVelocity: number;
    }

    const shapes: ShapeItem[] = [];

    predefinedShapes.forEach((config) => {
      const geom = geometries[config.geomIndex];
      const color = colors[config.colorIndex];

      // Premium lacquered/physical finish
      const material = new THREE.MeshPhysicalMaterial({
        color: color,
        metalness: config.metalness ?? 0.15,
        roughness: config.roughness ?? 0.15,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        flatShading: config.flatShading ?? true,
      });

      const mesh = new THREE.Mesh(geom, material);
      mesh.position.set(config.x, config.y, config.z);

      // Random starting rotation to make it feel natural
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      mesh.scale.set(config.baseScale, config.baseScale, config.baseScale);

      // Wireframe overlay for brutalist print/technical aesthetic
      const wireframeColor = config.colorIndex === 1 ? 0xF0EAD6 : 0x111111;
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: wireframeColor,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      const wireframeMesh = new THREE.Mesh(geom, wireframeMaterial);
      // Slightly larger to prevent rendering collision/z-fighting
      wireframeMesh.scale.set(1.002, 1.002, 1.002);
      mesh.add(wireframeMesh);

      scene.add(mesh);

      shapes.push({
        mesh,
        initialPos: new THREE.Vector3(config.x, config.y, config.z),
        baseScale: config.baseScale,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.4 + Math.random() * 0.4,
        rotationSpeed: config.rotSpeed,
        scaleVal: 1.0,
        scaleVelocity: 0,
      });
    });

    // 5. Mouse Interaction
    const mouse = new THREE.Vector2(0, 0);
    const raycaster = new THREE.Raycaster();

    const handleMouseMove = (event: MouseEvent) => {
      // Map mouse position to normalized device coordinates (-1 to +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleClick = (event: MouseEvent) => {
      // Set raycaster from click coordinates
      const clickMouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      raycaster.setFromCamera(clickMouse, camera);
      
      // Filter list of meshes
      const meshes = shapes.map(s => s.mesh);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        // Find the matched shape object and trigger spring impact
        const hitMesh = intersects[0].object;
        const shapeItem = shapes.find(s => s.mesh === hitMesh);
        if (shapeItem) {
          shapeItem.scaleVelocity = 0.28; // Rapid expand
          shapeItem.rotationSpeed.add(new THREE.Vector3(
            (Math.random() - 0.5) * 0.15,
            (Math.random() - 0.5) * 0.15,
            (Math.random() - 0.5) * 0.15
          ));
        }
      } else {
        // Clicked empty space: apply gentle global bounce to all shapes
        for (const shape of shapes) {
          shape.scaleVelocity = 0.09 + Math.random() * 0.05;
          shape.rotationSpeed.add(new THREE.Vector3(
            (Math.random() - 0.5) * 0.03,
            (Math.random() - 0.5) * 0.03,
            (Math.random() - 0.5) * 0.03
          ));
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth Camera Parallax (Panning effect following mouse position)
      camera.position.x += (mouse.x * 2.2 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 1.8 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, -1);

      // Animate shapes
      for (const shape of shapes) {
        // Slow constant rotations
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;

        // Slow hover damping: bring rotation speeds back to base
        shape.rotationSpeed.x += (0.004 * Math.sign(shape.rotationSpeed.x) - shape.rotationSpeed.x) * 0.02;
        shape.rotationSpeed.y += (0.004 * Math.sign(shape.rotationSpeed.y) - shape.rotationSpeed.y) * 0.02;
        shape.rotationSpeed.z += (0.004 * Math.sign(shape.rotationSpeed.z) - shape.rotationSpeed.z) * 0.02;

        // Vertical & horizontal floating movement locally around curated initial positions
        const floatY = Math.sin(time * shape.floatSpeed + shape.floatOffset) * 0.25;
        const floatX = Math.cos(time * shape.floatSpeed * 0.8 + shape.floatOffset) * 0.2;
        
        shape.mesh.position.x = shape.initialPos.x + floatX;
        shape.mesh.position.y = shape.initialPos.y + floatY;

        // Spring scale physics: scale values bounce back to 1.0 (Hooke's Law + damping)
        const springConstant = -0.12;
        const dampingConstant = -0.11;
        const springForce = springConstant * (shape.scaleVal - 1.0) + dampingConstant * shape.scaleVelocity;
        
        shape.scaleVelocity += springForce;
        shape.scaleVal += shape.scaleVelocity;

        // Apply scale
        const currentScale = shape.baseScale * shape.scaleVal;
        shape.mesh.scale.set(currentScale, currentScale, currentScale);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach(g => g.dispose());
      // Dispose materials inside shapes
      shapes.forEach(s => {
        if (Array.isArray(s.mesh.material)) {
          s.mesh.material.forEach(m => m.dispose());
        } else {
          s.mesh.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.9,
      }}
    />
  );
}
