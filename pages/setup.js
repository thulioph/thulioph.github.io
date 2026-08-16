import React from "react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import Hero from "@/components/hero";

const data = [
  {
    group: "Desktop",
    items: [
      {
        product: "Xiaomi Computer Monitor Light Bar",
        description: "",
        link: "https://www.mi.com/us/product/mi-computer-monitor-light-bar/",
      },
      {
        product: "MacBook Pro M4 - 14'' 2024",
        description: "",
        link: "https://support.apple.com/en-us/121552",
      },
      {
        product: "Apple Magic Trackpad",
        description: "",
        link: "https://www.apple.com/shop/product/MXK93AM/A/magic-trackpad-usb%E2%80%91c-white-multi-touch-surface",
      },
      {
        product: "Apple Magic Keyboard with Touch ID",
        description: "",
        link: "https://www.apple.com/shop/product/MXCK3LL/A/magic-keyboard-with-touch-id-for-mac-models-with-apple-silicon-usb-c-us-english",
      },
      {
        product: "Apple iPad Air 4th Gen",
        description: "",
        link: "https://support.apple.com/en-us/111905",
      },
      {
        product: "Dell P2421D Monitor",
        description: "",
        link: "https://www.dell.com/support/product-details/en-us/product/dell-p2421d-monitor/",
      },
      {
        product: "Dell S2725QC",
        description: "",
        link: "https://www.dell.com/pt-br/shop/cty/pdp/spd/s2725qc-monitor/m_s2725qc_usbr",
      },
      {
        product: "Fezibo Standing Desk",
        description: "",
        link: "https://www.fezibo.com/products/fezibo-height-adjustable-electric-standing-desk-with-upper-double-drawers-for-home-office",
      },
      {
        product: "Goal 322G Interstuhl office swivel chair",
        description: "",
        link: "https://www.interstuhl.com/I/ch-de/modelle.php?modell=322G",
      },
    ],
  },
  {
    group: "Coding",
    items: [
      {
        product: "VSCode",
        description: "",
        link: "https://code.visualstudio.com/",
      },
      {
        product: "Fira Code",
        description: "",
        link: "https://github.com/tonsky/FiraCode",
      },
      {
        product: "Cursor",
        description: "",
        link: "https://www.cursor.com/",
      },
      {
        product: "Codex",
        description: "",
        link: "https://openai.com/codex/",
      },
      {
        product: "Claude Code",
        description: "",
        link: "https://www.anthropic.com/product/claude-code",
      },
    ],
  },
  {
    group: "Terminal",
    items: [
      {
        product: "Oh My Zsh",
        description: "",
        link: "https://ohmyz.sh/",
      },
      {
        product: "Terminal App",
        description: "",
        link: "https://support.apple.com/guide/terminal/welcome/mac",
      },
    ],
  },
  {
    group: "Apps",
    items: [
      {
        product: "1 Password",
        description: "",
        link: "https://1password.com/",
      },
      {
        product: "Shottr",
        description: "",
        link: "https://shottr.cc/",
      },
      {
        product: "Raycast",
        description: "",
        link: "https://www.raycast.com/",
      },
      {
        product: "Notion",
        description: "",
        link: "https://www.notion.com/",
      },
      {
        product: "Nord VPN",
        description: "",
        link: "https://nordvpn.com/",
      },
      {
        product: "Caffeine",
        description: "",
        link: "https://apps.apple.com/us/app/caffeine-utility/id1642185952",
      },
      {
        product: "Google Chrome",
        description: "",
        link: "https://www.google.com/chrome/",
      },
      {
        product: "Hidden Bar",
        description: "",
        link: "https://github.com/dwarvesf/hidden",
      },
      {
        product: "Miro",
        description: "",
        link: "https://miro.com/product-overview/",
      },
      {
        product: "Spotify",
        description: "",
        link: "https://www.spotify.com/",
      },
      {
        product: "Franz",
        description: "",
        link: "https://meetfranz.com/",
      },
      {
        product: "Postman",
        description: "",
        link: "https://www.postman.com/",
      },
      {
        product: "Tailscale",
        description: "",
        link: "https://tailscale.com/",
      },
    ],
  },
  {
    group: "Audio",
    items: [
      {
        product: "Apple AirPods Pro 2",
        description: "",
        link: "https://support.apple.com/en-us/docs/airpods/300992",
      },
      {
        product: "Sony WH1000XM3",
        description: "",
        link: "https://www.sony.com/electronics/support/wireless-headphones-bluetooth-headphones/wh-1000xm3",
      },
      {
        product: "HyperX SoloCast",
        description: "",
        link: "https://hyperx.com/products/hyperx-solocast-usb-microphone?variant=41031679312029",
      },
      {
        product: "IXTECH Microphone Arm (low profile)",
        description: "",
        link: "https://i-xtech.com/products/adjustable-360-rotatable-microphone-boom-arm-lizard-model",
      },
    ],
  },
  {
    group: "Recording",
    items: [
      {
        product: "Logitech C920 HD Pro Webcam",
        description: "",
        link: "https://www.logitech.com/en-gb/shop/p/c920-pro-hd-webcam.960-001055",
      },
    ],
  },
  {
    group: "Reading",
    items: [
      {
        product: "Kindle Paperwhite",
        description: "",
        link: "https://www.amazon.com/kindle-paperwhite",
      },
    ],
  },
];

const SetupPage = () => {
  return (
    <React.Fragment>
      <AppHeader>Setup</AppHeader>
      <AppNav />

      <main className="page">
        <Hero
          description={
            "Specific pieces of software or hardware I use. This not a static page, it's a living document."
          }
        >
          Setup
        </Hero>

        <section className="internal-grid">
          {data
            .sort((a, b) => a.group.localeCompare(b.group))
            .map(({ group, items }) => (
              <React.Fragment key={group}>
                <h2>{group}</h2>
                <ul className="uses-list">
                  {items
                    .sort((a, b) => a.product.localeCompare(b.product))
                    .map((el) => (
                      <li key={el.product}>
                        <a
                          href={el.link}
                          title={el.product}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {el.product}
                        </a>
                        <p>{el.description}</p>
                      </li>
                    ))}
                </ul>
              </React.Fragment>
            ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default SetupPage;
