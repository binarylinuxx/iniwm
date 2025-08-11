---
layout: home

hero:
  name: "iniWM"
  text: "Hi! Welcome to iniwm documentetion"
  tagline: First WM with ini config
  actions:
    - theme: brand
      text: Get Started
      link: /starter/install
    - theme: brand
      text: Showcase
      link: /showcase
features:
  - title: 3 Layouts
    details: Monocle, Tiling, Grid - all supported.
  - title: Easy to Reload
    details: Apply config changes without restarting. Just run `kill -USR1 $(pgrep iniwm)`.
  - title: Easy to Configure
    details: Simple and readable INI configuration file located at `~/.config/iniwm/iniwm.ini`.
  - title: INI Configuration
    details: Modify settings easily using the familiar INI format.
---

# Why iniWM?

`iniWM` is designed to be a fast and lightweight window manager that prioritizes simplicity in configuration. Unlike many tiling WMs that require complex scripting or configuration languages, `iniWM` uses the straightforward INI format, making it easy to understand and customize.

Inspired by the classic master-stack layout(most known in dwm,qtile), it provides a focused workspace with one primary window and a stack for secondary ones, while also offering Monocle, and Grid layouts for flexibility.
