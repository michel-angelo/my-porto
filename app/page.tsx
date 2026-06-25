"use client";

import Link from "next/link";
import { ViewTransition } from "react";
import SwissGridBackground from "./components/SwissGridBackground";

export default function Home() {
  return (
    <div className="swiss-poster">
      {/* Three.js Interactive 3D Grid Displacement background */}
      <SwissGridBackground />
      {/* ==========================================
          VISIBLE LAYOUT GRID LINES (GUIDES)
          ========================================== */}
      {/* Vertical Guides */}
      <div className="swiss-grid-v" style={{ left: "28%" }}></div>
      <div className="swiss-grid-v" style={{ left: "calc(28% + 12px)" }}></div>
      
      <div className="swiss-grid-v" style={{ left: "56%" }}></div>
      <div className="swiss-grid-v" style={{ left: "calc(56% + 12px)" }}></div>
      
      <div className="swiss-grid-v" style={{ left: "80%" }}></div>
      <div className="swiss-grid-v" style={{ left: "calc(80% + 12px)" }}></div>

      {/* Horizontal Guides */}
      <div className="swiss-grid-h" style={{ top: "80px" }}></div>
      <div className="swiss-grid-h" style={{ top: "96px" }}></div>
      
      <div className="swiss-grid-h" style={{ top: "28%" }}></div>
      <div className="swiss-grid-h" style={{ top: "calc(28% + 16px)" }}></div>
      
      <div className="swiss-grid-h" style={{ top: "48%" }}></div>
      <div className="swiss-grid-h" style={{ top: "calc(48% + 16px)" }}></div>
      
      <div className="swiss-grid-h" style={{ top: "68%" }}></div>
      <div className="swiss-grid-h" style={{ top: "calc(68% + 16px)" }}></div>
      
      <div className="swiss-grid-h" style={{ top: "88%" }}></div>
      <div className="swiss-grid-h" style={{ top: "calc(88% + 16px)" }}></div>

      {/* ==========================================
          POSTER CONTENT BLOCKS
          ========================================== */}
      <div className="swiss-poster-inner">
        {/* Top Header Labels */}
        <span className="swiss-lbl" style={{ top: "32px", left: "32px" }}>
          Claridad Visual
        </span>
        <span className="swiss-lbl" style={{ top: "32px", left: "calc(56% + 24px)" }}>
          Jerarquía Tipográfica
        </span>

        {/* Column 3, Row 2: Capabilities / Disciplines List */}
        <div className="swiss-disciplines">
          <span className="swiss-discipline-item">Web App Development</span>
          <span className="swiss-discipline-item">Brutalist Web Design</span>
          <span className="swiss-discipline-item">Brand Identity Studio</span>
          <span className="swiss-discipline-item">Digital Transformation</span>
        </div>

        {/* Giant Logo Title Blocks (Spanning Columns 1 & 2) */}
        <div className="swiss-title-container">
          <Link href="/portfolio" className="no-underline">
            <ViewTransition name="branding">
              <span className="swiss-title-row swiss-title-sssab">
                SSSAB
              </span>
            </ViewTransition>
          </Link>
          
          <Link href="/portfolio" className="no-underline">
            <span className="swiss-title-row swiss-title-studio">
              STUDIO
            </span>
          </Link>

          <Link href="/portfolio" className="no-underline">
            <span className="swiss-title-row swiss-title-portfolio">
              PORTFOLIO
              <span className="swiss-style-tag">Solo style</span>
            </span>
          </Link>
        </div>

        {/* Column 1, Row 5: Clickable Enter Link */}
        <Link href="/portfolio" className="swiss-enter-link">
          Jelajahi Studio →
        </Link>

        {/* Bottom Exhibition Footer */}
        <div className="swiss-poster-footer">
          <span>Solo Digital Studio</span>
          <span>S S S A B S T U D I O . C O M</span>
        </div>
      </div>
    </div>
  );
}
