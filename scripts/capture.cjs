const { execSync } = require('child_process');
const path = require('path');
const edge = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';
const artifactDir = 'C:\\Users\\mukan\\.gemini\\antigravity\\brain\\e75dc1a6-819e-4630-98f9-57cdc3672fda';

const viewports = [
  { name: 'workbench_desktop_1440.png', size: '1440,2400', url: 'http://localhost:3000/' },
  { name: 'workbench_tablet_1024.png', size: '1024,2000', url: 'http://localhost:3000/' },
  { name: 'workbench_tablet_768.png', size: '768,2000', url: 'http://localhost:3000/' },
  { name: 'workbench_mobile_390.png', size: '390,1600', url: 'http://localhost:3000/' },
  { name: 'workbench_work_1440.png', size: '1440,1800', url: 'http://localhost:3000/work' },
  { name: 'workbench_contact_1440.png', size: '1440,1600', url: 'http://localhost:3000/contact' }
];

for (const vp of viewports) {
  const out = path.join(artifactDir, vp.name);
  console.log('Capturing:', vp.name);
  try {
    execSync(`${edge} --headless --disable-gpu --virtual-time-budget=4000 --screenshot="${out}" --window-size=${vp.size} --hide-scrollbars ${vp.url}`, { stdio: 'inherit' });
  } catch (err) {
    console.error('Error capturing', vp.name, err.message);
  }
}
console.log('All screenshots captured successfully.');
