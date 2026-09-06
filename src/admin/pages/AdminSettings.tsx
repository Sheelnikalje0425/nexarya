import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminSettings() {
  const [settings, setSettings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    api.admin.getSettings()
      .then((data) => {
        setSettings(data.settings || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load settings:", err);
        setLoading(false);
      });
  }, []);

  const handleUpdate = async (key: string, value: string) => {
    try {
      await api.admin.updateSetting(key, value);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err) {
      console.error("Failed to update setting:", err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          CONFIGURATION // PLATFORM CONTROLS
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          Platform & System Settings
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-1.5">
          Configure runtime environment parameters, operational switches, and public studio metadata.
        </p>
      </div>

      {saveSuccess && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 font-sans text-xs rounded-sm">
          Settings successfully updated and audit logged.
        </div>
      )}

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading platform settings...
        </div>
      ) : (
        <div className="space-y-4 max-w-3xl">
          {settings.map((s) => (
            <div
              key={s.key}
              className="p-6 bg-white border border-[#0E1720]/15 rounded-sm shadow-[0_1px_3px_rgba(14,23,32,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="font-mono text-xs text-[#8C6D1F] font-semibold">{s.key}</div>
                <div className="font-sans text-xs text-[#576371] mt-1">{s.description}</div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="text"
                  defaultValue={s.value}
                  onBlur={(e) => handleUpdate(s.key, e.target.value)}
                  className="px-3.5 py-2 bg-[#FAF7F2] border border-[#0E1720]/15 text-xs text-[#0E1720] focus:outline-none focus:border-[#D4A72C] rounded-sm w-64 transition-colors font-mono"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
