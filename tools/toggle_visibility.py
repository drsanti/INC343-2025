import json
import os

# Path to the .vscode/settings.json file
settings_path = os.path.join('.vscode', 'settings.json')

# Read the settings file
try:
    with open(settings_path, 'r') as file:
        settings = json.load(file)
except FileNotFoundError:
    print(f"Error: {settings_path} not found.")
    exit(1)
except json.JSONDecodeError:
    print(f"Error: {settings_path} contains invalid JSON.")
    exit(1)

# Toggle the values of files.exclude
if 'files.exclude' in settings:
    for key in settings['files.exclude']:
        settings['files.exclude'][key] = not settings['files.exclude'][key]

# Write the updated settings back to the file
try:
    with open(settings_path, 'w') as file:
        json.dump(settings, file, indent=2)
    print("File visibility toggled successfully!")
except Exception as e:
    print(f"Error writing to {settings_path}: {e}")