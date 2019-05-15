import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'theme.min.js', src: '../assets/js/theme.min.js' }
];

declare var document: any;

@Injectable()
export class LoadJSService {
   scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      if (!Object.values(this.scripts)[0].loaded) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        // @ts-ignore
        script.src = Object.values(this.scripts)[0].src;
        if (script.readyState) {
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              // @ts-ignore
              Object.values(this.scripts)[0].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {
          script.onload = () => {
            // @ts-ignore
            Object.values(this.scripts)[0].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }
}
