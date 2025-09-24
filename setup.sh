#!/bin/bash

echo "🌿 Setting up EcoLeaf React App..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
NODE_MINOR=$(node -v | cut -d'v' -f2 | cut -d'.' -f2)
NODE_PATCH=$(node -v | cut -d'v' -f2 | cut -d'.' -f3)

if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18.0.0+ is required. Current version: $(node -v)"
    echo "Please update Node.js and try again."
    echo "Recommended: Node.js 20.19.5 LTS (https://nodejs.org/)"
    exit 1
elif [ "$NODE_VERSION" -eq 20 ] && [ "$NODE_MINOR" -eq 19 ] && [ "$NODE_PATCH" -eq 5 ]; then
    echo "✅ Node.js $(node -v) detected (LTS - RECOMMENDED)"
elif [ "$NODE_VERSION" -eq 20 ]; then
    echo "✅ Node.js $(node -v) detected (LTS - Supported)"
elif [ "$NODE_VERSION" -gt 20 ]; then
    echo "✅ Node.js $(node -v) detected (Newer version - should work fine)"
    echo "   Note: This project is optimized for Node.js 20.19.5 LTS"
else
    echo "✅ Node.js $(node -v) detected (Supported)"
fi
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Ready to start development!"
    echo ""
    echo "Run the following commands:"
    echo "  npm run dev    - Start development server"
    echo "  npm run build  - Build for production"
    echo ""
    echo "Happy coding! 🌿"
else
    echo ""
    echo "❌ Failed to install dependencies."
    echo "Please check your internet connection and try again."
    exit 1
fi
