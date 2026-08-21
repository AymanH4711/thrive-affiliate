import os
import shutil

# Path to your images folder
image_dir = os.path.join("public", "images")

if not os.path.exists(image_dir):
    print(f"❌ Error: Could not find the directory: {image_dir}")
    exit(1)

# Find all thumbnail files
files = os.listdir(image_dir)
thumbnails = [f for f in files if f.endswith("-thumb.webp")]

if not thumbnails:
    print("ℹ️ No '-thumb.webp' files found in public/images/.")
    exit(0)

print(f"Found {len(thumbnails)} thumbnail(s). Generating missing variants...")

for thumb in thumbnails:
    # Get the base name (e.g., 'blood-sugar-hero')
    base_name = thumb.replace("-thumb.webp", "")
    
    hero_name = f"{base_name}.webp"
    og_name = f"{base_name}-og.webp"
    
    thumb_path = os.path.join(image_dir, thumb)
    hero_path = os.path.join(image_dir, hero_name)
    og_path = os.path.join(image_dir, og_name)
    
    # Generate Hero image if missing
    if not os.path.exists(hero_path):
        shutil.copy(thumb_path, hero_path)
        print(f"   ✅ Created: {hero_name}")
    else:
        print(f"   ⏭️ Skipped (already exists): {hero_name}")
        
    # Generate OG image if missing
    if not os.path.exists(og_path):
        shutil.copy(thumb_path, og_path)
        print(f"   ✅ Created: {og_name}")
    else:
        print(f"   ⏭️ Skipped (already exists): {og_name}")

print("\n🎉 All images processed successfully!")