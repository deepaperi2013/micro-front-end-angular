import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '',
        loadChildren: () =>
          loadRemoteModule({ type: 'module', remoteEntry: 'http://localhost:3000/remoteEntry.js',  exposedModule: './LoginModule' }).then(
            (m) => m.LoginModule,
          ),
      },
];
