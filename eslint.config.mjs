import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	// Next.js presets (keep these first)
	...compat.extends("next/core-web-vitals", "next/typescript"),

	{
		rules: {
			"@typescript-eslint/no-explicit-any": "off", // or "warn"
			"@next/next/no-img-element": "off", // or "warn"
		},
	},

	// (optional) ignore patterns
	{
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
		],
	},
];

export default eslintConfig;
