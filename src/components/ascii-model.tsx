"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface AsciiModelProps {
	src: string;
	rotationSpeed?: number;
	scale?: number;
	/** Higher = finer detail (smaller characters). */
	resolution?: number;
	/** Characters ordered from lightest to darkest. First one should be a space. */
	characters?: string;
	color?: string;
	backgroundColor?: string;
}

export default function AsciiModel({
	src,
	rotationSpeed = 0.008,
	scale = 3,
	resolution = 0.18,
	characters = " ._-+*",
	color = "#111111",
	backgroundColor = "#ffffff",
}: AsciiModelProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// ---- Text output element ----
		const fontSize = Math.max(4, 2 / resolution);
		const lineHeight = fontSize;
		const charWidth = fontSize * 0.6; // approx width of a monospace glyph

		const pre = document.createElement("pre");
		Object.assign(pre.style, {
			margin: "0",
			padding: "0",
			width: "100%",
			height: "100%",
			overflow: "hidden",
			whiteSpace: "pre",
			fontFamily: "Menlo, ui-monospace, Consolas, monospace",
			fontSize: `${fontSize}px`,
			lineHeight: `${lineHeight}px`,
			letterSpacing: "0",
			color,
			backgroundColor,
			userSelect: "none",
			pointerEvents: "none",
		});
		container.appendChild(pre);

		// ---- Three.js (offscreen, never attached to the DOM) ----
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
		camera.position.set(0, 0, 7);

		const renderer = new THREE.WebGLRenderer({
			antialias: false,
			alpha: true,
		});
		renderer.setClearColor(0x000000, 0);

		scene.add(new THREE.AmbientLight(0xffffff, 0.8));
		const light = new THREE.DirectionalLight(0xffffff, 2.5);
		light.position.set(3, 5, 5);
		scene.add(light);

		const modelGroup = new THREE.Group();
		scene.add(modelGroup);

		let disposed = false;
		new GLTFLoader().load(
			src,
			(gltf) => {
				if (disposed) return;
				const model = gltf.scene;

				const box = new THREE.Box3().setFromObject(model);
				const center = box.getCenter(new THREE.Vector3());
				const size = box.getSize(new THREE.Vector3());

				model.position.sub(center);
				model.scale.setScalar(
					scale / Math.max(size.x, size.y, size.z, 0.001),
				);

				model.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.material = new THREE.MeshStandardMaterial({
							color: 0xffffff,
							roughness: 1,
						});
					}
				});

				// Re-center after scaling so it spins around its middle
				const wrapper = new THREE.Group();
				wrapper.add(model);
				modelGroup.add(wrapper);
			},
			undefined,
			(error) => console.error("Failed to load ASCII model:", error),
		);

		// ---- Render target sized to the character grid ----
		let cols = 1;
		let rows = 1;
		let target = new THREE.WebGLRenderTarget(1, 1);
		let pixels = new Uint8Array(4);

		const resize = () => {
			const w = Math.max(1, container.clientWidth);
			const h = Math.max(1, container.clientHeight);

			cols = Math.max(1, Math.floor(w / charWidth));
			rows = Math.max(1, Math.floor(h / lineHeight));

			target.dispose();
			target = new THREE.WebGLRenderTarget(cols, rows);
			pixels = new Uint8Array(cols * rows * 4);

			camera.aspect = w / h;
			camera.updateProjectionMatrix();
		};

		const observer = new ResizeObserver(resize);
		observer.observe(container);
		resize();

		// ---- Mouse / touch drag rotation ----
		let dragging = false;
		let lastX = 0;
		let lastY = 0;

		container.style.cursor = "grab";
		container.style.touchAction = "none";

		const onDown = (e: PointerEvent) => {
			dragging = true;
			lastX = e.clientX;
			lastY = e.clientY;
			container.setPointerCapture(e.pointerId);
			container.style.cursor = "grabbing";
		};
		const onMove = (e: PointerEvent) => {
			if (!dragging) return;
			modelGroup.rotation.y += (e.clientX - lastX) * 0.01;
			modelGroup.rotation.x += (e.clientY - lastY) * 0.01;
			modelGroup.rotation.x = Math.max(
				-Math.PI / 2,
				Math.min(Math.PI / 2, modelGroup.rotation.x),
			);
			lastX = e.clientX;
			lastY = e.clientY;
		};
		const onUp = (e: PointerEvent) => {
			dragging = false;
			container.style.cursor = "grab";
			if (container.hasPointerCapture(e.pointerId)) {
				container.releasePointerCapture(e.pointerId);
			}
		};

		container.addEventListener("pointerdown", onDown);
		container.addEventListener("pointermove", onMove);
		container.addEventListener("pointerup", onUp);
		container.addEventListener("pointercancel", onUp);

		// ---- Render loop ----
		const lastChar = characters.length - 1;
		let frameId = 0;
		let previousTime = 0;

		const animate = (time: number) => {
			frameId = requestAnimationFrame(animate);

			const delta = previousTime
				? Math.min((time - previousTime) / 16.667, 3)
				: 1;
			previousTime = time;

			if (!dragging) modelGroup.rotation.y += rotationSpeed * delta;

			renderer.setRenderTarget(target);
			renderer.clear();
			renderer.render(scene, camera);
			renderer.readRenderTargetPixels(target, 0, 0, cols, rows, pixels);
			renderer.setRenderTarget(null);

			let out = "";
			// WebGL rows go bottom -> top, so read from the last row upward
			for (let y = rows - 1; y >= 0; y--) {
				for (let x = 0; x < cols; x++) {
					const i = (y * cols + x) * 4;
					if (pixels[i + 3] < 10) {
						out += characters[0]; // empty background
						continue;
					}
					const lum =
						(0.2126 * pixels[i] +
							0.7152 * pixels[i + 1] +
							0.0722 * pixels[i + 2]) /
						255;
					const idx = Math.max(
						1,
						Math.min(lastChar, Math.round(lum * lastChar)),
					);
					out += characters[idx];
				}
				out += "\n";
			}
			pre.textContent = out;
		};
		frameId = requestAnimationFrame(animate);

		// ---- Cleanup ----
		return () => {
			disposed = true;
			cancelAnimationFrame(frameId);
			observer.disconnect();

			container.removeEventListener("pointerdown", onDown);
			container.removeEventListener("pointermove", onMove);
			container.removeEventListener("pointerup", onUp);
			container.removeEventListener("pointercancel", onUp);

			pre.remove();
			target.dispose();
			renderer.dispose();

			modelGroup.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.geometry.dispose();
					const mats = Array.isArray(child.material)
						? child.material
						: [child.material];
					mats.forEach((m) => m.dispose());
				}
			});
		};
	}, [
		src,
		rotationSpeed,
		scale,
		resolution,
		characters,
		color,
		backgroundColor,
	]);

	return <div ref={containerRef} className="h-full w-full overflow-hidden" />;
}
