export interface GeminiModel {
  id: string;
  label: string;
}

export const GEMINI_MODELS: GeminiModel[] = [
  { id: "gemini-flash-latest", label: "Gemini Flash (Latest)" },
  { id: "gemini-3.6-flash", label: "Gemini 3.6 Flash" },
  { id: "gemini-3.5-flash", label: "Gemini 3.5 Flash" },
  { id: "gemini-pro-latest", label: "Gemini Pro (Latest)" },
  { id: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro" },
];

export const DEFAULT_GEMINI_MODEL = GEMINI_MODELS[0].id;

export function isKnownGeminiModel(id: unknown): id is string {
  return typeof id === "string" && GEMINI_MODELS.some((m) => m.id === id);
}
