import fs from 'fs';
import path from 'path';

// Path to the .vscode/settings.json file
const settingsPath = path.join(__dirname, '.vscode', 'settings.json');

// Read the settings file
fs.readFile(settingsPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading settings file:', err);
    return;
  }

  try {
    // Parse the JSON content
    const settings: { 'files.exclude'?: Record<string, boolean> } = JSON.parse(data);

    // Toggle the values of files.exclude
    if (settings['files.exclude']) {
      for (const key in settings['files.exclude']) {
        if (settings['files.exclude'].hasOwnProperty(key)) {
          settings['files.exclude'][key] = !settings['files.exclude'][key];
        }
      }
    }

    // Convert the updated settings back to JSON
    const updatedSettings = JSON.stringify(settings, null, 2);

    // Write the updated settings back to the file
    fs.writeFile(settingsPath, updatedSettings, 'utf8', (err) => {
      if (err) {
        console.error('Error writing settings file:', err);
        return;
      }
      console.log('File visibility toggled successfully!');
    });
  } catch (parseError) {
    console.error('Error parsing settings file:', parseError);
  }
});
