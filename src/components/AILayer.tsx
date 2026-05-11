"use client";

import { BarChart3 } from "lucide-react";

const AILayer = () => {
  return (
    <section id="ai-layer" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Performance Metrics Box */}
          <div className="lg:col-span-4">
            <div className="glass-card h-full p-10 relative overflow-hidden bg-white/[0.01]">
              <div className="flex justify-between items-center mb-16">
                <span className="mono text-[10px] text-primary font-bold tracking-[0.2em]">PERFORMANCE METRICS</span>
                <BarChart3 size={18} className="text-on-surface/10" />
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] font-mono text-on-surface/30 mb-3 uppercase font-bold tracking-wider">PROJECT: dakikq Optimization</div>
                  <div className="p-5 bg-white/[0.03] border-l-[3px] border-primary/60 rounded-sm text-[14px] leading-relaxed text-on-surface/80">
                    Docker build sürelerinde <span className="text-primary font-bold">%30 iyileştirme</span>; 
                    imaj boyutu 1GB {"->"} 100MB düşüşü.
                  </div>
                </div>

                <div className="pt-10">
                  <div className="h-36 w-full relative flex items-end gap-3 px-2">
                    <div className="flex-1 h-[85%] bg-red-900/20 border border-red-500/20 flex items-center justify-center text-[11px] font-mono text-red-400/60 font-bold group">
                      1GB
                    </div>
                    <div className="flex-1 h-[15%] bg-primary/20 border border-primary/30 flex items-center justify-center text-[11px] font-mono text-primary font-bold shadow-[0_0_15px_rgba(87,241,219,0.1)]">
                      100MB
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="lg:col-span-8">
            <div className="glass-card h-full overflow-hidden flex flex-col bg-[#050810]">
              <div className="terminal-header">
                <div className="dot red" />
                <div className="dot yellow" />
                <div className="dot green" />
                <div className="ml-6 mono text-[10px] text-on-surface/20 font-bold tracking-widest">ai_ocr_pipeline.sh</div>
              </div>
              
              <div className="p-10 font-mono text-[13px] leading-loose overflow-x-auto">
                <div className="flex gap-4 mb-2">
                  <span className="text-primary font-bold">root@berkay-node:~$</span>
                  <span className="text-on-surface/90">./run_tesseract_scan.sh --target invoice_001.jpg</span>
                </div>
                <div className="text-on-surface/40 mb-6 space-y-1">
                  <div>[INFO] Initializing Tesseract OCR Engine v5.3.0...</div>
                  <div>[INFO] Loading pre-trained LSTM models (tr+en)...</div>
                  <div>[INFO] Scanning target image...</div>
                  <div className="text-yellow-500/40 font-semibold">[WARN] Low contrast detected, applying adaptive thresholding...</div>
                  <div className="text-primary/60 font-bold">[SUCCESS] Scan complete in 412ms.</div>
                </div>

                <div className="flex gap-4 mb-2">
                  <span className="text-primary font-bold">root@berkay-node:~$</span>
                  <span className="text-on-surface/90">parse_to_json --source output.txt --schema stock_data</span>
                </div>
                <div className="text-on-surface/80">
                  <pre className="code-text text-secondary/70 bg-white/[0.01] p-2 rounded-sm">
{`{
  "invoice_id": "INV-2025-0991",
  "vendor": "TECH_SUPPLY_CO",
  "items": [
    {
      "sku": "NVIDIA-A100",
      "qty": 4,
      "status": "VERIFIED_STOCK"
    }
  ]
}`}
                  </pre>
                </div>
                <div className="mt-6 w-2.5 h-5 bg-primary/80 cursor-blink" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AILayer;
