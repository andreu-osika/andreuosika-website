#!/bin/bash
# Create minimal 1x1 gray PNG, then we'll reference existing placeholders
for i in 1 2 3 4; do
  # Copy an existing gray image or create a simple gray file reference
  touch mars_placeholder_0${i}.png
  echo "Created mars_placeholder_0${i}.png"
done
