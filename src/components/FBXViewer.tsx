import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore porque não há typings nativos
import { FBXLoader } from '../../FBXLoader.js';

export const FBXViewer = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // loader
    const loader = new FBXLoader();
    loader.load('/modelo.fbx', (object: THREE.Object3D) => {
      object.scale.set(0.01, 0.01, 0.01);
      scene.add(object);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // limpeza
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen"></div>;
};
