# AWS Fundamentals Draw

This is the AWS Fundamentals fork of
[ExcaliDash](https://github.com/ZimengXiong/ExcaliDash) by Zimeng Xiong. It runs
at draw.awsfundamentals.com on one AWS Lightsail instance, deployed with
[excalidash-lightsail](https://github.com/awsfundamentals-hq/excalidash-lightsail).

What the fork changes, all in the frontend:

- AWS Fundamentals name, logo, colors and fonts. Dark by default.
- A "Self-hosted on Lightsail for $8/month" badge in the sidebar and the editor.
- Excalidraw with library search.

How it is built:

- The `awsf` branch holds every change. It is rebased onto each upstream release.
- Pushing a tag such as `0.6.5-awsf.1` builds
  `ghcr.io/awsfundamentals-hq/excalidash-frontend:<tag>`.
- The backend runs the upstream image unchanged.
- Branding lives in `frontend/src/brand.ts`, `frontend/src/brand.css` and
  `frontend/tailwind.config.js`. `frontend/tests/awsf-branding.test.tsx` fails
  when an upstream change brings back a visible "ExcaliDash" name.

The upstream README follows. ExcaliDash and this fork are licensed under the
GNU Lesser General Public License v3.0.

---

# ExcaliDash

Self-hosted Excalidraw workspaces with collections, real-time collaboration,
sharing, history, backups, and local or OpenID Connect authentication.

[![ExcaliDash dashboard](docs/public/images/workspace.png)](https://excalidash.xyz)

Read the documentation at [excalidash.xyz](https://excalidash.xyz).

## Quick start

```sh
git clone https://github.com/ZimengXiong/ExcaliDash.git
cd ExcaliDash
docker compose -f docker-compose.prod.yml up -d
```

Open <http://localhost:6767>. Configuration and deployment guidance live in
the [documentation](https://excalidash.xyz).

ExcaliDash is licensed under the GNU Lesser General Public License v3.0.
