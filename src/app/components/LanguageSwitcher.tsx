import React from "react";
import { Globe } from "lucide-react";
import { useLanguage, Language } from "../context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const languageOptions: { code: Language; label: string }[] = [
  { code: "zh-TW", label: "Chinese" },
  { code: "en", label: "English" },
  { code: "vi", label: "Vietnamese" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const currentLanguageLabel =
    languageOptions.find((option) => option.code === language)?.label || "English";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-white/90">
          <Globe className="size-4" />
          {currentLanguageLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onClick={() => setLanguage(option.code)}
            className={language === option.code ? "font-semibold" : ""}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
