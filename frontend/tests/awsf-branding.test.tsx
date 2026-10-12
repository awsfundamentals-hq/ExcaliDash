import React from "react";
import fs from "node:fs";
import path from "node:path";
import { act, create, type ReactTestInstance } from "react-test-renderer";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  APP_NAME,
  BADGE_TEXT,
  BADGE_URL,
  UPSTREAM_URL,
  documentTitle,
} from "../src/brand";
import { LightsailBadge } from "../src/components/LightsailBadge";
import { BrandMark } from "../src/components/BrandMark";
import { ThemeProvider, useTheme } from "../src/context/ThemeContext";

vi.mock("../src/context/PreferencesContext", () => ({
  usePreference: (_key: string, defaultValue: unknown) => [defaultValue, vi.fn()],
}));

const textOf = (node: ReactTestInstance): string =>
  node.children
    .map((child) => (typeof child === "string" ? child : textOf(child)))
    .join("");

const linkTo = (root: ReactTestInstance, href: string) =>
  root.find((node) => node.type === "a" && node.props.href === href);

describe("AWS Fundamentals branding", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("names the app AWS Fundamentals Draw", () => {
    expect(APP_NAME).toBe("AWS Fundamentals Draw");
    expect(documentTitle()).toBe("AWS Fundamentals Draw");
    expect(documentTitle("Architecture")).toBe(
      "Architecture – AWS Fundamentals Draw",
    );
  });

  it("links the Lightsail badge to the deployment repo in a new tab", () => {
    const root = create(<LightsailBadge />).root;
    const badge = linkTo(root, BADGE_URL);

    expect(textOf(badge)).toContain("Self-hosted on Lightsail for $8/month");
    expect(textOf(badge)).toBe(BADGE_TEXT);
    expect(badge.props.target).toBe("_blank");
    expect(badge.props.rel).toBe("noopener noreferrer");
  });

  it("credits upstream ExcaliDash under the badge", () => {
    const root = create(<LightsailBadge />).root;
    const credit = linkTo(root, UPSTREAM_URL);

    expect(textOf(credit)).toBe("Based on ExcaliDash");
    expect(credit.props.rel).toBe("noopener noreferrer");
  });

  it("stacks the brand name over the product name", () => {
    const root = create(<BrandMark />).root;

    expect(textOf(root.findByProps({ "data-brand": "name" }))).toBe(
      "AWS Fundamentals",
    );
    expect(textOf(root.findByProps({ "data-brand": "product" }))).toBe("Draw");
  });

  it("starts in dark mode when no theme preference is saved", () => {
    const classes = new Set<string>();
    vi.stubGlobal("document", {
      querySelector: () => null,
      documentElement: {
        classList: {
          add: (name: string) => classes.add(name),
          remove: (name: string) => classes.delete(name),
        },
      },
    });
    const Probe = () => <output data-theme={useTheme().theme} />;

    let renderer!: ReturnType<typeof create>;
    act(() => {
      renderer = create(
        <ThemeProvider>
          <Probe />
        </ThemeProvider>,
      );
    });

    expect(renderer.root.findByType("output").props["data-theme"]).toBe(
      "dark",
    );
    expect(classes.has("dark")).toBe(true);
  });

  it("shows no ExcaliDash name in the UI outside the credit and upstream links", () => {
    const frontendDir = path.resolve(__dirname, "..");
    const allowed = [
      /github\.com\/ZimengXiong\/ExcaliDash/,
      /Based on ExcaliDash/,
    ];
    const files = [
      path.join(frontendDir, "index.html"),
      ...fs
        .readdirSync(path.join(frontendDir, "src"), { recursive: true })
        .map(String)
        .filter((file) => /\.(ts|tsx)$/.test(file))
        .map((file) => path.join(frontendDir, "src", file)),
    ];

    const offenders = files.flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .split("\n")
        .map((line, index) => ({ line: line.replace(/\/\/.*$/, ""), index }))
        .filter(
          ({ line }) =>
            line.includes("ExcaliDash") &&
            !allowed.some((pattern) => pattern.test(line)),
        )
        .map(({ index }) => `${path.relative(frontendDir, file)}:${index + 1}`),
    );

    expect(offenders).toEqual([]);
  });
});
