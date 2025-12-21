# 📘 Assignments

1.9 Assignment: Memory Lane  
2.6 Exercise  
3.6 Exercise
4.6 Exercise

Name: Alex Mendez  
Email: [AMendez4@student.fullsail.edu](mailto:AMendez4@student.fullsail.edu)  
Program: Bachelore's Degree in Web Development  

## 📌 Overview

This is a static website built using **Jekyll**, a Ruby-based static site generator.
The project uses Markdown for content, Liquid for templating, and standard web technologies for layout and styling.

You can run the site locally, customize it, and deploy it easily to GitHub Pages or any static hosting provider.

## 🚀 Features

- Static site generated with **Jekyll**
- Supports Markdown-based posts/pages
- Includes layouts and config file
- Easy GitHub Pages deployment
- Custom CSS / optional JavaScript

## 📦 Prerequisites

Before installation, ensure you have the following tools installed:

| Dependency | Version | Notes |
| ----------- | --------- | -------- |
| **Ruby** | 3.1+ | Required to install Jekyll |
| **Bundler** | Latest | Used for Ruby gem management |
| **Jekyll** | Latest | Static site generator |
| **Git** | Latest | For version control & deployment |

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/MendezAlex-FS/exercise-1-9-memory-lane.git
cd exercise-1-9-memory-lane
```

### 2. Install Ruby dependencies

#### On MAC

```bash
gem install bundler jekyll
jekyll new exercise-1-9-memory-lane
cd exercise-1-9-memory-lane
bundle exec jekyll serve
```

#### On WINDOWS

You must install ruby in order for the below commands to work. The link for the download is:

[https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)

Version downloaded as of this writing was [Ruby+Devkit 3.4.7-1 (x64)](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-3.4.7-1/rubyinstaller-devkit-3.4.7-1-x64.exe)

Install using the default prompts.

```bash
gem install bundler jekyll
jekyll new exercise-1-9-memory-lane
cd exercise-1-9-memory-lane
bundle exec jekyll serve
```

The site will be available at:
[http://localhost:4000](http://localhost:4000)

## 🧱 Project Structure

```bash
.
├── _layouts/
│   ├── default.html
│   ├── home.html
│   ├── post-with-image.html
│   └── post.html
├── _posts/
│   ├── 2025-11-22-react.markdown
│   ├── 2025-11-28-git-github.markdown
│   ├── 2025-11-29-api-with-node.markdown
│   ├── 2025-12-05-brendan-and-lex-interview.markdown
│   ├── 2025-12-05-building-an-api.markdown
│   ├── 2025-12-10-securing-an-api.markdown
│   └── 2025-12-20-mvc-architecture.markdown
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── css/
│   │   └── style.css
│   └── images/
│       ├── brendan-eich-lex-fridman-interview.png
│       ├── building-an-api.png
│       └── securing-an-api.png
├── _config.yml
├── .gitignore
├── 404.html
├── about.markdown
├── Gemfile
├── index.markdown
└── README.md
```

## 🚀 Deploying

### Option 1 — Deploy to GitHub Pages

#### 1. Update `_config.yml`

```bash
url: "https://MendezAlex-FS.github.io"
baseurl: "/exercise-1-9-memory-lane"
```

For a user site:

```bash
baseurl: ""
```

#### 2. Push to GitHub

```bash
git add .
git commit -m "Deploy site"
git push origin main
```

#### 3. Enable Pages  

GitHub repo → **Settings → Pages** - You will need to make the repository public as you can only use Pages privately with the GitHub enterprise version.

### Option 2 — Deploy to Netlify

Build settings:

| Setting | Value |
| -------- | -------- |
| Build command | `bundle exec jekyll build` |
| Publish directory | `_site` |

### Option 3 — Manual Deployment

```bash
bundle exec jekyll build
```

Upload the **_site** folder to any hosting provider.

## 🧪 Development Workflow

| Task | Command |
| ------ | --------- |
| Start local server | `bundle exec jekyll serve` |
| Build site | `bundle exec jekyll build` |
| Watch | `bundle exec jekyll serve --livereload` |

## 📝 Contributing

Feel free to fork the repo, submit issues, or make pull requests.

## 📄 License

MIT License.
