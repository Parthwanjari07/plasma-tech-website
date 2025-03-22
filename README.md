# ThePlasma.tech - Interactive Landing Page

This is a cutting-edge landing page for ThePlasma.tech featuring a fully interactive plasma background with lightning effects that respond to both mouse movements and audio input.

## Interactive Features

### Mouse Interaction
- The plasma background reacts to your mouse movements
- Lightning effects follow your cursor and intensify where you point
- Mouse inactivity causes effects to gradually fade back to ambient patterns

### Audio Reactivity
- Enable your microphone to make the plasma react to sound
- Bass frequencies influence the size and intensity of plasma waves
- Mid-range frequencies affect color shifts and branching patterns
- High frequencies create intricate micro-patterns throughout the effect
- Volume drives pulsing animations and overall intensity

## Tech Stack

- **Next.js 15** - For fast server-side rendered React
- **Three.js** - For WebGL-based graphics effects
- **React Three Fiber** - React renderer for Three.js
- **GLSL Shaders** - Custom shader code for the plasma effect
- **Web Audio API** - For audio analysis and visualization
- **Tailwind CSS** - For styling and responsive design
- **TypeScript** - For type safety

## Running Locally

### Prerequisites

- Node.js 18 or newer
- Bun (recommended) or npm

### Setup with Bun (Recommended)

```bash
# Install Bun if you don't have it
# On macOS, Linux, or WSL:
curl -fsSL https://bun.sh/install | bash

# Clone the repository (if you have git access)
git clone <repository-url>
cd plasma-tech

# Install dependencies
bun install

# Start the development server
bun run dev
```

### Setup with npm

```bash
# Clone the repository (if you have git access)
git clone <repository-url>
cd plasma-tech

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Viewing the Site

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Browser Compatibility

- Best experienced in Chrome, Firefox, or Edge
- For the audio reactivity feature, you'll need to allow microphone access
- WebGL support is required for the plasma effect

## Performance Notes

The plasma effect uses GPU acceleration through WebGL. If you experience performance issues:

1. Try reducing your browser window size
2. Close other resource-intensive applications
3. Disable audio reactivity when not needed

## License

All rights reserved. This codebase is proprietary and confidential.

---

Made with ❤️ by Same
